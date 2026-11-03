import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

export const alt = 'studio tonton · websites, branding en motion in Hasselt';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function OG() {
  const svg = await readFile(join(process.cwd(), 'public/tt-logo.svg'), 'utf8');
  const logo = `data:image/svg+xml;base64,${Buffer.from(svg.replace('fill="currentColor"', 'fill="#161616"')).toString('base64')}`;
  return new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', background: '#fafaf9', padding: 72, color: '#161616' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logo} width={180} height={61} alt="" />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <div style={{ fontSize: 104, letterSpacing: -5, lineHeight: 0.95 }}>Design dat klanten binnenbrengt.</div>
          <div style={{ fontSize: 30, color: '#4d4d4d' }}>Websites · branding · motion · AI — designstudio uit Hasselt</div>
        </div>
      </div>
    ),
    size,
  );
}
