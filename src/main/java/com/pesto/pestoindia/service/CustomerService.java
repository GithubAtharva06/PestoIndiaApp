package com.pesto.pestoindia.service;
import com.pesto.pestoindia.entities.Customer;
import com.pesto.pestoindia.entities.RequestStatus;
import com.pesto.pestoindia.repository.CustomerRepository;
import org.springframework.stereotype.Service;

import java.util.List;

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
            customer.setRequestStatus(RequestStatus.PENDING);
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
