// 1
var user = {};
user.name = 'John';
user.surname = 'Mike';
user.name = 'Peter';
delete user.name;
console.log(user);

// 2
var fruit = {
  apple: 20,
  pear: 20,
  peach: 10
};
console.log(fruit.apple + fruit.pear + fruit.peach);
