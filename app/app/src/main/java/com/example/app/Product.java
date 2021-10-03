package com.example.app;

public class Product {
    private String productId;
    private String category;
    private int imgId;
    private String name;
    private String shortDes;
    private float price;
    private int rating;

    public Product() {}

    public Product(String productId, String category, int imgId, String name, String shortDes, float price, int rating) {
        this.productId = productId;
        this.category = category;
        this.imgId = imgId;
        this.name = name;
        this.shortDes = shortDes;
        this.price = price;
        this.rating = rating;
    }

    public String getProductId() {
        return productId;
    }

    public void setProductId(String productId) {
        this.productId = productId;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public int getImgId() {
        return imgId;
    }

    public void setImgId(int imgId) {
        this.imgId = imgId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getShortDes() {
        return shortDes;
    }

    public void setShortDes(String shortDes) {
        this.shortDes = shortDes;
    }

    public float getPrice() {
        return price;
    }

    public void setPrice(float price) {
        this.price = price;
    }

    public int getRating() {
        return rating;
    }

    public void setRating(int rating) {
        this.rating = rating;
    }
}
