let isComplete: boolean = false;

let num: number = 20;

let color: string = "blue";
color = 'red';

let template = `Hello, my birthdate is ${num} and my favourite color is ${color}`;
console.log(template);

let oddNumList: number[] = [1,3,5,7,9];
let evenNumList:Array<number> = [2,4,6,8,10];
console.log(oddNumList)
console.log(evenNumList)

let carPrice: [string, number] = ['Ecosport', 1000000];
console.log(carPrice);
console.log('Car '+ carPrice["0"] +' has price '+carPrice["1"]);

enum DayOfWeek{SUN, MON, TUE, WED, THU, FRI, SAT};
let day:DayOfWeek = DayOfWeek.MON;  
console.log("Today is "+day);

let notSure: any = 4;
notSure = "Not really sure";
let notSureLength: number = (notSure as string).length;
notSureLength = (<string>notSure).length;
console.log(`The length of notSure is ${notSureLength}`);

function greet(): void{
    console.log("Hello world");
}
greet();
// Declaring variables of type void is not useful because you can only assign undefined or null to them

// By default null and undefined are subtypes of all other types. 

// object represents any non-primitive type.

interface Person {
    firstName: string,
    lastName: string,
    nationality?: string //Optional
}

function greeter(p: Person){
    console.log(`Greetings ${p.firstName} ${p.lastName}`);
}

let p: Person = {firstName: 'Nilesh', lastName: 'Miskin'};
greeter(p);

//members are public by default
class User {
    fullName: string;
    constructor(public firstName: string, middleName: string, public lastName: string){
        this.fullName = firstName + ' ' + middleName + ' ' + lastName;
    }

    doStuff(): void{
        console.log('User doing stuff');
    }
}

let u: User = new User('Nilesh', 'Sunil', 'Miskin');
greeter(u);

u.doStuff();

// Inheritance
class SuperUser extends User{
    doStuff(): void{
        console.log('Super user doing stuff');
    }
}

let su: User = new SuperUser('Vijay', 'Deenanath', 'Chauhan');
su.doStuff();

class Car{
    constructor(public make: string, public model: string){     
    }
}

let car = new Car('M', 'S');
console.log(car.make);