// plik scripts.js

function Phone(brand, price, color) {
    this.brand = brand; 
    this.price = price;
    this.color = color;
}

Phone.prototype.printInfo = function() { 
    console.log("Marka telefonu to " + this.brand + ", kolor to " + this.color + ", a cena to " + this.price + "."); 
};

var iPhone6S = new Phone("Apple", 2250, "silver");
var samsungGalaxyS6 = new Phone("Samsung", 1600, "gold");
var sonyXperiaZ1 = new Phone("Sony", 1300, "black");
var iPhoneSe = new Phone("Apple", 1950, "pink");

iPhone6S.printInfo();
samsungGalaxyS6.printInfo();
sonyXperiaZ1.printInfo();
iPhoneSe.printInfo();