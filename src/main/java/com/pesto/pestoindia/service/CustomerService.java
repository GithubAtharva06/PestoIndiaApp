package com.pesto.pestoindia.service;
import com.pesto.pestoindia.entities.Customer;
import com.pesto.pestoindia.entities.RequestStatus;
import com.pesto.pestoindia.repository.CustomerRepository;
import org.springframework.stereotype.Service;

import java.time.Duration;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class CustomerService
{

    private final CustomerRepository customerRepository;

    public CustomerService(CustomerRepository customerRepository)
    {
        this.customerRepository = customerRepository;
    }

    public Customer createRequest(Customer customer)
    {
        Optional<Customer> existingcustomer = customerRepository.findTopByMobileNumberOrderByCreatedAtDesc(customer.getMobileNumber());
        if (existingcustomer.isPresent()){
            LocalDateTime lastrequesttime = existingcustomer.get().getCreatedAt();
            long hours = Duration.between(lastrequesttime, LocalDateTime.now()).toHours();

            if (hours < 2)
            {
                throw new RuntimeException("Please wait for 2 hours before making another request.");
            }
        }

            customer.setRequestStatus(RequestStatus.PENDING);
            customer.setCreatedAt(LocalDateTime.now());
            return customerRepository.save(customer);
    }

    public List<Customer> CustomerResponse()
    {
        return customerRepository.findAll();
    }

    public List<Customer> DeleteResponse(String id)
    {
        customerRepository.deleteById(id);
        return customerRepository.findAll();
    }

}
