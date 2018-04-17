/**
HILLSIZES
1 - normal
2 - big
3 - superbig
*/
const calculateDistancePoints = (distance, hillSize, kPoint) => {
    //Punkty "na start"
    let points = 60;

    //dla ulatwienia zakladam ze skocznia jest normalna
    let pointDiff = 2;

    //aktualizacja ustawien jesli skocznia jest duza
    if(hillSize===2){
        pointDiff = 1.8;
    }

    //aktualizacja ustawien jesli skocznia jest mamucia
    if(hillSize === 3){
        pointDiff = 1.2;
        points += 60;
    }

    //Zwracam ostatecznią ilośc punktów zalezną od odległosci, punktu k i wielkosci skoczni.
    return points + (distance - kPoint)*pointDiff
};

module.exports = calculateDistancePoints;

