import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  figuras=[
    {
      img:"../assets/img/111.jpg",
      opc1:"perro",
      opc2:"gato",
      opc3:"chivista",
      opc4:"gallon",
      correct:"gato"
    },
    {
      img:"../assets/img/222.jpg",
      opc1:"pato",
      opc2:"gato",
      opc3:"perico",
      opc4:"gallon",
      correct:"gallon"
    }
  ]

  
  constructor(public toastController: ToastController, private router: Router) { }
  respuesta=false;
  

  async validate(resp, num){
    console.log(resp+" "+num);

    if(resp==this.figuras[num].correct){
      this.respuesta=true;
      const toast = await this.toastController.create({
        message: 'Es correcto',
        duration: 2000
        
      });
      toast.present();
    }else{
      const toast = await this.toastController.create({
        message: 'fallaste campeon',
        duration: 2000
      });
      toast.present();
    }
  
  }
  async register(){
    if(this.respuesta==true){
      const toast = await this.toastController.create({
        message: 'Registro completo',
        duration: 2000
        
      });
      toast.present();
      
      this.router.navigate(['/restaurant']);
    }else{
      const toast = await this.toastController.create({
        message: 'no validaste que eres humano',
        duration: 2000
        
      });
      toast.present();
    }
  }

 

  ngOnInit() {
  }

}
