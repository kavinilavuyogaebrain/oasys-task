import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})

export class SurveyComponent implements OnInit {
  quesData :any ={
    answer : []
  }
  id:any
  success :any
  questions = []
  fullQuestion :any ={}
  nodata:any
  fieldArray :any =[]
  page:any
  arrans: any = {};
  answerArray:any =[]

  constructor(private _authService : AuthService,private router:Router,private route:ActivatedRoute) {

    this.quesData.questiontype = "",
    this.quesData.show = ""

   }

  ngOnInit() {
    
    this.arrans = { arrans: ""};
    this.answerArray.push(this.arrans);
    this.quesData.answer = this.answerArray; 

    this.getAll();
    
    this.id = this.route.snapshot.params['id'];
    if(this.id){
    this._authService.editQues(this.id).subscribe(
      res=>{
        console.log(res)
        this.quesData = res;
      },err=>{
        console.log(err)
      }
    )
  } 

    this.id = this.route.snapshot.params['id'];
    if(this.id){
    this._authService.editQues(this.id).subscribe(
      res=>{
        console.log(res)
        this.quesData = res;
      },err=>{
        console.log(err)
      }
    )
  }
  }
addNotification(index) {

    this.arrans = { arrans: ""};
    this.answerArray.push(this.arrans);
    // console.log(this.answerArray);  // I can see all entered data in console
    return true;
}

deleteNotification(index) {

    if(this.answerArray.length ==1) {

        alert("At least one Notification Required for an Inspection");
        return false;

    } else {

        this.answerArray.splice(index, 1);
        return true;

    }
}
  
addFieldValue() {

    // console.log(this.fieldArray);
    this.fieldArray.push(this.quesData)
    this.quesData = {};
    // console.log(this.fieldArray);
  }

  deleteFieldValue(index) {

      this.fieldArray.splice(index, 1);
  }

  deleteAll(){

    document.getElementById("deleteall").click;
  }

getAll(){

    this._authService.getQuestion().subscribe(
      res => {
        // console.log(res.length);
        // console.log(res)
        this.questions = res
        // console.log(this.questions)
        if(this.questions.length == 0){
        
          this.nodata="No data found";
        }
        // console.log( this.nodata)
      },err =>{
        console.log(err)
      }
    )
  } 


getviewId(id){
  
    this._authService.editQues(id).subscribe(
      res=>{
        console.log(res)
        this.quesData = res;
      },err=>{
       console.log(err)
      }
    )
}

deleteQues(){

this.id = this.route.snapshot.params['id'];
// console.log(this.id);
this._authService.deleteQuestionid(this.id).subscribe(
  res=>{
    console.log(res)
    this.success = 'Deleted successfully!';
    this.getAll();
    setTimeout(() => {
      this.success = '';
      this.router.navigate(['/survey']);
    }, 3000);
  },err=>{
    console.log(err)
  }
)
}

addQuestion(){
    console.log(this.quesData);
    if(this.id){
      this._authService.updateQues(this.quesData, this.id).subscribe(
        res =>{
          console.log(res)
          this.success="Updated Succesfully";
          setTimeout(() => {
            this.success = '';
            this.router.navigate(['/survey']);
          }, 2000);
        },err =>{
          console.log(err)
        }
      )
    }else{
    this._authService.addQuestion(this.quesData).subscribe(
      res =>{
        console.log(res)
        this.success="Inserted Succesfully";
        this.router.navigate(['/survey']);
        setTimeout(() => {
          this.success = '';
          this.router.navigate(['/survey']);
        }, 2000);
      },err =>{
        console.log(err)
      }
    )
  }
  }
 
ques(){
    // console.log(this.quesData.questiontype);
    let field = this.quesData.questiontype;
    // console.log(field);
  
    if(field == "Dropdown"){
      this.page = "Dropdown";
    }
    if(field == "Checkboxes"){
      this.page = "Checkboxes";
    }
    
  }

  fullpaper(){
    console.log(this.questions);
  }

full(){
  
  this.fullQuestion.questionpaper = this.questions;
  console.log(this.fullQuestion);
  // let alldata = this.fullQuestion.questionpaper;
  this._authService.fullques(this.fullQuestion).subscribe(
    res =>{
      console.log(res)
      this.success="Inserted Succesfully";
     
      setTimeout(() => {
        this.success = '';
        this.router.navigate(['/viewsurvey']);
      }, 2000);
    },err =>{
      console.log(err)
    }
  )
}

}
