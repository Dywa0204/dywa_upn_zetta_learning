import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Data } from '../service/mentor.model';
import { MentorService } from '../service/mentor.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  providers: [MentorService]
})

export class TableComponent implements OnInit {
  displayedColumns: string[] = ['name', 'user_type', 'email', 'status'];
  jsonData: Data[] = [];
  dataSource!: MatTableDataSource<Data>;


  constructor(private mentorService: MentorService) { }

  ngOnInit(): void {
    this.mentorService.getData().subscribe(data => {
      this.dataSource = new MatTableDataSource(data)
    })

    
  }

  applyFilter(event: any, tag: string) {
    let filterValue 
    switch(tag){
      case 'input':
        filterValue = (event.target as HTMLInputElement).value;
        console.log(filterValue)
        this.dataSource.filter = filterValue.trim().toLowerCase();
        break;
      case 'select':
        filterValue = event;
        console.log(filterValue)
        this.dataSource.filter = filterValue.trim().toLowerCase();
        break;
    }
  }

  addNewUser(){
    this.mentorService.addData().subscribe(data => {
      const d = this.dataSource.data;
      d.push(data);
      this.dataSource.data = d;
    })
  }
}


