
console.log('App.js is running!');

// JSX - JavaScript XML

const user = {
    title : "The Wizard of Oz",
    subtitle: 'By Australia',
    options : []
};

let count = 0;
const appRoot = document.getElementById('app');

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;

    if(option){
        user.options.push(option);
        e.target.elements.option.value = '';
        renderCounterApp();
    }
};

const onFormChangekar = () => {
    
        user.options = [];
        renderCounterApp();
    
};

const renderCounterApp = () => {
const template = (
<div>
    <h1>{user.title}</h1>
    {user.subtitle && <p>Sub-title: {user.subtitle}</p>}
    { user.options.length > 0 ? 'Here are your options:' : 'No options'}
    <p>{user.options.length}</p>
        <button onClick={onFormChangekar}>Remove All</button>
    <ol>
    {user.options.map((option) => {
        return <li key={option}>{option}</li>;
    })
    }
    </ol>
    <form onSubmit={onFormSubmit}>
        <input type="text" name="option"/>
        <button>Add Option</button>
    </form>
</div>
);
ReactDOM.render(template, appRoot);
};

renderCounterApp();


//Function, Class and Sub-Class

class Person {
    constructor(name= 'Anonymous', age = 0){
        this.name = name;
        this.age = age;
    }
    getDescription() {
       return this.name + ' is ' + this.age + ' year(s) old.';
    }
}

class Traveler extends Person{
    constructor(name,age,homelocation){
        super(name,age);
        this.homelocation = homelocation;
    }
    hashomelocation(){
        return !!this.homelocation;
    }
    getDescription(){
        let description = super.getDescription();

        if(this.hashomelocation()){
            description += " I'm visiting from " + this.homelocation;
        }

        return description;
    }
}

const me = new Traveler('Robinson Nadar', 20, 'Mumbai');
console.log(me.getDescription());

const other = new Traveler();
console.log(other.getDescription());




