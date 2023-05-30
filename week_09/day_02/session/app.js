// ======= Display ==========
const display = document.querySelector("#display");
const setDisplayValue = (value) => {
    display.innerHTML = value;
}

// ======= Numbers ==========
const zero = document.querySelector('#zero');
const one = document.querySelector('#one');
const two = document.querySelector('#two');
const three = document.querySelector('#three');
const four = document.querySelector('#four');
const five = document.querySelector('#five');
const six = document.querySelector('#six');
const seven = document.querySelector('#seven');
const eight = document.querySelector('#eight');
const nine = document.querySelector('#nine');

const numbers = [
    zero,
    one,
    two,
    three,
    four,
    five,
    six,
    seven,
    eight,
    nine,
];

numbers.forEach((element, index) => {
    element.addEventListener('click', () => {
        const currentValue = display.innerHTML;
        let newValue = `${currentValue}${index}`;
        if (currentValue === '0') {
            newValue = index;
        }
        setDisplayValue(newValue);
    })
});

// ======= AC ==========
const ac = document.querySelector('#ac')
ac.addEventListener('click', () => {
    setDisplayValue(0);
});

// ======= SIGN ==========
const sig = document.querySelector('#sig');
sig.addEventListener('click', () => {
    let currentValue = Number(display.innerHTML);
    setDisplayValue(currentValue * -1);
});

// ======= DOT ==========
const dot = document.querySelector('#dot');
dot.addEventListener('click', () => {
    const currentValue = display.innerHTML;
    if (!currentValue.includes('.')) {
        setDisplayValue(`${currentValue}.`);
    }
})
