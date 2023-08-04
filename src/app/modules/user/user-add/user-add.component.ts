import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Toaster } from 'ngx-toast-notifications';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss']
})
export class UserAddComponent {
  name : any = null
  email : any = null                    
  password : any = null

  isLoading : any
  constructor(
    public userService:UserService,
    public Toaster:Toaster,
    public modal:NgbActiveModal,
  ){}

  ngOnInit(): void{
    this.isLoading= this.userService.isLoading$
  }

  store(){
    if(!this.name||!this.email||!this.password){
      this.Toaster.open({text:"All fields are required", caption:'VALIDATION', type:"danger"});
      return
    }
    let formData = new FormData();
    formData.append("name",this.name)
    formData.append("email",this.email)
    formData.append("password",this.password)

    let data ={
      name: this.name,
      age:41,
      email: this.email,
      password: this.password
    }

    this.userService.register(data).subscribe((resp:any)=>{
      console.log(resp)
    })
  }
}
