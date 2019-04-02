var sentence = ("Believe you can and you're halfway there. Theodore Roosevelt").split("");
var vowels = ["a","e","i","o","u"];
  for (var index = 0; index <= sentence.length; index ++) {
    if (vowels.includes(sentence[index])){
      sentence[index] = ("-");
    }
  }
  sentence = sentence.join("");
  document.write(sentence);
