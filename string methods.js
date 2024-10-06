//String Methods

let a = 'I am '
let b = 'MK Millat'

let c = a.concat(b)
console.log(c);

let d = c.substring(5, 12)
console.log(d);

console.log(c.charAt(6));

console.log(a.startsWith('I'));
console.log(c.endsWith('Millat'));

console.log(c.toUpperCase());
console.log(c.toLowerCase());
console.log('       Millat      '.trim());
console.log(c.split(' '));
console.log(c.slice(3, 12));

console.log(c.lastIndexOf('t'));
console.log(c.replace(a, 'Khandokar Millat '));
console.log(c.length);
console.log(a.valueOf());
console.log(c.normalize());
console.log(c.includes(a, b));
console.log(c.includes(1|| 'x'));