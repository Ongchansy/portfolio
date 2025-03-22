import Image from 'next/image';
import { ImageResponse } from 'next/og';
import { URL } from 'url';

export const runtime = 'edge'; // Ensure it runs on the Edge runtime


export async function GET() {
    const imageData = await fetch(
        new URL("../../../../public/assets/images/image.png", import.meta.url)
    ).then((res) => res.arrayBuffer())
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 40,
          color: 'black',
          background: 'white',
          width: '100%',
          height: '100%',
          display: 'flex', // Add flex for centering
          flexDirection: 'column',
          padding: '50px 200px',
          textAlign: 'center',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <img src={imageData} alt='profile' />
      </div>
    ),
    {
      width: 1200,
      height: 630, // Standard Open Graph size
    }
  );
}
