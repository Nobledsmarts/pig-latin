function translatePigLatin(str) {
  let beginsWithVowel = /^[aeiou]/.test(str);
  let hasVowelSound  = /[aeiou]/.test(str);
  let clusters = /^((s(chw|ch|hr|pl|qu|pr|cr|ph)|thr)|b(l|r)|c(l|r)|f(l|r)|g(l|r)|p(l|r)|sl|dr|t(r|w)|s(c|k|m|n|p|t|w))/;

  if(beginsWithVowel) return str + "way";
  if(!hasVowelSound) return str + "ay";

  if(clusters.test(str)){
    let matches = str.match(clusters);
    let matchLen = matches[0].length;

    return str.slice(matchLen) + str.slice(0,
    matchLen) + "ay";
  }

  return str.slice(1) + str[0] + "ay"
}
console.log(translatePigLatin("consonant"));
