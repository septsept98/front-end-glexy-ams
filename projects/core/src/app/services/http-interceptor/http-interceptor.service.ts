import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '@services/auth/auth.service';
import { Observable, tap } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {

  constructor(private toastr: ToastrService, private authService:AuthService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    const token:string|undefined = this.authService.getToken()
    const newReq = req.clone({setHeaders:{Authorization:`Bearer ${token}`}})
    return next.handle(newReq).pipe(tap({
      next : (succes: any) =>{
        let data: HttpResponse<any> = succes
        if(data.body && data.body.msg){

          this.toastr.success(data.body.msg, 'Success')
          console.log(succes)

        }
        
        console.log('request complete')
      },
      error :(err) =>{
        let errorMessage :HttpErrorResponse=err
        this.toastr.error(errorMessage.error.msg, 'Error')
      }
    }))
  }
}
