function modulo(a, b) {
  return a % b;
  // return the remainder of the division a / b
}

function squareRoot(n) {
  return Math.sqrt(n, 0.5);
  // return the square root of n
}

function raiseToPower(m, n) {
  return Math.pow(m, n);
  // return the result of raising m to the nth power
}

function formatMoney(amount) {
  return "£" + parseFloat(amount).toFixed(2);
  /**
   * return a the amount formatted into pounds sterling
   * Amounts should be a string with the £ symbol in front
   * formatMoney(2.33) => "£2.33"
   * Amounts should be rounded to 2 decimal numbers
   * formatMoney(2.338) => "£2.34"
   * Amounts should always have 2 decimal numbers even if they are zeroes
   * formatMoney(1) => "£1.00"
   */
}

function calculateCircleArea(r) {
  let area = Math.PI * (r * r);
  return parseFloat(area.toFixed(3));
  // return the area of a circle with radius r
  // round result to 3 decimal numbers
}

function calculateFullTurns(degrees) {
  let turns = degrees / 360;
  return Math.floor(turns);
  // return the number of full turns you can make with the provided degrees
  // 1 full turn === 360 degrees
}

function getLength(str) {
  return str.length;
  // return the length of the passed string
}

function putNamesTogether(firstName, lastName) {
  return firstName + " " + lastName;
  // return the first and last names with a space between them
}

function capitaliseString(str) {
  // return the passed string with its first letter capitalised
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function dontShoutSentence(SENTENCE) {
  // return the passed sentence (IN ALL CAPS) in lower case
  // keep the first character capitalised
  return SENTENCE.charAt(0).toUpperCase() + SENTENCE.toLowerCase().slice(1);
}

function getMiddle(str) {
  // return the middle (or middle two) character(s) of the passed string
  let length;
  let position;
  if (str.length % 2 === 1) {
    position = str.length / 2;
    length = 1;
  } else {
    position = str.length / 2 - 1;
    length = 2;
  }
  return str.substring(position, position + length);
}

function getLastWord(words) {
  let n = words.split(" ");
  return n[n.length - 1];
  // return the last word of a sentence
  // you can assume words doesn't have a period at the end
}

function hyphenateWords(words) {
  return words.replace(/ /g, "-");
  // return the passed string with the spaces replaced by hyphens ("-")
}

function convertToCamelCase(words) {
  let allWords = words.toLowerCase();
  for (let i = 0; i < allWords.length; i++) {
    if (allWords[i] == " ") {
      allWords =
        allWords.slice(0, i) +
        allWords.charAt(i + 1).toUpperCase() +
        allWords.slice(i + 2);
    }
  }
  return allWords.replace(/ /g);
  // convert the passed string of space-separated words to camel case
  // camel case looks like this --> camelCaseLooksLikeThis
}

function areValuesEqual(left, right) {
  // return true if the passed arguments are strictly equal
  if (left === right) {
    return true;
  } else {
    return false;
  }
}

function areValuesNotEqual(left, right) {
  // return true if the passed arguments are NOT equal
  if (left != right) {
    return true;
  } else {
    return false;
  }
}

function isFromThe60s(year) {
  // return true if the year is in the 1960's
  if (year >= 1960 && year <= 1969) {
    return true;
  } else {
    return false;
  }
}

function isEvenLength(string) {
  // return true if string has an even length
  if (string.length % 2 == 0) {
    return true;
  } else {
    return false;
  }
}

function areStringsEqualCaseInsensitive(left, right) {
  // return true if the passed strings are equal ignoring case
  if (right.toUpperCase() == left.toUpperCase()) {
    return true;
  } else {
    return false;
  }
}

function getEvenNumbers(nums) {
  let evenNums = nums.filter((i) => i % 2 === 0);
  return evenNums;
  //return an array of only the even numbers in the given array
}

function getItemsLongerThan(array, len) {
  //return an array of only the items longer than the given length
  let longest = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i].length > len) {
      longest.push(array[i]);
    }
  }
  return longest;
}

function getLastItems(array, n) {
  let lastItem = [];
  if (array === null) return 0;
  if (n === null) return array[array.length - 1];
  return array.slice(Math.max(array.length - n, 0));
  // return an array with the 'n' last items of 'array'
}

function getSandwichFilling(sandwich) {
  sandwich.shift(); // remove first
  sandwich.pop(); // remove last
  return sandwich;
  // if an array is a sandwich, the first and last items are the bread, return an array with the filling of the sandwich
}

function removeItem(array, n) {
  let new_array = array.slice();
  let removedItem = new_array.splice(n, 1);
  return new_array;
  // return a new array without the item on position 'n', effectively removing it from the array
}

function mergeArrays(arr1, arr2) {
  let arr3 = arr1.concat(arr2);
  return arr3;
  // return a new array with all the elements of arr1 followed by all the elements of arr2
}

function flattenArrayByOne(arrayOfArrays) {
  let theFlatArray = [];
  for (let i = 0; i < arrayOfArrays.length; i++) {
    for (let x = 0; x < arrayOfArrays[i].length; x++) {
      theFlatArray.push(arrayOfArrays[i][x]);
    }
  }
  return theFlatArray;
  // given a nested array or arrays, return a new array with one less level of nesting.
  // All the elements of all the original nested arrays must be kept in their original order
  // for example:
  // [[1],[2],[[3,4]]] => [1,2,[3,4]]
}

function isItemOmnipresent(arrayOfArrays, item) {
  for (let i = 0; i < arrayOfArrays.length; i++) {
    if (!arrayOfArrays[i].includes(item)) {
      return false;
    }
  }
  return true;
  // return true if the passed item is present in all the arrays inside arrayOfArrays

  //[[4], [1, 55, 3], [55], [4]], item = 55
}

/*
    This function takes a user object with a property of age.
    It should return true if the user is over 40 and
    false if the user is 40 or younger.
    */
function isOver40(user) {
  if (user.age > 40) {
    return true;
  } else {
    return false;
  }
}

function getUserAge(user) {
  return new Date().getFullYear() - user.yearOfBirth; // or 2019 - user.yearOfBirth
  // return the user's age as a number.
  // you can assume that the passed user will always have a 'yearOfBirth' property.
}

function createProduct() {
  let object = {
    type: "",
    price: 0,
  };
  return object;
  /*
    This function should return an object with a type property and a price property.
    The value for type can be any string, and the value for price should be a number.
    */
}

function addPriceToProduct(product, price) {
  /* The argument product will be an object that looks like this:
    { type: 'Tofu slices' }
    Add a price property to this object and set its value to the
    price passed in as an argument. Then return the object.
    */
  product.price = price;
  return product;
}

function getPropertyOfProduct(product, property) {
  return product[property];

  /* The argument product will be an object that looks like this:
    { type: 'Easy-peeler satsumas', price: '£1.09', quantity: 8 }
    Given a 'property' as an argument, return the value associated with that 'property'.
    E.g. if asked for the price 'property' of the above satsumas object, your function would return '£1.09'.
  */
}

function addPropertyToProduct(product, property, value) {
  product[property] = value;
  return product;
  /* The argument 'product' will be an object that looks like this:
    { type: 'Terminator 2: Judgement Day', price: '£6.99', quantity: 1 }
    Given a 'property' as an argument, as well as its corresponding value,
    update the 'product' to include this new information. Then return the updated 'product'.
    E.g. if given the 'property' 'length' and the value '2h 36m' (yes it really is that long)
    your function should return { type: 'Terminator 2: Judgement Day', price: '£6.99', quantity: 1, length: '2h 36m' }
  */
}

function createNorthcoder(name, yearOfBirth) {
  let object = {
    name: name,
    age: 2019 - yearOfBirth,
    language: "JavaScript",
  };
  return object;
  // return an object with:
  // a name property set to the value of the name parameter
  // an age property set to whatever the age of the northcoder would be in the year 2019
  // a language property set to 'JavaScript'
}

function createUserString(userObj) {
  return `name: ${userObj.name}, age: ${userObj.age}, language: ${userObj.language}`;
  // should take as an argument an object with the format from createNorthcoder
  // returns a string with the user's details in the form:
  // 'name: Mitch, age: 27, language: Javascript';
  //
  // Note - this is a good use case of string template literals.
}

function getAlbumProperties(obj) {
  return Object.keys(obj);
  // should take an object with information about an album
  // should return an array containing all of the object's keys
  // E.g. {a: 'foo', b: 'car', c: 'bar'} should return ['a', 'b', 'c']
}

function deleteManyPasswords(users) {
  for (let i = 0; i < users.length; i++) {
    delete users[i].password;
  }
  return users;

  /*
    This function take an array of user objects and deletes the password key value pair on each user object.
    E.g.
    [
      {name: 'Barry', password: 'ilovetea'},
      {name: 'Sandeep', password: 'ilovecoffee'},
      {name: 'Kavita', password: 'ilovepie'}
    ]
    Returns:
    [
      {name: 'Barry' },
      {name: 'Sandeep'},
      {name: 'Kavita'}
    ]
    */
}

function countTheObjects(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (
      typeof arr[i] === "object" &&
      !Array.isArray(arr[i]) &&
      arr[i] !== null
    ) {
      count++;
    }
  }
  return count;

  /*
    This function takes an array of different data types. It should return a count of the
    number of objects in the array.
    NB, think carefully about how to test if something is an object!
    Arrays are technically types of objects in JavaScript, as is the value null.
    However these should not be counted.
    */
}

module.exports = {
  modulo,
  squareRoot,
  raiseToPower,
  formatMoney,
  calculateCircleArea,
  calculateFullTurns,
  areValuesEqual,
  areValuesNotEqual,
  isFromThe60s,
  isEvenLength,
  areStringsEqualCaseInsensitive,
  getLength,
  putNamesTogether,
  capitaliseString,
  dontShoutSentence,
  getMiddle,
  getLastWord,
  hyphenateWords,
  convertToCamelCase,
  getEvenNumbers,
  getItemsLongerThan,
  getLastItems,
  getSandwichFilling,
  removeItem,
  mergeArrays,
  flattenArrayByOne,
  isItemOmnipresent,
  isOver40,
  getUserAge,
  createProduct,
  addPriceToProduct,
  getPropertyOfProduct,
  addPropertyToProduct,
  createNorthcoder,
  createUserString,
  getAlbumProperties,
  deleteManyPasswords,
  countTheObjects,
};
