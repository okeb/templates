// import Avatar from "@/components/base/atoms/a.avatar"
import Body from "@/components/base/atoms/a.body"
// import Button from "@/components/base/atoms/a.button"
// import Input from "@/components/base/atoms/a.input"
import Title from "@/components/base/atoms/a.title"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { TypographyH1 } from "@/components/ui/typographyH1"


const HomeHero = () => {
  return (
    <section className="bg-image-hero bg-no-repeat bg-cover">
      <div className="max-w-[670px] mx-auto py-44">
        <div className="flex justify-center mb-6 w-full bg-transparent -m-1">
          <div className="rainbowBorder flex p-[0.07rem]">
            <div className="dark:bg-black bg-white py-0 px-4 text-sm dark:text-white text-gray-900 rounded-full flex items-center content-center">
              <p>Introducing new human connections through IA</p>
            </div>
          </div>
        </div>
        <div className="flex">
          <TypographyH1 className="text-center mb-6">Your First AI that finds Your Best Partner</TypographyH1>
        </div>
        <Body className="text-center mb-8 md:px-16 px-8">Find your business partner, soulmate, or companion with the power of AI. Join the waitlist today</Body>
        <div className="md:flex gap-2 justify-center px-8">
          <div className="md:flex w-full max-w-sm items-center md:space-x-2 md:space-y-0 space-y-2 mx-auto">
            <Input type="email" placeholder="Email" />
            <Button type="submit" className="w-full md:w-fit">join the waitlist</Button>
          </div>
        </div>
          <div className="avatar-group -space-x-3 mt-4 flex justify-center content-center items-center">
            <Avatar>
              <AvatarImage src="https://images.pexels.com/photos/8058673/pexels-photo-8058673.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarImage src="https://images.pexels.com/photos/3760735/pexels-photo-3760735.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" />
              <AvatarFallback>AD</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarImage src="https://images.pexels.com/photos/16887308/pexels-photo-16887308/free-photo-of-femme-main-visage-portrait.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" />
              <AvatarFallback>ZK</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarImage src="https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=800" />
              <AvatarFallback>CP</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarImage src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=800" />
              <AvatarFallback>NP</AvatarFallback>
            </Avatar>
            <div>
              <p className="ml-4 baseline text-sm">2.7k+ others joined</p>
            </div>
          </div>
      </div>
    </section>
  )
}

export default HomeHero