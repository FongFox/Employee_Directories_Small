package com.lab6.controller;

import com.lab6.entity.Employee;
import com.lab6.service.IEmployeeService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api") @CrossOrigin()
public class EmployeeRestController implements IEmployeeRestController{
    private IEmployeeService employeeService;

    public EmployeeRestController(IEmployeeService employeeService) {
        this.employeeService = employeeService;
    }

    @Override
    @GetMapping("/employees")
    public List<Employee> getEmployees() {
        return employeeService.findAll();
    }

    @Override
    @GetMapping("/employees/{id}")
    public Employee getEmployee(@PathVariable int id) {
        return employeeService.findById(id);
    }

    @Override
    @PostMapping("/employees")
    public Employee addEmployee(@RequestBody Employee employee) {
        employee.setId(0); employeeService.save(employee);
        return employee;
    }

    @Override
    @PutMapping("/employees")
    public Employee updateEmployee(@RequestBody Employee employee) {
        employeeService.save(employee);
        return employee;
    }

    @Override
    @DeleteMapping("/employees/{id}")
    public void removeEmployee(@PathVariable int id) {
        employeeService.deleteById(id);
    }


}
