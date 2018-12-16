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

export const make4WayExports = key => {
  const way = make4Way(key);
  return {
    [key]: way,
    t: value => way(value, 0, 0, 0),
    r: value => way(0, value, 0, 0),
    b: value => way(0, 0, value, 0),
    l: value => way(0, 0, 0, value),
  };
};