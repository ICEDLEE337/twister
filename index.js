const { randomInt } = require("crypto");

function main() {
    console.log(new Date().toISOString(), spin())
}

function spin() {
    const colors = ['blue', 'yellow', 'red', 'green', 'wild', 'white'];
    const parts = ['left foot', 'right hand', 'left hand', 'right foot', 'nose', 'belly button'];

    const chosenColor = choose(colors);
    const chosenPart = choose(parts);

    return `${chosenPart} ${chosenColor}`;
}

function choose(things) {
    let choice;
    const max = things.length;

    while (!choice) {
        const number = randomInt(max);
        choice = things[number];
    }

    return choice;
}

main();