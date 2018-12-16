export default (property, duration, timing, delay) => ({
  transitionDelay: delay,
  transitionDuration: duration,
  transitionProperty: property,
  transitionTimingFunction: timing,
});