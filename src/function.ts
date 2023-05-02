function add(num1: number, num2: number): number {
    return num1 + num2;
}

const addArrow = (num1: number, num2: number): number => num1 + num2;

add(2, 3)


//spread operator
const myFriends = ['a', 'b', 'c']
const newFriends = ['d', 'e']

myFriends.push(...newFriends)
console.log(myFriends);


//rest operator
const greetFriends = (...friends: string[]): void =>
    friends.forEach((friend) => console.log(`hi ${friend}`));

greetFriends('abul', 'kabul', 'babul')