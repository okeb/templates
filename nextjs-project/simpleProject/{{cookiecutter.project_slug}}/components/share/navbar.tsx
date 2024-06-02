"use client"

import * as React from "react"
import Link from "next/link"
import { useSelectedLayoutSegment } from "next/navigation"
import { MainNavItem } from "types"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"
import { MobileNav } from "@/components/share/mobile-nav"
import { ThemeToggle } from '@/components/theme-toggle';
import { Button } from "@/components/ui/button"
// import Image from "next/image"

interface MainNavProps {
  items?: MainNavItem[]
  children?: React.ReactNode
}

export default function NavBar({ 
  items=[
        {
          href: "/",
          disabled: false,
          title: 'Accueil',
        },{
          href: "/contact",
          disabled: false,
          title: 'Contact',
        },{
          href: "/blog",
          disabled: false,
          title: 'Blog',
        },
  ], 
  children 
}: MainNavProps) {
  const segment = useSelectedLayoutSegment()
  const [showMobileMenu, setShowMobileMenu] = React.useState<boolean>(false)

  // const session = authenticate;
  const user = false;
  
  return (
    <header className="m-navbar">
      <button
        className="flex items-center space-x-2 md:hidden"
        onClick={() => setShowMobileMenu(!showMobileMenu)}
      >
        {showMobileMenu ? <Icons.close /> : <Icons.pizza />}
        <span className="font-bold">Menu</span>
      </button>
      {showMobileMenu && items && (
        <MobileNav items={items}>{children}</MobileNav>
      )}
      <div className="flex justify-between items-center w-full">
        <div className="flex gap-7">
          <Link href="/" className="hidden items-center space-x-2 md:flex">
            <Icons.pizza />
            <span className="hidden font-bold sm:inline-block">
              {siteConfig.name}
            </span>
            {/* <Image src={graphiniteLogo } alt='logo de graphinite' width={77} height={100} /> */}
          </Link>
          {items?.length ? (
            <nav className="hidden gap-7 md:flex">
              {items?.map((item, index) => (
                <Link
                  key={index}
                  href={item.disabled ? "#" : item.href}
                  className={cn(
                    "flex items-center text-lg font-base opacity-50 transition-all hover:text-foreground/80 hover:opacity-100 sm:text-sm",
                    item.href.startsWith(`/${segment}`)
                      ? "text-foreground"
                      : "text-foreground/60",
                    item.disabled && "cursor-not-allowed opacity-80"
                  )}
                >
                  {item.title}
                </Link>
              ))}
            </nav>
          ) : null}

        </div>
        <div className="flex justify-end items-center">
            <div className="flex justify-end items-center px-4 gap-x-4 list-none">
              {!user && (
                <>
                  <li>
                    <Link href='/register' className='text-ct-dark-600'>
                      <Button type="submit" className="w-fit">Register</Button>
                    </Link>
                  </li>
                  <li>
                    <Link href='/login' className='text-ct-dark-600'>
                      <Button type="submit" className="w-fit">Login</Button>
                    </Link>
                  </li>
                </>
              )}
              {/* {user && (
                <form action={logoutAction} className='flex'>
                  <li>
                    <Link href='/client-side' className='text-ct-dark-600'>
                      Client
                    </Link>
                  </li>
                  <li className='ml-4'>
                    <Link href='/profile' className='text-ct-dark-600'>
                      Profile
                    </Link>
                  </li>
                  <li className='ml-4'>
                    <button>Logout</button>
                  </li>
                </form>
              )} */}
            </div>
            <ThemeToggle />
        </div>
      </div>
    </header>
  )
}