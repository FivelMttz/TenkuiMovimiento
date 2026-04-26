// Obra detail page
const ObraPage = ({ id, navigate, openTickets }) => {
  const event = EVENTS.find(e => e.id === id) || EVENTS[0];
  const venue = VENUES[event.venue];
  const otherSameVenue = EVENTS.filter(e => e.venue === event.venue && e.id !== event.id).slice(0, 2);
  const moreEvents = EVENTS.filter(e => e.id !== event.id && e.disciplineKey === event.disciplineKey).slice(0, 3);

  const wa = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent('Hola Tënkui, quiero reservar para "' + event.title + '" el ' + event.date + '. ')}`;

  return (
    <main className="page-enter">
      {/* Breadcrumb */}
      <section style={{ paddingTop: 32, paddingBottom: 0 }}>
        <div className="container">
          <button className="row gap-6" style={{ color: 'var(--muted)', fontSize: 13, alignItems: 'center' }} onClick={() => navigate({ page: 'programa' })}>
            <Icon name="arrow-left" size={14}/> Volver a la cartelera
          </button>
        </div>
      </section>

      {/* HERO */}
      <section style={{ paddingTop: 24 }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.55fr 1fr', gap: 20, alignItems: 'stretch' }}>
            <Scene scene={sceneFor(event)} accent={event.accent} style={{ borderRadius: 32, minHeight: 520, padding: 44, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', color: '#fff', overflow: 'hidden' }}>
              <div style={{ position: 'relative', zIndex: 2 }}>
                <div className="row gap-8" style={{ marginBottom: 16, flexWrap: 'wrap' }}>
                  <span className="chip chip--mustard">{event.discipline}</span>
                  {event.tags.slice(0, 2).map(t => (
                    <span key={t} className="chip" style={{ background: 'rgba(255,255,255,0.16)', color: '#fff', backdropFilter: 'blur(8px)' }}>{t}</span>
                  ))}
                </div>
                <h1 className="display" style={{ fontSize: 'clamp(48px, 6vw, 88px)', lineHeight: 0.96, margin: 0, color: '#fff' }}>{event.title}</h1>
                {event.subtitle && <div style={{ fontSize: 18, marginTop: 6, opacity: 0.78, fontStyle: 'italic' }}>{event.subtitle}</div>}
                <div style={{ fontSize: 18, marginTop: 10, opacity: 0.92 }}>{event.company}</div>
                <div className="row gap-12" style={{ marginTop: 24, flexWrap: 'wrap', fontSize: 13, opacity: 0.92 }}>
                  <span className="row gap-6"><Icon name="calendar" size={14}/> {event.date}</span>
                  <span style={{ opacity: 0.4 }}>·</span>
                  <span className="row gap-6"><Icon name="clock" size={14}/> {event.time}</span>
                  <span style={{ opacity: 0.4 }}>·</span>
                  <span className="row gap-6"><Icon name="users" size={14}/> {event.age}</span>
                </div>
              </div>
            </Scene>
            {PHOTOS[event.id] && (
              <div style={{ borderRadius: 32, overflow: 'hidden', background: 'var(--paper)', minHeight: 520, position: 'relative', boxShadow: '0 1px 0 rgba(0,0,0,0.04), 0 18px 40px -24px rgba(40,20,10,0.18)' }}>
                <img src={PHOTOS[event.id]} alt={`Cartel oficial · ${event.title}`} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}/>
                <div style={{ position: 'absolute', top: 14, left: 14, padding: '6px 10px', background: 'rgba(255,255,255,0.92)', borderRadius: 999, fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--primary)' }}>Cartel oficial</div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="section">
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 32, alignItems: 'start' }}>
          {/* LEFT */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            <div className="card-cream" style={{ position: 'relative' }}>
              <div className="row gap-8" style={{ alignItems: 'center', marginBottom: 12 }}>
                <Icon name="book" size={18} style={{ color: 'var(--primary)' }}/>
                <div className="display" style={{ fontSize: 28 }}>Sinopsis</div>
              </div>
              <p style={{ fontSize: 16, lineHeight: 1.65, color: 'var(--ink-soft)', margin: 0 }}>
                {event.synopsis}
              </p>
              <div className="row gap-6" style={{ marginTop: 16, flexWrap: 'wrap' }}>
                {event.tags.map(t => <span key={t} className="chip chip--outline" style={{ fontSize: 11 }}>{t}</span>)}
              </div>
            </div>

            {/* Crew */}
            <div>
              <h3 className="display" style={{ fontSize: 32, color: 'var(--primary)', marginBottom: 16 }}>Equipo creativo</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 12 }}>
                {event.crew.map((c, i) => {
                  const colors = ['#8fd2c0', '#f2b544', '#f08d6e', '#6b8ad6', '#a66bb0'];
                  const color = colors[i % colors.length];
                  return (
                    <div key={i} className="card" style={{ padding: 18, display: 'flex', gap: 14, alignItems: 'center' }}>
                      <span style={{ width: 44, height: 44, borderRadius: 12, background: color, color: 'var(--ink)', display: 'grid', placeItems: 'center', flexShrink: 0 }}>
                        <Icon name={c.icon || 'user'} size={18}/>
                      </span>
                      <div style={{ minWidth: 0 }}>
                        <div className="mono" style={{ color: 'var(--muted)' }}>{c.role}</div>
                        <div style={{ fontWeight: 600, fontSize: 14, lineHeight: 1.25 }}>{c.name}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* About venue */}
            <div className="card" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, alignItems: 'center' }}>
              <PlaceholderTile kind="pin" accent={venue.accent} label={`SEDE · ${venue.short.toUpperCase()}`}/>
              <div>
                <div className="mono" style={{ color: 'var(--muted)' }}>La sede</div>
                <div className="display" style={{ fontSize: 26, marginTop: 4 }}>{venue.name}</div>
                <p style={{ fontSize: 14, color: 'var(--muted)', marginTop: 8 }}>{venue.description}</p>
                <button className="btn btn--ghost btn--sm" style={{ marginTop: 12 }} onClick={() => navigate({ page: 'sede', id: venue.id })}>
                  Ver detalle de sede <Icon name="arrow-right" size={14}/>
                </button>
              </div>
            </div>

            {/* Itinerant venues */}
            {event.venuesItinerant && (
              <div className="card-cream">
                <div className="display" style={{ fontSize: 24, marginBottom: 12 }}>Funciones itinerantes</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {event.venuesItinerant.map((it, i) => (
                    <div key={i} className="row" style={{ background: '#fff', borderRadius: 14, padding: '12px 16px', alignItems: 'center', gap: 12 }}>
                      <Icon name="pin" size={16} style={{ color: 'var(--primary)' }}/>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontWeight: 600 }}>{VENUES[it.venue].short}</div>
                        <div style={{ fontSize: 13, color: 'var(--muted)' }}>{it.date}</div>
                      </div>
                      <button className="btn btn--sm btn--ghost" onClick={() => navigate({ page: 'sede', id: it.venue })}>Ver sede</button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* RIGHT — Logistics card */}
          <aside style={{ position: 'sticky', top: 96 }}>
            <div className="card-cream" style={{ padding: 28 }}>
              <div className="row" style={{ justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 20 }}>
                <div className="display" style={{ fontSize: 28 }}>Logística</div>
                <div style={{ height: 3, width: 80, background: 'var(--primary)', borderRadius: 2 }}/>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <LogisticsRow icon="calendar" label="Fecha" value={event.date} sub="2026"/>
                <LogisticsRow icon="clock" label="Hora" value={event.time} sub={`Duración aprox. ${event.duration}`}/>
                <LogisticsRow icon="pin" label="Sede" value={venue.short} sub={venue.address}/>
                <LogisticsRow icon="users" label="Edades" value={event.age}/>
                <LogisticsRow icon="ticket" label="Acceso" value={event.cost.startsWith('libre') ? 'Entrada libre' : 'Cooperación'} sub={event.costLabel}/>
              </div>

              <a href={wa} target="_blank" rel="noreferrer" className="btn btn--primary btn--lg" style={{ width: '100%', marginTop: 24 }}>
                <Icon name="whatsapp" size={18}/>
                <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 0, lineHeight: 1.1 }}>
                  <span style={{ fontSize: 10, opacity: 0.85, fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase' }}>Reservar mi lugar</span>
                  <span>Escribir por WhatsApp</span>
                </span>
              </a>

              {/* Cooperación detail */}
              {event.cost.startsWith('cooperacion') && event.costTiers && (
                <div style={{ background: '#fff', borderRadius: 16, padding: 18, marginTop: 16 }}>
                  <div className="mono" style={{ color: 'var(--muted)', marginBottom: 10 }}>Tarifario de cooperación</div>
                  {event.costTiers.map((tier, i) => (
                    <div key={i} style={{ paddingTop: i ? 12 : 0, paddingBottom: 4, borderTop: i ? '1px dashed var(--line-strong)' : 'none' }}>
                      <div className="mono" style={{ color: 'var(--primary)', fontSize: 11, marginBottom: 6 }}>{tier.window}</div>
                      <div className="row" style={{ justifyContent: 'space-between', padding: '4px 0', fontSize: 14 }}>
                        <span>Adulto</span>
                        <strong>${tier.adult}</strong>
                      </div>
                      <div className="row" style={{ justifyContent: 'space-between', padding: '4px 0', fontSize: 14 }}>
                        <span>Infancia</span>
                        <strong>${tier.kid}</strong>
                      </div>
                    </div>
                  ))}
                  {event.costNote && (
                    <div style={{ marginTop: 12, paddingTop: 12, borderTop: '1px dashed var(--line-strong)', fontSize: 12, color: 'var(--muted)', lineHeight: 1.5 }}>
                      {event.costNote}
                    </div>
                  )}
                </div>
              )}

              {event.cost.startsWith('libre') && (
                <div style={{ background: '#c4e9df', borderRadius: 16, padding: 16, marginTop: 16, display: 'flex', gap: 12 }}>
                  <Icon name="check-circle" size={18} style={{ color: '#1f4a3f', marginTop: 1 }}/>
                  <div style={{ fontSize: 13, color: '#1f4a3f', lineHeight: 1.5 }}>
                    <strong>Entrada libre.</strong>{' '}
                    {event.costNote || (event.cost === 'libre-registro' ? 'Requiere registro previo por WhatsApp.' : 'Cupo limitado, anticipa tu llegada.')}
                  </div>
                </div>
              )}
            </div>

            {otherSameVenue.length > 0 && (
              <div style={{ marginTop: 20 }}>
                <div className="mono" style={{ color: 'var(--muted)', marginBottom: 12 }}>Más en {venue.short}</div>
                {otherSameVenue.map(o => (
                  <div key={o.id} onClick={() => navigate({ page: 'obra', id: o.id })}
                       className="row gap-12" style={{ background: '#fff', borderRadius: 16, padding: 14, alignItems: 'center', cursor: 'pointer', marginBottom: 10 }}>
                    <span style={{ width: 8, height: 40, background: o.accent, borderRadius: 2 }}/>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontWeight: 600, fontSize: 14, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{o.title}</div>
                      <div style={{ fontSize: 12, color: 'var(--muted)' }}>{o.date} · {o.time}</div>
                    </div>
                    <Icon name="arrow-right" size={14}/>
                  </div>
                ))}
              </div>
            )}
          </aside>
        </div>
      </section>

      {/* MORE LIKE THIS */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="row" style={{ alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 24, flexWrap: 'wrap', gap: 16 }}>
            <div>
              <div className="eyebrow">★ También en {DISCIPLINES.find(d => d.key === event.disciplineKey)?.label}</div>
              <h3 className="display" style={{ fontSize: 36, margin: '8px 0 0' }}>Te puede interesar</h3>
            </div>
            <button className="btn btn--ghost" onClick={() => navigate({ page: 'programa' })}>Ver todo <Icon name="arrow-right" size={16}/></button>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
            {moreEvents.map(e => <EventCard key={e.id} event={e} navigate={navigate}/>)}
          </div>
        </div>
      </section>
    </main>
  );
};

const LogisticsRow = ({ icon, label, value, sub }) => (
  <div className="row gap-12" style={{ alignItems: 'flex-start' }}>
    <span style={{ width: 36, height: 36, borderRadius: 10, background: '#fff', color: 'var(--primary)', display: 'grid', placeItems: 'center', flexShrink: 0 }}>
      <Icon name={icon} size={16}/>
    </span>
    <div>
      <div className="mono" style={{ color: 'var(--muted)' }}>{label}</div>
      <div style={{ fontWeight: 600, fontSize: 16 }}>{value}</div>
      {sub && <div style={{ fontSize: 13, color: 'var(--muted)', marginTop: 2 }}>{sub}</div>}
    </div>
  </div>
);

window.ObraPage = ObraPage;
