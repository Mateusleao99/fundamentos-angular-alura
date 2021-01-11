import { AbstractControl } from "@angular/forms";

export function LowerCaseValidator(control: AbstractControl){

  //se não tiver em branco e se não segue minha expressão regular que é "/^[a-z0-9_\-]+$/" retorna a funcao se não retorna nulo
  if(control.value.trim() && !/^[a-z0-9_\-]+$/.test(control.value)){
    return { funcaoLowerCase: true}
  }
  return null;
}
