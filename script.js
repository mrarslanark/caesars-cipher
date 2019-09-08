function rot13() {
  var inputVal = document.querySelector("#value").value;
  var paragraph = document.querySelector("#result");

  if (inputVal == "" || inputVal == null) {
    paragraph.innerHTML = "Enter something!";
  } else {
    paragraph.innerHTML = cipherConversion(inputVal);
  }
}

function cipherConversion(str) {
  return str
    .split("")
    .map.call(str, function(char) {
      let x = char.charCodeAt(0);

      if (x < 65 || x > 90) {
        return String.fromCharCode(x);
      } else if (x < 78) {
        return String.fromCharCode(x + 13);
      }

      return String.fromCharCode(x - 13);
    })
    .join("");
}
