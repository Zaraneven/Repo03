function main() {

    var x = 10;
    var y = 10;
    x = y;
    
    return [x,y];
}

console.log(main());

module.exports = main;