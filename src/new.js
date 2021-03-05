//Arrow Functions Part-1

const getFirstName = (fullname) => {
    let firstName;
    firstName = fullname.split(' ')[0];
    return firstName;
};

console.log(getFirstName('Robinson Nadar'));

const getFirstNamefor = (fullname) => fullname.split(' ')[1];
console.log(getFirstNamefor('Jaby Koay'));

//Arrow Functions Part-2

const multiplier = {
    numbers : ['1','2','3'],
    multiplyBy : 3,
    multiply() {
        return this.numbers.map((digit) => digit * (this.multiplyBy));
    }
};
console.log(multiplier.multiply());
