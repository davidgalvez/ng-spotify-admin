import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Toaster } from 'ngx-toast-notifications';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss']
})
export class UserAddComponent {
  name : any = null
  email : any = null                    
  password : any = null
  constructor(
    public Toaster:Toaster,
    public modal:NgbActiveModal,
  ){}

  store(){
    if(!this.name||!this.email||!this.password){
      this.Toaster.open({text:"All fields are required", caption:'VALIDATION', type:"danger"});
      return
    }
    let formData = new FormData();
    formData.append("name",this.name)
    formData.append("email",this.email)
    formData.append("password",this.password)
  }
}
