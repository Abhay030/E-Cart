// word vs keyword 
// the thing which have some meaning in javascript is a keyword
// the thing which doesn,t have any meaning in the avascript is called a word



// variables vs constants vs lets
// var abhi = "learn";
// console.log(abhi)



// hoisting -- variable which can be used before the declaration 
// console.log(binod);   //undefined
// var binod = "abhi";



//primitive and reference 
// var a = [2,35,3,24,];  //the value of b ,a changes to [2,35,3] because they are of reference types , we ahve changed the value of b but the value of a also channges because the reference is copied to b not the whole values. // this is all about the refernce type
// var b =a ;  //refernce values are always in brackets i.e [] () {}
// b.pop()
// console.log(b)
// console.log(a)



// //lopps
// for( i =0; i<=10; i++){
//     console.log(i)
// }



// functions apna baabar wala yaad hai



//push pop shift unshift
// var arr = [1,2,3,4,5,6,7,8,9];
// let a = arr.shift();
// let b = arr.unshift();
// let c = arr.push();
// let d = arr.pop();
// let e = arr.splice(2,5)
// console.log(a,b,c,d,e)



//factory function
// function createRactangle(len , bre){   //This is the function
//     return rectangle ={   // {} - this is the object literal 
//         length: len,     //stores in the formaat of the values and the keys as same as python
//         breadth: bre,
//         draw(){    //methods
//             console.log('This is a drawing of a rectangle');
//         }
// }
// }
// let a = createRactangle(5,6);
// let b = createRactangle(10,9)
// let c = createRactangle(28,874)
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(rectangle.length)
// console.log(rectangle.breadth)
// console.log(rectangle.calc)
// console.log(rectangle.draw())



// scope of var and let
// function abcd(){
//     for (var i=1 ; i<=5; i++){
//         console.log(i);
//     }
//     console.log(i);
// }
// let w =abcd();
// console.log(w);



//how to copy values in the javascript
// var a= [1,2,3,5,6,4,443,323];
// var b = [...a];
// console.log(b)
//we can copy the objects same as the values in the javascript
// var obj = {
//     abhi: "abhay",
//     a: 22
// }
// var copyobj = {
//     ...obj
// }
// console.log(copyobj);



//falsy values ye hai = 0 false undefined null NaN document.all
//truthy values are the values other than the falsy values 



//for each loop srf array pe chalta hai matlb ki jab bhi tumhare paas ek array ho, tabuse mein kaun hai for each loop
// var a= [1,2,33,2,4,22,3,55,3,2,45,4];
// a.forEach(function(v) {
//     console.log(v+2)
// });



//for in objects par karta hai updation
// var obj ={
//     abhay : "abhay",
//     age : 20,
//     city : "abhay"
// }



// for(var key in obj){
//     console.log(key,obj[key]);
// }


//call back function
//aisa code jo me chalta hai use ek function dedete haui bhauya jab complete honjana to ye function chala dena, aur wo function jo hum dete hai wo ek normal function hi hota hai aur usse kehte hai call function.



//first class func.
//ye can savwe the funcytion in a variable.



//deleting an object 
// var a ={
//     abhi: "abhay",
//     age : 20
// }
// delete a.age;
// console.log(a);


