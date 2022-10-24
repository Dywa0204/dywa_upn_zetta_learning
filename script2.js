const itemInStorage = document.getElementById("item_in_storage").innerHTML;
const itemSold = document.getElementById("item_sold").innerHTML;

for(let i = 1; i < 30; i++){
    document.getElementById("item_in_storage").innerHTML += itemInStorage;
    document.getElementsByClassName("item_in_storage")[i].innerHTML = "This is item " + (i+1) + " in storage";

    document.getElementById("item_sold").innerHTML += itemSold;
    document.getElementsByClassName("item_sold")[i].innerHTML = "This is item sold " + (i+1);
}