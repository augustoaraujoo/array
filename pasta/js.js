function htmlColorNames(arr) {
  arr.splice(0, 2, "DarkSalmon", "BlanchedAlmond");
  //➡️ retirando "1", "2" de suas indices  e colocando "DarkSalmon", "BlanchedAlmond" em seus lugares
  return arr;
}

console.log(htmlColorNames(["1", "2", "3", "4"]));
