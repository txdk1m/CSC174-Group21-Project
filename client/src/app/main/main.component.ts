import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  form: FormGroup = new FormGroup({});

  testTableColumns: string[] = ['fname','lname','age'];
  testTableData: any;

  customerColumns: string[] = ['f_name','l_name','email', 'phoneNumber'];
  customerData: any;

  constructor(
    private http: HttpClient,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    console.log('MainComponent Initiation complete');

    this.form = this.fb.group({
      addressID: [null],
      f_name: [null],
      l_name: [null],
      email: [null, [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      phoneNumber: [null]
    });

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

  submitDetails(form: any) {
    console.log('SUBMITTED');
    this.http.post('', JSON.stringify(form.value, null, 4)).subscribe();
    alert('ITS BROKEN!!\n' + JSON.stringify(form.value, null, 4));
  }

}
