import Link from "next/link"
import Title from "../base/atoms/a.title"

const Footer = () => {
  return (
    <section className="z-20 right-0 left-0 bottom-0 border-t footer dark:border-white/10 border-dark/10 grid grid-cols-1 bg-white dark:bg-[#08070E]/10 backdrop-blur-[2px] mt-0">
      <div className="w-full">
        <div className="px-20 py-16">
          <Title className="text-xl text-dark dark:text-white">Complementarity</Title>
          <div className="h-4"></div>
          <p  className="opacity-60 text-base">The First Artificial Intelligence that finds <br/>Your Best Partner for everything</p>
          <div className="h-12"></div>
          <ul className="flex gap-x-6">
            <li className="font-bold text-gray-300 dark:hover:text-white hover:text-black"><a href="/">Get a touch</a></li>
            <li className="font-bold text-gray-300 dark:hover:text-white hover:text-black"><a href="/">Who we are</a></li>
            <li className="font-bold text-gray-300 dark:hover:text-white hover:text-black"><a href="/">Join waitlist</a></li>
          </ul>
        </div>

        <div className="border-t dark:border-white/10 border-dark/1 w-screen px-20 grid grid-cols-2 items-center py-8">
          <div className="flex items-center justify-start">
            <p className="opacity-60">&copy; 2024 Complementarity. All rights reserved.</p>
          </div>
          <div className="flex items-center justify-end">
            <p className="opacity-60">Design by <span className="dark:hover:text-white"><Link href="/">Olivier Bile</Link></span></p>
          </div>
        </div>
      </div>
    </section>        
  )
}

export default Footer