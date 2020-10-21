function ucfirst(chaine) {
    if (typeof (chaine) != "string" || chaine === "") return "";
    return chaine.charAt(0).toUpperCase() + chaine.slice(1);
}

function capitalize(string) {
    if (typeof string !== "string" && string !== "") return "";

    return string
        .split(" ")
        .map((string) => {
            return ucfirst(string)
        }).join(" ")
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

function prop_access(obj, props) {
    if (obj === "undefined") return obj
    if (typeof props !== "string" && props !== "") return obj

    let access = props.split(".")
    let propPath = access[0]
    let value = obj

    for (let i = 0; i < access.length; i++) {
        propPath += `.${access[i]}`

        if (!value[access[i]]) {
            return `${obj} don't exist`
        }
        value = value[access[i]]
    }

    return value
}

let prairie = {
    animal : {
        type: {
            name: "chien"
        }
    }
}

function yoda(string) {
    if (typeof string !== "string" && string !== "") return ""

    return string.split(" ").reverse().join(" ")
}
