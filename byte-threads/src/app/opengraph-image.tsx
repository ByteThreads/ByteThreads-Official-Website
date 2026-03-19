import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'ByteThreads — Software, Crafted.';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0B0F17',
          position: 'relative',
        }}
      >
        {/* Decorative thread lines */}
        <svg
          width="1200"
          height="630"
          viewBox="0 0 1200 630"
          style={{ position: 'absolute', top: 0, left: 0 }}
        >
          <path
            d="M-50,200 C200,180 400,280 600,240 S900,150 1250,220"
            fill="none"
            stroke="#C8956C"
            strokeWidth="1"
            strokeOpacity="0.15"
          />
          <path
            d="M-50,400 C150,350 350,450 550,400 S800,300 1250,380"
            fill="none"
            stroke="#7A9E8E"
            strokeWidth="1"
            strokeOpacity="0.12"
          />
          <path
            d="M-50,500 C250,520 450,430 650,480 S850,550 1250,480"
            fill="none"
            stroke="#C8956C"
            strokeWidth="1"
            strokeOpacity="0.1"
          />
        </svg>

        {/* Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '24px',
          }}
        >
          <div
            style={{
              fontSize: '18px',
              letterSpacing: '0.3em',
              color: '#C8956C',
              textTransform: 'uppercase',
              fontFamily: 'sans-serif',
            }}
          >
            ByteThreads
          </div>
          <div
            style={{
              fontSize: '72px',
              color: '#F0EDE8',
              fontFamily: 'serif',
              lineHeight: 1.1,
              textAlign: 'center',
            }}
          >
            Software, crafted.
          </div>
          <div
            style={{
              fontSize: '22px',
              color: 'rgba(240, 237, 232, 0.5)',
              maxWidth: '700px',
              textAlign: 'center',
              lineHeight: 1.5,
              fontFamily: 'sans-serif',
            }}
          >
            .NET · iOS · Full-Stack Web · AI
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            position: 'absolute',
            bottom: '40px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <div
            style={{
              fontSize: '14px',
              color: '#C8956C',
              fontFamily: 'sans-serif',
            }}
          >
            bytethreadsllc.com
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
