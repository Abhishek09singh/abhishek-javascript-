const name = "abhishek"
const repoCount =  50

// console.log(name + repoCount + "value");

console.log(`my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String ('habhishek-hc')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());

// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('e'));


const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-9, 4)
console.log(anotherString);



const newstringOne = "    abhsiehk      "
console.log(newstringOne);
console.log(newstringOne.trim());


const url = "https://www.abhisheksing%.com/thakurshahab"
console.log(url.replace('%', 'mahakal'));

console.log(url.includes('thakurshahab'))

console.log(gameName.split('-'));