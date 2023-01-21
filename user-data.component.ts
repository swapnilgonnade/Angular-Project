import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../admin.service';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent implements OnInit {

  user:any;
  firstName='';
  searchData='';
  sorting='';
  sortDirection='asc';
constructor(private service:AdminService){}

  ngOnInit(): void {
    this.service.userData().subscribe(res=>{
      this.user=res;
      console.log(this.user);
    })
  }
  search(){
    this.searchData=this.firstName;
     }
     clear(){
      this.searchData='';
      this.sorting='';
    }
  
    sortButton(){
      if(this.sortDirection==='desc'){
        this.sortDirection='asc';
      }else{
        this.sortDirection==='desc'
      }
  
    }

 

}
