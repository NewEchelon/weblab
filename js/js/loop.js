/**
 * Created by Daniel on 10/16/14.
 */


function findLongestWord(str){

    var words =  str.trim().split(" ");
console.log(words);
    var longest = {
        word: '',
        length:0

    }

        for (var i=0; i< words.length; i++){
            var word= words[i];
            if(word.length> longest.length){
                longest=word;
            }

        }
return longest;


}

console.log(findLongestWord('hello to your mother'))