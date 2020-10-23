function ucfirst(str) {
  if (typeof str !== "string" || !str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function capitalize(str) {
  if (typeof str !== "string" || !str) return "";
  return str
    .split(" ")
    .map(function (item) {
      return ucfirst(item);
    })
    .join(" ");
}

function snake_case(str) {
  if (typeof str !== "string" || !str) return "";
  return str.toLowerCase().replace(/[^a-z0-9]/g, "_");
}

function leet(chaine) {
  if (typeof chaine != "string" || chaine === "") return "";
  const toCrypt = {
    A: 4,
    E: 3,
    I: 1,
    O: "0",
    U: "(_)",
    Y: 7,
  };

  for (let key in toCrypt) {
    chaine = chaine.replace(new RegExp(key, "g"), toCrypt[key]);
    chaine = chaine.replace(new RegExp(key.toLowerCase(), "g"), toCrypt[key]);
  }
  return chaine;
}

function verlan(str) {
  if (typeof str !== "string" || !str) return "";

  return str
    .split(" ")
    .map(function (word) {
      return word.split("").reverse().join("");
    })
    .join(" ");
}

function yoda(str) {
  if (typeof str !== "string" || !str) return "";
  return str.split(" ").reverse().join(" ");
}

function vig(chaine, code) {
  if (
    typeof chaine != "string" ||
    chaine === "" ||
    typeof code != "string" ||
    code === ""
  )
    return "";

  chaine = chaine.toLowerCase();

  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  let numByAlpha = {};
  let alphaByNum = {};

  for (let i = 0; i < alphabet.length; i++) {
    numByAlpha[alphabet.charAt(i)] = i;
    alphaByNum[i] = alphabet.charAt(i);
  }

  let nbSpace = 0;
  let res = "";
  for (let i = 0; i < chaine.length; i++) {
    let char = chaine[i];

    if (char !== " ") {
      let charNumber = numByAlpha[char];
      let charCode = code[(i - nbSpace) % code.length];
      let charCodeNumber = numByAlpha[charCode];

      charNumber += charCodeNumber;
      charNumber %= Object.keys(numByAlpha).length;
      char = alphaByNum[charNumber];
    } else {
      nbSpace += 1;
    }

    res += char;
  }

  return res;
}

function prop_access(obj, path) {
  return (
    path.split(".").reduce((prev, curr) => {
      return prev ? prev[curr] : null;
    }, obj) || path + " not exist"
  );
}

let prairie = {
  animal: {
    color: ["rouge", "bleu"],
    type: {
      name: "TOTO",
    },
  },
};
