// fetch the data fron the API.  
// fetch() method to return a promise that resolves into a Response object.
// using .then is to make a GET request to the API endpoint.

fetch("https://dummyjson.com/products") 

    //handle the response
    .then((response) => response.json())

    //reading the response
    .then((data) => {
        console.log(data.products);
    
        let myArr = data.products;
        let productData = document.getElementById("shop");

        // adding the content of data to a shopping cart by using the map function
        // all the data of title , brand , price , rating , stock is used to store and add the data to their particular position.

        myArr.map((products) =>
        {
            productData.innerHTML += `<div id="data"> 
                                            <img src=${products.images[0]} alt="images" height="220px" width="219px">
                                            <div id="content-data"> 
                                                <p><strong>Title: </strong><span id="title">${products.title}</span></p>
                                                <p><strong>Brand: </strong><span id="brand">${products.brand}</span></p>
                                                <p><strong>Price: </strong><span id="price">$${products.price}</span></p>
                                                <p><strong>Rating: </strong><span id="rating">${products.rating}</span></p>
                                                <p><strong>Stock: </strong><span id="stock">${products.stock}</span></p>
                                            </div>  
                                        </div>`;
        })      
    });
    