import React, { SelectHTMLAttributes, ReactNode, useRef, useEffect } from 'react';
import { useField } from '@unform/core'
import { Content } from './styles';

interface SelectProps {
  name: string;
  label: string;
  children: ReactNode;
}

type Props = SelectHTMLAttributes<HTMLSelectElement> & SelectProps

const Select: React.FC<Props> = ({ name, label, children, ...rest }) => {

  const selectRef = useRef<HTMLSelectElement>(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: selectRef,
      getValue: ref => {
        return ref.current?.value
      },
      setValue: (ref, newValue) => {
        ref.current.value = newValue
      },
      clearValue: ref => {
        ref.current.value = ''
      }
    })
  }, [fieldName, registerField])

  return (
    <div>
      <label htmlFor={fieldName}>{label}</label>

      <Content
        id={fieldName}
        ref={selectRef}
        defaultValue={defaultValue}
        {...rest}
      >
        {children}
      </Content>

      {error && <span className="error">{error}</span>}
    </div>
  )
}

export default Select;