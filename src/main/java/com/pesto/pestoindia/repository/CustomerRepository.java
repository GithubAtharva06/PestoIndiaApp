package com.pesto.pestoindia.repository;

import com.pesto.pestoindia.entities.Customer;
import org.springframework.data.mongodb.repository.MongoRepository;
import java.util.Optional;

public interface CustomerRepository extends MongoRepository<Customer, String> {
    Optional<Customer> findTopByMobileNumberOrderByCreatedAtDesc(String mobileNumber);
}
