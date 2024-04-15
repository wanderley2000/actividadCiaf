import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrl: './general.component.css'
})
export class GeneralComponent implements OnInit{

  constructor(private router:Router){}

  ngOnInit(): void {}

  go(){
    this.router.navigate(['general/home'])
  }
}
