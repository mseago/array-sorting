
function sortFood() {
  var food = ['steak', 'shrimp', 'apples'];
  return sortedFood = food.sort();
}

console.log('food', sortFood()); // -> apples, shrimp, steak

var people = [
  { name: 'Sue', age: 65 },
  { name: 'Bob', age: 40 },
  { name: 'Dirk', age: 27 },
  { name: 'Naaman', age: 35 },
  { name: 'George', age: 97 }
];

function sortPeopleByAgeAscending() {
  people.sort(function (a, b) {
    if (a.age > b.age) {
      return 1;
    }
    if (a.age < b.age) {
      return -1;
    }
    return 0;
  });
  return ageAscending = people.sort();
};

console.log('sort by age', sortPeopleByAgeAscending()); // -> Dirk, then Naaman, then Bob, then Sue, and finally George


function sortPeopleByNameDescending() {
  people.sort(function (a,b) {
    var nameA = a.name.toLowerCase();
    var nameB = b.name.toLowerCase();
    if (nameA < nameB) {
      return 1;
    }
    if (nameA > nameB) {
      return -1;
    }
    return 0;
  })
  return nameDescending = people.sort();
}

console.log('sort by name', sortPeopleByNameDescending()); // -> Sue, then Naaman, then George, then Dirk, and finally Bob
