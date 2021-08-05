function checkSpam(str) {
let result = false;
let ucStr = str.toUpperCase();
if (ucStr.includes('1XBET') || ucStr.includes('XXX')) {
result = true;
}
return result;
}
