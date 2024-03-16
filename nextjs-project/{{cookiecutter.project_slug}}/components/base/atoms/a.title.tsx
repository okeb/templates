export default function Title({
  modifier,
  className,
  children,
}:{
  modifier?: string,
  className?: string,
  children?:React.ReactNode 
}) {
  return (
    <h1 className={`a-h1 ${modifier} ${className}`}>{children}</h1>
  )
}