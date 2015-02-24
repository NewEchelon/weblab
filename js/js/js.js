/**
 * Created by Daniel on 10/16/14.
 */



function isSpeeding(speed, isBirthday ) {

    if (isBirthday) {

        speed = speed - 5;
    }

    if (speed <= 60) {
        return 0;
    }

    if (speed > 60 && speed <= 80) {
        return 1;
    }

    if (speed > 80) {
        return 2;
    }
}

    console.log(isSpeeding(62));

    console.log(isSpeeding(62, true));
    console.log(isSpeeding(62, false));






