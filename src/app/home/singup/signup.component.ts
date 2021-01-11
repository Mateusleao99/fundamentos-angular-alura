import { Validators } from '@angular/forms';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from "@angular/core";
import { LowerCaseValidator } from 'src/app/shared/validators/lower-case.validator';

@Component({
  templateUrl:'./signup.componets.html'
})

export class SignUpComponent implements OnInit{

  signupForm: FormGroup;

  constructor(private formBuilder: FormBuilder ){}

  ngOnInit():void {
    this.signupForm = this.formBuilder.group({

      email:['',
        [
          Validators.required,
          Validators.email
        ]
      ],
      nomeCompleto: ['',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(40)
        ]
      ],
      usuario: ['',
        [
          Validators.required,
          LowerCaseValidator,
          Validators.minLength(2),
          Validators.maxLength(30)
        ]
      ],
      senha: ['',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(14)
        ]
      ]
    })
  }

}
