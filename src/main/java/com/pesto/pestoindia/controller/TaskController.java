package com.pesto.pestoindia.controller;

import com.pesto.pestoindia.repository.CustomerRepository;
import com.pesto.pestoindia.entities.Customer;
import jakarta.validation.Valid;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
public class TaskController {
    private final CustomerRepository customerRepository;

    public TaskController(CustomerRepository customerRepository) {
        this.customerRepository = customerRepository;
    }

    @PostMapping("/requests")
    public Customer createRequest(@Valid @RequestBody Customer customer) {
        return customerRepository.save(customer);
    }

    @GetMapping("/responses")
    public List<Customer> CustomerResponse(){
        return customerRepository.findAll();
    }


    @DeleteMapping("/delete/{id}")
    public List<Customer> DeleteResponse(@PathVariable String id){
        customerRepository.deleteById(id);
        return customerRepository.findAll();
    }


}
