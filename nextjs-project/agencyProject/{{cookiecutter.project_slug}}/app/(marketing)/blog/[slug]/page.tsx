import { allPosts, allAuthors, Post, Author } from '@/.contentlayer/generated'
import { notFound } from 'next/navigation'
import { Mdx } from '../../../../components/Mdx';
import { Metadata } from "next"
import Image from 'next/image';
import Navbar from '@/components/share/navbar';
import Footer from '@/components/share/footer';
import { Button } from "@/components/ui/button";
import { absoluteUrl, formatDate } from '@/lib/utils';
import Link from 'next/link';

interface PageProps {
  params: {
    slug: string
  }
}


async function getPostFromParams(params: any) {
  const post = allPosts.find((post) => post._raw.flattenedPath.split("/").slice(1).join("/") === params.slug)
  if(!post) notFound()
  return post
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const post = await getPostFromParams(params)

  if (!post) {
    return {}
  }

  const url = "http://localhost:3000"

  const ogUrl = new URL(`${url}/api/og`)
  ogUrl.searchParams.set("heading", post.title)
  ogUrl.searchParams.set("type", "Le Blog")
  ogUrl.searchParams.set("mode", "dark")

  return {
    title: post.title,
    description: post.description,
    authors: post.authors.map((author) => ({
      name: author,
    })),
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      url: absoluteUrl(post.slug),
      images: [
        {
          url: ogUrl.toString(),
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [ogUrl.toString()],
    },
  }
}


const page = async ({ params }: PageProps) => {
  const post = await getPostFromParams(params)
  const authors = post.authors.map((author) => allAuthors.find(({ slug }) => slug === `/authors/${author}`))
  
  return (
    <>
      <Navbar></Navbar>
      <main className="md:pt-56 pt-24">
        <div className="lg:px-56 md:px-24 px-8 pb-7">
          {post.tags?.map(
            (tag) => <div className="px-4 py-1 mr-2 rounded-lg backdrop-blur-lg border border-slate-200 inline-block">{tag}</div>
          )}
        </div>
        <div className="lg:px-56 md:px-24 mx-1 px-8 opacity-50">Publié le {formatDate(post.date)}</div>
        <h1 className="font-bold text-6xl lg:px-56 md:px-24 px-8">{ post.title }</h1>

        <div className="lg:px-56 md:px-24 px-8">
          {authors?.length ? (
            <div className="mt-4 grid grid-cols-1 gap-y-6">
              {authors.map((author) =>
                author ? (
                  <Link
                    key={author.email}
                    href={`https://twitter.com/${author.email}`}
                    className="flex items-center space-x-2 text-sm"
                  >
                    <Image
                      src='https://images.pexels.com/photos/20522435/pexels-photo-20522435/free-photo-of-rhume-froid-neige-bois.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                      alt={author.pseudo}
                      width={42}
                      height={42}
                      className="rounded-full bg-white w-[42px] h-[42px]"
                    />
                    <div className="flex-1 text-left leading-tight">
                      <p className="font-medium">{author.first_name} {author.last_name.toUpperCase()}</p>
                      <p className="text-[12px] text-muted-foreground opacity-50">
                        {author.email}
                      </p>
                    </div>
                  </Link>
                ) : null
              )}
            </div>
          ) : null}
        </div>
        
        <div className="flex justify-center items-center my-10 lg:mx-56 md:mx-20 mx-8 rounded-lg overflow-hidden">
          <Image 
            src={post.image} 
            alt={'image de cover de l\'article '+ post.title} 
            width={300}     
            height={200}
            className="w-full"
          />
        </div>

        <div className="lg:mx-56 md:mx-20 p-8 py-12">
          <Mdx code={post.body.code} />
          <br />
          <br />
          <Link href="/blog">
            <Button type='button'>Retour</Button>
          </Link>
        </div>
      </main>
      <Footer></Footer>
    </>
  )
}

export default page