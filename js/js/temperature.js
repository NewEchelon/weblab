/**
 * Created by Daniel on 10/20/14.
 */


console.log(smooth([3,5,7,8,10,8]));

//var temp = [32,44,48,52,55,54,60,63,60,57,54];

function smooth(points) {
    var array = [];
    for(var i = 0; i < points.length;);

    if (i === 0 || i == points.length - 1) {

        array[i] = points[i];
    }
    else {
        array[i] = (  points[i - 1] + points[i]+ points[i+1] )/ 3;

    }


    return array;
}
