// {
//     name: "dani",
//     city: "fuenla",
//     address: {
//         postcode: 28940,
//         street: "calle llalalalal"
//     }
// }

// as per standard, the class name starts with uppercase
class Citizen {
    constructor(nameParam, cityParam, postCodeParam = null, streetParam) {
        // implicit
        // var this = {}

        if (typeof postCodeParam !== "number")    {
            console.log("poor dios, pon un número")
            return
            // throw new TypeError("postcode must be a number");
        }

        this.name = nameParam;
        this.city = cityParam;
        this.address = {
            postcode: postCodeParam,
            street: streetParam
        }

        //implicit
        // return this
    }
}

// let cristina = new Citizen("cristina", "las rozas", 28999, "amor de dios")

// let henche = new Citizen("henche", "las rozas", 28999, "amor de dios")

let citizensArray = [
    new Citizen("cristina", "las rozas", 28999, "amor de dios"),
    new Citizen("henche", "las rozas", 28999, "amor de dios")
]

// this receives an Array of Citizen objects
function printReport(x){
    x.forEach((citizen) => console.log(citizen.name))
    x.forEach((citizen) => console.log(citizen.address.postcode))
}

debugger
printReport(citizensArray)

// // s1 / s2 => formal parameters
// // sum => function name
// function sum(s1, s2) {
//     return s1 + s2;
// }

// sum(10, 50)