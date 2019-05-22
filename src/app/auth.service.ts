import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private userInfoUrl = "http://localhost:3000/api/userInfo";
  private questionUrl = "http://localhost:3000/api/questionData";
  private getquestionUrl = "http://localhost:3000/api/getquestionData";
  private deleteQuestion = "http://localhost:3000/api/deleteQuestionData";
  private getQuestiondata = "http://localhost:3000/api/editQuestionData";
  private updateQuestion = "http://localhost:3000/api/updateQuestionData";
  constructor( private http:HttpClient) { }


  // userInfo(data){
  //   return this.http.post<any>(this.userInfoUrl,data)
  // }
  addQuestion(data){
    return this.http.post<any>(this.questionUrl,data)
  }
  getQuestion(){
    return this.http.get<any>(this.getquestionUrl)
  }
  deleteQuestionid(id){
      return this.http.delete<any>(this.deleteQuestion + '/' + id);
  }
  editQues(id) {
    return this.http.get<any>(this.getQuestiondata + '/' + id);
  }
  updateQues(data, id) {
    return this.http.put<any>(this.updateQuestion + '/' + id, data);
  }
}
