var titles = document.getElementsByClassName('title');

console.log(Array.isArray('title'));

// Convert HTMLCollecton to Array
console.log(Array.isArray(Array.from(titles)));


// Convert titles to Array
Array.from(titles).forEach(function(item) {
  console.log(item);
});


var lis = document.getElementsByTagName('li');
lis = Array.from(lis);

lis.forEach((item) => {
    console.log(item);
})