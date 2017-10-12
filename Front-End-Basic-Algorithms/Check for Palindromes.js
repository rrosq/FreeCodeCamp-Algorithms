function palindrome(str) {
    var lowerCased = str.replace(/[\W_]/g, '').toLowerCase();
    var reversed = lowerCased.split('').reverse().join('');
    return lowerCased === reversed;
  }
  
  palindrome("eye");