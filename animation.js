export default (name, duration, timing, delay, count, direction, fill, state) => ({
  animationName: name,
  animationDuration: duration,
  animationTimingFunction: timing,
  animationDelay: delay,
  animationIterationCount: count,
  animationDirection: direction,
  animationFillMode: fill,
  animationPlayState: state,
});