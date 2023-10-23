import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/entity/employee';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-employee-form-update',
  templateUrl: './employee-form-update.component.html',
  styleUrls: ['./employee-form-update.component.css']
})
export class EmployeeFormUpdateComponent {
  employee: Employee = new Employee();
  employeeId!: number;

  constructor(
      private employeeService: EmployeeService,
      private router: Router,
      private http: HttpClient,
      private route: ActivatedRoute
    ){ }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.employeeId = this.route.snapshot.params['id'];
    this.employeeService.getEmployee(this.employeeId).subscribe(respone => {
      // console.log(respone);
      this.employee = respone;
    })
  }

  updateEmployee() {
    // console.log(`Update complete ${this.employee.id} ${this.employee.firstName} ${this.employee.lastName} ${this.employee.email}`);
    this.employeeService.updateEmployee(this.employee).subscribe(respone => {
      alert(`Update employee ${respone.firstName} complete!!!`)
      this.employee = new Employee()
      this.router.navigate(['']);
    });
  }
}
