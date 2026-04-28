// Sedes (venues) — list and detail
const SedesPage = ({ navigate }) => {
  const venues = Object.values(VENUES);
  return (
    <main className="page-enter">
      <section style={{ paddingTop: 56, paddingBottom: 24 }}>
        <div className="container">
          <div className="eyebrow">★ Directorio</div>
          <h1 className="display" style={{ fontSize: 'clamp(56px, 8vw, 100px)', margin: '8px 0 0', lineHeight: 0.96 }}>
            Siete <em className="italic" style={{ color: 'var(--primary)' }}>sedes</em><br/>en la ciudad.
          </h1>
          <p className="section-sub" style={{ marginTop: 12, fontSize: 17, maxWidth: 640 }}>
            Espacios culturales independientes que articulan el movimiento Tënkui en distintos rincones de San Luis Potosí.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 24 }}>
        <div className="container">
          <div className="grid-cols-auto">
            {venues.map(v => {
              const evCount = EVENTS.filter(e => e.venue === v.id || (e.venuesItinerant || []).some(i => i.venue === v.id)).length;
              return (
                <div key={v.id} onClick={() => navigate({ page: 'sede', id: v.id })}
                     style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column' }}
                     onMouseEnter={e => e.currentTarget.querySelector('.sede-tile').style.transform = 'translateY(-3px)'}
                     onMouseLeave={e => e.currentTarget.querySelector('.sede-tile').style.transform = 'none'}>
                  <div className="sede-tile" style={{ transition: 'transform .15s ease', display: 'flex', flexDirection: 'column' }}>
                    <Scene scene="soft" accent={v.accent} style={{ borderRadius: '24px 24px 0 0', height: 180, padding: 24, color: '#fff', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                      <div className="row" style={{ justifyContent: 'space-between', position: 'relative', zIndex: 2 }}>
                        <span className="chip" style={{ background: 'rgba(0,0,0,0.28)', color: '#fff', fontSize: 11 }}>SEDE</span>
                        <span className="chip" style={{ background: 'rgba(255,255,255,0.22)', color: '#fff', fontSize: 11 }}>{evCount} {evCount === 1 ? 'función' : 'funciones'}</span>
                      </div>
                      <div className="display" style={{ fontSize: 30, lineHeight: 1, color: '#fff', position: 'relative', zIndex: 2 }}>{v.short}</div>
                    </Scene>
                    <div style={{ background: '#fff', padding: 22, borderRadius: '0 0 24px 24px' }}>
                      <div className="row gap-6" style={{ flexWrap: 'wrap', marginBottom: 10 }}>
                        {v.tags.map(t => <span key={t} className="chip chip--outline" style={{ fontSize: 10 }}>{t}</span>)}
                      </div>
                      <div style={{ fontSize: 15, fontWeight: 600 }}>{v.name}</div>
                      <div style={{ fontSize: 13, color: 'var(--muted)', marginTop: 6 }}>{v.address}</div>
                      <div className="row" style={{ justifyContent: 'space-between', alignItems: 'center', marginTop: 14, paddingTop: 14, borderTop: '1px dashed var(--line)' }}>
                        <span className="mono" style={{ color: 'var(--muted)' }}>{v.barrio}</span>
                        <span style={{ display: 'inline-flex', gap: 4, color: v.accent, fontWeight: 600, fontSize: 13, alignItems: 'center' }}>
                          Conocer sede <Icon name="arrow-right" size={14}/>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
};

// Sede detail
const SedePage = ({ id, navigate }) => {
  const v = VENUES[id] || Object.values(VENUES)[0];
  const events = EVENTS.filter(e => e.venue === v.id || (e.venuesItinerant || []).some(i => i.venue === v.id));

  return (
    <main className="page-enter">
      <section style={{ paddingTop: 32 }}>
        <div className="container">
          <button className="row gap-6" style={{ color: 'var(--muted)', fontSize: 13, alignItems: 'center', marginBottom: 16 }} onClick={() => navigate({ page: 'sedes' })}>
            <Icon name="arrow-left" size={14}/> Volver a sedes
          </button>
        </div>
      </section>

      {/* Hero */}
      <section style={{ paddingTop: 0, paddingBottom: 24 }}>
        <div className="container">
          <Scene scene="soft" accent={v.accent} className="grid-cols-2" style={{ borderRadius: 32, padding: 'clamp(32px, 6vw, 56px)', color: '#fff', overflow: 'hidden', alignItems: 'center' }}>
            <div style={{ position: 'relative', zIndex: 2 }}>
              <div className="chip" style={{ background: 'rgba(0,0,0,0.28)', color: '#fff', marginBottom: 16 }}>SEDE</div>
              <h1 className="display" style={{ fontSize: 'clamp(48px, 6vw, 84px)', lineHeight: 0.96, margin: 0, color: '#fff' }}>{v.name}</h1>
              <p style={{ fontSize: 17, opacity: 0.92, marginTop: 16, maxWidth: 540 }}>{v.description}</p>
              <div className="row gap-6" style={{ marginTop: 16, flexWrap: 'wrap' }}>
                {v.tags.map(t => <span key={t} className="chip" style={{ background: 'rgba(255,255,255,0.18)', color: '#fff', fontSize: 12, backdropFilter: 'blur(6px)' }}>{t}</span>)}
              </div>
            </div>
            <div className="hide-on-mobile" style={{ position: 'relative', zIndex: 2 }}>
              <PlaceholderTile kind="pin" accent="#fff" label={v.barrio.toUpperCase()}/>
            </div>
          </Scene>
        </div>
      </section>

      {/* Details + Map */}
      <section className="section" style={{ paddingTop: 24 }}>
        <div className="container grid-cols-2" style={{ gap: 24 }}>
          <div className="card-cream">
            <div className="display" style={{ fontSize: 26, marginBottom: 16 }}>Detalles del lugar</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <div className="row gap-12" style={{ alignItems: 'flex-start' }}>
                <span style={{ width: 32, height: 32, borderRadius: 10, background: v.accent + '33', color: v.accent, display: 'grid', placeItems: 'center', flexShrink: 0 }}><Icon name="pin" size={14}/></span>
                <div>
                  <div className="mono" style={{ color: 'var(--muted)' }}>Ubicación</div>
                  <div style={{ fontWeight: 600 }}>{v.address}</div>
                </div>
              </div>
              <div className="row gap-12" style={{ alignItems: 'flex-start' }}>
                <span style={{ width: 32, height: 32, borderRadius: 10, background: v.accent + '33', color: v.accent, display: 'grid', placeItems: 'center', flexShrink: 0 }}><Icon name="check-circle" size={14}/></span>
                <div>
                  <div className="mono" style={{ color: 'var(--muted)' }}>Características</div>
                  <ul style={{ margin: '4px 0 0', paddingLeft: 18, fontSize: 14, lineHeight: 1.6 }}>
                    {v.features.map(f => <li key={f}>{f}</li>)}
                  </ul>
                </div>
              </div>
              <div className="row gap-12" style={{ alignItems: 'flex-start' }}>
                <span style={{ width: 32, height: 32, borderRadius: 10, background: v.accent + '33', color: v.accent, display: 'grid', placeItems: 'center', flexShrink: 0 }}><Icon name="users" size={14}/></span>
                <div>
                  <div className="mono" style={{ color: 'var(--muted)' }}>Cupo</div>
                  <div style={{ fontWeight: 600 }}>Limitado · reservación recomendada</div>
                </div>
              </div>
            </div>
          </div>

          {/* Map card */}
          <a href={`https://maps.google.com/?q=${encodeURIComponent(v.address + ', San Luis Potosí')}`} target="_blank" rel="noreferrer"
             className="map-card"
             style={{ 
               background: 'linear-gradient(135deg, #c4dccd 0%, #8fb89e 100%)', 
               borderRadius: 28, 
               padding: 32, 
               position: 'relative', 
               overflow: 'hidden', 
               minHeight: 320, 
               color: '#fff', 
               display: 'flex', 
               flexDirection: 'column', 
               justifyContent: 'space-between',
               textDecoration: 'none',
               transition: 'transform 0.2s ease, box-shadow 0.2s ease'
             }}>
            {/* mock streets */}
            <svg style={{ position: 'absolute', inset: 0, opacity: 0.3 }} viewBox="0 0 400 300" preserveAspectRatio="none">
              <path d="M0 80 L 400 60" stroke="#fff" strokeWidth="2" fill="none"/>
              <path d="M0 150 L 400 140" stroke="#fff" strokeWidth="2" fill="none"/>
              <path d="M0 230 L 400 220" stroke="#fff" strokeWidth="2" fill="none"/>
              <path d="M80 0 L 100 300" stroke="#fff" strokeWidth="2" fill="none"/>
              <path d="M200 0 L 220 300" stroke="#fff" strokeWidth="2" fill="none"/>
              <path d="M320 0 L 300 300" stroke="#fff" strokeWidth="2" fill="none"/>
            </svg>
            <div style={{ position: 'relative', zIndex: 2 }}>
              <div className="mono" style={{ color: 'rgba(255,255,255,0.85)' }}>Encuéntranos</div>
              <div className="display" style={{ fontSize: 32, marginTop: 4 }}>{v.barrio}</div>
            </div>
            {/* pin */}
            <div style={{ position: 'absolute', top: '40%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 3 }}>
              <div style={{ width: 64, height: 64, borderRadius: '50% 50% 50% 0', background: v.accent, transform: 'rotate(-45deg)', boxShadow: '0 12px 24px rgba(0,0,0,0.25)', display: 'grid', placeItems: 'center', color: '#fff' }}>
                <span style={{ transform: 'rotate(45deg)' }}><Icon name="pin" size={22}/></span>
              </div>
            </div>
            <div className="row" style={{ position: 'relative', zIndex: 2, justifyContent: 'flex-end' }}>
              <div className="btn" style={{ background: '#fff', color: 'var(--ink)' }}>
                <Icon name="compass" size={16}/> Abrir en Google Maps
              </div>
            </div>
          </a>
        </div>
      </section>

      {/* Functions at this venue */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="row" style={{ alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 24, flexWrap: 'wrap', gap: 16 }}>
            <div>
              <div className="eyebrow">★ Programación en esta sede</div>
              <h3 className="display" style={{ fontSize: 36, margin: '8px 0 0' }}>Próximas funciones</h3>
            </div>
          </div>
          {events.length === 0 ? (
            <div className="card muted" style={{ textAlign: 'center', padding: 32 }}>Pronto anunciaremos funciones aquí.</div>
          ) : (
            <div className="grid-cols-auto">
              {events.map(e => <EventCard key={e.id} event={e} navigate={navigate}/>)}
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

window.SedesPage = SedesPage;
window.SedePage = SedePage;
