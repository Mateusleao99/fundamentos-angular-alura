import { Router } from '@angular/router';
import { SignUpService } from './signup.service';
import { NewUser } from './new-user';
import { UserNotTakenValidatorService } from './user-not-taken.validator.service';
import { Validators } from '@angular/forms';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from "@angular/core";
import { LowerCaseValidator } from 'src/app/shared/validators/lower-case.validator';

@Component({
  templateUrl:'./signup.componets.html'
})

export class SignUpComponent implements OnInit{

  signupForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userNotTakenValidatorService: UserNotTakenValidatorService,
    private signUpService: SignUpService,
    private router: Router
    ){}

  ngOnInit():void {


    this.signupForm = this.formBuilder.group({

      email:['',
        [
          Validators.required,
          Validators.email
        ]
      ],
      fullName: ['',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(40)
        ]
      ],
      userName: ['',
        //Validador sincrono
        [
          Validators.required,
          LowerCaseValidator,
          Validators.minLength(2),
          Validators.maxLength(30)
        ],
        //Validador assincrono
        this.userNotTakenValidatorService.checkUserNameTaken()
      ],
      password: ['',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(14)
        ]
      ]
    })
  }

  signup(){

    const newUser: NewUser = this.signupForm.getRawValue() as NewUser

    this.signUpService
     .signup(newUser)
     .subscribe(
       () => this.router.navigate(['']),
       err => console.log(err)
      );
  }

}
