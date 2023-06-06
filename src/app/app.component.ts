import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title: string = 'angular-test';
  mensaje: string = "";
  texto: string = "";
  objetoPadre: string = "";
  strings: string[] = ["hola", "mundo", "java", "typescript"];
  color: string = "rojo";
  isActive: boolean = true;
  form!: FormGroup;
  emailsCopy: string[] = [];
  id: number = 1;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form = this.initForm();
  }

  initForm(): FormGroup {
    return this.formBuilder.group({
      name: ['', Validators.required],
      emails: this.formBuilder.array([])
    })
  }

  get emails(): FormArray {
    console.log((this.form.get('emails') as FormArray).value)
    this.emailsCopy = (this.form.get('emails') as FormArray).value;
    return this.form.get('emails') as FormArray;
  }

  addEmailOnChange(event: any) {
    this.emails.push(this.formBuilder.control(event.target.value));
    (this.form.get('emails') as FormArray).valueChanges.subscribe((valueChanged) => console.log("valueChanged = " + valueChanged));
  }
  
  addEmailOnClick(email: string) {
    this.emails.push(this.formBuilder.control(email));
  }

  changeActive() {
    this.isActive = !this.isActive;
  }

  showEmmiter(evento: string) {
    this.mensaje = evento;
    console.log(evento)
  }

  goParams(): void {
    this.router.navigate(['/brother', this.strings]);
  }

  goQueryParams(): void {
    this.router.navigate(['/brother'], {queryParams: {saludo: 'hola mundo'}})
  }

}
