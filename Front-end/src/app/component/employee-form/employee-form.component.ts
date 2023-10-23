import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/entity/employee';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit{
  employee: Employee = new Employee();

  constructor(private employeeService: EmployeeService, private router: Router){ }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

  }

  addEmployee() {
    // console.log(`Add complete ${this.employee.firstName} ${this.employee.lastName} ${this.employee.email}`);
    this.employeeService.addEmployee(this.employee).subscribe(respone => {
      alert(`Add employee ${respone.firstName} complete!!!`)
      this.employee = new Employee()
      this.router.navigate(['']);
    });
  }
}
