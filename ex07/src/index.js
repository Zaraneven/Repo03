function main() {

var studlyCapVar;
var properCamelCase;
var titleCaseOver;

var studlyCapVar = 10;
var properCamelCase = "A string";
var titleCaseOver = 9000;

return {
    studlyCapVar,
    properCamelCase,
    titleCaseOver
}
}

console.log(main());

module.exports = main;