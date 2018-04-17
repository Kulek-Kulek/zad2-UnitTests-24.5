const calculateStylePoints = (...notes) => {
    //Po tym, jak każdy z sędziów oceni skoczka, dwie skrajne noty (minimalną oraz maksymalną) się odrzuca,
    //a następnie sumuje pozostałe trzy noty.
    if (notes.length !==5) {
        return 0
    }
    //Wyliczam maksymalna note
    const maxNote = Math.max(...notes);
    
    //Wyliczam minimalną note
    const minNote = Math.min(...notes);
    
    //wyliczam sume wszsytkich pieciu not.
    const noteSum = notes.reduce((acc,curr)=>acc+curr,0);

    //podaje ostateczną ocene poprzez odjęcie skrajnych not od sumy wszystkich.
    return noteSum - maxNote - minNote;
};


//Przykład: Skoczek uzyskał noty: 16, 17, 16.5, 16, 18. Po odrzuceniu dwóch skrajnych not (16 oraz 18), jego końcowa nota za styl to 49.5.
//calculateStylePoints(16, 17, 16.5, 16, 18) === 49.5

module.exports = calculateStylePoints;
