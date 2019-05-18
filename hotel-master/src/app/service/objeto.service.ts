import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Objeto} from '../modelo/objeto';
import {Global} from './global';



@Injectable()
export class ObjetoService{
    public url:string;

    constructor(
        private _http: HttpClient
    ){
        this.url= Global.url;
    }

    testService(){
        return ' Probando el servicio de Angular';
    }

    getProjects(id): Observable<any>{
        let headers = new HttpHeaders().set('Content-Type', 'applicatoin/json');
        
        return this._http.get(this.url + 'objeto', {headers:headers});
    }

    postprojects(objeto): Observable<any>{
        let params = JSON.stringify(Objeto);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.post(this.url+'objeto/'+ objeto._id, params, {headers: headers});
    }
}
