import Avatar from "@/components/base/atoms/a.avatar"
import Body from "@/components/base/atoms/a.body"
import Button from "@/components/base/atoms/a.button"
import Input from "@/components/base/atoms/a.input"
import Title from "@/components/base/atoms/a.title"

const HomeHero = () => {
  return (
    <section className="bg-image-hero bg-no-repeat bg-cover">
      <div className="max-w-[670px] mx-auto py-44">
        <div className="flex justify-center mb-6 w-full bg-transparent -m-1">
          <div className="rainbowBorder flex p-[0.07rem]">
            <div className="dark:bg-black bg-white py-0 px-4 text-sm dark:text-white text-gray-900 rounded-full flex items-center content-center">
              <p>introducing new human connectionss through IA</p>
            </div>
          </div>
        </div>
        <Title className="text-center mb-4">Your First AI that finds Your Best Partner</Title>
        <Body className="text-center mb-8 md:px-16 px-8">Find your business partner, soulmate, or companion with the power of AI. Join the waitlist today</Body>
        <div className="md:flex gap-2 justify-center px-8">
          <Input type="email" placeholder="Enter email" className="mb-4"></Input>
          <Button>Join waitlist</Button>
        </div>
          <div className="avatar-group -space-x-3 mt-4 rtl:space-x-reverse flex justify-center content-center items-center">
            <Avatar image="https://images.pexels.com/photos/8058673/pexels-photo-8058673.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"></Avatar>
            <Avatar image="https://images.pexels.com/photos/3760735/pexels-photo-3760735.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"></Avatar>
            <Avatar image="https://images.pexels.com/photos/16887308/pexels-photo-16887308/free-photo-of-femme-main-visage-portrait.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"></Avatar>
            <Avatar image="https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=800"></Avatar>
            <Avatar image="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=800"></Avatar>
            <div>
              <p className="ml-4 baseline text-sm">2.7k+ others joined</p>
            </div>
          </div>
      </div>
    </section>
  )
}

export default HomeHero