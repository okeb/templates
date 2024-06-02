import Image from "next/image"

export default function Avatar({
  className="",
  modifier="",
  image,
  size=25,
  alt='image description'
}:{
  className?: string,
  modifier?: string,
  image: string,
  size?: number,
  alt?: string
}) {
  return (
    <div className={`a-avatar ${modifier} ${className}`}>
      <div className={`w-[${size}px] h-[${size}px] rounded-full`}>
        <Image src={image} alt={alt} width={`${size}`} height={`${size}`}>
        </Image>
      </div>
    </div>
  )
}