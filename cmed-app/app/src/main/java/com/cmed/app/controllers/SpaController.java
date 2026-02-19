package com.cmed.app.controllers;

import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@Profile("portable")
public class SpaController {

    // Forward all requests that don't match an extension (files) or existing API endpoints to index.html
    // This allows Angular to handle the routing for paths like /patients, /home, etc.
    @RequestMapping(value = { "/{path:[^\\.]*}", "/**/{path:[^\\.]*}" })
    public String forward() {
        return "forward:/index.html";
    }
}
