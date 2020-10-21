function ucfirst(chaine) {
    if (typeof (chaine) != "string" || chaine === "") return "";
    return chaine.charAt(0).toUpperCase() + chaine.slice(1);
}

function capitalize(chaine) {
    if (typeof (chaine) != "string" || chaine === "") return "";

    let str = "";
    let words = chaine.split(" ");
    for (let i = 0; i < words.length; i++) {
        if (i > 0) {
            str += " ";
        }
        str += ucfirst(words[i]);
    }
    return str;
}

function camelCase(chaine) {
    if (typeof (chaine) != "string" || chaine === "") return "";

    let str = "";
    let words = chaine.split(" ");
    for (let i = 0; i < words.length; i++) {
        str += i > 0 ? ucfirst(words[i]) : words[i];
    }
    return str;
}

function snake_case(chaine) {
    if (typeof (chaine) != "string" || chaine === "") return "";

    let str = "";
    let words = chaine.split(" ");
    for (let i = 0; i < words.length; i++) {
        if (i > 0) {
            str += "_";
        }
        str += words[i].toLowerCase();
    }
    return str;
}

function leet(string) {
    if (typeof string !== "string" && string !== "") return "";

    const cryptage = {
        "a": 4,
        "e": 3,
        "i": 1,
        "o": 0,
        "u": "(_)",
        "y": 7
    }

    string = string.toLowerCase()

    for (const cryptageKey in cryptage) {
        if (string.indexOf(cryptageKey) !== -1) {
            string = string.replace(new RegExp(cryptageKey, 'g'), cryptage[cryptageKey])
        }
    }

    return string;
}

console.log(leet("j'AIME les spagetti"));
console.log(leet("annaconda"))