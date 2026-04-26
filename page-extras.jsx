// Movimiento (about) and Boletos pages
const MovimientoPage = ({ navigate }) => (
  <main className="page-enter">
    <section style={{ paddingTop: 56, paddingBottom: 32 }}>
      <div className="container">
        <div className="eyebrow">★ Manifiesto</div>
        <h1 className="display" style={{ fontSize: 'clamp(56px, 8vw, 110px)', margin: '8px 0 0', lineHeight: 0.94 }}>
          Un <em className="italic" style={{ color: 'var(--primary)' }}>movimiento</em><br/>
          autogestivo.
        </h1>
        <p style={{ fontSize: 19, lineHeight: 1.55, maxWidth: 720, marginTop: 20, color: 'var(--ink-soft)' }}>
          Tënkui se concibe como un ecosistema donde el arte se manifiesta como un derecho esencial para el desarrollo humano, articulando espacios culturales independientes en una plataforma que integra artes escénicas, literatura, música y artes plásticas para las infancias.
        </p>
      </div>
    </section>

    <section className="section">
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16 }}>
          {[
            { n: '01', t: 'Autogestión', d: 'Espacios culturales que se sostienen entre sí, sin depender de patrocinios institucionales.', c: '#f08d6e' },
            { n: '02', t: 'Multidisciplina', d: 'Cuatro disciplinas conviviendo en un mismo calendario y un mismo público.', c: '#8fd2c0' },
            { n: '03', t: 'Infancias al centro', d: 'Programación pensada con criterios de desarrollo evolutivo, desde 6 meses.', c: '#f2b544' },
            { n: '04', t: 'Cooperación', d: 'Tarifa solidaria que privilegia la preventa y la sostenibilidad colectiva.', c: '#6b8ad6' },
          ].map(p => (
            <div key={p.n} className="card-paper" style={{ borderLeft: `4px solid ${p.c}`, padding: 28 }}>
              <div className="mono" style={{ color: p.c }}>{p.n}</div>
              <div className="display" style={{ fontSize: 28, marginTop: 6 }}>{p.t}</div>
              <p style={{ fontSize: 14, color: 'var(--muted)', marginTop: 8 }}>{p.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section style={{ background: 'var(--cream)', padding: '80px 0' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
        <div>
          <div className="eyebrow">San Luis Potosí</div>
          <h2 className="section-title">Capilaridad <em className="italic" style={{ color: 'var(--primary)' }}>territorial</em>.</h2>
          <p style={{ fontSize: 16, lineHeight: 1.6, marginTop: 12, color: 'var(--ink-soft)' }}>
            Del centro histórico a la zona universitaria, las sedes Tënkui dibujan un mapa cultural diverso. Esta diversificación espacial garantiza que el movimiento llegue a distintos perfiles de audiencia y permite a las familias descubrir nuevos rincones de la ciudad.
          </p>
          <button className="btn btn--primary" style={{ marginTop: 20 }} onClick={() => navigate({ page: 'sedes' })}>
            Ver sedes <Icon name="arrow-right" size={16}/>
          </button>
        </div>
        <div className="row gap-12" style={{ flexWrap: 'wrap' }}>
          {[
            { k: '7', l: 'sedes' },
            { k: '9', l: 'experiencias' },
            { k: '4', l: 'disciplinas' },
            { k: '5', l: 'días' },
            { k: '+20', l: 'creadores' },
            { k: '6m+', l: 'edad mínima' },
          ].map(s => (
            <div key={s.l} style={{ flex: '1 1 30%', textAlign: 'center', background: '#fff', borderRadius: 20, padding: '20px 12px' }}>
              <div className="display" style={{ fontSize: 44, color: 'var(--primary)' }}>{s.k}</div>
              <div className="mono" style={{ color: 'var(--muted)' }}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </main>
);

const BoletosPage = ({ navigate }) => {
  const [eventoSel, setEventoSel] = useState('');
  const [adultos, setAdultos] = useState(1);
  const [infancias, setInfancias] = useState(1);
  const [step, setStep] = useState(1);
  const today = new Date();
  const isPreventa = today < new Date('2026-04-24');
  const tarifa = isPreventa ? { a: 120, i: 80, label: 'Preventa' } : { a: 140, i: 100, label: 'Regular' };
  const total = adultos * tarifa.a + infancias * tarifa.i;

  const evento = EVENTS.find(e => e.id === eventoSel);
  const wa = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(`Hola Tënkui, quiero reservar para "${evento?.title || ''}" el ${evento?.date || ''}: ${adultos} adulto(s) y ${infancias} infancia(s). Total estimado $${total} MXN.`)}`;

  return (
    <main className="page-enter">
      <section style={{ paddingTop: 56, paddingBottom: 32 }}>
        <div className="container">
          <div className="eyebrow">★ Cooperación programada</div>
          <h1 className="display" style={{ fontSize: 'clamp(56px, 8vw, 100px)', margin: '8px 0 0', lineHeight: 0.96 }}>
            Reserva tu<br/><em className="italic" style={{ color: 'var(--primary)' }}>cooperación</em>.
          </h1>
          <p className="section-sub" style={{ marginTop: 12, fontSize: 17, maxWidth: 640 }}>
            Todas las reservas se gestionan por WhatsApp. Aquí calculas tu cooperación y abres la conversación con el mensaje listo.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 16 }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 24, alignItems: 'start' }}>
          {/* Calculator */}
          <div className="card-cream" style={{ padding: 32 }}>
            <div className="row" style={{ alignItems: 'center', gap: 12, marginBottom: 20 }}>
              <span style={{ width: 32, height: 32, borderRadius: '50%', background: 'var(--primary)', color: '#fff', display: 'grid', placeItems: 'center', fontWeight: 700, fontSize: 14 }}>1</span>
              <div className="display" style={{ fontSize: 24 }}>Elige una función</div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 10, marginBottom: 28 }}>
              {EVENTS.filter(e => e.cost.startsWith('cooperacion')).map(e => (
                <button key={e.id} onClick={() => setEventoSel(e.id)}
                        style={{ background: eventoSel === e.id ? e.accent : '#fff', color: eventoSel === e.id ? '#fff' : 'var(--ink)', border: `1.5px solid ${eventoSel === e.id ? e.accent : 'transparent'}`, borderRadius: 14, padding: '12px 16px', textAlign: 'left', cursor: 'pointer', transition: 'all .15s ease' }}>
                  <div style={{ fontWeight: 600, fontSize: 14, lineHeight: 1.2 }}>{e.title}</div>
                  <div style={{ fontSize: 12, opacity: 0.85, marginTop: 4 }}>{e.date} · {e.time}</div>
                </button>
              ))}
            </div>

            <div className="row" style={{ alignItems: 'center', gap: 12, marginBottom: 16 }}>
              <span style={{ width: 32, height: 32, borderRadius: '50%', background: 'var(--primary)', color: '#fff', display: 'grid', placeItems: 'center', fontWeight: 700, fontSize: 14 }}>2</span>
              <div className="display" style={{ fontSize: 24 }}>Asistentes</div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
              <Counter label="Adultos" sub={`$${tarifa.a} c/u · ${tarifa.label}`} value={adultos} onChange={setAdultos}/>
              <Counter label="Infancias" sub={`$${tarifa.i} c/u · ${tarifa.label}`} value={infancias} onChange={setInfancias}/>
            </div>

            <div style={{ background: '#fff', borderRadius: 18, padding: 22, marginTop: 24 }}>
              <div className="row" style={{ justifyContent: 'space-between', padding: '6px 0', fontSize: 14 }}>
                <span>Adultos × {adultos}</span>
                <span>${adultos * tarifa.a}</span>
              </div>
              <div className="row" style={{ justifyContent: 'space-between', padding: '6px 0', fontSize: 14, borderBottom: '1px dashed var(--line-strong)' }}>
                <span>Infancias × {infancias}</span>
                <span>${infancias * tarifa.i}</span>
              </div>
              <div className="row" style={{ justifyContent: 'space-between', padding: '12px 0 4px', alignItems: 'baseline' }}>
                <span style={{ fontWeight: 600 }}>Cooperación estimada</span>
                <span className="display" style={{ fontSize: 32, color: 'var(--primary)' }}>${total}</span>
              </div>
              <div className="muted" style={{ fontSize: 12 }}>MXN · {tarifa.label} · cupo limitado</div>
            </div>

            <a href={eventoSel ? wa : '#'} target="_blank" rel="noreferrer"
               className="btn btn--primary btn--lg"
               style={{ width: '100%', marginTop: 20, opacity: eventoSel ? 1 : 0.5, pointerEvents: eventoSel ? 'auto' : 'none' }}>
              <Icon name="whatsapp" size={18}/>
              {eventoSel ? 'Abrir conversación con mensaje listo' : 'Selecciona una función para continuar'}
            </a>
          </div>

          {/* Side info */}
          <aside style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div className="card">
              <div className="display" style={{ fontSize: 24, marginBottom: 12 }}>Tarifario</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                <div style={{ background: 'var(--sand)', borderRadius: 14, padding: 14 }}>
                  <div className="mono" style={{ color: 'var(--primary)' }}>FASE 1 · PREVENTA</div>
                  <div style={{ fontSize: 13, color: 'var(--muted)' }}>13 al 23 de abril</div>
                  <div className="row" style={{ justifyContent: 'space-between', marginTop: 6 }}>
                    <span>Adulto</span><strong>$120</strong>
                  </div>
                  <div className="row" style={{ justifyContent: 'space-between' }}>
                    <span>Infancia</span><strong>$80</strong>
                  </div>
                </div>
                <div style={{ background: 'var(--sand)', borderRadius: 14, padding: 14 }}>
                  <div className="mono" style={{ color: 'var(--primary)' }}>FASE 2 · REGULAR</div>
                  <div style={{ fontSize: 13, color: 'var(--muted)' }}>desde 24 de abril</div>
                  <div className="row" style={{ justifyContent: 'space-between', marginTop: 6 }}>
                    <span>Adulto</span><strong>$140</strong>
                  </div>
                  <div className="row" style={{ justifyContent: 'space-between' }}>
                    <span>Infancia</span><strong>$100</strong>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-cream">
              <div className="display" style={{ fontSize: 22, marginBottom: 10 }}>Protocolos de acceso</div>
              <ol style={{ paddingLeft: 18, fontSize: 14, color: 'var(--ink-soft)', lineHeight: 1.6 }}>
                <li><strong>Entrada libre.</strong> DUANOP y Galería: la fanzinoteka — anticipa tu llegada.</li>
                <li><strong>Libre con registro.</strong> Fiesta de tambores — confirma vía WhatsApp.</li>
                <li><strong>Cooperación anticipada.</strong> El resto de la programación.</li>
              </ol>
            </div>

            <div style={{ background: 'var(--ink)', color: '#fbe9c9', borderRadius: 24, padding: 24 }}>
              <div className="mono" style={{ color: '#f2b544' }}>Canal único</div>
              <div className="display" style={{ fontSize: 28, color: '#fff', marginTop: 4 }}>{WHATSAPP_DISPLAY}</div>
              <div style={{ fontSize: 13, opacity: 0.8, marginTop: 8 }}>
                Comparte: nombre del evento, fecha y desglose de asistentes.
              </div>
              <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noreferrer" className="btn" style={{ background: '#f2b544', color: '#3a1a08', marginTop: 14, width: '100%' }}>
                <Icon name="whatsapp" size={16}/> Escribir directamente
              </a>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
};

const Counter = ({ label, sub, value, onChange }) => (
  <div style={{ background: '#fff', borderRadius: 16, padding: 16 }}>
    <div className="mono" style={{ color: 'var(--muted)' }}>{label}</div>
    <div style={{ fontSize: 12, color: 'var(--muted)', marginBottom: 12 }}>{sub}</div>
    <div className="row" style={{ alignItems: 'center', justifyContent: 'space-between' }}>
      <button onClick={() => onChange(Math.max(0, value - 1))} style={{ width: 36, height: 36, borderRadius: 10, border: '1px solid var(--line-strong)', background: '#fff', fontSize: 18 }}>−</button>
      <span className="display" style={{ fontSize: 36 }}>{value}</span>
      <button onClick={() => onChange(value + 1)} style={{ width: 36, height: 36, borderRadius: 10, border: '1px solid var(--line-strong)', background: '#fff', fontSize: 18 }}>+</button>
    </div>
  </div>
);

window.MovimientoPage = MovimientoPage;
window.BoletosPage = BoletosPage;
