import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/entity/employee';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit{
  employees!: Employee[];

  constructor(private employeeService: EmployeeService, private router: Router){ }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getEmployeeList();
  }

  getEmployeeList() {
    this.employeeService.getEmployeeList().subscribe(data => {
      // console.log(data);
      this.employees = data;
    });
  }

  deleteEmployee(id: number) {
    this.employeeService.deleteEmploye(id).subscribe(() => {
      alert(`Delete employee ${id} complete!!!`)
      this.employees = this.employees.filter(employee => employee.id !== id)
      this.router.navigate(['']);
    });
  }
}
