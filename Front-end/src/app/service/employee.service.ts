import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../entity/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private apiPath: string = 'api';
  private employeePath: string = 'employees';
  private baseURL = `http://localhost:8080/${this.apiPath}/${this.employeePath}`;

  employees!: Employee[];

  constructor(private http: HttpClient) { }

  getEmployeeList(): Observable<Employee[]>{
    return this.http.get<Employee[]>(this.baseURL);
  }

  getEmployee(id: number): Observable<Employee>{
    return this.http.get<Employee>(`${this.baseURL}/${id}`);
  }

  addEmployee(employee: Employee): Observable<Employee>{
    return this.http.post<Employee>(this.baseURL, employee);
  }

  updateEmployee(employee: Employee): Observable<Employee>{
    return this.http.put<Employee>(this.baseURL, employee);
  }

  deleteEmploye(id: number): Observable<void>{
    return this.http.delete<void>(`${this.baseURL}/${id}`);
  }
}
