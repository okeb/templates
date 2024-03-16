import Avatar from "../atoms/a.avatar";

export default function CardTestimonial({
  title="",
  content="",
  children,
  image,
  name="",
  job=""
}:{
  title?: string,
  content?: string,
  children?: React.ReactNode,
  image: string,
  name?: string,
  job?: string,
}) {
  return (
    <div className="z-20 relative border dark:border-gray-100/15 border-slate-500/15 backdrop-blur-3xl rounded-xl p-6 px-7 pb-16 max-w-[420px] min-w-[410px]">
      <h3 className="font-semibold text-2xl tracking-tight dark:text-white/80 text-dark/40">{title}</h3>
      <div className="h-3"></div>
      <p className="text-sm">{content}{children}</p>
      <div className="h-3"></div>
      <div className="absolute bottom-6 left-6 flex items-center justify-start gap-x-2">
        <Avatar image={`${image}`} className="h-[40px] w-[40px] border-transparent"></Avatar>
        <div className="bottom-0">
          <h5 className="font-bold dark:text-white/80 text-dark/80 text-[0.777rem] tracking-tight">{name}</h5>
          <h6 className="text-[0.777rem] tracking-tight -mt-0.5">{job}</h6>
        </div>
      </div>
    </div>
  )
}