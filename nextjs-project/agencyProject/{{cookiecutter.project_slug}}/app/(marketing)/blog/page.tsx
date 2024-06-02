import Link from "next/link";
import { allPosts} from "@/.contentlayer/generated";
import Navbar from '../../../components/share/navbar';
import Footer from '../../../components/share/footer';
// import Button from "@/components/base/atoms/a.button";
import { Button } from "@/components/ui/button";
export default function Blog() {
    return (
      <div>
        <Navbar></Navbar>
          <div className="py-12 lg:px-44 px-8">
            <h1 className="my-20 text-center font-bold text-5xl">blog</h1>
            {/* <TypographyH1>Blog</TypographyH1> */}
            <div className="gap-y-10">
              {allPosts.map(post => {
                return (
                  <div className="mb-4">
                    <Link href={post.slug} className="font-bold hover:underline text-2xl">{post.title}</Link>
                    <h3>{new Date(post.date).toLocaleDateString("fr-FR") }</h3>
                  </div>
                )
              })}
            </div>
            <br />
            <Link href="/">
              <Button type="button">Retour à l'accueil</Button>
            </Link>
          </div>
        <Footer></Footer>
      </div>
    )
}
