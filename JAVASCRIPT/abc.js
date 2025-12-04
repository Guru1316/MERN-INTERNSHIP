// var
console.log(a); // Undefined
var a = 10;
console.log(a);
var a = 20;
a = 20;
console.log(a);
{
    var a = 30;
    console.log(a);
}
console.log(a);

// let
// console.log(b); Referenceerror
let b = 10;
// let b = 20; SyntaxError
console.log(b);
b = 20;
console.log(b);
{
    let b = 30;
    console.log(b);
}
console.log(b);

// const
// console.log(c); ReferenceError
const c = 10;
console.log(c);
{
    const c = 20;
    console.log(c);
}
console.log(c);
// c = 30; TypeError


// Functions

// 1. Named Functions
namedFunc(); // Can be called
function namedFunc()
{
    console.log("Named Function is called");
}
// Function call
namedFunc();


// 2. Function Expression

// i) With var
// funcExp(); TypeError
var funcExp = function() {
    console.log("Function Expression is called");
}
funcExp();

// ii) With let
// funcExp2(); ReferenceError
let funcExp2 = function() {
    console.log("Function Expression is called");
}
funcExp2();

// iii) With const
// funcExp3(); ReferenceError
const funcExp3 = function() {
    console.log("Function Expression is called");
}
funcExp3();


// 3. Arrow Functions

// i) With var
// arrowFunc(); TypeError
var arrowFunc = () => {
    console.log("Arrow Function is called");
}
arrowFunc();

// ii) With let
// arrowFunc2(); ReferenceError
let arrowFunc2 = () => {
    console.log("Arrow Function is called");
}
arrowFunc2();

// iii) With const
// arrowFunc3(); ReferenceError
const arrowFunc3 = () => {
    console.log("Arrow Function is called");
}
arrowFunc3();

// 4. Callback Function (and) 5. IIFE (Immediately Invoking Function Expression)
(() => {
    console.log("Callback and IIFE Functions are called");
})()


// Functions With Parameters and Arguments
const addTwoNumbers = (parameter1, parameter2) => {
    console.log(`The value of parameter 1 is ${parameter1}`);
    console.log(`The value of parameter 2 is ${parameter2}`);
    let num1 = parameter1 || 10; 
    let num2 = parameter2 || 20;
    let sum = num1 + num2;
    // console.log("The sum of Two Numbers is: ",sum); - One Type of Printing 
    console.log(`The sum of Two Numbers is: ${sum}`);
}
addTwoNumbers(20, 50);
addTwoNumbers(40, 50);
addTwoNumbers(); // Output will be NaN - Not a Number if ( OR ) is not used
addTwoNumbers();

// typeof
var x;
console.log(typeof x);
var x = 10;
console.log(typeof x);
var x = "String"
console.log(typeof x);
var x = true;
console.log(typeof x);
var x = 1.1;
console.log(typeof x);

let i = 10;
let j = 2;
console.log(i+j);
console.log(i-j);
console.log(i*j);
console.log(i/j);

let k = "10";
let l = 2;
console.log(k+l);
console.log(k-l);
console.log(k*l);
console.log(k/l);

let m = 10;
let n = "2";
console.log(m+n);
console.log(m-n);
console.log(m*n);
console.log(m/n);

let o = "10";
let p = "2";
console.log(o+p);
console.log(o-p);
console.log(o*p);
console.log(o/p);


// Equality Operator
console.log(2 == "2");
console.log(2 === "2");


// Arrays
let arr1 = [1, 2, 3, "ass"];
let arr2 = [1, 2, 3, "ass"];
console.log(arr1 == arr2);
console.log(arr1 === arr2);
console.log(arr1[0] == arr2[0]);
console.log(arr1[0] === arr2[0]);
console.log([] == []);


// Loops

// For Loop
let arr4 = [1, 2, 3, 4, 5, 6];
console.log(arr4);
for(let i = 0; i < arr4.length; i++)
{
    arr4[i] = arr4[i] + i;
}
console.log(arr4);

// For Each Loop
let arr3 = [1, 2, 3, 4, 5, 6];
console.log(arr3);
arr3.forEach((element, index) => {
    console.log(element, index);
})
let bb = arr3.forEach((element, index) => {
    return element + index;
})
console.log(bb);

// Map
console.log(arr3);
let aa = arr3.map((element, index) => {
    return element + index;
})
console.log(aa);

let aa1 = arr3.map((element, index) => element + index); // Only for single statements
console.log(aa1);


// filter -  For filtering values : Truthy Values
let arr5 = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(arr5);
let arr5e = arr5.filter( (e) =>
 {
    return e%2 == 1;
 })
 console.log(arr5e);
 let arr5i = arr5.filter( (e, i) =>
 {
    return i>4;
 })
 console.log(arr5i);


 // reduce - Return a single value 
 let arr6 = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(arr6);
let arr6fo = arr6.reduce( (acc, e, i) =>
 {
    console.log(acc, e);
    return acc + e;
 }, 200) //  accumulator initialization
 console.log(arr6fo); //  return a single value after the given operations


// Objects
let obj =
    [
  {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  },
  {
    "id": 2,
    "name": "Ervin Howell",
    "username": "Antonette",
    "email": "Shanna@melissa.tv",
    "address": {
      "street": "Victor Plains",
      "suite": "Suite 879",
      "city": "Wisokyburgh",
      "zipcode": "90566-7771",
      "geo": {
        "lat": "-43.9509",
        "lng": "-34.4618"
      }
    },
    "phone": "010-692-6593 x09125",
    "website": "anastasia.net",
    "company": {
      "name": "Deckow-Crist",
      "catchPhrase": "Proactive didactic contingency",
      "bs": "synergize scalable supply-chains"
    }
  },
  {
    "id": 3,
    "name": "Clementine Bauch",
    "username": "Samantha",
    "email": "Nathan@yesenia.net",
    "address": {
      "street": "Douglas Extension",
      "suite": "Suite 847",
      "city": "McKenziehaven",
      "zipcode": "59590-4157",
      "geo": {
        "lat": "-68.6102",
        "lng": "-47.0653"
      }
    },
    "phone": "1-463-123-4447",
    "website": "ramiro.info",
    "company": {
      "name": "Romaguera-Jacobson",
      "catchPhrase": "Face to face bifurcated interface",
      "bs": "e-enable strategic applications"
    }
  },
  {
    "id": 4,
    "name": "Patricia Lebsack",
    "username": "Karianne",
    "email": "Julianne.OConner@kory.org",
    "address": {
      "street": "Hoeger Mall",
      "suite": "Apt. 692",
      "city": "South Elvis",
      "zipcode": "53919-4257",
      "geo": {
        "lat": "29.4572",
        "lng": "-164.2990"
      }
    },
    "phone": "493-170-9623 x156",
    "website": "kale.biz",
    "company": {
      "name": "Robel-Corkery",
      "catchPhrase": "Multi-tiered zero tolerance productivity",
      "bs": "transition cutting-edge web services"
    }
  },
  {
    "id": 5,
    "name": "Chelsey Dietrich",
    "username": "Kamren",
    "email": "Lucio_Hettinger@annie.ca",
    "address": {
      "street": "Skiles Walks",
      "suite": "Suite 351",
      "city": "Roscoeview",
      "zipcode": "33263",
      "geo": {
        "lat": "-31.8129",
        "lng": "62.5342"
      }
    },
    "phone": "(254)954-1289",
    "website": "demarco.info",
    "company": {
      "name": "Keebler LLC",
      "catchPhrase": "User-centric fault-tolerant solution",
      "bs": "revolutionize end-to-end systems"
    }
  },
  {
    "id": 6,
    "name": "Mrs. Dennis Schulist",
    "username": "Leopoldo_Corkery",
    "email": "Karley_Dach@jasper.info",
    "address": {
      "street": "Norberto Crossing",
      "suite": "Apt. 950",
      "city": "South Christy",
      "zipcode": "23505-1337",
      "geo": {
        "lat": "-71.4197",
        "lng": "71.7478"
      }
    },
    "phone": "1-477-935-8478 x6430",
    "website": "ola.org",
    "company": {
      "name": "Considine-Lockman",
      "catchPhrase": "Synchronised bottom-line interface",
      "bs": "e-enable innovative applications"
    }
  },
  {
    "id": 7,
    "name": "Kurtis Weissnat",
    "username": "Elwyn.Skiles",
    "email": "Telly.Hoeger@billy.biz",
    "address": {
      "street": "Rex Trail",
      "suite": "Suite 280",
      "city": "Howemouth",
      "zipcode": "58804-1099",
      "geo": {
        "lat": "24.8918",
        "lng": "21.8984"
      }
    },
    "phone": "210.067.6132",
    "website": "elvis.io",
    "company": {
      "name": "Johns Group",
      "catchPhrase": "Configurable multimedia task-force",
      "bs": "generate enterprise e-tailers"
    }
  },
  {
    "id": 8,
    "name": "Nicholas Runolfsdottir V",
    "username": "Maxime_Nienow",
    "email": "Sherwood@rosamond.me",
    "address": {
      "street": "Ellsworth Summit",
      "suite": "Suite 729",
      "city": "Aliyaview",
      "zipcode": "45169",
      "geo": {
        "lat": "-14.3990",
        "lng": "-120.7677"
      }
    },
    "phone": "586.493.6943 x140",
    "website": "jacynthe.com",
    "company": {
      "name": "Abernathy Group",
      "catchPhrase": "Implemented secondary concept",
      "bs": "e-enable extensible e-tailers"
    }
  },
  {
    "id": 9,
    "name": "Glenna Reichert",
    "username": "Delphine",
    "email": "Chaim_McDermott@dana.io",
    "address": {
      "street": "Dayna Park",
      "suite": "Suite 449",
      "city": "Bartholomebury",
      "zipcode": "76495-3109",
      "geo": {
        "lat": "24.6463",
        "lng": "-168.8889"
      }
    },
    "phone": "(775)976-6794 x41206",
    "website": "conrad.com",
    "company": {
      "name": "Yost and Sons",
      "catchPhrase": "Switchable contextually-based project",
      "bs": "aggregate real-time technologies"
    }
  },
  {
    "id": 10,
    "name": "Clementina DuBuque",
    "username": "Moriah.Stanton",
    "email": "Rey.Padberg@karina.biz",
    "address": {
      "street": "Kattie Turnpike",
      "suite": "Suite 198",
      "city": "Lebsackbury",
      "zipcode": "31428-2261",
      "geo": {
        "lat": "-38.2386",
        "lng": "57.2232"
      }
    },
    "phone": "024-648-3804",
    "website": "ambrose.net",
    "company": {
      "name": "Hoeger LLC",
      "catchPhrase": "Centralized empowering task-force",
      "bs": "target end-to-end models"
    }
  }
]

let objf1 = obj.map((el)=> 
    {
        return el.username
});
console.log(objf1)

let objf2 = obj.filter((el) => 
    {
        return el.id % 2==0;
    }).map((el) => {
    return el.username;
}).join(" ");
console.log(objf2)