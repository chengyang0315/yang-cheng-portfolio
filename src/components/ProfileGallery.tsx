import React, { useState } from 'react';

const photos = [
  'At the business school', 'School paper-cutting memory', 'Sydney at night',
  'A childhood celebration', 'A snowy childhood day', 'On the playground swing',
  'A sunny afternoon with a dog', 'At the Shanghai Masters', 'Traditional dress portrait',
  'An afternoon by the Shanghai waterfront', 'Among the flowers', 'Lanterns and a bouquet',
];
const positions = [
  [-220,-120,-12], [-136,-248,8], [12,-267,-5], [157,-228,12],
  [240,-88,7], [230,75,-9], [143,224,11], [-3,266,-7],
  [-153,222,-12], [-243,68,8], [-126,30,-8], [116,-12,10],
];

export function ProfileGallery() {
  const [pinned, setPinned] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const open = pinned || (hovered && !dismissed);
  return (
    <div className="profile-gallery" data-open={open} data-dismissed={dismissed}
      onPointerEnter={e => { if (e.pointerType === 'mouse') { setHovered(true); setDismissed(false); } }}
      onPointerLeave={() => { setHovered(false); setDismissed(false); }}
      onKeyDown={e => { if (e.key === 'Escape') { setPinned(false); setDismissed(true); } }}>
      <div className="lifestyle-cluster" id="lifestyle-cluster" aria-hidden={!open}>
        {photos.map((alt, i) => <div className="lifestyle-photo" key={alt} style={{
          '--x': `${positions[i][0]}px`, '--y': `${positions[i][1]}px`,
          '--rotation': `${positions[i][2]}deg`, '--delay': `${i * 18}ms`,
        } as React.CSSProperties}>
          <img src={`/gallery/photo_${i+1}.webp`} alt={alt} width={110} height={145} decoding="async" />
        </div>)}
      </div>
      <button className="gallery-cover" type="button" aria-expanded={open} aria-controls="lifestyle-cluster"
        aria-label={open ? 'Collapse photo gallery' : 'Explore all 12 personal photos'}
        onClick={() => { if (open) { setPinned(false); setDismissed(true); } else { setPinned(true); setDismissed(false); } }}>
        <img src="/portrait.jpg" alt="Kami — Yang Cheng" width={110} height={145} fetchPriority="high" />
      </button>
      <p className="gallery-hint">{open ? '12 MOMENTS · CLICK TO CLOSE' : 'HOVER OR TAP · A LITTLE MORE OF ME'}</p>
    </div>
  );
}
