

export default function Body({
  modifier,
  className,
  children,
}:{
  modifier?: string,
  className?: string,
  children?:React.ReactNode 
}) {
  return (
    <p className={`a-body ${modifier} ${className}`}>{children}</p>
  )
}