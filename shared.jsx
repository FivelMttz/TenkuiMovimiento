// Header, Footer, shared bits
const { useState, useEffect, useMemo, useRef } = React;

const Header = ({ route, navigate, openTickets }) => {
  const [open, setOpen] = useState(false);
  const links = [
    { to: 'inicio', label: 'Inicio' },
    { to: 'programa', label: 'Programación' },
    { to: 'sedes', label: 'Sedes' },
    { to: 'movimiento', label: 'El movimiento' },
    { to: 'boletos', label: 'Boletos' },
  ];
  const isActive = (to) => {
    if (to === 'inicio' && route.page === 'inicio') return true;
    if (to === 'programa' && (route.page === 'programa' || route.page === 'obra')) return true;
    if (to === 'sedes' && (route.page === 'sedes' || route.page === 'sede')) return true;
    return route.page === to;
  };

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <div className="brand" onClick={() => { navigate({ page: 'inicio' }); setOpen(false); }}>
          <span className="brand__mark">T</span>
          <span>tënkui<span style={{ color: 'var(--ink)', fontSize: 14, marginLeft: 6, opacity: 0.6 }}>2026</span></span>
        </div>

        <nav className={`nav ${open ? 'open' : ''}`}>
          {links.map(l => (
            <a key={l.to}
               className="nav__link"
               data-active={isActive(l.to)}
               onClick={() => { navigate({ page: l.to }); setOpen(false); }}>
              {l.label}
            </a>
          ))}
        </nav>

        <div className="header-cta">
          <button className="btn btn--primary btn--sm" onClick={openTickets}>
            <Icon name="ticket" size={16}/> Boletos
          </button>
          <button className="icon-btn menu-toggle" onClick={() => setOpen(!open)} aria-label="Menú">
            <Icon name={open ? 'x' : 'menu'} size={18}/>
          </button>
        </div>
      </div>
    </header>
  );
};

const Footer = ({ navigate }) => (
  <footer className="site-footer">
    <div className="container">
      <div className="footer-grid">
        <div>
          <h4 style={{ fontSize: 28, color: '#f4dca7' }}>Tënkui<span style={{ fontStyle: 'italic' }}> 2026</span></h4>
          <p style={{ opacity: 0.85, fontSize: 14, maxWidth: 320 }}>
            Movimiento autogestivo y multidisciplinario de arte para las infancias en San Luis Potosí.
            Del 29 de abril al 3 de mayo.
          </p>
          <div className="row gap-8" style={{ marginTop: 16 }}>
            <a className="icon-btn" style={{ background: 'rgba(255,255,255,0.06)', borderColor: 'rgba(255,255,255,0.14)', color: '#f4dca7' }}><Icon name="instagram" size={16}/></a>
            <a className="icon-btn" style={{ background: 'rgba(255,255,255,0.06)', borderColor: 'rgba(255,255,255,0.14)', color: '#f4dca7' }}><Icon name="facebook" size={16}/></a>
            <a className="icon-btn" style={{ background: 'rgba(255,255,255,0.06)', borderColor: 'rgba(255,255,255,0.14)', color: '#f4dca7' }}><Icon name="whatsapp" size={16}/></a>
          </div>
        </div>
        <div>
          <h4>Explorar</h4>
          <ul>
            <li><a onClick={() => navigate({ page: 'programa' })}>Programación</a></li>
            <li><a onClick={() => navigate({ page: 'sedes' })}>Sedes</a></li>
            <li><a onClick={() => navigate({ page: 'movimiento' })}>El movimiento</a></li>
            <li><a onClick={() => navigate({ page: 'boletos' })}>Boletos · Cooperación</a></li>
          </ul>
        </div>
        <div>
          <h4>Disciplinas</h4>
          <ul>
            <li>Artes Escénicas</li>
            <li>Literatura</li>
            <li>Música</li>
            <li>Artes Plásticas</li>
          </ul>
        </div>
        <div>
          <h4>Contacto</h4>
          <ul>
            <li>WhatsApp · {WHATSAPP_DISPLAY}</li>
            <li>San Luis Potosí, SLP</li>
            <li>hola@tenkui.mx</li>
            <li>Prensa · prensa@tenkui.mx</li>
          </ul>
        </div>
      </div>
      <div className="footer-bar">
        <span>© 2026 Tënkui · Movimiento de Arte para las Infancias</span>
        <span>Hecho con cariño en San Luis Potosí</span>
      </div>
    </div>
  </footer>
);

// Decorative venue/event placeholder block — used everywhere we'd otherwise need a photo
const PlaceholderTile = ({ kind = 'theatre', accent = '#a23a2a', label = '' }) => {
  return (
    <div className="placeholder-illo" style={{ aspectRatio: '4 / 3', background: `linear-gradient(135deg, ${accent}1a, ${accent}33)`, borderColor: `${accent}55` }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, color: accent }}>
        <Icon name={kind} size={26} stroke={1.6}/>
        <span style={{ letterSpacing: '0.2em' }}>{label}</span>
      </div>
    </div>
  );
};

// Themed scene blocks — used as hero imagery for events. SVG-based, child-book aesthetic.
const Scene = ({ scene = 'curtain', accent = '#a23a2a', photo, children, className = '', style = {} }) => {
  // photo prop kept for backwards compat but now ignored — illustrations render on their own,
  // posters/photos are placed as foreground content by the consumer.
  const scenes = {
    curtain: (
      <>
        <div className="curtain__bg"/>
        <div className="curtain__valance"/>
        <div className="curtain__sides"/>
        <div className="curtain__spotlight"/>
        <div className="dust"/>
      </>
    ),
    night: (
      <>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 30% 30%, #2c3a5e, #0e1426 70%)', zIndex: -2 }}/>
        <div style={{ position: 'absolute', top: '15%', left: '70%', width: 120, height: 120, borderRadius: '50%', background: 'radial-gradient(circle, #f5e6c0, #d9b878)', boxShadow: '0 0 80px rgba(245,230,192,0.4)', zIndex: -1 }}/>
        <div className="dust"/>
      </>
    ),
    forest: (
      <>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, #5a8a6e 0%, #3a5e4c 100%)', zIndex: -2 }}/>
        <svg style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '60%', zIndex: -1 }} viewBox="0 0 400 200" preserveAspectRatio="none">
          <path d="M0 200 L0 120 Q 50 70 100 110 Q 150 60 200 100 Q 250 50 300 90 Q 350 70 400 110 L 400 200 Z" fill="rgba(0,0,0,0.25)"/>
          <path d="M0 200 L0 150 Q 60 110 120 140 Q 180 100 240 130 Q 300 100 360 140 L 400 130 L 400 200 Z" fill="rgba(0,0,0,0.4)"/>
        </svg>
      </>
    ),
    paper: (
      <>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(160deg, #7e2a1d 0%, #4a1a12 100%)', backgroundImage: 'linear-gradient(160deg, #7e2a1d 0%, #4a1a12 100%), repeating-linear-gradient(45deg, rgba(255,220,180,0.06) 0 1px, transparent 1px 14px)', zIndex: -2 }}/>
        <svg style={{ position: 'absolute', right: -40, top: -40, opacity: 0.18, zIndex: -1 }} width="280" height="280" viewBox="0 0 100 100"><circle cx="50" cy="50" r="46" fill="none" stroke="#f2b544" strokeWidth="1.5" strokeDasharray="3 3"/><circle cx="50" cy="50" r="32" fill="none" stroke="#f2b544" strokeWidth="1.5"/></svg>
      </>
    ),
    drum: (
      <>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 50% 30%, #f2b544, #c87d14 100%)', zIndex: -2 }}/>
        <svg style={{ position: 'absolute', inset: 0, opacity: 0.16, zIndex: -1 }} viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice">
          {[...Array(6)].map((_, i) => (
            <circle key={i} cx="200" cy="150" r={30 + i * 28} fill="none" stroke="#fff" strokeWidth="1.5"/>
          ))}
        </svg>
      </>
    ),
    plum: (
      <>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, #a66bb0 0%, #5d3268 100%)', zIndex: -2 }}/>
        <div className="dust"/>
      </>
    ),
    indigo: (
      <>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, #6b8ad6 0%, #2c4380 100%)', zIndex: -2 }}/>
      </>
    ),
    cream: (
      <>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, #2c3a5e 0%, #1a2340 100%)', zIndex: -2 }}/>
        <div style={{ position: 'absolute', top: '20%', right: '15%', width: 90, height: 90, borderRadius: '50%', background: 'radial-gradient(circle, #f5e6c0, #d9b878)', boxShadow: '0 0 60px rgba(245,230,192,0.35)', zIndex: -1 }}/>
        <svg style={{ position: 'absolute', right: 16, bottom: 16, opacity: 0.22, zIndex: -1 }} width="160" height="160" viewBox="0 0 24 24" fill="none" stroke="#f4dca7" strokeWidth="1"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V3H6.5A2.5 2.5 0 0 0 4 5.5Z"/><path d="M4 19.5A2.5 2.5 0 0 0 6.5 22H20v-5"/></svg>
      </>
    ),
    soft: (
      <>
        <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(135deg, ${accent}, ${accent}aa)`, zIndex: -2 }}/>
      </>
    ),
  };

  return (
    <div className={`curtain ${className}`} style={{ position: 'relative', isolation: 'isolate', ...style }}>
      {scenes[scene] || scenes.curtain}
      {children}
    </div>
  );
};

const sceneFor = (event) => {
  const map = {
    'pipi-la-noche': 'curtain',
    'duanop': 'cream',
    'cuentacuentos-familias': 'paper',
    'la-raiz-del-nido': 'forest',
    'entre-libros-y-arrullos': 'paper',
    'transferencias-graficas': 'indigo',
    'fiesta-de-tambores': 'drum',
    'los-males-invisibles': 'plum',
    'fanzinoteka': 'cream',
  };
  return map[event.id] || 'curtain';
};

window.Header = Header;
window.Footer = Footer;
window.PlaceholderTile = PlaceholderTile;
window.Scene = Scene;
window.sceneFor = sceneFor;
