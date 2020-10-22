function ucfirst(chaine) {
  if (typeof chaine !== "string" || chaine === "") return "";
  return chaine.charAt(0).toUpperCase() + chaine.slice(1);
}

function capitalize(chaine) {
  if (typeof chaine !== "string" || chaine === "") return "";
  return chaine.split(' ').map(word => ucfirst(word.toLowerCase())).join(' ');
}

function camelCase(chaine) {
  if (typeof chaine !== "string" || chaine === "") return "";
  return capitalize(chaine).replace(/\W/g, '');
}

function snake_case(chaine) {
  if (typeof chaine !== "string" || chaine === "") return "";
  return chaine.toLowerCase().replace(/\W/g, '_');
}

function leet(chaine) {
  if (typeof chaine !== "string" || chaine === "") return "";
  return chaine.replace(/[aeiouy]/gi, function($e) {
      switch (e.toLowerCase()) {
          case 'a':
              return 4;
          case 'e':
              return 3;
          case 'i':
              return 1;
          case 'o':
              return 0;
          case 'u':
              return '(_)';
          case 'y':
              return 7;
      }
  });
}

function verlan(chaine) {
  if (typeof chaine !== "string" || chaine === "") return "";
  return chaine.split(' ').map(w => w.split('').reverse().join('')).join(' ');
}

function yoda(chaine) {
  if (typeof chaine !== "string" || chaine === "") return "";
  return chaine.split(' ').reverse().join(' ');
}

function vig(str, code) {
  while (code.length < str.length) {
<<<<<<< HEAD
      code += code;
  }
  let codeIndex = 0;
  return str.split("").map(function(car) {
      car = car.toLowerCase();
      const carCode = car.charCodeAt(0) - "a".charCodeAt(0);

      if (carCode < 0 || carCode > 25) return car;
      const codeCode = code[codeIndex++].charCodeAt(0) - "a".charCodeAt(0);

      const encodedCode = (carCode + codeCode) % 26;

      return String.fromCharCode(encodedCode + 'a'.charCodeAt(0));
  }).join('');
}

function prop_access(obj, path) {
  return path.split('.').reduce((prev, curr) => {
      return prev ? prev[curr] : null
  }, obj) || path + " not exist";
}
=======
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
>>>>>>> aec2f6e5a0cf6cfdcbfd3ff29dc9469f45d26908
