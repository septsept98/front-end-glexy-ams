import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '@services/auth/auth.service';
import { Observable, tap } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { LoadingService } from '@services/loading-service/loading.service';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {

  constructor(private toastr: ToastrService, private authService:AuthService, private loadingService : LoadingService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    const token:string|undefined = this.authService.getToken()
    const newReq = req.clone({setHeaders:{Authorization:`Bearer ${token}`}})
    this.loadingService.onLoading(true)
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
        this.loadingService.onLoading(false)
        let errorMessage :HttpErrorResponse=err

        if(errorMessage.error.msg){
          this.toastr.error(errorMessage.error.msg, 'Error')
        } else {
          this.toastr.error(errorMessage.error.message, 'Error')
        }
      },
      complete : () => {
        this.loadingService.onLoading(false)


      }
    }))
  }
}
