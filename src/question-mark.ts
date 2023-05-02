//ternary operator

const age = 22;
const isAdult = age <= 18 ? 'yes' : 'no'
console.log(isAdult);


// nullish coalesnace operator
// null undefined

const isAuthenticatedUser = '';
const userName1 = isAuthenticatedUser ?? 'guest';
const userName2 = isAuthenticatedUser ? isAuthenticatedUser : 'Guest'
console.log({ userName1 }, { userName2 });


type Manus = {
    name: string;
    age: number;
    address: {
        city: string;
        road: string;
        home?: "";
    }
}
const manus: Manus = {
    name: 'abir ali',
    age: 25,
    address: {
        city: 'city',
        road: 'road',
    }
}

const home = manus?.address?.home ?? "no home";
console.log({ home });
