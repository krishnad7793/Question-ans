import { Component, OnInit } from '@angular/core';
import { QuestionService } from './service/question.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'project';
  questionsArray: any = [];
  currentQuestionNumber: number;
  
  constructor(private questionService: QuestionService) {
    this.currentQuestionNumber = 0;
  }

  ngOnInit() {
    this.callQuestions();
  }
  callQuestions() {
    this.questionService.getQuestionList().subscribe((res: any) => {
      this.questionsArray = res.questions;
    }, err => {
      console.log(err);
    })
  }
  setGoToNextTrue(){
    this.currentQuestionNumber++;
  }
  backgoto(){
    this.currentQuestionNumber--;
  }
  Reloadtest() {
    this.currentQuestionNumber = 0;
  }
}
