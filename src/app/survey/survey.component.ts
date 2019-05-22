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
  quesData :any ={};
  id:any
  success :any

  
  constructor(private _authService : AuthService,private router:Router,private route:ActivatedRoute) {
    this.quesData.questiontype="",
    this.quesData.show =""
   }



  ngOnInit() {

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

  
  addQuestion(){
    console.log(this.quesData);
    if(this.id){
      this._authService.updateQues(this.quesData, this.id).subscribe(
        res =>{
          console.log(res)
          this.success="Updated Succesfully";
          setTimeout(() => {
            this.success = '';
            this.router.navigate(['/viewsurvey']);
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
 
}
