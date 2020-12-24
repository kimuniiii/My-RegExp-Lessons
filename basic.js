const pattern = /^\d{3}-?\d{4}$/g;
const postcode = "121-4440";
const result = postcode.match(pattern);
console.log(result); // [ '121-4440' ]
