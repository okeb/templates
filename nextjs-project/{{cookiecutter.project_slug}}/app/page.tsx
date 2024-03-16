import Image from "next/image";
import Button from '../components/base/atoms/a.button';
import Input from '../components/base/atoms/a.input';
import Body from "@/components/base/atoms/a.body";
import Title from "@/components/base/atoms/a.title";
import Avatar from "@/components/base/atoms/a.avatar";
import Footer from "@/components/share/footer";
import Navbar from "@/components/share/navbar";
import HomeHero from "./home/hero/home-hero";
import HomeFeatures from "./home/features/home-features";
import HomeFaq from "./home/faq/home-faq";
import HomeTestimonials from './home/testimonials/home-testimonials';
import Starfield from 'react-starfield';
import HomeContact from "./home/contact/home-contact";

export default function Home() {
  
  return (
    <main className="grid grid-cols-1 gap-y-3 overflow-x-hidden">
      <Starfield
        starCount={300}
        starColor={[255, 255, 255]}
        speedFactor={0.02}
        backgroundColor="black"
      />
      <Navbar></Navbar>
      <HomeHero></HomeHero>
      <HomeFeatures></HomeFeatures>
      <HomeFaq></HomeFaq>
      <HomeTestimonials></HomeTestimonials>
      <HomeContact></HomeContact>
      <Footer></Footer>
    </main>
  );
}
