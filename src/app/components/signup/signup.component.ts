import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  //identifiant du form
  signupForm!: FormGroup;
  path!: string;
  errorMsg!: string;
  photo: any;
  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.path = this.router.url;
    this.signupForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.email, Validators.required]],
      tel: [
        '',
        [Validators.required, Validators.minLength(8), Validators.maxLength(8)],
      ],
      pwd: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(10),
        ],
      ],
      confirmpwd: [''],
    });
  }
  signup() {
    // console.log("here user object",this.signupForm.value);
    console.log('here path', this.path);

    if (this.path == '/signupAdmin') {
      this.signupForm.value.role = 'admin';
    } else {
      this.signupForm.value.role = 'client';
    }
    console.log('here user', this.signupForm.value);

    this.userService
      .addUser(this.signupForm.value, this.photo)
      .subscribe((response) => {
        console.log('here response after signup', response);
        if (response.isSaved) {
          // navigate to login
          this.router.navigate(['/signin']);
        } else {
          //display error
          this.errorMsg = response.msg;
        }
      });
  }

  selectFile(event: any) {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement && inputElement.files && inputElement.files.length > 0) {
      this.photo = inputElement.files[0];
    }
  }
}
