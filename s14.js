// Exercitiu nr.1


var number;

function isEven(number) {

if(number % 2 === 0){ 
    return console.log("true"); }
    else{ 
    return console.log("false"); }

};

isEven();


// Exercitiu nr.2


var number1;
var number2;

function sumProd(number1, number2) {

return (number1 + number2)*0.1

}

sumProd();


// Exercitiu nr.3


var percentage;
var number;

function percentageOf(percentage, number) {

return (percentage/100*number)

}

percentageOf();



// Exercitiu nr.4


var x;
var y;
var z;

function maxNum(x, y, z) {

if ((x>y)&& (x>z)){

return x;
}

else if((y>x)&& (y>z)){

return y;
}

else{ ((z>x) && (z>y))

return z;
}

}
maxNum();


// Exercitiu nr.5


var number;
var i;
var sum=0;

function sumInt(number){
for(i=0; i<=number; i++){
sum +=i;
}
return sum;
}


sumInt();



// Exercitiu nr.7 

var number;

function compareNumber(number) {

if (number > 0){
return console.log("numarul este mai mare decat 0"); }
else{ 
return console.log("numarul este mai mic decat 0"); }

};

compareNumber();



// Exercitiu nr.8

var min;
var max;
var i;

function showEven(min,max){
while (i<=max){
  if(i%2==0){
  console.log(i)
  }
  i++
}
}

showEven();



// Exercitiul nr. 9

var x;
var y;
var z;

function sortAsc(x,y,z){

if (x<y && x<z)
{
        if (y<z)
        {
            console.log(x + ", " + y + ", " +z);
        }
        else
        {
            console.log(x + ", " + z + ", " +y);
        }
}
else if (y<x && y<z)
{
        if (x<z)
        {
             console.log(y + ", " + x + ", " +z);
        }
        else
        {
             console.log(y + ", " + z + ", " +x);
        }
}
else if (z<x && z<y)
{
        if (x<y)
        {
            console.log(z + ", " + x + ", " +y);
        }
        else
        {
            console.log(z + ", " + y + ", " +x);
        }
}       

}

sortAsc();




// Exercitiul nr. 10


var x;
var y;
var z;

function sortDesc(x,y,z){

if (x>y && x>z)
{
        if (y>z)
        {
            console.log(x + ", " + y + ", " +z);
        }
        else
        {
            console.log(x + ", " + z + ", " +y);
        }
}
else if (y>x && y >z)
{
        if (x>z)
        {
             console.log(y + ", " + x + ", " +z);
        }
        else
        {
             console.log(y + ", " + z + ", " +x);
        }
}
else if (z>x && z>y)
{
        if (x>y)
        {
            console.log(z + ", " + x + ", " +y);
        }
        else
        {
            console.log(z + ", " + y + ", " +x);
        }
}       

}

sortDesc();



// Exercitiu nr.14

var anCurent;
var anNastere;

function varsta(anCurent, anNastere){

return (anCurent-anNastere);

}

varsta();


// Exercitiu nr.15

var animal;
var result;

var ani;

function varsta(animal,ani){

if(animal===caine){
    result = ani * 7;
    console.log(result);
  return result;
  
 } else if(animal===pisica){
    result = ani * 15;
    console.log(result);
    return result;
  } else {
    return "animalul introdus nu exista in lista"
  }
}

varsta();





