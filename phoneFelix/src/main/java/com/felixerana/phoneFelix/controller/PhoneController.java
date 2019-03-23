package com.felixerana.phoneFelix.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.felixerana.phoneFelix.model.Phone;

@RestController
public class PhoneController {

	Phone phone0 = new Phone(0 ,"Samsung","S10","Ceramin White","This is a wonderful smartphone that will help you through the day","https://static.digit.in/product/2fd7e510110aff0976b8f4188b4b84b73543029b.jpeg","950€");
	Phone phone1 = new Phone(1 ,"Xiaomi","Pocophone","Black","This is a wonderful smartphone that will help you through the day","https://d2bq50ryx4ze5e.cloudfront.net/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/p/o/pocof1-blk-1.jpg","250€");
	Phone phone2 = new Phone(2 ,"Iphone","Xr","Rose Gold","This is a wonderful smartphone that will help you through the day","https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ph/iphone/xr/iphone-xr-black-select-201809?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1551226038992","1030€");
	Phone phone3 = new Phone(3 ,"Huawei","P20","White","This is a wonderful smartphone that will help you through the day","https://zdnet1.cbsistatic.com/hub/i/r/2018/04/16/38e4ff43-8b8e-4a57-8ea6-b65206d2384a/thumbnail/770x578/a55c49659c7922935fb4c2f7fafae8d7/huawei-p20-pro-header.jpg","750€");
	Phone phone4 = new Phone(4 ,"Iphone","8","Space Gray","This is a wonderful smartphone that will help you through the day","https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ph/iphone8/plus/iphone8-plus-gold-select-2018?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1550795417455","699€");
		
	@GetMapping("/phones") 
	public ResponseEntity<List<Phone>> getPhones() throws InterruptedException {
		List<Phone> phoneList = new ArrayList<Phone>();
		phoneList.add(phone0);
		phoneList.add(phone1);		
		phoneList.add(phone2);
		phoneList.add(phone3);
		phoneList.add(phone4);
		Thread.sleep(2000);
		return ResponseEntity.ok(phoneList);
	}
	
}
