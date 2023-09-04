package com.example.demo.controller;

import com.example.demo.dto.CustomerDTO;
import com.example.demo.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("api/v1/customer")
public class CustomerFormController {

    @Autowired
    private CustomerService customerService;

    @PostMapping(path = "/save")
    private String saveEmployee(@RequestBody CustomerDTO dto) {
        String add = customerService.add(dto);
        return add;
    }

}
