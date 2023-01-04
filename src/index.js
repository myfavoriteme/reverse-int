module.exports = function reverse (n) {
  let out = '';
  
  let str = (Math.abs(n)).toString();
  let len = n.length;

  for (let i = 0; i < str.length; i++) {
      out += str[str.length - i - 1];
    }

  out = out * 1;
  return out;
}
