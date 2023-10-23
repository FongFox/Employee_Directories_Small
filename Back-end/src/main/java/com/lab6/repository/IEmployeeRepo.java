package com.lab6.repository;

import com.lab6.entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface IEmployeeRepo extends JpaRepository<Employee, Integer> {
    public List<Employee> findAllByOrderByLastNameAsc();

    public  List<Employee> findAllByOrderByFirstNameAsc();
}
