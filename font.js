export default (style, variant, weight, size, family) => {
  const parts = [style, variant, weight, size, family];
  return {
    fontFamily: parts[parts.length - 1],
    fontSize: parts[parts.length - 2],
    fontVariant: parts[parts.length - 4],
    fontStyle: parts[parts.length - 5],
    fontWeight: parts[parts.length - 3],
  };
};