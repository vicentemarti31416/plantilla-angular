import { SelectService } from './../services/select.service';
import { Component, OnInit, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from '../services/admin.service';
import { every } from 'rxjs/operators';

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
  templateOptions: string[] = ["uno", "dos", "tres"];
  templateOption = { name: "" };
  color: string = "rojo";
  isActive: boolean = true;
  form!: FormGroup;
  emailsCopy: string[] = [];
  id: number = 1;
  isAdmin: boolean = false;
  foods = [
    { id: 1, name: "morcillas", selected: false },
    { id: 2, name: "chorizos", selected: false },
    { id: 3, name: "longanizas", selected: false }
  ]
  selectAll: boolean = false;
  foodsArray!: FormArray | null;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private adminService: AdminService,
    private selectService: SelectService
  ) { }

  ngOnInit(): void {
    this.form = this.initForm();
    this.foodsArray = this.form.get('foods') as FormArray | null;
    this.updateString(); // Descomentar para probar el select del formulario
  }

  initForm(): FormGroup {
    const foodsArray = this.foods.map(food => 
      this.formBuilder.group({
        id: food.id,
        name: food.name,
        selected: food.selected
      })
    );

    return this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      optionPadre: [''],
      optionHijo: [''],
      emails: this.formBuilder.array([]),
      foods: this.formBuilder.control([]) //this.formBuilder.array(foodsArray)
    })
  }

  onChangeFood(event: any): void {
    const id: number = event.target.value;
    const index = id -1;
    if (index === -1) {
      this.foods = this.foods.map((food) => { 
        return {...food, selected: this.selectAll};
      });
    } else {
      this.foods[index].selected = !this.foods[index].selected;
      this.foods.every((food) => food.selected) ? this.selectAll = true : this.selectAll = false;
    }
    this.form.get('foods')?.setValue(this.foods);
    console.log((this.form.get('foods') as FormArray).value);
    console.log(this.form.value)
  }

  findStringstHijo(): void {
    this.form.get('optionHijo')?.setValue('');
    this.stringsHijo = this.selectService.selectStrings(this.form.get('optionPadre')?.value);
  }

  // En este método simulamos obtener un objeto de la base de datos para que el select  
  // del formulario marque la opción que tiene el objeto guardado en la base de datos
  updateString(): void {
    const objectDataBase = { name: "", optionPadre: "hola", optionHijo: "", emails: [] };
    // Así sería en los formularios reactivos
    this.form.get('optionPadre')?.setValue(objectDataBase.optionPadre);
    this.findStringstHijo();
    // Así sería con los formularios basados en plantillas
    const templateOptionDataBase = { name: "uno" }
    this.templateOption = templateOptionDataBase;
  }

  compareStrings(obj1: any, obj2: any): boolean {
    if (obj1 === undefined && obj2 === undefined) {
      return true;
    }
    return (obj1 === null || obj2 === null || obj1 === undefined || obj2 === undefined) ? false : obj1.name === obj2.name;
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
