import Footer from "@/components/share/footer";
import Navbar from "@/components/share/navbar";
import Starfield from 'react-starfield';
import HomeHero from "./home/hero/home-hero";
import HomeFeatures from "./home/features/home-features";
import HomeFaq from "./home/faq/home-faq";
import HomeTestimonials from './home/testimonials/home-testimonials';
import HomeContact from "./home/contact/home-contact";


export default function Home() {
  
  return (
    <main className="grid grid-cols-1 gap-y-3 overflow-x-hidden">
      {/* <Starfield
        starCount={300}
        starColor={[255, 255, 255]}
        speedFactor={0.02}
        backgroundColor="black"
      /> */}
      <Navbar />
      <HomeHero />
      {/* <HomeFeatures /> */}
      {/* <HomeFaq /> */}
      {/* <HomeTestimonials /> */}
      {/* <HomeContact /> */}
      <Footer />
    </main>
  );
}
