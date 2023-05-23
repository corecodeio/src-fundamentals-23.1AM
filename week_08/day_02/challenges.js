// Extending JavaScript Objects: Get First & Last Array Element

// OUT OF THE BOX!

var a = [];

Array.prototype.first = function() {
  if (this.length > 0) {
    return this[0];
  }
  return undefined;
}

Array.prototype.last = function() {
  if (this.length > 0) {
    return this[this.length - 1];
  }
  return undefined;
}


console.log(a.first())
console.log(a.last())

/* a.first();  // 2
a.last();   // 4 */


