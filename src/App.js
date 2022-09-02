import React from "react";

function sum (a,b){
  let sum = a+b;
  return sum;
}
function mul (a,b){
  let mult = a*b;
  return mult;
}
function div (a,b){
  let divis = a/b;
  divis = divis.toFixed(4);
  return divis;
}
function sub (a,b){
  let subt = a-b;
  return subt;
}
export {sum,div,mul,sub};