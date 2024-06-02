import * as React from 'react';
import { Poppins as FontSans } from 'next/font/google';

const fontSans =  FontSans({
  weight: '500',
  subsets: ["latin"]
})

export function TypographyH1({
  children, 
  className
}:{
  children:React.ReactNode, 
  className?:string
}) {
  return (
    <h1 className={`a-h1 ${fontSans.className} ${className}`}>
      {children}
    </h1>
  )
}