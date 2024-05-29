

// for(let num = 1; num <= 100; num++) {
//  if(num % 5 === 0 && num % 3 === 0) {
//   console.log("FizzBuzz");
//  }
//   else if(num % 3 === 0 || num % 5 === 0) {
//   if(num % 3 === 0) {
//    console.log("Buzz");
//   }
//   if(num % 5 ===0) {
//    console.log("Fizz")
//   }
//  }else {
//   console.log(num);
//  }
 
// }

// for(let num = 1; num <= 100; num++) {
//  if(num % 3 === 0 && num % 5 === 0) {
//   console.log("FizzBuzz");
//  } else if (num % 3 === 0 || num % 5 === 0) {
//   if(num % 3 === 0) {
//    console.log("Buzz");
//   }
//   if(num % 5 === 0) {
//    console.log("Fizz");
//   }
//  } else {console.log(num)};
// }

// function chessGrid(n = 8) {
//  for(let i = 0; i < n; i++) {
//   let output = ""
//   if(i % 2 === 0) output += "#";
//   for(let j = 0; j < n; j++) {
//    if(output.length % 2 === 0) {
//     output += " "
//    } else {
//     output += "#";
//    }
//   }
//   console.log('\n');
//  }
// }

// function chessGrid(n) {
//  for(let i = 0; i < n; i++) {
//   let output = ""
//   for(let j = 0; j < n; j++) {
//    if((j + i) % 2 === 0) {
//     output += " "
//    } else {
//     output += "#";
//    }
//   }
//   console.log(output)
//   console.log('\n');
  
//  }
// }
// chessGrid(8)
// i

// let size = 8;

// const hummus = (factor) => {
//  const ingredient = (amount,unit,name) => {
//   let ingredientAmount = amount * factor;
//   if(ingredientAmount > 1) {
//    unit += "s";
//  };
//  console.log(`${ingredientAmount} ${unit} ${name}`)
//  }
//  ingredient(1, "can", "chickpeas");
//  ingredient(0.25, "cup", "tahini");
//  ingredient(0.25, "cup", "lemon juice");
//  ingredient(1, "clove", "garlic");
//  ingredient(2, "tablespoon", "olive oil");
//  ingredient(0.5, "teaspoon", "cumin");
// }

// hummus(3);

function Cell(n) {
 const value = n

 const getValue = () => value

 return () => value
}

const one = Cell(1);
const two = Cell(2);


console.log(one())
console.log(two());