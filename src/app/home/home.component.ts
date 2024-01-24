import { Component } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  data: any[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    this.apiService.getData().subscribe((res: any) => {
      this.data = res;
      console.log(this.data);
      
    });
  }
}
