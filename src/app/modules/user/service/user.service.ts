import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, finalize } from 'rxjs';
import { AuthService } from '../../auth';
import { URL_SERVICIOS } from 'src/app/config/config';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  isLoading$: Observable<boolean>
  isLoadingSubject: BehaviorSubject<boolean>

  constructor(
    private http: HttpClient,
    public authservice: AuthService
  ){
    this.isLoadingSubject = new BehaviorSubject<boolean>(false)
    this.isLoading$ = this.isLoadingSubject.asObservable()    
   }

   register(data:any){
    this.isLoadingSubject.next(true)
    let headers = new HttpHeaders({'Authorization':'Bearer '+this.authservice.token})
    let URL = URL_SERVICIOS+"/auth/register"
    return this.http.post(URL,data).pipe(
      finalize(()=> this.isLoadingSubject.next(false))
    )
   }
}
