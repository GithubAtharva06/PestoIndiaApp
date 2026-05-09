package com.pesto.pestoindia.repository;

import com.pesto.pestoindia.entities.Customer;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface CustomerRepository extends MongoRepository<Customer, String> {

}
