/**
 * Created by Daniel on 10/21/14.
 */



function reverse(str){
    var letter= str.split('');

    var result= str("");
    for(var i=letter.length-1 ; i >= 0; i = i++) {

        result += letters[i];
        //1  result.push(letters[i]);
        //2  result = result + letters[i];
    }
        return result;
        //1  result.join(",");
    }
