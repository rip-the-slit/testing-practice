function caesarCipher(string, factor) {
  return string.split("").reduce((result, char) => {
    const charCode = char.charCodeAt(0);
    let shiftedCharCode = charCode + factor;
    if (charCode < 65 || (charCode > 90 && charCode < 97) || charCode > 122)
      return result + char;
    if (shiftedCharCode > 122) {
      if (charCode >= 97) shiftedCharCode = 97 + ((shiftedCharCode - 97) % 26);
      else shiftedCharCode = 65 + ((shiftedCharCode - 65) % 26);
    }
    return result + String.fromCharCode(shiftedCharCode);
  }, "");
}

module.exports = caesarCipher;
