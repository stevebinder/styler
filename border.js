import { isEmpty } from './utils';

const makeBorder = (direction = '') =>
  (width, style, color, radius) => {
    const is = (key, value) => {
      if (!direction || direction === key) {
        return value;
      }
      return null;
    };
    return {
      borderTopColor: is('Top', color),
      borderTopStyle: is('Top', style),
      borderTopWidth: is('Top', width),
      borderRightColor: is('Right', color),
      borderRightStyle: is('Right', style),
      borderRightWidth: is('Right', width),
      borderBottomColor: is('Bottom', color),
      borderBottomStyle: is('Bottom', style),
      borderBottomWidth: is('Bottom', width),
      borderLeftColor: is('Left', color),
      borderLeftStyle: is('Left', style),
      borderLeftWidth: is('Left', width),
      borderTopLeftRadius: is('Top', radius),
      borderTopRightRadius: is('Right', radius),
      borderBottomRightRadius: is('Bottom', radius),
      borderBottomLeftRadius: is('Left', radius),
    };
  };

export default {
  border: makeBorder(),
  t: makeBorder('Top'),
  r: makeBorder('Right'),
  b: makeBorder('Bottom'),
  l: makeBorder('Left'),
};