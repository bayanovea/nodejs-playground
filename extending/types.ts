type Car = {
    brand: string;
    model: string;
}

type CarWithPrice = Car & {
    price: number;
}

var car1: CarWithPrice = {
    brand: "Ford",
    model: "Mustang",
    price: 10000
}

console.log(car1);