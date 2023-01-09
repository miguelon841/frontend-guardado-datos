import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import { Data, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { iUser } from 'src/app/models/user';
import SignaturePad from "signature_pad";

@Component({
  selector: 'app-get-user',
  templateUrl: './get-user.component.html',
  styleUrls: ['./get-user.component.css']
})
export class GetUserComponent implements OnInit{
  name:string = '';
  dateBirth:string = '1900/01/01';
  email:string = '';
  tel: string = '';
  sign: string = '';
  showMyContainer: boolean = false;
  constructor(private authService: AuthService, private router: Router){

  }
  @ViewChild("canvas", { static: true })
  canvas!: ElementRef;
  sig!: SignaturePad;

  ngOnInit() {
    this.sig = new SignaturePad(this.canvas.nativeElement);    
  }

  onGetUser(form: { value: any; }):void{
    this.showMyContainer = false;
    this.name = '';
    this.dateBirth = '';
    this.email = '';
    this.tel = '';
    this.sign = '';
    this.authService.getUser(form.value).pipe().subscribe(res => {
      try{      
        if(res){
          let result:{
              name:string,
              dateBirth:Date,
              tel:string,
              sign:string,
              email:string
          }
          result = res;
          let date = result.dateBirth.toString().substring(0,10);
          let datePart = date.split('-');
          let dateFormat = datePart[2] + '-' + datePart[1] + '-' + datePart[0];
          this.name = result.name;
          this.dateBirth = dateFormat;
          this.email = result.email;
          this.tel = result.tel;
          this.sign = result.sign;
          this.showMyContainer = true;            
        }
        else{
          alert('No se encontraron coincidencias. ')
        }
      }
        catch(err){
          console.log(err);
          alert('No se encontraron coincidencias. ')
        }
    })
  }

}