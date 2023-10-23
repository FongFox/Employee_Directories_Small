package com.lab6.service;

import com.lab6.entity.Employee;

import java.util.List;

public interface IEmployeeService {
    List<Employee> findAll();

    List<Employee> findAllBySortByLastNameAsc();

    List<Employee> findAllBySortByFirstNameAsc();

    Employee findById(int theId);

    void save(Employee theEmployee);

    void deleteById(int theId);
}
