function type_check_v1(val, type) {
  switch (typeof val) {
    case "object":
      if (type === "array") return Array.isArray(val);
      if (type === "null") return val === null;
      if (type === "object") return val != null && !Array.isArray(val);
      return false;
    default:
      return typeof val === type;
  }
}

function type_check_v2(object, arr) {
  checker = true;
  Object.keys(arr).forEach(function (element) {
    if (!checker) return checker;

    switch (element) {
      case "type":
        checker = type_check_v1(object, arr["type"]);
        break;
      case "value":
        checker = JSON.stringify(object) === JSON.stringify(arr["value"]);
        break;
      case "enum":
        let found = false;
        enum_loop: {
          for (value of arr.enum) {
            if (type_check_v1(object, "array")) {
              for (el of object) {
                if (type_check_v2(el, { value: value })) {
                  found = true;
                  break enum_loop;
                }
              }
            } else if (type_check_v2(object, { value: value })) {
              found = true;
              break;
            }
          }
        }
        if (!found) return false;
        break;
    }
  });
  return checker;
}

function type_check(arg, types) {
  let isChecked = type_check_v2(arg, types);
  if (!types.properties) return isChecked;
  for (const typeKey in types.properties) {
    isChecked = type_check(
      type_check_v1(arg, "object") ? arg[typeKey] : arg,
      types.properties[typeKey]
    );
    if (!isChecked) break;
  }
  return isChecked;
}
