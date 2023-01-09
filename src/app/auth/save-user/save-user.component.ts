import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { iUser } from 'src/app/models/user';
import { isEmpty } from 'rxjs';
import SignaturePad from "signature_pad";

@Component({
  selector: 'app-save-user',
  templateUrl: './save-user.component.html',
  styleUrls: ['./save-user.component.css']
})

export class SaveUserComponent implements OnInit{
  constructor(private authService: AuthService, private router: Router){
  
  }
  @ViewChild("canvas", { static: true })
  canvas!: ElementRef;
  sig!: SignaturePad;

  ngOnInit() {
    this.sig = new SignaturePad(this.canvas.nativeElement);

  }

  onSaveUser(form: any):void{
    const data = this.sig.toDataURL();
    console.log(data);

    if(data.length > 0 && form.value.name != "" && 
      form.value.dateBirth != ""  &&
      form.value.email != ""  &&
      form.value.tel != "" ){
        form.value.sign = data;
      this.authService.saveUser(form.value).subscribe(res=>{
        console.log(res);
        if(res){
          alert('Datos guardados con exito.')
        }else{
          alert('Ha ocurrido un error...')
        }
        form.reset();

      })
    }
    else{
      alert('Favor de capturar todos los datos');
    }
  }
}
