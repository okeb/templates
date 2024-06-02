import Body from "@/components/base/atoms/a.body"
import Title from "@/components/base/atoms/a.title"
import Accordion from "@/components/base/molecules/accordion"

const HomeFaq = () => {
  return (
    <section className="max-w-[770px] md:px-20 px-8 grid grid-cols-1 gap-y-3 py-20 mx-auto z-20">
      <Title className="text-center text-[2.3rem] py-2">Frequently asked questions</Title>
      <Body className="text-center mb-8 md:px-16 px-8">Everything you need to know about the product and billing.</Body>
      <Accordion question="À qui cela s'adresse t-il ?">
        A toutes personnes qui souhaite retrouver quelqu&apos;un. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic rem laborum voluptatem, consequuntur, possimus neque animi blanditiis repudiandae eos molestias deserunt perspiciatis? Doloribus delectus facere eligendi itaque blanditiis nostrum reprehenderit.
        <br/>
        A toutes personnes qui souhaite retrouver quelqu&apos;un. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic rem laborum voluptatem, consequuntur, possimus neque animi blanditiis repudiandae eos molestias deserunt perspiciatis? Doloribus delectus facere eligendi itaque blanditiis nostrum reprehenderi

      </Accordion>
      <Accordion question="Click to open this one and close others">
        A toutes personnes qui souhaite retrouver quelqu&apos;un.
      </Accordion>
      <Accordion question="Click to open this one and close others">
        A toutes personnes qui souhaite retrouver quelqu&apos;un.
      </Accordion>
      <Accordion question="Click to open this one and close others">
        A toutes personnes qui souhaite retrouver quelqu&apos;un.
      </Accordion>
    </section>
  )
}

export default HomeFaq