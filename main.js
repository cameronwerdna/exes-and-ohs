function XO(str) {
  let charMap = {}
  
  for (let i of str.toLowerCase()) {
    charMap[i] = charMap[i] + 1 || 1
  }
  
  if (charMap['x']=== charMap['o']) {
    return true
  } else {
    return false
  }
}


console.log(XO('xxoo')) // -> true
console.log(XO('abxcdXeooL')) // -> true
console.log(XO('zdfXcmfool')) // -> false