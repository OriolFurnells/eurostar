import { ObjetoService } from '../../service/objeto.service';
import { UploadService } from '../../service/upload.service';
import { Component, OnInit } from '@angular/core';
import { Global } from '../../service/global';
import { Objeto } from '../../modelo/objeto';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  providers: [ObjetoService, UploadService]
})
export class FormComponent implements OnInit {

  public objeto: Objeto;
  public ciudadOrigen: string;
  public ciudadDestino: string;
  public diaSalida: string;
  public diaLlegada: string;
  public passengers: number;
  public filesToUpload: Array<File>;
  
  constructor(
    private _objectoService: ObjetoService,
    private _uploadService: UploadService,
   
  ) {
    this.objeto = new Objeto ("","","","","","05/05/2005","05/05/2005",0);
  }


  ngOnInit() {

  }

  onSubmit(form){
        
    this._objectoService.getProjects(this.objeto).subscribe(
      response => {
          if(response.objeto){
              
              // Subir la imagen
              if(this.filesToUpload){
                  this._uploadService.makeFileRequest(Global.url+"upload"+response.objeto._id, [], this.filesToUpload, '')
                  .then((result:any) => {

                      this.objeto = result.objeto;

                      
                      form.reset();
                  });
              }else{
                 
                  form.reset();
              }
              
          }
      },
      error => {
          console.log(<any>error);
      }
  );
}
}