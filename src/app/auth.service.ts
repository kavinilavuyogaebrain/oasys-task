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
  private deleteQuestionPaper = "http://localhost:3000/api/deleteQuestionPaperData";
  private deleteAllQuestion = "http://localhost:3000/api/deleteAllQuestionData";
  private getQuestiondata = "http://localhost:3000/api/editQuestionData";
  private updateQuestion = "http://localhost:3000/api/updateQuestionData";
  private fullquestion = "http://localhost:3000/api/urlfullquestion";
  private getfullquestionUrl ="http://localhost:3000/api/urlgetfullquestion";
  constructor( private http:HttpClient) { }


  // userInfo(data){
  //   return this.http.post<any>(this.userInfoUrl,data)
  // }
 fullques(data){
    return this.http.post<any>(this.fullquestion,data)
  }
  getfullques(){
    return this.http.get<any>(this.getfullquestionUrl)
  }
  addQuestion(data){
    return this.http.post<any>(this.questionUrl,data)
  }
  getQuestion(){
    return this.http.get<any>(this.getquestionUrl)
  }
  deleteQuestionid(id){
      return this.http.delete<any>(this.deleteQuestion + '/' + id);
  }
  deleteQuestionPaperid(id){
    return this.http.delete<any>(this.deleteQuestionPaper + '/' + id);
}
  deleteAllQuestionid(){
    return this.http.delete<any>(this.deleteAllQuestion);
}
  editQues(id) {
    return this.http.get<any>(this.getQuestiondata + '/' + id);
  }
  updateQues(data, id) {
    return this.http.put<any>(this.updateQuestion + '/' + id, data);
  }
}
