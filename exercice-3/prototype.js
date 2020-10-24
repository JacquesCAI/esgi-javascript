String.prototype.ucfirst = function () {
  let chaine = this.valueOf();
  if (typeof chaine !== "string" || chaine === "") return "";
  return chaine.charAt(0).toUpperCase() + chaine.slice(1);
};

String.prototype.capitalize = function () {
  let chaine = this.valueOf();
  if (typeof chaine !== "string" || chaine === "") return "";
  return chaine
    .split(" ")
    .map((word) => word.toLowerCase().ucfirst())
    .join(" ");
};

String.prototype.camelCase = function camelCase() {
  let chaine = this.valueOf();
  if (typeof chaine !== "string" || chaine === "") return "";
  chaine = chaine.replace("_", " ");
  return chaine.capitalize().replace(/\W/g, "");
};

String.prototype.snake_case = function () {
  let chaine = this.valueOf();
  if (typeof chaine !== "string" || chaine === "") return "";
  return chaine.toLowerCase().replace(/\W/g, "_");
};

String.prototype.leet = function () {
  let chaine = this.valueOf();
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
};

String.prototype.verlan = function () {
  let chaine = this.valueOf();
  if (typeof chaine !== "string" || chaine === "") return "";
  return chaine
    .split(" ")
    .map((w) => w.split("").reverse().join(""))
    .join(" ");
};

String.prototype.yoda = function () {
  let chaine = this.valueOf();
  if (typeof chaine !== "string" || chaine === "") return "";
  return chaine.split(" ").reverse().join(" ");
};

String.prototype.vig = function (code) {
  let chaine = this.valueOf();
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
};

Object.prototype.prop_access = function (path) {
  let object = this;
  if (typeof object != "object" || object == null) return path + " not exist";
  if (typeof path != "string" || path === "") return object;

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
};

const prairie = { animal: { type: { name: "chien" } } };

console.log(coucou.prop_access("animal.type"));
