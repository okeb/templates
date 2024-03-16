export default function Accordion({
  className,
  question,
  children,
}:{
  className?: string,
  question: string,
  children: React.ReactNode
}) {
  return (
    <div className={`m-accordion collapse collapse-plus ${className}`}>
      <input type="radio" name="my-accordion-3" /> 
      <div className="m-accordion__question collapse-title">
        {question}
      </div>
      <div className="m-accordion__response collapse-content"> 
        <p>{children}</p>
      </div>
    </div>
  )
}