import React, { InputHTMLAttributes, useEffect, useRef } from 'react'
import { useField } from '@unform/core';
import { Content } from './styles';

interface CheckboxProps {
  name: string
  label?: string
  value?: string
}

type Props = InputHTMLAttributes<HTMLInputElement> & CheckboxProps

const Checkbox: React.FC<Props> = ({ name, value, label, ...rest }) => {
  const inputRef = useRef(null)
  const { fieldName, defaultValue, registerField, error } = useField(name)
  const defaultChecked = defaultValue === value

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef,
      getValue: ref => {
        return ref.current.checked
      },
      clearValue: ref => {
        ref.current.checked = defaultChecked
      },
      setValue: (ref, value) => {
        ref.current.checked = value
      },
    })
  }, [defaultValue, fieldName, registerField, defaultChecked])

  return (
    <Content>
      <label htmlFor={fieldName} key={fieldName}>
        {label}
      </label>

      <input
        defaultChecked={defaultChecked}
        ref={inputRef}
        value={value}
        type="checkbox"
        id={fieldName}
        {...rest}
      />

      {error && <span>{error}</span>}
    </Content>
  )
}

export default Checkbox;