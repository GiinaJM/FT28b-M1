'use strict'

function BinarioADecimal(num) {
  // tu codigo aca

  var dec=num.split("");
  dec=dec.reverse();



}

function DecimalABinario(num) {
  // tu codigo aca

  var bin=[];

for (var i=0; i<100 ; i++){

  bin.unshift(num%2);
  num=Math.floor(num/2);

  if (num===1){
    bin.unshift(num%2);
    i=100;
  }
  }

  return bin.join('');

}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}