package com.felixerana.phoneFelix.model;

public class Phone {

	private int idPhone;
	
	private String brand;
	
	private String name;
	
	private String color;
	
	private String description;
	
	private String urlImg;
	
	private String price;

	//Constructors
	
	public Phone() {
		super();
	}

	public Phone(int i, String brand, String name, String color, String description, String urlImg,
			String price) {
		
		super();
		this.idPhone = i;
		this.brand = brand;
		this.name = name;
		this.color = color;
		this.description = description;
		this.urlImg = urlImg;
		this.price = price;
	}
	
	//getters and setters

	public int getIdPhone() {
		return idPhone;
	}

	public void setIdPhone(int idPhone) {
		this.idPhone = idPhone;
	}

	public String getBrand() {
		return brand;
	}

	public void setBrand(String brand) {
		this.brand = brand;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getColor() {
		return color;
	}

	public void setColor(String color) {
		this.color = color;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getUrlImg() {
		return urlImg;
	}

	public void setUrlImg(String urlImg) {
		this.urlImg = urlImg;
	}

	public String getPrice() {
		return price;
	}

	public void setPrice(String price) {
		this.price = price;
	}

	
	//HashCode and Equals

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + idPhone;
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Phone other = (Phone) obj;
		if (idPhone != other.idPhone)
			return false;
		return true;
	}
	
	
}
