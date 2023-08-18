import React from 'react'
import { Controller } from 'react-hook-form'
import { ErrorText, IconContainer, InputContainer,InputText} from './style'

const Input = ({leftIcon, name, control,erroMessage, ...rest}) => {
  return (
    <>
      <InputContainer>
          {leftIcon ? (<IconContainer>{leftIcon}</IconContainer> ) : null }
          <Controller 
            name={name}
            control={control}
            rules={{ required: true}}
            render={( {field} ) => <InputText {...field} {...rest}/> }
          />

          
      </InputContainer>
      {erroMessage ? <ErrorText>{erroMessage}</ErrorText> : null}
    </>
  )
}

export default  Input 