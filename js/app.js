let elQuestion1 = prompt("ismingiz ?")
 
console.log("ismingiz ? " + elQuestion1);
let elQuestion3 = prompt("Familiyangiz ?")
 
console.log("Familiyangiz ? " + elQuestion3);
let elQuestion4 = prompt("Qayerdansiz ?")
 
console.log("Qayerdansiz ? " + elQuestion4);
let elQuestion5 = prompt("Xobbiyingiz ?")
 
console.log("Xobbiyingiz ? " + elQuestion5);
let elQuestion6 = prompt("Ishingiz ?")
 
console.log("Ishingiz ? " + elQuestion6);
let elQuestion7 = prompt("Qayerda O'qiysiz ?")
 
console.log("Qayerda O'qiysiz ? " + elQuestion7);
let elQuestion8 = prompt("Yoshingiz ?")
 
console.log("Yoshingiz ? " + elQuestion8);


let ticketPlanePrice = 500;
let hotelPrice = 250;
let travelPrice = 120;
let dollarCurrency = 11000.34;
let euroCurrency = 12354.03;

console.log((ticketPlanePrice * dollarCurrency) + (hotelPrice * dollarCurrency) + (travelPrice * euroCurrency));

let rusultPrice = (ticketPlanePrice * dollarCurrency) + (hotelPrice * dollarCurrency) + (travelPrice * euroCurrency);

let elPrompt = prompt("Pul qiymatini kiriting")
if(elPrompt > rusultPrice){
    console.log("Oq yo'l, Alisher!")
}
else{
    console.log("Alisher, ozgina sabr qilish kerak bo'lar ekan.")
}
