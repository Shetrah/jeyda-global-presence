/**
 * RainDroplets — animated CSS water droplets overlay.
 * Renders N droplets with randomised position, size, fall-speed and delay.
 * Each droplet is a translucent oval with a specular highlight, mimicking a
 * real dew droplet catching light.  Zero JS animation — 100% CSS keyframes.
 */

interface DropletConfig {
  id: number;
  left: number;     // % from left
  size: number;     // px diameter
  duration: number; // s fall time
  delay: number;    // s start delay
  opacity: number;  // 0–1
  blur: number;     // px — far-away drops are blurrier
}

// Seeded-ish deterministic list so SSR & hydration match
function generateDroplets(count: number): DropletConfig[] {
  const drops: DropletConfig[] = [];
  for (let i = 0; i < count; i++) {
    // Use trigonometry on index to spread values naturally without Math.random()
    const t = (i / count) * Math.PI * 2;
    drops.push({
      id: i,
      left:     Math.round(((Math.sin(t * 3.7 + 1.1) + 1) / 2) * 100),
      size:     4 + Math.round(((Math.sin(t * 2.3 + 0.5) + 1) / 2) * 14),
      duration: 4 + ((Math.sin(t * 1.9 + 2.0) + 1) / 2) * 8,
      delay:    -((Math.sin(t * 4.1 + 0.3) + 1) / 2) * 12,
      opacity:  0.18 + ((Math.sin(t * 3.3 + 1.7) + 1) / 2) * 0.45,
      blur:     Math.round(((Math.sin(t * 2.7 + 0.9) + 1) / 2) * 2),
    });
  }
  return drops;
}

const droplets = generateDroplets(42);

export default function RainDroplets({ className = "" }: { className?: string }) {
  return (
    <div
      className={`rain-droplets-container ${className}`}
      aria-hidden="true"
    >
      {droplets.map((d) => (
        <span
          key={d.id}
          className="rain-drop"
          style={{
            left:              `${d.left}%`,
            width:             `${d.size}px`,
            height:            `${d.size * 1.35}px`,
            animationDuration: `${d.duration}s`,
            animationDelay:    `${d.delay}s`,
            opacity:           d.opacity,
            filter:            d.blur > 0 ? `blur(${d.blur}px)` : undefined,
          }}
        />
      ))}
    </div>
  );
}
