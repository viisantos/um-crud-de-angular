import { ProductsService } from './../products.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {

  form: FormGroup; //Criar um objeto FormGroup para o associar com o formulário no template.

  constructor(private formbuilder: FormBuilder, private location: Location, private service: ProductsService) {
    this.form = this.formbuilder.group({
      name: [null, Validators.required] //esta linha consiste na instanciação de um formControl(um campo do formulário). É uma sintaxe mais amigável para se fazer isso.)
   });
   }

  ngOnInit(): void { }

  onSubmit(): void {}

  onCancel(): void {}

  isFieldRequired(): void {}
}
