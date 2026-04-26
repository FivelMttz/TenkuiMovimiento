// Icons — simple, hand-drawn feel. Inline SVG.
const Icon = ({ name, size = 18, stroke = 1.8, ...rest }) => {
  const s = size;
  const sw = stroke;
  const props = { width: s, height: s, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: sw, strokeLinecap: 'round', strokeLinejoin: 'round', ...rest };
  switch (name) {
    case 'arrow-right':
      return <svg {...props}><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></svg>;
    case 'arrow-left':
      return <svg {...props}><path d="M19 12H5"/><path d="m11 18-6-6 6-6"/></svg>;
    case 'arrow-up-right':
      return <svg {...props}><path d="M7 17 17 7"/><path d="M8 7h9v9"/></svg>;
    case 'calendar':
      return <svg {...props}><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 9h18"/><path d="M8 3v4"/><path d="M16 3v4"/></svg>;
    case 'clock':
      return <svg {...props}><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>;
    case 'pin':
      return <svg {...props}><path d="M20 10c0 5.5-8 11-8 11s-8-5.5-8-11a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>;
    case 'ticket':
      return <svg {...props}><path d="M3 8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v2a2 2 0 0 0 0 4v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 0 0-4V8Z"/><path d="M13 6v12" strokeDasharray="2 2"/></svg>;
    case 'users':
      return <svg {...props}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>;
    case 'user':
      return <svg {...props}><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>;
    case 'pen':
      return <svg {...props}><path d="m17 3 4 4-12 12H5v-4Z"/><path d="m14 6 4 4"/></svg>;
    case 'music':
      return <svg {...props}><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>;
    case 'hand':
      return <svg {...props}><path d="M18 11V6a2 2 0 0 0-4 0v5"/><path d="M14 10V4a2 2 0 0 0-4 0v6"/><path d="M10 10.5V6a2 2 0 0 0-4 0v8"/><path d="M18 8a2 2 0 0 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"/></svg>;
    case 'spark':
      return <svg {...props}><path d="M12 3v4"/><path d="M12 17v4"/><path d="M3 12h4"/><path d="M17 12h4"/><path d="m5.6 5.6 2.8 2.8"/><path d="m15.6 15.6 2.8 2.8"/><path d="m5.6 18.4 2.8-2.8"/><path d="m15.6 8.4 2.8-2.8"/></svg>;
    case 'group':
      return <svg {...props}><circle cx="9" cy="8" r="3"/><circle cx="17" cy="9" r="2.5"/><path d="M3 20a6 6 0 0 1 12 0"/><path d="M14 17a4 4 0 0 1 7 3"/></svg>;
    case 'book':
      return <svg {...props}><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V3H6.5A2.5 2.5 0 0 0 4 5.5Z"/><path d="M4 19.5A2.5 2.5 0 0 0 6.5 22H20v-5"/></svg>;
    case 'masks':
      return <svg {...props}><path d="M8 4c-2 0-4 1.5-4 5s2 9 6 9 4-3 4-3"/><path d="M16 4c2 0 4 1.5 4 5s-2 9-6 9c-1.5 0-2.5-.6-3-1.4"/><circle cx="7" cy="10" r=".6" fill="currentColor"/><circle cx="10" cy="10" r=".6" fill="currentColor"/><circle cx="15" cy="11" r=".6" fill="currentColor"/><circle cx="18" cy="11" r=".6" fill="currentColor"/></svg>;
    case 'palette':
      return <svg {...props}><circle cx="13.5" cy="6.5" r="1" fill="currentColor"/><circle cx="17.5" cy="10.5" r="1" fill="currentColor"/><circle cx="8.5" cy="7.5" r="1" fill="currentColor"/><circle cx="6.5" cy="12.5" r="1" fill="currentColor"/><path d="M12 22a10 10 0 1 1 0-20c5.5 0 10 4 10 9 0 3-2 4-4 4h-2a2 2 0 0 0-2 2c0 1 1 2 1 3a2 2 0 0 1-3 2Z"/></svg>;
    case 'drum':
      return <svg {...props}><ellipse cx="12" cy="6" rx="8" ry="3"/><path d="M4 6v9c0 1.7 3.6 3 8 3s8-1.3 8-3V6"/><path d="M9 9 5 4"/><path d="m15 9 4-5"/></svg>;
    case 'sparkles':
      return <svg {...props}><path d="m12 3 1.6 4.4L18 9l-4.4 1.6L12 15l-1.6-4.4L6 9l4.4-1.6Z"/><path d="M19 14v4"/><path d="M21 16h-4"/><path d="M5 17v3"/><path d="M6.5 18.5h-3"/></svg>;
    case 'whatsapp':
      return <svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor" {...rest}><path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.2s-.8.9-.9 1.1c-.2.2-.3.2-.6.1-1.7-.8-2.9-1.5-4-3.4-.3-.5.3-.5.8-1.6.1-.2 0-.4 0-.5 0-.2-.7-1.7-1-2.3-.3-.6-.6-.5-.7-.5h-.6c-.2 0-.5.1-.8.4s-1 1-1 2.5.8 2.6 1 2.7c.1.2 1.9 2.9 4.6 4.1 1.7.7 2.4.8 3.2.7.5-.1 1.7-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.6-.3ZM12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.5 1.4 5L2 22l5.1-1.4c1.5.8 3.2 1.3 4.9 1.3 5.5 0 10-4.5 10-10S17.5 2 12 2Zm0 18.3c-1.6 0-3.1-.4-4.4-1.2l-.3-.2-3.2.9.9-3.1-.2-.3a8.2 8.2 0 0 1-1.3-4.4c0-4.6 3.7-8.3 8.3-8.3s8.3 3.7 8.3 8.3-3.6 8.3-8.1 8.3Z"/></svg>;
    case 'check':
      return <svg {...props}><path d="m5 12 5 5L20 7"/></svg>;
    case 'x':
      return <svg {...props}><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>;
    case 'menu':
      return <svg {...props}><path d="M4 7h16"/><path d="M4 12h16"/><path d="M4 17h16"/></svg>;
    case 'search':
      return <svg {...props}><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></svg>;
    case 'share':
      return <svg {...props}><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><path d="m16 6-4-4-4 4"/><path d="M12 2v13"/></svg>;
    case 'heart':
      return <svg {...props}><path d="M19 14c1.5-1.5 3-3.4 3-5.5A5.5 5.5 0 0 0 12 5a5.5 5.5 0 0 0-10 3.5c0 2.1 1.5 4 3 5.5l7 7Z"/></svg>;
    case 'leaf':
      return <svg {...props}><path d="M11 20A7 7 0 0 1 4 13c0-5 4-9 11-9 0 7-4 11-9 11"/><path d="M2 22c4-2 8-6 11-12"/></svg>;
    case 'check-circle':
      return <svg {...props}><circle cx="12" cy="12" r="9"/><path d="m9 12 2 2 4-4"/></svg>;
    case 'compass':
      return <svg {...props}><circle cx="12" cy="12" r="9"/><path d="m16 8-2 6-6 2 2-6Z"/></svg>;
    case 'megaphone':
      return <svg {...props}><path d="M3 11v3a1 1 0 0 0 1 1h3l4 4V6L7 10H4a1 1 0 0 0-1 1Z"/><path d="M14 7s2 2 2 5-2 5-2 5"/><path d="M18 4s4 3 4 8-4 8-4 8"/></svg>;
    case 'snow':
      return <svg {...props}><path d="M12 2v20"/><path d="m20 7-16 10"/><path d="m20 17-16-10"/><path d="m12 6 3-2"/><path d="m12 6-3-2"/><path d="m12 18 3 2"/><path d="m12 18-3 2"/></svg>;
    case 'stroller':
      return <svg {...props}><circle cx="7" cy="20" r="2"/><circle cx="17" cy="20" r="2"/><path d="M3 4h2l3 8h10"/><path d="M18 12c0-4-2-7-6-7"/><path d="M12 5v7"/></svg>;
    case 'coffee':
      return <svg {...props}><path d="M4 8h12v6a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4Z"/><path d="M16 10h2a3 3 0 0 1 0 6h-2"/><path d="M7 4v2"/><path d="M11 4v2"/></svg>;
    case 'star':
      return <svg {...props}><path d="m12 3 2.7 5.5 6 .9-4.4 4.2 1 6L12 17l-5.4 2.8 1-6-4.3-4.2 6-.9Z"/></svg>;
    case 'sun':
      return <svg {...props}><circle cx="12" cy="12" r="4"/><path d="M12 3v2"/><path d="M12 19v2"/><path d="m5 5 1.5 1.5"/><path d="m17.5 17.5 1.5 1.5"/><path d="M3 12h2"/><path d="M19 12h2"/><path d="m5 19 1.5-1.5"/><path d="m17.5 6.5 1.5-1.5"/></svg>;
    case 'instagram':
      return <svg {...props}><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>;
    case 'facebook':
      return <svg {...props}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3Z"/></svg>;
    default:
      return <svg {...props}><circle cx="12" cy="12" r="9"/></svg>;
  }
};

window.Icon = Icon;
