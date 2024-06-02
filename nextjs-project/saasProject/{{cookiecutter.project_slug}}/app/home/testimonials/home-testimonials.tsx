import Avatar from "@/components/base/atoms/a.avatar"
import Body from "@/components/base/atoms/a.body"
import Title from "@/components/base/atoms/a.title"
import CardTestimonial from "@/components/base/molecules/card-testimonial"

const HomeTestimonials = () => {
  return (
    <section className="w-screen py-20 relative">
      <div className="circlePosition w-[30px] h-[400px] bg-white rounded-full absolute z-1 -top-[100px] left-1/2 translate-x-[90%] translate-y-[50%] blur-[60px] opacity-50 rotate-12"></div>
      <div className="circlePosition w-[50px] h-[600px] bg-white rounded-full absolute z-1 -top-1/4 left-1/2 translate-x-[50%] translate-y-[50%] blur-[100px] opacity-40 rotate-45"></div>
      <div className="flex justify-center">
        <Title className="text-center text-[2.3rem] py-2 mx-auto align-middle">What our user say ?</Title>
      </div>
      <Body className="text-center mb-12 md:px-16 px-8">Hear the words of appreciation from our users</Body>

      <div className="-ml-[350px] flex flex-nowrap gap-5 overflow-hidden">
        <CardTestimonial
        title="Amazing!"
        content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus maxime esse in adipisci consequatur placeat odio, ratione excepturi laborum fuga."
        name="Habib Mady"
        job="Data Scientist"
        image="https://images.pexels.com/photos/16887308/pexels-photo-16887308/free-photo-of-femme-main-visage-portrait.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
        ></CardTestimonial>

        <CardTestimonial
        title="Juste incroyable"
        content="Trouver mon partenaire de vie idéal ici a été comme concevoir le plus beau rêve. Nous construisons notre futur ensemble, pièce par pièce, avec amour et détermination."
        name="Helène Cornier"
        job="Etudiante en commerce"
        image="https://images.pexels.com/photos/1845534/pexels-photo-1845534.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        ></CardTestimonial>

        <CardTestimonial
        title="C'est tellement simple!"
        content="Cette plateforme m'a permis de trouver un ami avec qui je partage ma passion pour le design d'expérience virtuelle. Nous repoussons les limites de la réalité ensemble"
        name="Peter Oyiguema"
        job="UX Designer"
        image="https://images.pexels.com/photos/5792673/pexels-photo-5792673.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        ></CardTestimonial>

        <CardTestimonial
        title="C'est prometteur"
        content="Rencontrer mon partenaire sur cette plateforme a été comme mélanger les ingrédients parfaits pour créer la recette du succès. On s'apprête à révolutionner la cuisine."
        name="Samanta Garcia"
        job="CEO de Food360"
        image="https://images.pexels.com/photos/2814529/pexels-photo-2814529.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        ></CardTestimonial>

        <CardTestimonial
        title="Amazing!"
        content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus maxime esse in adipisci consequatur placeat odio, ratione excepturi laborum fuga."
        name="Habib Mady"
        job="Data Scientist"
        image="https://images.pexels.com/photos/16887308/pexels-photo-16887308/free-photo-of-femme-main-visage-portrait.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
        ></CardTestimonial>
      </div>    

      <div className="-ml-[150px] flex flex-nowrap gap-5 overflow-hidden mt-5">
        <CardTestimonial
        title="Amazing!"
        content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus maxime esse in adipisci consequatur placeat odio, ratione excepturi laborum fuga."
        name="Habib Mady"
        job="Data Scientist"
        image="https://images.pexels.com/photos/16887308/pexels-photo-16887308/free-photo-of-femme-main-visage-portrait.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
        ></CardTestimonial>

        <CardTestimonial
        title="L&apos;IA change tout"
        content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus maxime esse in adipisci consequatur placeat odio, ratione excepturi laborum fuga."
        name="Jody Huntman"
        job="Influenceuse"
        image="https://images.pexels.com/photos/325686/pexels-photo-325686.jpeg"
        ></CardTestimonial>

        <CardTestimonial
        title="Le matching le plus concluant"
        content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus maxime esse in adipisci consequatur placeat odio, ratione excepturi laborum fuga."
        name="Harry Call"
        job="Data Scientist"
        image="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
        ></CardTestimonial>

        <CardTestimonial
        title="Une réelle solution à la solitude"
        content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus maxime esse in adipisci consequatur placeat odio, ratione excepturi laborum fuga."
        name="Habib Mady"
        job="Data Scientist"
        image="https://images.pexels.com/photos/16887308/pexels-photo-16887308/free-photo-of-femme-main-visage-portrait.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
        ></CardTestimonial>

        <CardTestimonial
        title="Amazing!"
        content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus maxime esse in adipisci consequatur placeat odio, ratione excepturi laborum fuga."
        name="Habib Mady"
        job="Data Scientist"
        image="https://images.pexels.com/photos/16887308/pexels-photo-16887308/free-photo-of-femme-main-visage-portrait.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
        ></CardTestimonial>
      </div>
    </section>
  )
}

export default HomeTestimonials