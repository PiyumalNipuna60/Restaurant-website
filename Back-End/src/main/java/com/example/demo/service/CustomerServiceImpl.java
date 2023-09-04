package com.example.demo.service;

import com.example.demo.dto.CustomerDTO;
import com.example.demo.entity.Customer;
import com.example.demo.repo.CustomerRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CustomerServiceImpl implements CustomerService{

    @Autowired
    private CustomerRepo customerRepo;

    @Override
    public String add(CustomerDTO dto) {
        Customer customer = new Customer(
                dto.getCusId(),
                dto.getCusName(),
                dto.getCusAddress(),
                dto.getCusContact()
        );

        Customer save = customerRepo.save(customer);
        return save.getCusId();
    }

    @Override
    public List<CustomerDTO> getAll() {
        return null;
    }

    @Override
    public String update(CustomerDTO dt) {
        return null;
    }

    @Override
    public String delete(int cusId) {
        return null;
    }
}
