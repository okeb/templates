import { allPosts } from '@/.contentlayer/generated'
import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = '{{ cookiecutter.project_name}}'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'
{% raw %}
export default async function Image({ params }: { params: { slug: string } }) {
  const post = allPosts.find((post) => post._raw.flattenedPath.split("/").slice(1).join("/") === params.slug)
{% endraw %}
  return new ImageResponse(
    (
      <div
      {% raw %}
        style={{
          fontSize: 48,
          background: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      {% endraw %}
      >
        {post ? post.title : "{{ cookiecutter.project_name }}"}
      </div>
    ),
    {
      ...size,
    }
  )
}