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
    if (typeof(chaine) != "string" || chaine === "") return "";

    let str = "";
    let words = chaine.split(" ");
    for(let i=0;i<words.length;i++) {
        str += ucfirst(words[i].toLowerCase());
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

function prop_access(obj, path) {
    if (typeof(obj) != "object") return path;
    if (typeof(path) != "string" || path === "") return obj;
    let pathSplitted = path.split(".");
    for (let elem of pathSplitted) {
        if (typeof(obj[elem]) == "undefined") {
            return path;
        }
        obj = obj[elem]
    }
    return obj
}


let prairie = {
    animal : {
        type: {
            name: "chien"
        }
    }
}