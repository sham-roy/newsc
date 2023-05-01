import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  register(id:any,user_name:any,password:any){

    const data={id,user_name,password}
    return this.http.post('http://localhost:3000/register',data)
  }

  login(id:any,password:any){
    
    const data={id,password}
    return this.http.post('http://localhost:3000/register',data)
  }

  newsApiUrl="https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=a66eda0d19414b9cacb844b628de4967";
  topHeading():Observable<any>
  {
    return this.http.get(this.newsApiUrl)
  }
}
