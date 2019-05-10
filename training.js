let num = 12344555;

console.log(num.toString().length);

var n = 123456;
n = n + "";
var output = n.replace(/^(.{2}).*$/, "$1");
console.log(output);