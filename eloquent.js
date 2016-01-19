///------------  Minimum------------- //

// Your code here.
var min = function (x,y) {
  if (x<=y) {
    return x;
  } else return y;
};
console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10

//----------- Recursion-------------///

// Your code here.
var isEven = function(x) {
  if (x%2 == 0) {
    return true;
  }  else  {
    return false;
  };
};
console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → ??

//-------------Bean counting----------------//
// Your code here.
var countBs = function (bcount) {
var index =0;
for (i=0; i<=bcount.length; i++) {
    if (bcount.charAt(i)=='B' ) {
        index++  };
              };
  return index;
};

var countChar = function (bcount, val) {
var index =0;
for (i=0; i<=bcount.length; i++) {
    if (bcount.charAt(i)==val ) {
        index++  };
              };
  return index;
};

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4