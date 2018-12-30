//
// Object destucturing
//
/*
const person = {
  name: 'Andrew',
  age: 26,
  location: {
    city: 'Moscow',
    temp: 10,
  },
};

const { name: firstName = 'Anonymous', age } = person;

console.log(`${firstName} is ${age}.`);

const { city, temp: temperature } = person.location;
if (city && temperature) {
  console.log(`It's ${temperature} in ${city}`);
}

const book = {
  title: 'Ego is the enemy',
  author: 'Ryan Holiday',
  publisher: {
    name: 'Penguin',
  },
};

const { name: publisherName = 'Self-Published'} = book.publisher;

console.log(publisherName);
*/
//
// Array destucturing
//

const address = [ '1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147' ];
const [ , city, state ] = address;
console.log(`You are in ${city} ${state}.`);

const item = [ 'Coffee (hot)', '$2.00', '$2.50', '$2.75' ];
const [ product, , price ] = item;
console.log(`A medium ${product} costs ${price}`);