
//strings practice.


const string = "this is a string that is added in this file";
console.log(string);
//assigning the value of strign to badstring;   
const badstring = string;
console.log(badstring);
//printing consol messages with single double and backticks;
console.log("the following text is with single double and backticks");
console.log("");
console.log("double ticks");
console.log('single ticks');
console.log(`backticks`);
//combine message and a varaible in consol message;
const Name = "saif yousafzaii";
const greett = `Hello, ${Name}`;
console.log(greett);
//combine three strings in the in same consol message;
const one = "hello";
const two = ", this is saif yousafzai";
const three = ", what is your name?";
console.log(`${one}${two}${three}`);


// creating new strings in order to get the data about the already existing string withough altering the preexisting string.


//script to count the number of characters in the strign (text);
//normally I would use 'DOMContentLoaded' before executing the JS onwards but I used "defer" with the script tag in html, so I dont need to specify that everytime now;
   

    let text = "the quick brown fox jumps over a lazydog"
    document.getElementById("length").innerHTML = text.length;     //length id is taken from index.html;

//for extracting a character at a certain position from a string using charAt

    let test = "hello this is saif yousafzai"
    document.getElementById("charat").innerHTML = test.charAt(11);              //charat  id is taken from index.html;

//for extracting character code from string using charchodeat method.

    let test1 = "this-is-a-test-text";
    document.getElementById("texxt").innerHTML = test1.charCodeAt(3);           //texxt id is taken from index.html;


//for extracting the character at a certain position using at method;

    let test2 = "random-text-for-testing-js"   
    document.getElementById("rand").innerHTML = test2.at(3)

//string slice method to extract some part of the string but the first position in parameter is not counted;

    let test3 = "this is random text";
    document.getElementById("tesst").innerHTML = test3.slice(8,14);

//string slice with substring method where the first postion parameter is included and the second parameter position is not included in the output;

    let test4 = "this is random text";
    document.getElementById("test0").innerHTML = test4.substring(7,14);
//but if you dont give it the second paramete, it will output the string onwards from the given position;

    let test5 = "this is a substring text randomly written";
    document.getElementById("test01").innerHTML = test5.substring(10);

//converting string to uppercase;

 let case1 = "this is a test text for practicing the upper case and lower case of the js strings"
 document.getElementById("upper").innerHTML = case1.toUpperCase();

//converting string to lower case;  just write " toLowerCase(); " for this action

//to join two or more strings

let str1 = "this is one string"
let str3 = "and"
let str2 ="this is another one"
let str4 = str1.concat(" ", str3," ",str2);

document.getElementById("comb").innerHTML = str4;
console.log(str4,"this is the console message for combined strings")

//you can use the same function for removing the white spaces from both sides of the string {you will use <variable name>.trim(); }

//trimStart = works like trim but removes white space from start of the trim
//trimend = same as trimStart but works with the end of the string;

//same function but use padStart to do padding at the start untill it reaches the entered parameter. { <variable-name>.padStart(4, "0") = pad with 0 until it reaches the limit 4}
//same function but use padEnd to do padding at the end until it reaches the entered parameters {<variable-name.padEnd(4, "-") = pad with - until it reaches the limit 4}
// you can enter <space> if you want to pad the string with white space;

//__________________________________________________________________________________________________________________________________

// APNA COLLEGE JAVASCRIPT.

// variables

// Camel Case is declaring a variable which has two words in it in such a way that
// the first word starts with small letter and second word starts with capital letter.


// You can define same variables multiple times with different/same values in different block
// blocks are mostly used for objects.
{
    let a = "{} these braces are called blocks & 1 of their function is that U can declare same variables multiple times in one application"
    console.log(a);
    console.log(" ");

}

{
    let a = "saif yousafzai (stored in var 'a' in block a)";
    console.log(a);
}

{
    let a = "Just Yousafzai (stored in var 'a' in block b)";
    console.log(a);
}

{
    let a = "this is one other thing that is  "
}

// data types

let age = 24;
console.log("'" ,typeof age,"'", "  I have used 'typeof 'variable-name'' here in order to output the datatype of the age variable ");   // typeof <variable-name> gives us what is the datatype of the variable.

// objects in JS examples;

const student = {
    fullName: "saif yousafzai",
    age : 24,
    cgpa : 3.0,
    isPass : true,
};

student["age"] = student["age"] + 3;            // adding/altering the value of a keypair named (age)
student["fullName"] = "Saif.Y";                 // reassigning the value to a keypair name (fullName);

console.log(student.age, "  here the age is printed from object named student");
console.log(student.fullName);

// we declare the objects with const but still change the values in there because
// we are changing the keypair value in the object not the whole object itself.

// ---Problem Question--- 
// create an object containing the date in the picture. lecture timestamp (1:13:33)

const amz = {

    Name:"parker jetter standard..",
    rating : 4,
    totalRevs: 7002,
    price : 270,
    discountOn : true,
};

console.log(amz);

const profile = {
    fullName: "shradha khapra",
    userName: "shradhakhapra",
    no_of_posts: 195,
    followers: 569 + "k",
    following: 4 ,
};
console.log(profile);

//---Chapter 2 (operators and conditional statements);---

//operators

let a = 5;
let b = 2;
console.log("a = ",a, "b = ", b);
console.log("a + b = ", a+b);           //addition
console.log("a * b = ", a*b);           //multiiplication
console.log("a / b = ", a/b);           //division
console.log("a % b = ", a % b);         //modulus (prints the raminder of a/b)
console.log("a ** b = ", a**b);         //exponenciation (prints a raised to the power b);

//=arithimatic operators

//==post-incriment (prints the value and then changes it)

a++;
console.log("a++", a);                  //increase by one (a+1);

a--;                     
console.log("a--",a);               //decrease by one (a-1);

//==pre-increment 

console.log("++a", ++a,"pre-increment");                //changes value before printing it.
console.log("--a", --a, "(pre-decrement)");             //changes value before printing it.

//=Assignment Operators

a += 4;                         //adds 4 to the current value of a
console.log(a);

a -= 4;                         //subtracts 4 from the current value of a (which is 9)
console.log(a);

a *= 4;
console.log(a);                 //multiplies the current value of a (which is 5) with 4.

a /= 5;
console.log(a);                 //divides the current value of a (which is 20) with 5

a %= 3;
console.log("a = ", a);         //divides the current value of a (which is 4) with 3

a **= 0;
console.log(a);                 //puts 0 into the power of value of a (which is 1).

//= comparison operators


let c = 6;
let d= 5;

console.log("let c = 5  &  d = '2'");
console.log("c == 5 : ", c==5 );          //compares a with 5 and tells us whether we are true or false;
console.log("c != 5 : ", c!=5);           //checks whether a is not equal to 5, if yes, it returns true.
console.log("c === d ", c==d);              // checks whether strictly whether c = d or not and gives us the output in boolean
console.log("c !== d", c !== d);            //checks whether its totally unequal or not, if its not then it gives us true otherwise false.

console.log(" ");
//= logical operators

let cond1 = c > d;
console.log("c= 6    d = 5");
let  cond2 = c === d;
console.log("cond1 && cond2", cond1 && cond2);  // && checks whether both the conditions are equal.
console.log("cond1 && cond2 ", a==c && c<d);    //the upper line and this line is same but instead of using variable, we used conditions directly.
console.log("c != d", c!=d, "    this is logical not operator !");

/*----------------------------------------------------------------------------------------------------------------------------------------------- */

// conditional statements

//= if statements

let realAge = 19
if (age >= 18){
    console.log("congratulations, you can vote");
}

if (age < 18){
    console.log("You cannot vote");
}

//dark mode if statement.

let mode = "Blue";
let color;

if (mode=== "dark"){
    color = "black";
}

if (mode=== "light"){
    color = "white";
}

console.log(color);



//= if-else statement with light and dark

if (mode === "light"){
    color = "white";
}else{
    color = "black";
}

console.log(color);


//if-else with age
if (age >= 18) {
    console.log("congratulations you can vote (with if else)");
}else{
    console.log("You cannot vote (with if else)");
}

//if-else with even and odd;

let num = 10;

if (num%2 === 0){
    console.log(num, " is even");
}else{
    console.log(num, " is odd");
}

//= elseif statements

if (mode === "cream"){

    color = "cream";

} else if (mode === "Blue") {

    color = "blue";

} else if (mode === "white") {

    color = "white";

} else {
    color = "black";
}

console.log(color);

if (mode === "blue") console.log("Blue background");            //just applying one time conditions



//if else with ternary operator. (compact operators)
// if else statements but with different approach  (let <output varaible name> = variable & condition "true value" : "false value" )

let fullAge = 10;

let stageOfLife = fullAge >= 18? "adult" : "not adult";
console.log(stageOfLife);               

//the same thing but without any output variable

fullAge <= 18 ? console.log("adult") : console.log("not adult");

// taking number and checking whether it is a multiple of 5; using operators and if else

let message = prompt("Enter a Number");

if(message % 5 == 0){
    console.log(message, " is a multiple of 5");
} else {
    console.log(message%5, "is the remainder");
}

//scoring the students using else if statements;

let score = prompt("enter your score (0-100)");
let result;

if (score >= 80 && score <= 100){
    console.log("good work", result="A");
} else if (score >= 70 && score <=80) {
    console.log("weldone", result = "B" );
} else if (score >= 60 && score <= 70) {
    console.log("You have got", result = "C", "grade");
} else if (score >= 50 && score <= 60) {
    console.log("You should concentrate on your studies", result = "D", "grade");
} else if (score >= 0 && score <= 49 ) {
    console.log("You are fail,", result = "F", "grade");
}

console.log("according to your score, your grade was ", result);