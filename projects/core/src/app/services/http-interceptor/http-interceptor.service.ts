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
    this.loadingService.onLoading(false)
    return next.handle(newReq).pipe(tap({
      next : (succes: any) =>{
        let data: HttpResponse<any> = succes
        if(data.body && data.body.msg){
          this.toastr.success(data.body.msg, 'Success')
          console.log(succes)
        }
        this.loadingService.onLoading(true)
        console.log('request complete')
      },
      error :(err) =>{
        let errorMessage :HttpErrorResponse=err
        this.toastr.error(errorMessage.error.msg, 'Error')
        this.loadingService.onLoading(true)
      }
    }))
  }
}
