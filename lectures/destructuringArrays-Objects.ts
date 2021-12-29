
// Destructuring arrays

let medals: string[] = ["gold", "silver", "bronze"]

// inefficient
//let first: string = medals[0];
//let second: string = medals[1];
//let third: string = medals[2];


let [first, second, third] = medals;


let person = {
    fname: "Audrey",
    address: "9034 Manhattan",
    phone: '0343244434'
}

//let fname: string = person.name;
let { fname, address, phone } = person;

