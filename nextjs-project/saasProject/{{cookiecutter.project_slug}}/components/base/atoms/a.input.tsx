type ModifierOptions = "-left" | "-middle" | "-center" | "-right" | "-full"

import { generateRandomId } from "@/components/share/toolbox"
import { HTMLInputTypeAttribute } from "react";

export default function Input({
  type = "text",
  placeholder,
  optional=false,
  label,
  modifier,
  className
}:{
  label?: String,
  placeholder?: String,
  optional?: Boolean,
  type?: HTMLInputTypeAttribute,
  modifier?: ModifierOptions,
  className?: String,
}) {
  if (type === "text" || type === "email") {
    const randomId = generateRandomId(8);
    return (
      <div className={`a-input ${modifier} ${className}`}>
        {label ? (
          <label className="a-input__label" htmlFor={`input_${randomId}`}>{label}</label>
        ) : ''}
        <input type={type} id={`input_${randomId}`} className="my-auto mr-2" placeholder={`${placeholder}`} required={!optional}/>
      </div>
    )
  }
}