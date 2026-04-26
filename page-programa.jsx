// Programación page — full schedule with filters
const ProgramaPage = ({ navigate }) => {
  const [discipline, setDiscipline] = useState('todas');
  const [day, setDay] = useState('todos');
  const [age, setAge] = useState('todas');
  const [cost, setCost] = useState('todos');
  const [view, setView] = useState('grid'); // 'grid' or 'list'

  const filtered = EVENTS.filter(e => {
    if (discipline !== 'todas' && e.disciplineKey !== discipline) return false;
    if (day !== 'todos' && e.dateISO !== day) return false;
    if (age !== 'todas' && e.ageKey !== age) return false;
    if (cost !== 'todos') {
      if (cost === 'libre' && !e.cost.startsWith('libre')) return false;
      if (cost === 'cooperacion' && !e.cost.startsWith('cooperacion')) return false;
    }
    return true;
  });

  return (
    <main className="page-enter">
      <section style={{ paddingTop: 56, paddingBottom: 24 }}>
        <div className="container">
          <div className="eyebrow">★ Programación 2026</div>
          <h1 className="display" style={{ fontSize: 'clamp(56px, 8vw, 100px)', margin: '8px 0 0', lineHeight: 0.96 }}>
            Toda la <em className="italic" style={{ color: 'var(--primary)' }}>cartelera</em>.
          </h1>
          <p className="section-sub" style={{ marginTop: 12, fontSize: 17, maxWidth: 640 }}>
            Nueve experiencias artísticas pensadas para las infancias y sus familias. Filtra por disciplina, día, edades o tipo de acceso.
          </p>
        </div>
      </section>

      {/* FILTERS */}
      <section style={{ paddingBottom: 24 }}>
        <div className="container">
          <div className="card-cream" style={{ padding: 24, display: 'flex', flexDirection: 'column', gap: 16 }}>
            <FilterRow label="Disciplina" options={DISCIPLINES} value={discipline} onChange={setDiscipline}/>
            <FilterRow label="Día" options={DAYS} value={day} onChange={setDay} dateLabels/>
            <FilterRow label="Edades" options={AGES} value={age} onChange={setAge}/>
            <FilterRow label="Acceso" options={COSTS} value={cost} onChange={setCost}/>

            <div className="row" style={{ justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(28,20,16,0.08)', paddingTop: 16, marginTop: 4 }}>
              <span style={{ fontSize: 14, color: 'var(--muted)' }}>
                <strong style={{ color: 'var(--ink)' }}>{filtered.length}</strong> {filtered.length === 1 ? 'función' : 'funciones'} encontradas
              </span>
              <div className="row gap-4">
                <button className="fchip" aria-pressed={view === 'grid'} onClick={() => setView('grid')}>Cuadrícula</button>
                <button className="fchip" aria-pressed={view === 'list'} onClick={() => setView('list')}>Agenda</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RESULTS */}
      <section style={{ paddingBottom: 80 }}>
        <div className="container">
          {filtered.length === 0 ? (
            <div className="card" style={{ textAlign: 'center', padding: 48 }}>
              <div className="display" style={{ fontSize: 28, color: 'var(--primary)' }}>Nada por aquí…</div>
              <p className="muted">Prueba con otros filtros para descubrir más funciones.</p>
            </div>
          ) : view === 'grid' ? (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 20 }}>
              {filtered.map(e => <EventCard key={e.id} event={e} navigate={navigate}/>)}
            </div>
          ) : (
            <ListView events={filtered} navigate={navigate}/>
          )}
        </div>
      </section>
    </main>
  );
};

const FilterRow = ({ label, options, value, onChange, dateLabels = false }) => (
  <div className="row" style={{ alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
    <span className="mono" style={{ width: 88, color: 'var(--muted)' }}>{label}</span>
    <div className="row gap-6" style={{ flexWrap: 'wrap', flex: 1 }}>
      {options.map(o => (
        <button key={o.key} className="fchip" aria-pressed={value === o.key} onClick={() => onChange(o.key)}>
          {o.label}
          {dateLabels && o.date && <span style={{ marginLeft: 6, opacity: 0.7, fontSize: 11 }}>· {o.date}</span>}
        </button>
      ))}
    </div>
  </div>
);

const EventCard = ({ event, navigate }) => {
  const venue = VENUES[event.venue];
  return (
    <div onClick={() => navigate({ page: 'obra', id: event.id })}
         style={{ cursor: 'pointer', transition: 'transform .15s ease', display: 'flex', flexDirection: 'column' }}
         onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-3px)'}
         onMouseLeave={e => e.currentTarget.style.transform = 'none'}>
      <Scene scene={sceneFor(event)} accent={event.accent} style={{ borderRadius: '24px 24px 8px 8px', height: 200, padding: 20, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', color: '#fff' }}>
        <div className="row" style={{ justifyContent: 'space-between', position: 'relative', zIndex: 2 }}>
          <span className="chip" style={{ background: 'rgba(255,255,255,0.18)', color: '#fff', backdropFilter: 'blur(6px)', fontSize: 11 }}>{event.discipline}</span>
          <span className="chip" style={{ background: 'rgba(0,0,0,0.32)', color: '#fff', backdropFilter: 'blur(6px)', fontSize: 11 }}>
            {event.day} {event.date.split(' ')[0]}/{event.date.includes('mayo') ? '5' : '4'}
          </span>
        </div>
        <div className="display" style={{ fontSize: 28, lineHeight: 1, color: '#fff', position: 'relative', zIndex: 2 }}>{event.title}</div>
      </Scene>
      <div style={{ background: '#fff', padding: 20, borderRadius: '8px 8px 24px 24px', borderTop: `2px dashed ${event.accent}55`, position: 'relative' }}>
        {/* ticket notch */}
        <span style={{ position: 'absolute', top: -8, left: -8, width: 16, height: 16, borderRadius: '50%', background: 'var(--paper)' }}/>
        <span style={{ position: 'absolute', top: -8, right: -8, width: 16, height: 16, borderRadius: '50%', background: 'var(--paper)' }}/>
        <div style={{ fontSize: 13, color: 'var(--muted)', marginBottom: 8 }}>{event.company}</div>
        <div className="row gap-6" style={{ alignItems: 'center', fontSize: 13, color: 'var(--ink-soft)', marginBottom: 14 }}>
          <Icon name="clock" size={13}/>
          <span>{event.time}</span>
          <span style={{ opacity: 0.4 }}>·</span>
          <Icon name="pin" size={13}/>
          <span>{venue.short}</span>
        </div>
        <div className="row" style={{ justifyContent: 'space-between', alignItems: 'center' }}>
          <span className="chip chip--outline" style={{ fontSize: 11 }}>{event.age}</span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4, color: event.accent, fontWeight: 600, fontSize: 13 }}>
            Ver detalle <Icon name="arrow-right" size={14}/>
          </span>
        </div>
      </div>
    </div>
  );
};

const ListView = ({ events, navigate }) => {
  const grouped = events.reduce((acc, e) => {
    (acc[e.dateISO] = acc[e.dateISO] || []).push(e);
    return acc;
  }, {});
  const dates = Object.keys(grouped).sort();
  const dayLabel = (iso) => DAYS.find(d => d.key === iso)?.label + ' · ' + DAYS.find(d => d.key === iso)?.date;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
      {dates.map(iso => (
        <div key={iso}>
          <div className="row" style={{ alignItems: 'baseline', gap: 16, marginBottom: 16 }}>
            <h3 className="display" style={{ fontSize: 32, color: 'var(--primary)' }}>{dayLabel(iso)}</h3>
            <span className="muted" style={{ fontSize: 13 }}>{grouped[iso].length} {grouped[iso].length === 1 ? 'función' : 'funciones'}</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {grouped[iso].sort((a,b) => a.time.localeCompare(b.time)).map(e => {
              const v = VENUES[e.venue];
              return (
                <div key={e.id} onClick={() => navigate({ page: 'obra', id: e.id })}
                     className="card"
                     style={{ display: 'grid', gridTemplateColumns: '110px 1fr auto auto', gap: 24, alignItems: 'center', cursor: 'pointer', padding: '20px 24px' }}
                     onMouseEnter={ev => ev.currentTarget.style.background = 'rgba(251,233,201,0.4)'}
                     onMouseLeave={ev => ev.currentTarget.style.background = '#fff'}>
                  <div className="display" style={{ fontSize: 32, color: e.accent }}>{e.time.replace(/[ap]\.m\./, '').trim()}</div>
                  <div>
                    <div style={{ display: 'flex', gap: 6, marginBottom: 4 }}>
                      <span className="chip" style={{ background: e.accent + '22', color: e.accent, fontSize: 10 }}>{e.discipline}</span>
                      <span className="chip chip--outline" style={{ fontSize: 10 }}>{e.kind === 'obra' ? 'Obra' : e.kind === 'taller' ? 'Taller' : 'Galería'}</span>
                    </div>
                    <div className="display" style={{ fontSize: 22 }}>{e.title}</div>
                    <div style={{ fontSize: 13, color: 'var(--muted)' }}>{e.company}</div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div className="mono" style={{ color: 'var(--muted)' }}>Sede</div>
                    <div style={{ fontSize: 14, fontWeight: 500 }}>{v.short}</div>
                  </div>
                  <Icon name="arrow-right" size={18}/>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

window.ProgramaPage = ProgramaPage;
