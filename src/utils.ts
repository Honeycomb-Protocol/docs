export const camelToSnakeCase = (str) =>
  str.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`);

export const camelToSpaceCase = (str) =>
  str.replace(/[A-Z]/g, (letter) => ` ${letter}`);

export const toTitleCase = (str) =>
  str.replaceAll("_", " ").replaceAll(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
