import { Component } from '@angular/core';

@Component({
  selector: 'app-exams',
  templateUrl: './exams.component.html',
  styleUrl: './exams.component.css'
})
export class ExamsComponent {
  FirstName ="";
  lastName = "";
  address ="";
  Year ="Enter current Year"
  course= []
  able = false;
  apply
  age
  bYear = 2024
  courseMethod(){
    this.course = ["Java"," ", "angular"," ","Sql"," ","Spring Boot"]
  }
  EnableMethod(){
    this.able = true
  }
  DisableMethod(){
    this.able = false
  }
  resetMethod(){
    this.able= true;
  }
  applyMethod(){
    this.apply= "Congratulation"+ " " + this.lastName.toUpperCase() + " " + this.FirstName.toUpperCase() + "" +
      " "+ "you are successfully added  "
  }

}
