// Home page (Inicio)
const HomePage = ({ navigate, openTickets }) => {
  const featured = EVENTS.filter(e => e.featured);
  const obras = EVENTS.filter(e => e.kind === 'obra');
  const talleres = EVENTS.filter(e => e.kind === 'taller');
  const galeria = EVENTS.filter(e => e.kind === 'galeria');

  return (
    <main className="page-enter">
      {/* HERO */}
      <section style={{ background: 'var(--paper)', paddingTop: 32, paddingBottom: 24 }}>
        <div className="container">
          <Scene scene="curtain" style={{ borderRadius: 36, minHeight: 560, padding: '56px 56px 48px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', color: '#fff', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: 32, left: 56, right: 56, display: 'flex', justifyContent: 'space-between', color: 'rgba(255,225,180,0.85)', fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.18em', zIndex: 2 }}>
              <span>★ EDICIÓN 2026 ★</span>
              <span>SAN LUIS POTOSÍ · MÉXICO</span>
            </div>
            <div style={{ position: 'relative', zIndex: 2, maxWidth: 820 }}>
              <span className="chip chip--mustard" style={{ marginBottom: 24 }}>
                <Icon name="star" size={12}/> 29 abr — 3 may · 2026
              </span>
              <h1 style={{ fontFamily: 'var(--display)', fontSize: 'clamp(64px, 9vw, 124px)', lineHeight: 0.94, letterSpacing: '-0.02em', margin: '12px 0 8px', fontWeight: 400 }}>
                Tu pase a<br/>
                <em style={{ color: '#f2b544', fontStyle: 'italic' }}>la magia.</em>
              </h1>
              <p style={{ fontSize: 19, lineHeight: 1.45, color: 'rgba(253,243,224,0.92)', maxWidth: 540, margin: '20px 0 32px' }}>
                Cinco días. Siete sedes. Nueve experiencias artísticas autogestivas para las infancias y sus familias en el corazón de San Luis Potosí.
              </p>
              <div className="row gap-12" style={{ flexWrap: 'wrap' }}>
                <button className="btn btn--lg" style={{ background: '#f2b544', color: '#3a1a08' }} onClick={() => navigate({ page: 'programa' })}>
                  <Icon name="sparkles" size={18}/> Ver programación
                </button>
                <button className="btn btn--lg" style={{ background: 'rgba(255,255,255,0.12)', color: '#fff', backdropFilter: 'blur(8px)' }} onClick={openTickets}>
                  <Icon name="ticket" size={18}/> Reservar boletos
                </button>
              </div>
            </div>

            {/* Floating little chips - artistic ornaments */}
            <div style={{ position: 'absolute', right: 56, bottom: 48, display: 'flex', flexDirection: 'column', gap: 12, alignItems: 'flex-end', zIndex: 2 }}>
              <div className="chip chip--cream" style={{ transform: 'rotate(2deg)' }}>4 disciplinas</div>
              <div className="chip" style={{ background: '#8fd2c0', color: '#1f4a3f', transform: 'rotate(-3deg)' }}>9 funciones</div>
              <div className="chip" style={{ background: '#f08d6e', color: '#6e2a18', transform: 'rotate(1deg)' }}>7 sedes</div>
            </div>
          </Scene>

          {/* facts row */}
          <div className="row" style={{ marginTop: 24, gap: 16, flexWrap: 'wrap' }}>
            {[
              { k: 'Disciplinas', v: 'Escénicas · Literatura · Música · Plásticas', icon: 'palette' },
              { k: 'Para infancias desde', v: '6 meses · primeras infancias y mayores', icon: 'heart' },
              { k: 'Cooperación desde', v: '$80 mxn · entradas libres disponibles', icon: 'ticket' },
            ].map((f, i) => (
              <div key={i} className="card" style={{ flex: 1, minWidth: 240, display: 'flex', gap: 14, alignItems: 'center' }}>
                <span style={{ width: 42, height: 42, borderRadius: 12, background: i === 0 ? '#fbcfc1' : i === 1 ? '#c4e9df' : '#f7e0a3', color: 'var(--ink)', display: 'grid', placeItems: 'center' }}>
                  <Icon name={f.icon} size={18}/>
                </span>
                <div>
                  <div className="mono" style={{ color: 'var(--muted)' }}>{f.k}</div>
                  <div style={{ fontSize: 14, fontWeight: 500 }}>{f.v}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ESTRENOS / DESTACADAS */}
      <section className="section">
        <div className="container">
          <div className="row" style={{ alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 32, flexWrap: 'wrap', gap: 16 }}>
            <div>
              <div className="eyebrow">★ Cartelera</div>
              <h2 className="section-title">Las funciones <em className="italic" style={{ color: 'var(--primary)' }}>imperdibles</em></h2>
              <p className="section-sub">Obras y experiencias que abren el telón de Tënkui 2026.</p>
            </div>
            <button className="btn btn--ghost" onClick={() => navigate({ page: 'programa' })}>
              Ver toda la cartelera <Icon name="arrow-right" size={16}/>
            </button>
          </div>

          <div className="grid-cols-12">
            {/* big featured */}
            <FeaturedCard event={featured[0]} navigate={navigate} large/>
            <div style={{ gridColumn: 'span 6', display: 'flex', flexDirection: 'column', gap: 20 }}>
              {featured.slice(1, 3).map(e => (
                <FeaturedCard key={e.id} event={e} navigate={navigate}/>
              ))}
            </div>
            <FeaturedCard event={featured[3] || EVENTS[7]} navigate={navigate} medium/>
            <FeaturedCard event={EVENTS.find(e => e.id === 'cuentacuentos-familias')} navigate={navigate} medium/>
            <FeaturedCard event={EVENTS.find(e => e.id === 'entre-libros-y-arrullos')} navigate={navigate} medium/>
          </div>
        </div>
      </section>

      {/* CARTELERAS — official poster strip */}
      <section style={{ background: 'var(--paper)', padding: '32px 0 64px' }}>
        <div className="container">
          <div className="row" style={{ justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 24, flexWrap: 'wrap', gap: 16 }}>
            <div>
              <div className="eyebrow">Carteleras oficiales 2026</div>
              <h2 className="section-title" style={{ fontSize: 'clamp(32px, 4vw, 48px)', margin: '6px 0 0' }}>Las nueve invitaciones</h2>
            </div>
            <div className="muted" style={{ fontSize: 13, maxWidth: 360 }}>
              Carteles diseñados por el equipo gráfico del movimiento. Toca uno para ver detalle, sede y boletos.
            </div>
          </div>
          <div className="grid-cols-auto">
            {EVENTS.filter(e => PHOTOS[e.id]).map(e => (
              <div key={e.id} onClick={() => navigate({ page: 'obra', id: e.id })}
                   style={{ cursor: 'pointer', borderRadius: 16, overflow: 'hidden', background: '#fff', transition: 'transform .2s ease, box-shadow .2s ease', boxShadow: '0 1px 0 rgba(0,0,0,0.04), 0 12px 24px -16px rgba(40,20,10,0.18)' }}
                   onMouseEnter={ev => { ev.currentTarget.style.transform = 'translateY(-4px)'; ev.currentTarget.style.boxShadow = '0 1px 0 rgba(0,0,0,0.04), 0 22px 40px -16px rgba(40,20,10,0.32)'; }}
                   onMouseLeave={ev => { ev.currentTarget.style.transform = 'none'; ev.currentTarget.style.boxShadow = '0 1px 0 rgba(0,0,0,0.04), 0 12px 24px -16px rgba(40,20,10,0.18)'; }}>
                <div style={{ aspectRatio: '4 / 5', overflow: 'hidden', background: 'var(--cream)' }}>
                  <img src={PHOTOS[e.id]} alt={`Cartel · ${e.title}`} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}/>
                </div>
                <div style={{ padding: '12px 14px 14px' }}>
                  <div className="mono" style={{ color: 'var(--primary)', fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase' }}>{e.day} · {e.date.replace(' de ', '/')}</div>
                  <div style={{ fontWeight: 600, fontSize: 14, marginTop: 4, lineHeight: 1.25, color: 'var(--ink)' }}>{e.title}</div>
                  <div style={{ fontSize: 12, color: 'var(--muted)', marginTop: 2 }}>{VENUES[e.venue].short}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MOVEMENT — what is Tënkui */}
      <section style={{ background: 'var(--cream)', borderRadius: 0, padding: '80px 0', position: 'relative', overflow: 'hidden' }}>
        <div className="container grid-cols-2" style={{ gap: 64, alignItems: 'center' }}>
          <div>
            <div className="eyebrow">El movimiento</div>
            <h2 className="section-title" style={{ fontSize: 'clamp(40px, 5vw, 64px)' }}>
              El arte como <span className="swirl-underline" style={{ color: 'var(--primary)', fontStyle: 'italic' }}>derecho</span>
              <br/>de las infancias.
            </h2>
            <p style={{ fontSize: 17, lineHeight: 1.6, color: 'var(--ink-soft)', marginTop: 20, maxWidth: 480 }}>
              Tënkui es un movimiento autogestivo y multidisciplinario radicado en San Luis Potosí: un ecosistema donde espacios culturales independientes articulan una plataforma viva para las artes escénicas, la literatura, la música y las artes plásticas.
            </p>
            <p style={{ fontSize: 17, lineHeight: 1.6, color: 'var(--ink-soft)', maxWidth: 480 }}>
              Creemos que las niñas, niños y sus familias merecen experiencias estéticas pensadas, cuidadas y celebradas en comunidad.
            </p>
            <button className="btn btn--primary" style={{ marginTop: 24 }} onClick={() => navigate({ page: 'movimiento' })}>
              Conocer el manifiesto <Icon name="arrow-right" size={16}/>
            </button>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            {[
              { k: '01', t: 'Artes Escénicas', d: 'Teatro, títeres, danza-teatro, drama contemporáneo.', c: '#f08d6e', i: 'masks' },
              { k: '02', t: 'Literatura', d: 'Narración oral, talleres de lectura temprana.', c: '#8fd2c0', i: 'book' },
              { k: '03', t: 'Música', d: 'Percusión afrolatina, ensambles y voz.', c: '#f2b544', i: 'music' },
              { k: '04', t: 'Artes Plásticas', d: 'Grabado, fanzine, exposiciones itinerantes.', c: '#6b8ad6', i: 'palette' },
            ].map(d => (
              <div key={d.k} style={{ background: 'rgba(255,255,255,0.72)', borderRadius: 24, padding: 22, position: 'relative' }}>
                <span style={{ position: 'absolute', top: 16, right: 16, fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--muted)' }}>{d.k}</span>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: d.c, color: 'var(--ink)', display: 'grid', placeItems: 'center', marginBottom: 12 }}>
                  <Icon name={d.i} size={20}/>
                </div>
                <div className="display" style={{ fontSize: 22 }}>{d.t}</div>
                <div style={{ fontSize: 13, color: 'var(--muted)', marginTop: 4 }}>{d.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SCHEDULE STRIP */}
      <section className="section">
        <div className="container">
          <div className="row" style={{ alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 24, flexWrap: 'wrap', gap: 16 }}>
            <div>
              <div className="eyebrow">Calendario</div>
              <h2 className="section-title">5 días de <em className="italic" style={{ color: 'var(--primary)' }}>encuentro</em></h2>
            </div>
            <button className="btn btn--ghost" onClick={() => navigate({ page: 'programa' })}>
              Ver agenda completa <Icon name="arrow-right" size={16}/>
            </button>
          </div>

          <DaySchedule navigate={navigate}/>
        </div>
      </section>

      {/* SEDES */}
      <section style={{ background: 'var(--ink)', color: '#fbe9c9', padding: '96px 0', borderRadius: 0 }}>
        <div className="container">
          <div className="row" style={{ alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 40, flexWrap: 'wrap', gap: 16 }}>
            <div>
              <div className="eyebrow" style={{ color: '#f2b544' }}>★ La ciudad como escenario</div>
              <h2 className="section-title" style={{ color: '#fff' }}>Siete sedes,<br/>una <em className="italic" style={{ color: '#f2b544' }}>misma noche</em>.</h2>
            </div>
            <button className="btn" style={{ background: 'rgba(255,255,255,0.1)', color: '#fff' }} onClick={() => navigate({ page: 'sedes' })}>
              Mapa de sedes <Icon name="arrow-right" size={16}/>
            </button>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16 }}>
            {Object.values(VENUES).map(v => (
              <div key={v.id} onClick={() => navigate({ page: 'sede', id: v.id })} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(244,220,167,0.16)', borderRadius: 20, padding: 22, cursor: 'pointer', transition: 'all .15s ease' }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.09)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.transform = 'none'; }}>
                <div style={{ width: 38, height: 38, borderRadius: 10, background: v.accent, marginBottom: 14, display: 'grid', placeItems: 'center', color: 'var(--ink)' }}>
                  <Icon name="pin" size={16}/>
                </div>
                <div className="display" style={{ fontSize: 20, color: '#fff', lineHeight: 1.1 }}>{v.short}</div>
                <div style={{ fontSize: 12, opacity: 0.7, marginTop: 6 }}>{v.barrio}</div>
                <div style={{ fontSize: 13, opacity: 0.85, marginTop: 12 }}>{v.address}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VÍDEO PROMOCIONAL */}
      <section className="section" style={{ paddingBottom: 0 }}>
        <div className="container">
          <div className="row" style={{ alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 24, flexWrap: 'wrap', gap: 16 }}>
            <div>
              <div className="eyebrow" style={{ color: 'var(--muted)' }}>★ Memoria audiovisual</div>
              <h2 className="section-title">El movimiento <em className="italic" style={{ color: 'var(--primary)' }}>en video</em></h2>
            </div>
            <div className="muted" style={{ fontSize: 13, maxWidth: 320 }}>
              Una mirada a lo que vivimos en nuestras presentaciones.
            </div>
          </div>

          <div style={{ position: 'relative', width: '100%', paddingTop: '56.25%', background: 'var(--ink)', borderRadius: 24, overflow: 'hidden', boxShadow: '0 24px 48px -12px rgba(40,20,10,0.2)' }}>
            {/* Si tu archivo se llama diferente, ajusta el src */}
            <video 
              controls 
              preload="metadata"
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }}
            >
              <source src="./uploads/lisa.mp4" type="video/mp4" />
              Tu navegador no soporta la reproducción de video.
            </video>
          </div>
        </div>
      </section>

      {/* CTA / WhatsApp */}
      <section className="section">
        <div className="container">
          <div style={{ background: 'var(--primary)', borderRadius: 36, padding: '64px 56px', position: 'relative', overflow: 'hidden', color: '#fff' }}>
            <div className="dust" style={{ opacity: 0.3 }}/>
            <div className="grid-cols-2" style={{ position: 'relative', zIndex: 2, gap: 48, alignItems: 'center' }}>
              <div>
                <div className="eyebrow" style={{ color: '#f2b544' }}>★ Cooperación programada</div>
                <h2 className="section-title" style={{ color: '#fff', fontSize: 'clamp(36px, 5vw, 56px)' }}>
                  Reserva tu lugar<br/>por <em className="italic" style={{ color: '#f2b544' }}>WhatsApp</em>.
                </h2>
                <p style={{ fontSize: 17, opacity: 0.92, maxWidth: 540, marginTop: 12 }}>
                  Todas las reservas y registros se gestionan desde un solo número. Comparte el evento, la fecha y el desglose de asistentes — te confirmamos en minutos.
                </p>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.1)', borderRadius: 24, padding: 28, backdropFilter: 'blur(8px)' }}>
                <div className="mono" style={{ opacity: 0.7 }}>Canal único</div>
                <div className="display" style={{ fontSize: 32, marginTop: 4 }}>{WHATSAPP_DISPLAY}</div>
                <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noreferrer" className="btn" style={{ background: '#fff', color: 'var(--primary)', marginTop: 16, width: '100%' }}>
                  <Icon name="whatsapp" size={18}/> Escribir ahora
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

// Featured card
const FeaturedCard = ({ event, navigate, large = false, medium = false }) => {
  if (!event) return null;
  const venue = VENUES[event.venue];
  const span = large ? 6 : medium ? 4 : 6;
  const minH = large ? 480 : medium ? 320 : 220;

  return (
    <div className={`featured-card-wrapper ${large ? 'featured-card--large' : medium ? 'featured-card--medium' : ''}`}
         onClick={() => navigate({ page: 'obra', id: event.id })}
         style={{ gridColumn: `span ${span}`, cursor: 'pointer', transition: 'transform .2s ease' }}
         onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-3px)'}
         onMouseLeave={e => e.currentTarget.style.transform = 'none'}>
      <Scene scene={sceneFor(event)} accent={event.accent} className="featured-card-scene" style={{ borderRadius: 28, minHeight: minH, padding: 28, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', color: '#fff', position: 'relative', overflow: 'hidden' }}>
        {PHOTOS[event.id] && large && (
          <img src={PHOTOS[event.id]} alt="" aria-hidden="true"
               style={{ position: 'absolute', right: -40, top: -20, width: 280, height: 'calc(100% + 40px)', objectFit: 'cover', objectPosition: 'center', borderRadius: 16, opacity: 0.92, zIndex: 1, transform: 'rotate(3deg)', boxShadow: '0 18px 40px -12px rgba(0,0,0,0.4)' }}/>
        )}
        {PHOTOS[event.id] && medium && (
          <img src={PHOTOS[event.id]} alt="" aria-hidden="true"
               style={{ position: 'absolute', right: -30, bottom: -30, width: 160, height: 200, objectFit: 'cover', borderRadius: 12, opacity: 0.88, zIndex: 1, transform: 'rotate(4deg)', boxShadow: '0 12px 28px -8px rgba(0,0,0,0.4)' }}/>
        )}
        {/* gradient veil so text stays legible over the image */}
        {PHOTOS[event.id] && (large || medium) && (
          <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(95deg, ${event.accent}f5 0%, ${event.accent}d8 45%, ${event.accent}55 75%, transparent 100%)`, zIndex: 1, pointerEvents: 'none' }}/>
        )}
        <div className="row" style={{ justifyContent: 'space-between', position: 'relative', zIndex: 2 }}>
          <span className="chip" style={{ background: 'rgba(255,255,255,0.18)', color: '#fff', backdropFilter: 'blur(6px)', textTransform: 'uppercase', letterSpacing: '0.08em', fontSize: 11 }}>
            {event.kind === 'obra' ? '🎭 Obra' : event.kind === 'taller' ? '🎨 Taller' : '✦ Galería'}
          </span>
          <span className="chip" style={{ background: 'rgba(0,0,0,0.3)', color: '#fff', backdropFilter: 'blur(6px)', fontSize: 11 }}>
            {event.day} · {event.date.replace(' de ', '/')}
          </span>
        </div>
        <div style={{ position: 'relative', zIndex: 2 }}>
          <div className="display" style={{ fontSize: large ? 56 : medium ? 32 : 30, lineHeight: 0.98, color: '#fff', marginBottom: 8 }}>
            {event.title}
          </div>
          <div style={{ fontSize: 14, opacity: 0.92, marginBottom: 14 }}>{event.company}</div>
          <div className="row gap-8" style={{ flexWrap: 'wrap', alignItems: 'center', fontSize: 13, opacity: 0.92 }}>
            <span className="row gap-4" style={{ alignItems: 'center' }}><Icon name="clock" size={13}/> {event.time}</span>
            <span style={{ opacity: 0.5 }}>·</span>
            <span className="row gap-4" style={{ alignItems: 'center' }}><Icon name="pin" size={13}/> {venue.short}</span>
            <span style={{ opacity: 0.5 }}>·</span>
            <span>{event.age}</span>
          </div>
        </div>
      </Scene>
    </div>
  );
};

const DaySchedule = ({ navigate }) => {
  const [activeDay, setActiveDay] = useState('2026-04-29');
  const days = DAYS.filter(d => d.key !== 'todos');
  const events = EVENTS.filter(e => e.dateISO === activeDay);

  return (
    <div className="card-cream" style={{ padding: 32 }}>
      <div className="row gap-8" style={{ flexWrap: 'wrap', marginBottom: 24 }}>
        {days.map(d => (
          <button key={d.key} className="fchip" aria-pressed={activeDay === d.key} onClick={() => setActiveDay(d.key)}>
            <span style={{ fontWeight: 600 }}>{d.label}</span>
            <span style={{ marginLeft: 8, opacity: 0.7 }}>{d.date}</span>
          </button>
        ))}
      </div>

      {events.length === 0 ? (
        <div className="muted" style={{ padding: 32, textAlign: 'center' }}>No hay funciones registradas para este día.</div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {events.map(e => {
            const v = VENUES[e.venue];
            return (
              <div key={e.id} onClick={() => navigate({ page: 'obra', id: e.id })}
                   className="day-schedule-item"
                   style={{ background: '#fff', borderRadius: 18, padding: '18px 22px', gap: 20, alignItems: 'center', cursor: 'pointer', transition: 'all .15s ease' }}
                   onMouseEnter={ev => ev.currentTarget.style.boxShadow = 'var(--shadow-card)'}
                   onMouseLeave={ev => ev.currentTarget.style.boxShadow = 'none'}>
                <div className="display time-label" style={{ fontSize: 28, color: e.accent }}>{e.time.replace(/[ap]\.m\./, m => m.replace(/\./g, ''))}</div>
                <div>
                  <div style={{ display: 'flex', gap: 8, marginBottom: 4, flexWrap: 'wrap' }}>
                    <span className="chip" style={{ background: e.accent + '22', color: e.accent, fontSize: 10 }}>{e.discipline}</span>
                    <span className="chip chip--outline" style={{ fontSize: 10 }}>{e.age}</span>
                  </div>
                  <div className="display" style={{ fontSize: 22 }}>{e.title}</div>
                  <div style={{ fontSize: 13, color: 'var(--muted)', marginTop: 2 }}>{e.company} · {v.short}</div>
                </div>
                <Icon name="arrow-right" size={18}/>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

window.HomePage = HomePage;
