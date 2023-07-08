export function toCamelCase(str: string): string {
  var regExp = /[ _-]\w/gi;
  return str.replace(regExp, function (match: string): string {
    return match.charAt(1).toUpperCase();
  });
}
