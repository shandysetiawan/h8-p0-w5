function changeVocals(name) {
  var result = "";

  for (var i = 0; i < name.length; i++) {
    var word = name[i];

    switch (word) {
      case "a":
        result += "b";
        break;
      case "i":
        result += "j";
        break;
      case "u":
        result += "v";
        break;
      case "e":
        result += "f";
        break;
      case "o":
        result += "p";
        break;
      case "A":
        result += "B";
        break;
      case "I":
        result += "J";
        break;
      case "U":
        result += "V";
        break;
      case "E":
        result += "F";
        break;
      case "O":
        result += "P";
        break;
      default:
        result += name[i];
    }
  }
  return result;
}

function reverseWord(name) {
  var reverse = "";
  for (var i = name.length - 1; i >= 0; i--) {
    reverse += name[i];
  }
  return reverse;
}

function setLowerUpperCase(name) {
  var lowerUpper = "";
  for (var i = 0; i < name.length; i++) {
    if (name[i] === name[i].toUpperCase()) {
      lowerUpper += name[i].toLowerCase();
    } else if (name[i] === name[i].toLowerCase()) {
      lowerUpper += name[i].toUpperCase();
    } else {
      lowerUpper += name[i];
    }
  }
  return lowerUpper;
}

function removeSpaces(name) {
  //code di sini
  var space = "";
  for (var i = 0; i < name.length; i++) {
    if (name[i] != " ") {
      space += name[i];
    }
  }
  return space;
}

function passwordGenerator(name) {
  if (name.length < 5) {
    return "Minimal karakter yang diinputkan adalah 5 karakter";
  }

  var vocal = changeVocals(name);
  var rev = reverseWord(vocal);
  var upLow = setLowerUpperCase(rev);
  var remove = removeSpaces(upLow);

  return remove;
}

console.log(passwordGenerator("Sergei Dragunov")); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator("Dimitri Wahyudiputra")); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator("Alexei")); // 'JFXFLb'
console.log(passwordGenerator("Alex")); // 'Minimal karakter yang diinputkan adalah 5 karakter'
