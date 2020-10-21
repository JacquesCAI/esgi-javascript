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

function leet(str) {
  if (typeof str !== "string" || !str) return "";

  const vowel = {
    a: 4,
    e: 3,
    i: "1",
    o: "0",
    u: "(_)",
    y: 7,
  };

  let chars = str; //.split('')

  let finalStr = "";
  for (let char of chars) {
    finalStr += vowel[char.toLowerCase()] || char;
  }

  return finalStr;

  return str.replace(/[aeiouy]/gi, function (char) {
    return vowel[char.toLowerCase()] || char;
  });
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

function vig(str, code) {
  while (code.length < str.length) {
    code += code;
  }
  let codeIndex = 0;
  return str
    .split("")
    .map(function (car) {
      car = car.toLowerCase();
      const carCode = car.charCodeAt(0) - "a".charCodeAt(0);

      if (carCode < 0 || carCode > 25) return car;
      const codeCode = code[codeIndex++].charCodeAt(0) - "a".charCodeAt(0);

      const encodedCode = (carCode + codeCode) % 26;

      return String.fromCharCode(encodedCode + "a".charCodeAt(0));
    })
    .join("");
}

function prop_access(obj, path) {
  return path.split('.').reduce((prev, curr) => {
      return prev ? prev[curr] : null
  }, obj) || path + " not exist";
}

let prairie = {
  animal: {
    color: ["rouge", "bleu"],
    type: {
      name: "TOTO",
    },
  },
};
