let arr = [];

function add() {
    let number = Math.round(Math.random() * 20);

    if (arr.length < 20) {
        if (!arr.includes(number)) {
            arr.push(number);
        }
        add();
    }

    return arr;

}

console.log( add() );