 
 module.exports = function zeros(exp) {
 //const test = function zeros(exp) {

  let acum = [];
  let splitedStr = exp.split('*');
  let stack = [];
  let flag = false;
  let badNumbers = [33,55,77,99];

  splitedStr.forEach((item) => {
    stack.push(item.split('!')[0]);
  });
  flag = stack.every(item => {
    return badNumbers.some(_ => {
      return _ == item;
    });
  });
  splitedStr.map((item) => {
    let checkFact = item.split('!');
    let additive = Math.floor(checkFact[0]/25);
    let preRes = 0;
    if (checkFact.length === 3) {
      preRes = doubleFactNulls(checkFact[0])
      acum.push(preRes);
    } else if (checkFact.length === 2) {
      preRes = Math.floor(checkFact[0]/5) + additive;
      acum.push(preRes);
    }
  });

  return flag == true ? 0 : acum.reduce((a,b) => {return a + b});
}

const doubleFactNulls = (item) => {
  res = 0;
  for (let i = item; i > 0; i = i - 2) {
    if (i % 5 == 0) {
      res++;
    }
    if (i % 25 == 0) {
      res++;
    }
  }

  return res;
}
//console.log(test('100!*100!!'));
