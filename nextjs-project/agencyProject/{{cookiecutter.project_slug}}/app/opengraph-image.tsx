import { ImageResponse } from 'next/og'

// Route segment config
export const runtime = 'edge'

// Image metadata
export const alt = 'Home The human Link'
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

// Image generation
export default async function Image() {
  const interSemiBold = fetch(
    new URL('./fonts/Inter-SemiBold.ttf', import.meta.url)
  ).then((res) => res.arrayBuffer())

  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
      {% raw %}
        style={{
          fontSize: 128,
          background: 'white',
          width: '100%',
          height: '100%',
          borderRadius: '25px',
          overflow: 'hidden',
          letterSpacing: '-7',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        {% endraw %}
      >
        The Human Link
      </div>
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported opengraph-image
      // size config to also set the ImageResponse's width and height.
      ...size,
      fonts: [
        {
          name: 'Inter',
          data: await interSemiBold,
          style: 'normal',
          weight: 400,
        },
      ],
    }
  )
}