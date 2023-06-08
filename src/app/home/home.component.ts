import { SelectService } from './../services/select.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  title: string = 'angular-test';
  mensaje: string = "";
  texto: string = "";
  objetoPadre: string = "";
  strings: string[] = ["hola", "mundo", "java", "typescript"];
  stringsHijo: string[] = [];
  color: string = "rojo";
  isActive: boolean = true;
  form!: FormGroup;
  emailsCopy: string[] = [];
  id: number = 1;
  isAdmin: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private adminService: AdminService,
    private selectService: SelectService
  ) { }

  ngOnInit(): void {
    this.form = this.initForm();
  }

  initForm(): FormGroup {
    return this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      optionPadre: [''],
      optionHijo: [''],
      emails: this.formBuilder.array([])
    })
  }
  
  findStringstHijo(): void {
    this.form.get('optionHijo')?.setValue('');
    this.stringsHijo = this.selectService.selectStrings(this.form.get('optionPadre')?.value);
  }

  get name(): FormControl {
    return this.form.get('name') as FormControl;
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
    this.router.navigate(['/brother'], { queryParams: { saludo: 'hola mundo' } })
  }

  changeRoleStatus(): void {
    this.adminService.changeRoleStatus()
    this.isAdmin = this.adminService.isAdmin;
  }

}
