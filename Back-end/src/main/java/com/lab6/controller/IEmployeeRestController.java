package com.lab6.controller;

import com.lab6.entity.Employee;

import java.util.List;

public interface IEmployeeRestController {
    List<Employee> getEmployees();

    Employee getEmployee(int id);

    Employee addEmployee(Employee employee);

    Employee updateEmployee(Employee employee);

    void removeEmployee(int id);
}
