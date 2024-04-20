import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private router: Router
  ) { }
  preguntas: string[] = [
    "¿Cree que las personas con bajos ingresos tienen menos oportunidades de éxito en la vida que las personas con altos ingresos?",
    "¿Cree que el sistema fiscal actual es justo y favorece a ciertos grupos sobre otros?",
    "¿Cree que todos los grupos sociales tienen las mismas oportunidades de acceder a la educación, el empleo y la vivienda?",
    "¿Cree que las elecciones son libres y transparentes en nuestro país?",
    "¿Cree que el gobierno representa los intereses de todos los ciudadanos o solo de unos pocos grupos privilegiados?",
    "¿Cree que la distribución de los recursos naturales y los servicios ambientales es equitativa entre los diferentes grupos sociales?",
    "¿Cree que las políticas gubernamentales son suficientes para proteger el medio ambiente y garantizar la sostenibilidad?",
    "¿Cree que existe discriminación basada en el origen social, la raza, el género o la orientación sexual en nuestra sociedad?",
    "¿Cree que las mujeres y los hombres tienen las mismas oportunidades en el ámbito laboral?",
    "¿Cree que las políticas públicas son lo suficientemente efectivas para prevenir y combatir la violencia contra las mujeres?",
    "¿Cree que la sociedad en general es respetuosa con los derechos de las mujeres y las personas LGTBQ+?",
    " "
  ];

  preguntasAleatorias: number = 0;
  aleatorias!: string; //Almacena pregunta actual
  respuesta: boolean[] = []; //Almacena las respuestas del usuario
  cuartilUsuario: number | undefined; // Almacena el cuartil

  ngOnInit(): void {
    this.aleatorias = this.preguntas[this.preguntasAleatorias];
  }

  siRespuesta() {
    this.respuesta.push(true);
    this.siguientePregunta();
  }

  noRespuesta() {
    this.respuesta.push(false);
    this.siguientePregunta();
  }

  siguientePregunta() {
    if (this.preguntasAleatorias < this.preguntas.length - 1) {
      this.preguntasAleatorias++;
      this.aleatorias = this.preguntas[this.preguntasAleatorias];
    }
  }

  cuartil() {
    const totalRespuestas = this.respuesta.length;
    const respuestasOrdenadas = this.respuesta.sort((a, b) => a ? 1 : -1);

    const indiceCuartil = Math.floor(totalRespuestas * 0.25);

    if (indiceCuartil === totalRespuestas) {
      this.cuartilUsuario = 4;
      return;
    }

    const valorCuartil = respuestasOrdenadas[indiceCuartil];

    for (let i = 0; i < totalRespuestas; i++) {
      if (this.respuesta[i] === valorCuartil) {
        this.cuartilUsuario = indiceCuartil + 1;
        return;
      } else if (this.respuesta[i] > valorCuartil) {
        this.cuartilUsuario = indiceCuartil + 2;
        return;
      }
    }

    this.cuartilUsuario = indiceCuartil;
  }

  resultadosCuartil() {
    if (this.cuartilUsuario) {
      let descripcionCuartil: string;
      switch (this.cuartilUsuario) {
        case 1:
          descripcionCuartil = "Bajo";
          break;
        case 2:
          descripcionCuartil = "Medio Bajo";
          break;
        case 3:
          descripcionCuartil = "Medio Alto";
          break;
        case 4:
          descripcionCuartil = "Alto";
          break;
        default:
          descripcionCuartil = "Error al calcular";
          break;
      }
      alert(`Su nivel de percepción de desigualdad es: ` + descripcionCuartil);
    } else {
      alert("No se pudo calcular su nivel de percepción de desigualdad")

    }
  }

  terminar() {
    this.cuartil();
    this.resultadosCuartil();
  }

  goBack(){
    this.router.navigate(['general'])
  }
}