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
        str += ucfirst(words[i].toLowerCase());
    }
    return str;
}


function camelCase(chaine) {
    if (typeof(chaine) != "string" || chaine === "") return "";

    let str = "";
    let string = chaine.replace('_',' ');
    let words = string.split(" ");
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

function leet(chaine) {
    if (typeof(chaine) != "string" || chaine === "") return ""
    const toCrypt = {
        A: 4,
        E: 3,
        I: 1,
        O: "0",
        U: "(_)",
        Y: 7
    }

    for (let key in toCrypt) {
        chaine = chaine.replace(new RegExp(key, 'g'), toCrypt[key]);
        chaine = chaine.replace(new RegExp(key.toLowerCase(), 'g'), toCrypt[key]);
    }
    return chaine;
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

function verlan(chaine) {
    if (typeof (chaine) != "string" || chaine === "") return "";

    return chaine.split(" ").map((word) => {
        return word.split("").reverse().join("")
    }).join(" ")
}

function yoda(chaine) {
    if (typeof (chaine) != "string" || chaine === "") return "";

    return chaine.split(" ").reverse().join(" ")
}

function vig(key, chaine) {
    if (typeof key !== "string" && key !== "") return ""
    if (typeof (chaine) != "string" || chaine === "") return "";

    const msgLength = chaine.length
    const keyLength = key.length

    let cryptage = "";

    for (let i = 1; i < msgLength; i++) {
        let charCode = chaine.charCodeAt(i-1)-65
        let decalage = key.charCodeAt((i-1)%keyLength)-65
        let char = String.fromCharCode(65+(charCode+decalage)%26)

        cryptage += char
    }

    return cryptage
}

