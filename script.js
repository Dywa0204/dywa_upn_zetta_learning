const book = [
    {
        title: "Book One", 
        price: 100000, 
        isAvailable: true
    }, {
        title: "Book Two", 
        price: 70000, 
        isAvailable: false
    }, {
        title: "Book Three", 
        price: 58000, 
        isAvailable: true
    }, {
        title: "Book Four", 
        price: 68000, 
        isAvailable: true
    }, {
        title: "Book Five", 
        price: 86000, 
        isAvailable: false
    }
];

function bookPurchasing(book, discount, tax) {
    let total = 0;

    console.log("***** LIST OF BOOK *****");

    for(let i = 0; i < book.length; i++){
        if(book[i].isAvailable){
            const amountOfDiscount = book[i].price * (discount / 100);
            const priceAfterDiscount = book[i].price - amountOfDiscount;
            const amountOfTax =  priceAfterDiscount * (tax / 100);
            const priceAfterTax = priceAfterDiscount + amountOfTax;

            console.log("Book " + (i+1));
            console.log("  Book Title : " + book[i].title);
            console.log("  Book Price : Rp " + book[i].price);
            console.log("  Amount of discount   : Rp " + amountOfDiscount);
            console.log("  Price after discount : Rp " + priceAfterDiscount);
            console.log("  Amount of tax        : Rp " + amountOfTax);
            console.log("  Price after tax      : Rp " + priceAfterTax + "\n");
            total += priceAfterTax;
        }else{
            console.log("Book " + (i+1));
            console.log("  Book Title : " + book[i].title + " (Not Available)");
            console.log("  Book Price : Rp " + book[i].price + "\n");
        }
    }

    console.log("=================================\n")
    console.log("Amount of Book : " + book.length);
    console.log("Total Price    : Rp " + total);

    return total;
}

function credit(total, duration, tax){
    let term = [];
    let totalcredit = 0;

    console.log("\n\n***** CREDITS *****")

    const price = total /duration;
    const taxprice = price * (tax / 100);
    const creditprice = price + taxprice;

    for(let i = 0; i < duration; i++){
        term.push({
            month: i + 1,
            payment: creditprice
        });
        totalcredit += creditprice;
    }

    term.forEach(item => {
        console.log("Month " + item.month + " : Rp " + item.payment);
    });

    console.log("\n=================================\n")
    console.log("Amount Month : " + term.length);
    console.log("Total Credit : Rp " + totalcredit);
}

credit(bookPurchasing(book, 10, 10), 9, 10);