export function validateEmptyAndLength3(value){
  if(!value){
    return '*Este campo é obrigatório'
  }

  if(value.length < 3){
    return "*O valor deve ter no mínimo três caracteres"
  }

  return true
}

export function validateEmptyEmail(value){
  if(!value){
    return '*Este campo é obrigatório'
  }

  const isValid = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i.test(value)

  if(!isValid){
    return '*Este campo precisa ser um e-mail'
  }

  return true
}
