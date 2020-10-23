function ucfirst(chaine) {
  if (typeof chaine !== "string" || chaine === "") return "";
  return chaine.charAt(0).toUpperCase() + chaine.slice(1);
}

function capitalize(chaine) {
  if (typeof chaine !== "string" || chaine === "") return "";
  return chaine
    .split(" ")
    .map((word) => ucfirst(word.toLowerCase()))
    .join(" ");
}

function camelCase(chaine) {
  if (typeof chaine !== "string" || chaine === "") return "";
  chaine = chaine.replace("_", " ");
  return capitalize(chaine).replace(/\W/g, "");
}

function snake_case(chaine) {
  if (typeof chaine !== "string" || chaine === "") return "";
  return chaine.toLowerCase().replace(/\W/g, "_");
}

function leet(chaine) {
  if (typeof chaine !== "string" || chaine === "") return "";
  return chaine.replace(/[aeiouy]/gi, function (e) {
    switch (e.toLowerCase()) {
      case "a":
        return 4;
      case "e":
        return 3;
      case "i":
        return 1;
      case "o":
        return 0;
      case "u":
        return "(_)";
      case "y":
        return 7;
    }
  });
}

function verlan(chaine) {
  if (typeof chaine !== "string" || chaine === "") return "";
  return chaine
    .split(" ")
    .map((w) => w.split("").reverse().join(""))
    .join(" ");
}

function yoda(chaine) {
  if (typeof chaine !== "string" || chaine === "") return "";
  return chaine.split(" ").reverse().join(" ");
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

function prop_access(object, path) {
  if (typeof path != "string") {
    return object;
  }

  if (typeof object != "object" || object == null) {
    console.log(path + " not exist");
    return;
  }
  if (path === "") {
    return object;
  }

  const props = path.split(".");
  let property = object;
  props.forEach(function (prop) {
    if (!property.hasOwnProperty(prop)) {
      console.log(path + " not exist");
      return;
    }
    property = property[prop];
  });
  return property;
}
