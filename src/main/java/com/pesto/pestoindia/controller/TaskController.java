package com.pesto.pestoindia.controller;

import com.pesto.pestoindia.entities.Customer;
import com.pesto.pestoindia.service.CustomerService;
import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController @ControllerAdvice @CrossOrigin(origins = "http://localhost:5173")
public class TaskController {
    private final CustomerService customerService;

    public TaskController(CustomerService customerService) {
        this.customerService = customerService;
    }

    @PostMapping("/requests")
    public Customer createRequest(@Valid @RequestBody Customer customer) {
        return customerService.createRequest(customer);
    }

    @GetMapping("/responses")
    public List<Customer> CustomerResponse(){
        return customerService.CustomerResponse();
    }


    @DeleteMapping("/delete/{id}")
    public List<Customer> DeleteResponse(@PathVariable String id){
        customerService.DeleteResponse(id);
        return customerService.CustomerResponse();
    }


}
