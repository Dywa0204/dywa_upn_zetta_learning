const book = [
    {
        title: "Book One", 
        price: 100000, 
        isAvailable: true
    }, {
        title: "Book Two", 
        price: 70000, 
        isAvailable: false
    }
];

function bookPurchasing(book, discount, tax) {
    const amountOfDiscount = book.price * (discount / 100);
    const priceAfterDiscount = book.price - amountOfDiscount;
    const amountOfTax =  priceAfterDiscount * (tax / 100);
    const priceAfterTax = priceAfterDiscount + amountOfTax;

    if(book.isAvailable){
        console.log("Book Title : " + book.title);
        console.log("Book Price : " + book.price);
        console.log("Amount of discount : " + amountOfDiscount);
        console.log("Price after discount : " + priceAfterDiscount);
        console.log("Amount of tax : " + amountOfTax);
        console.log("Price after tax : " + priceAfterTax + "\n");
    }else{
        console.log("Book Title : " + book.title + " (Not Available)");
        console.log("Book Price : " + book.price);
    }
}

bookPurchasing(book[0], 10, 10);
bookPurchasing(book[1], 5, 5);