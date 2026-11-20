// Excersice 1 : number checker :

// let num = 5;

// function NumberChecker(num) {
//   if (Number(num) === 0) {
//     console.log(num, " Number is zero");
//   } else if (Number(num) > 0) {
//     console.log(num, " Number is Positive ");
//   } else {
//     console.log(num, " Number is Negative");
//   }
// }

// NumberChecker(num) 




// Excersice 2 : Multiplication Table :

// function MulTable (num){
//     for(let i=1 ; i<=10 ;i++ ){
//         console.log(num, " X ", i, " = " , num*i) ;
//     }
// }

// MulTable(num)



// Excersice 3 : Number Guessing Game :


// here the prompt is not provided by the nodejs ....use any package or library for it or use different invironment like bun / deno / brower console 

// function GuessingGame(){
//   const comp = Math.floor(Math.random()*10) ;
//   let num ;
//   do{
//      num = Number(prompt("Guess a Number :  ")) ;

//     if (num === comp) {
//       console.log("damg gotit right buddy !!!");
//       break ;
//     } else if (num < comp) {
//       console.log("its smaller !!!! 😭")
//     } else {
//       console.log("its bigger than the number to guess") ;
//     }

//   }while(true) ;
// }

// GuessingGame();



// Excersice 4 : Print even Number :-


// for (let i = 1; i <= 20; i++) {

//     if (i%2 === 0){
//         console.log(i)
//     }
// }



// Excersice 5 : sum of digit :-

// const num  = String(prompt("Enter the number :   ")) ;

// let final =  Number(num[0]);

// let i = 1;
// do {
//   final += Number(num[i]) ;
//   i++ ;

//   if (i === num.length) break ;

// } while(true) ;

// console.log(final);



// Excersice 6 : Excersice 6 :-

// for (let i = 1; i <= 50; i++) {
//     if (i%3 === 0 && i%5 === 0) {
//         console.log("FizzzzzBuzzzzzzzzz.........");
//     } else if (i%3 === 0) {
//         console.log("Fizzzzzzz"); 
//     } else if (i%5 === 0) {
//         console.log("Buzzzzzzzzz") ;
//     } else {
//         console.log(i)
//     }
// }




// Excersice 7 : prime number checker :-

// const num = Number(prompt("Enter number to check is it prime :  "));

// if (num === 2 || num === 3) {
//   console.log(num, " Number is Prime !")
// } else if (num <= 1 || (num % 2 === 0 && num !== 2)) {
//   console.log(num, "Number is Not prime !")
// } else {
//   let isPrime = true
//   let root = Math.sqrt(num);

//   for (let i = 2; i <= root; i++) {
//     if (num % i === 0) {
//       isPrime = false;
//       console.log(num, "Number is Not prime !!!")
//       break;
//     }
//   }

//   if (isPrime) console.log(num, "Number is prime !!!");
// }



// Excersice  8 : star pattern

// for (let i = 0; i < 5; i++) {
//     let row
//     for (let j = 0; j < i+1; j++) {
//         row += '* ' 
//     }
//     console.log(row)
// }



//Excersice 9 : find largest number in 3 numbers 

