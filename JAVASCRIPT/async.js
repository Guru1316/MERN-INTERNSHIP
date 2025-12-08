// setTimeout(() => {console.log("SetTimeout Function")}, 2000);

// // callback fun and timer
// console.log("Hello World");

// // Callback Hell
// // Nested Callbacks
// setTimeout(() => {
//     console.log("SetTimeout Function 1");
//     setTimeout(() => {
//         console.log("SetTimeout Function 2");
//         // return
//         setTimeout(() => {
//             console.log("SetTimeout Function 3");
//             setTimeout(() => {
//                 console.log("SetTimeout Function 4");
//                 setTimeout(() => {
//                     console.log("SetTimeout Function 5");
//                 }, 2000)
//             }, 2000)
//         }, 2000)
//     }, 2000)
// }, 2000)

// promises
//  3 state
//  1. pending
//  2. fulfilled(res)
//  3. rejected(rej)

// Promise Pass a callback function with two parameters
// let myPromise = new Promise((res, rej) => {
//     let marks = 50;
//     if(marks >= 60)
//     {
//         res("Student is passed");
//     }
//     else
//     {
//         rej("Student is failed");
//     }
// });

// ways to call a promise
// .then() and .catch()
// myPromise
// .then((a) => {
//     console.log(a);
// })
// .catch((err) => {
//     console.log(err);
// })

// async and await
// no error handling
// let handlePromise = async() => {
//     try 
//     {
//         let response = await myPromise;
//         console.log(response);
//         console.log("Anything");
//     }
//     catch(err)
//     {
//         console.log(err);
//     }
//     finally
//     {
//         console.log("Executes anyway");

//     }
// }

// handlePromise();

// let fetchData = async () => {
//     fetch("https://jsonplaceholder.typicode.com/todos").then((res) => {
//         console.log(res);
//         return res.json();
//     })
//     .then((data) => {
//         console.log(err);
//     })
//     .catch((err) => {
//         console.log(err);
//     });
// };

let fetchData = async () => {
    try
    {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos");
        console.log(response);
        const data = await response.json();
        localStorage.setItem("responseData", JSON.stringify(data));
        console.log("Value is ",data);
    }
    catch(err)
    {
        console.log(err);
    }
}
let localDat = JSON.parse(localStorage.getItem("responseData")) || [];

if(localDat.length <= 0)
{
    fetchData();
}