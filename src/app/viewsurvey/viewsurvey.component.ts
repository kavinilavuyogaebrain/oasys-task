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
  fullquestions :any = []
  id:any
  success :any
  quesData={}
  nodata:any
  quesArr: any = [];
  constructor(private _authService : AuthService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit() {
      this.getAll();
 
  }
  
  getAll(){

    this._authService.getfullques().subscribe(
      res => {
        console.log(res.length);
        
        // console.log(res)
        this.fullquestions = res
        console.log(this.fullquestions)
        this.quesArr = this.fullquestions.questionpaper;
        if(this.fullquestions.length == 0){
       
          this.nodata="No data found";
        }
        console.log( this.nodata)
      },err =>{
        console.log(err)
      }
    )
  }

  // getviewId(id){
  
  //     this._authService.editQues(id).subscribe(
  //       res=>{
  //         console.log(res)
  //         this.quesData = res;
  //       },err=>{
  //        console.log(err)
  //       }
  //     )
   
  // }

  
}
