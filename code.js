// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

function sayHello(input){

    if (typeof input === "string" && isNaN(input)) {
            return "Hello, " + input + "!"

    }

    return "Hello, World!";
}


// function sayHello(input){
//
//     if (typeof input === "string") {
//
//         if (isNaN(input)){
//             return "Hello, " + input + "!"
//         }
//     }
//
//     return "Hello, World!";
// }

