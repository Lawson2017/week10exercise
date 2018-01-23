var array1 = ['saw-whet', 'pygmy', 'screech', 'great horned', 'barn']
console.log(array1.length);

for(var i = 0; i < array1.length; i++) {
	console.log(array1[i].length);
}

console.log(array1.reverse());



var array2 = [40, 28, 57, 1, 370];
array2.sort(function(a, b) {
  return a - b;
});
console.log(array2);

var array2 = [40, 28, 57, 1, 370];
array2.sort(function(a, b) {
  return b - a;
});
console.log(array2);



var array3 = ['string1', 'string2', 'string3'];
console.log(array3)

array3.push('string4', 'string5')
console.log(array3)

array3.shift()
console.log(array3)
