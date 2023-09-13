import React from 'react'
import classes from './Input.module.css'

const Input = ({
  id,
  label,
  inputType,
  type,
  placeholder,
  value,
  options,
  changed,
}) => {
  let inputElement = null

  switch (inputType) {
    case 'input':
      inputElement = (
        <input
          className={classes.inputelement}
          type={type}
          placeholder={placeholder}
          onChange={(event) => changed(event , id)}
        />
      )
      break
    case 'textarea':
      inputElement = (
        <textarea
          className={classes.inputelement}
          type={type}
          placeholder={placeholder}
          onChange={(event) => changed(event , id)}
        />
      )
      break
    case 'select':
      inputElement = (
        <select
          className={classes.inputelement}
          value={value}
          onChange={(event) => changed(event , id)}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.displayValue}
            </option>
          ))}
        </select>
      )
      break
    default:
      inputElement = (
        <input
          className={classes.inputelement}
          type={type}
          placeholder={placeholder}
          onChange={(event) => changed(event , id)}
        />
      )
      break
  }

  return (
    <div className={classes.input}>
      <label className={classes.label}>{label}</label>
      {inputElement}
    </div>
  )
}

export default Input
