import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  testTableColumns: string[] = ['fname','lname','age'];
  testTableData: any;

  customerColumns: string[] = ['f_name','l_name','email', 'phoneNumber'];
  customerData: any;

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    console.log('MainComponent Initiation complete');

    //Initalize SQL Tables that we are using
    this.testTableInit();
    this.customerInfoInit();
  }

  // Initalize the data from the server
  testTableInit() {
    this.http.get('https://movie-174project.herokuapp.com/testTable').subscribe(res => {
      this.testTableData = res;
    });
  }

  customerInfoInit() {
    this.http.get('https://movie-174project.herokuapp.com/customerInfo').subscribe(res => {
      this.customerData = res;
    });
  }

}
