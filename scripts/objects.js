let person = {
    firstName : "Peter",
    lastName : "Doobes",
    greeting : "Hey hey people",
    greet : function(){
        console.log(this.greeting)
    },
}

let album = {
    title : "Quaristice",
    artist : "Autechre",
    format : "Vinyl LP",
    lengthSeconds: 1184,
    tracklist : new Map([
        [1, "Altibzz"],
        [2, "The Plc"],
        [3, "IO"],
        [4, "plyPhon"],
        [5, "Perlence"],
        [6, "SonDEremawe"],
        [7, "Simmm"],
        [8, "paralel Suns"],
        [9, "Steels"],
        [10, "Tankakern"],
        [11, "rale"],
        [12, "Fol3"],
        [13, "fwzE"],
        [14, "90101-5l-l"],
        [15, "bnc Castl"],
        [16, "Theswere"],
        [17, "WNSN"],
        [18, "chenc9"],
        [19, "Notwo"],
        [20, "Outh9x"],
    ])
}

let pet = {
    species : "dog",
    subspecies : "chihuahua",
    name : "Rusty",
    sex : 0, //0 for male, 1 for female
    age : "8",
    sound : "Bark!",
    tricksKnown : [
        "rollover",
        "speak",
    ],
    speak : function() {
        console.log(this.sound)
    },
    call : function() {
        console.log(`C'mere, ${this.name}!`);
    },
    playDead : function() {
        if (this.tricksKnown.includes("playdead", 0)) {
            console.log(`Good ${this.sex ? "girl" : "boy"}!`)
        } else {
            console.log(`${this.sex ? "She" : "He"} doesn't seem to know that trick...`)
        }
    },
    teachTrick : function(trick) {
        this.tricksKnown.push(trick);
    },
}

pet.speak();
pet.call();
pet.playDead();
pet.teachTrick("playdead");
pet.playDead();

let numset = {
    description : "Odd numbers",
    contents : [
        1,
        3,
        5,
        7,
        9,
        303,
    ],
    add : function(value) {
        for (num of this.contents) {
            if (value == num) {return false;}
        } //This is a SET so duplicate values are not allowed to be added
        this.contents.push(parseInt(value));
        return true; //Return true on successful add
    },
}

function countUnique(list) {
    let set = new Set(list);
    let ct;
    for (item of set) {;
        ct = 0;
        for (let g = 0; g < list.length; g++) {
            if (list[g] === item) {ct++;}
        }
        console.log(`${item} appears ${ct} time${ct > 1 ? "s" : ""}`)
    }
}

let letterList = [];
let input;
while (true) {
    input = prompt("Enter an item or enter 0 to terminate")
    if (input === "0") {break;}
    else {letterList.push(input.toLowerCase());}
}
countUnique(letterList);
