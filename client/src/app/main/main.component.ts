import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    console.log('MainComponent Initiation complete');

    this.http.get('https://movie-174project.herokuapp.com/testTable').subscribe(res => {
      console.log('res', res)
    })
  }

}
