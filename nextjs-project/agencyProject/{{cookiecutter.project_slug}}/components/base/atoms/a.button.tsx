type ModifierOptions = "-left" | "-middle" | "-center" | "-right" | "-full"
type TypeOptions = "button" | "submit" | "checkbox" | "-right"

import { generateRandomId } from "@/components/share/toolbox";
import Link from "next/link";

export default function Button({
  type= 'button',
  label = type,
  modifier,
  href,
  className,
  children
}: {
  label?: String,
  type?: String,
  modifier?: ModifierOptions,
  className?: String,
  href?: String,
  children?:React.ReactNode 
}) {
    if (type == "button") {
      return (
        <div className={`a-button ${modifier} ${className}`}>
          <button type="submit">{children ? children : label }</button>
        </div>
      )
    } else if (type == "submit") {
      return (
        <div className={`a-button ${modifier} ${className}`}>
          <button type="submit" value="Submit">{children ? children : label }</button>
        </div>
      )
    } else if (type == "checkbox") {
      const randomId = generateRandomId(8);
      return (
        <div className={`a-button ${modifier} ${className}`}>
          <input type="checkbox" id={`checkbox_${randomId}`} aria-label="Checkbox" className="my-auto mr-2 hidden"/>
          <label htmlFor={`checkbox_${randomId}`}>{label}</label>
        </div>
      )
    } else {
      const randomId = generateRandomId(8);
      return (
        <Link href={href}>
          <div className={`a-button ${modifier} ${className}`}>
            <button>{children ? children : label }</button>
          </div>
        </Link>
      )
    }
}