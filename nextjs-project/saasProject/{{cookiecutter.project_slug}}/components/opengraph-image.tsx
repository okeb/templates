import { allPosts } from '@/.contentlayer/generated'
import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'The Human Link'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image({ params }: { params: { slug: string } }) {
  const post = allPosts.find((post) => post._raw.flattenedPath.split("/").slice(1).join("/") === params.slug)
  
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 48,
          background: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {post ? post.title : "the Human Link"}
      </div>
    ),
    {
      ...size,
    }
  )
}