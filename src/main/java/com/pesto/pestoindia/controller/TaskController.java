package com.pesto.pestoindia.controller;

import com.pesto.pestoindia.repository.CustomerRepository;
import com.pesto.pestoindia.entities.Customer;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class TaskController {
    private final CustomerRepository customerRepository;

    public TaskController(CustomerRepository customerRepository) {
        this.customerRepository = customerRepository;
    }

    @PostMapping("/requests")
    public Customer createRequest(@RequestBody Customer customer) {
        return customerRepository.save(customer);
    }

}
