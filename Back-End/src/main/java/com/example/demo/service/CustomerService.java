package com.example.demo.service;

import com.example.demo.dto.CustomerDTO;

import java.util.List;

public interface CustomerService {
    String add(CustomerDTO dto);

    List<CustomerDTO> getAll();

    String update(CustomerDTO dt);

    String delete(int cusId);
}
