import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-viewsurvey',
  templateUrl: './viewsurvey.component.html',
  styleUrls: ['./viewsurvey.component.css']
})
export class ViewsurveyComponent implements OnInit {
  questions = []
  id:any
  success :any
  quesData={}
  nodata:any
  constructor(private _authService : AuthService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit() {
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
    
  }
  
  getAll(){

    this._authService.getQuestion().subscribe(
      res => {
        console.log(res.length);
        
        // console.log(res)
        this.questions = res
        console.log(this.questions)
        if(this.questions.length == 0){
          alert("sdsds");
          this.nodata="No data found";
        }
        console.log( this.nodata)
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
  console.log(this.id);
  this._authService.deleteQuestionid(this.id).subscribe(
    res=>{
      console.log(res)
      this.success = 'Deleted successfully!';
      this.getAll();
      setTimeout(() => {
        this.success = '';
      }, 3000);
    },err=>{
      console.log(err)
    }
  )
  }
  
}
