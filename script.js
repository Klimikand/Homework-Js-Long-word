

    

function longWord(word){

    if (word.length > 10) {
        return (word[0] + (word.length - 2) + word[word.length - 1]);
    } 
    return word;
}

const word = longWord('internationalization');

console.log(word)



//   var longWordTests = [
//       {
//           parameters: ["localization"],
//           expectedResult: "l10n"
//       },
//       {
//           parameters: ["internationalization"],
//           expectedResult: "i18n"
//       },
//       {
//           parameters: ["word"],
//           expectedResult: "word"
//       },
//       {
//           parameters: [""],
//           expectedResult: ""
//       },
//       {
//           parameters: ["1"],
//           expectedResult: "1"
//       }
//   ];
    

