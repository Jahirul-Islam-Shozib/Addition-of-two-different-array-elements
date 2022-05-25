"use scrict";

var strTotal = [];

const arrSum = function (strArr1, strArr2) {
  for (let i = 0; i < strArr1.length; i++) {
    strTotal.push(strArr1[i] + strArr2[i]);
  }
  console.log(strTotal);
  return strTotal;
};
var strArr1 = [1, 2, 3, 4, 5, 6];
var strArr2 = [7, 8, 9, 10, 11, 12];
arrSum(strArr1, strArr2);
