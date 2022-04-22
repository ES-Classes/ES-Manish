 //Normal functions
 /*function hello(){
     console.log("Hello");
 }
 hello();

 //Also we can define function in another way
 let hello = function(){
     console.log("My name is manish");
 }
 hello();
*/
 //Arrow function
 let hello = () => console.log("Hello World");
 hello();

 //print name and age
 let welcome = (name,age) => `Helllo & Welcome ${name} - ${age}`;
 console.log(welcome("Manish Timalsina",23));