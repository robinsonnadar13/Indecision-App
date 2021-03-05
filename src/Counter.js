console.log('App.js is running!');

// JSX - JavaScript XML

const user = {
    title : "The Wizard of Oz",
    subtitle: 'By Australia',
    options : ['one','two']
};

const template = (
<div>
    <h1>{user.title}</h1>
    {user.subtitle && <p>Sub-title: {user.subtitle}</p>}
    { user.options.length > 0 ? 'Here are your options:' : 'No options'}
    <ol>
    <li>{user.options[0]}</li>
    <li>{user.options[1]}</li>
    </ol>
</div>
);

let count = 0;
const addOne = () => {
    count++;
    renderCounterApp();
};
const sutractOne = () => {
    count--;
    renderCounterApp();
};
const resetIt = () => {
    count = 0;
    renderCounterApp();
};

const appRoot = document.getElementById('app');

const renderCounterApp = () => {
const templatetwo = (
<div>
    <h1>Count:{count}</h1>
    <button onClick={addOne}>+ 1</button>
    <button onClick={sutractOne}>- 1</button>
    <button onClick={resetIt}>Reset</button>
</div>
);

ReactDOM.render(templatetwo, appRoot);
};

renderCounterApp();



