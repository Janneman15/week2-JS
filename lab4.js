var small = prompt("hoeveel small pizza's wilt u bestellen");
var medium = prompt("hoeveel medium pizza's wilt u bestellen");
var large = prompt("hoeveel large pizza's wilt u bestellen");
var straat = prompt("in welke straat woont u");
var huisnummer= prompt("wat is uw huisnummer");

const priceSmall = 4;
const priceMedium = 8;
const priceLarge = 12;

document.writeln("<br> aantal small pizza's: ")
document.writeln(small)
document.writeln("<br> aantal medium pizza's: ")
document.writeln(medium)
document.writeln("<br> aantal large pizza's: ")
document.writeln(large)
document.write("<br>")

document.write("<br> prijs voor small pizza's: $")
document.write(small * priceSmall)
document.write("<br> prijs voor medium pizza's: $")
document.write(medium * priceMedium)
document.write("<br> prijs voor large pizza's: $")
document.write(large * priceLarge)
document.write("<br> <br>")

document.write("<br> totale prijs: $")
document.write(small * priceSmall + medium * priceMedium + large * priceLarge)

document.write('<br> <br>')

document.write('word bezorgd op: ')
document.writeln(straat)
document.write(huisnummer)