import { convert, isEmpty } from './utils';

export const makePosition = position => (top, right, bottom, left) => ({
  bottom: bottom,
  left: left,
  position,
  right: right,
  top: top,
});

export const make4Way = key => (top, right, bottom, left) => {
  const a = top;
  const b = !isEmpty(right) ? right : a;
  const c = !isEmpty(bottom) ? bottom : a;
  const d = !isEmpty(left) ? left : b;
  return {
    [`${key}Bottom`]: c,
    [`${key}Left`]: d,
    [`${key}Right`]: b,
    [`${key}Top`]: a,
  };
};