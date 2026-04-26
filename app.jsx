// Main App — router + tweaks
const { useState: useStateApp, useEffect: useEffectApp } = React;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "displayFont": "Instrument Serif",
  "accentColor": "#a23a2a",
  "heroVariant": "curtain",
  "showTickets": false
}/*EDITMODE-END*/;

const App = () => {
  const [route, setRoute] = useState({ page: 'inicio' });
  const [showTickets, setShowTickets] = useState(false);
  const [tweaks, setTweak] = useTweaks ? useTweaks(TWEAK_DEFAULTS) : [TWEAK_DEFAULTS, () => {}];

  // apply CSS vars from tweaks
  useEffect(() => {
    document.documentElement.style.setProperty('--primary', tweaks.accentColor);
    document.documentElement.style.setProperty('--display', `'${tweaks.displayFont}', Georgia, serif`);
  }, [tweaks.accentColor, tweaks.displayFont]);

  const navigate = (next) => {
    setRoute(next);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const openTickets = () => navigate({ page: 'boletos' });

  let page;
  switch (route.page) {
    case 'inicio': page = <HomePage navigate={navigate} openTickets={openTickets}/>; break;
    case 'programa': page = <ProgramaPage navigate={navigate}/>; break;
    case 'obra': page = <ObraPage id={route.id} navigate={navigate} openTickets={openTickets}/>; break;
    case 'sedes': page = <SedesPage navigate={navigate}/>; break;
    case 'sede': page = <SedePage id={route.id} navigate={navigate}/>; break;
    case 'movimiento': page = <MovimientoPage navigate={navigate}/>; break;
    case 'boletos': page = <BoletosPage navigate={navigate}/>; break;
    default: page = <HomePage navigate={navigate} openTickets={openTickets}/>;
  }

  return (
    <div className="app" data-screen-label={`tenkui ${route.page}`}>
      <Header route={route} navigate={navigate} openTickets={openTickets}/>
      {page}
      <Footer navigate={navigate}/>

      {/* Tweaks panel */}
      {typeof TweaksPanel !== 'undefined' && (
        <TweaksPanel title="Tweaks">
          <TweakSection title="Tipografía">
            <TweakSelect label="Fuente display" value={tweaks.displayFont} onChange={v => setTweak('displayFont', v)}
              options={[
                { value: 'Instrument Serif', label: 'Instrument Serif' },
                { value: 'DM Serif Display', label: 'DM Serif Display' },
                { value: 'Bricolage Grotesque', label: 'Bricolage Grotesque' },
                { value: 'Crimson Pro', label: 'Crimson Pro' },
              ]}/>
          </TweakSection>
          <TweakSection title="Color">
            <TweakColor label="Acento principal" value={tweaks.accentColor} onChange={v => setTweak('accentColor', v)}/>
            <div className="row gap-6" style={{ flexWrap: 'wrap' }}>
              {[
                { c: '#a23a2a', n: 'Terracota' },
                { c: '#7e2a1d', n: 'Vino' },
                { c: '#1f4a3f', n: 'Bosque' },
                { c: '#d97a2c', n: 'Naranja' },
                { c: '#5a3a8e', n: 'Violeta' },
              ].map(s => (
                <button key={s.c} onClick={() => setTweak('accentColor', s.c)}
                  style={{ display: 'flex', alignItems: 'center', gap: 6, background: tweaks.accentColor === s.c ? '#000' : '#f5f5f5', color: tweaks.accentColor === s.c ? '#fff' : '#333', borderRadius: 999, padding: '4px 10px 4px 4px', fontSize: 12, border: 'none', cursor: 'pointer' }}>
                  <span style={{ width: 18, height: 18, borderRadius: '50%', background: s.c }}/>
                  {s.n}
                </button>
              ))}
            </div>
          </TweakSection>
        </TweaksPanel>
      )}
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
