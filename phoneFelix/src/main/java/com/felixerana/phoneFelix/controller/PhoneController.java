package com.felixerana.phoneFelix.controller;

import java.util.List;

import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.felixerana.phoneFelix.model.Phone;

public class PhoneController {

	Phone phone0 = new Phone(0 ,"Samsung","S10","Ceramin White","This is a wonderful smartphone that will help you through the day","","950€");
	Phone phone1 = new Phone(1 ,"Xiaomi","Pocophone","Black","This is a wonderful smartphone that will help you through the day","","250€");
	Phone phone2 = new Phone(2 ,"Iphone","Xr","Rose Gold","This is a wonderful smartphone that will help you through the day","","1030€");
	Phone phone3 = new Phone(3 ,"Huawei","P20","White","This is a wonderful smartphone that will help you through the day","","750€");
	Phone phone4 = new Phone(4 ,"Iphone","8","Space Gray","This is a wonderful smartphone that will help you through the day","","699€");
	
	
	@RequestMapping(value = "/phone", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<List<Phone>> getLibraries() {
		
		return null;
	}
	
}
