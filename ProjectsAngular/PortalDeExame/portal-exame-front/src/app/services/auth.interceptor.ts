
import { LoginService } from 'src/app/services/login.service';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";


const TOKEN_HEADER = 'Authorization'; 

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private loginService: LoginService){

    }


    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        //adicionar o jwt q estar no locastorege no request
        const token = this.loginService.getToken();
        let authReq = req;
        if(token!=null){
            authReq=authReq.clone({setHeaders: {Authorization: `Bearer ${token}`}})
        }
        return next.handle(authReq);
    }
    
}

export const authInterceptorProviders = [
    {
        provide: HTTP_INTERCEPTORS,
        useClass: AuthInterceptor,
        multi: true
    }
]