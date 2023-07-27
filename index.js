class Formatter {
  //add static methods here
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-' ]+/g, "");
  }

  static titleize(string) {
    let newString = string.charAt(0).toUpperCase() + string.slice(1);
    return newString.replace(
      /\w\S*/g,
      function(txt) {
        const noCaps = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
        if (noCaps.indexOf(txt) < 0) {
          return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        } else {
          return txt;
        }
      }
    );
  }
}