import { Component, OnInit } from '@angular/core';

interface Options {
  name:   string,
  value:  string,
}

@Component({
  selector: 'app-carga-sae',
  templateUrl: './carga-sae.component.html',
  styleUrls: ['./carga-sae.component.css']
})
export class CargaSaeComponent implements OnInit {

  fileSizeMax: number = 1000000;
  isXlsx = true;
  isLoadingFile = false;
  companyOptions: Options[] = [
    { name: 'Test 1', value: 'test1' },
    { name: 'Test 2', value: 'test2' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  async onBasicUpload(event: any) {
    if (event && event.files) {
      this.isLoadingFile = true;

      setTimeout(() => {
        console.log(event)
      },3000);
    }
  }

  onChangeCompany(event: any) {
    console.log(event)
  }

}
