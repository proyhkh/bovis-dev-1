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
    { name: 'Empresa 1', value: 'E1' },
    { name: 'Empresa 2', value: 'E2' }
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
