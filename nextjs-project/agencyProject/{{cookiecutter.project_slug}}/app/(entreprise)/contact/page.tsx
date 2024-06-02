import React from 'react'
import Title from '../../../components/base/atoms/a.title';
import { Form } from './form/contact-form';
import { TypographyH1 } from '@/components/ui/typographyH1';

function Contact() {
  return (
    <div className="p-44">
      <TypographyH1>Contact</TypographyH1>
      <div className="grid lg:grid-cols-2 grid-cols-1 md:container">
        <Form />
        <div></div>
      </div>
      
    </div>
  )
}

export default Contact