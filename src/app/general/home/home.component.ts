import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(
    private router:Router
  ){}

  questions: string[] = [
  
    "¿Crees que ser gay o lesbiana es malo?",
    "¿Crees que ser pobre hace que las personas cometan delitos?"
  ];

  currentQuestion: number = 0;

  question: string = this.questions[this.currentQuestion];

  deAcuerdo() {
    console.log("El usuario está de acuerdo con la pregunta:", this.question);
    this.nextQuestion();
  }

  enDesacuerdo() {
    console.log("El usuario está en desacuerdo con la pregunta:", this.question);
    this.nextQuestion();
  }

  nextQuestion() {
    this.currentQuestion = (this.currentQuestion + 1) % this.questions.length;
    this.question = this.questions[this.currentQuestion];
  }

  goBack(){
    this.router.navigate(['general'])
  }
}