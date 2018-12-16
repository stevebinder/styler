import { getMode, MODE_STRICT } from './utils';

export default (...parts) => {
  const transform = (() => {
    if (getMode() !== MODE_STRICT) {
      return parts.join(' ');
    }
    return parts.reduce(
      (result, part) => {
        const type = part.split('(')[0];
        const values = (part.split('(')[1] || '').split(')')[0].split(/,[ ]+/);
        const next = [ ...result ];
        if (/[XY]$/.test(type)) {
          next.push({ [type]: convertStyleValue(values[0]) });
        } else {
          next.push({ [`${type}X`]: convertStyleValue(values[0]) });
          if (values[1]) {
            next.push({ [`${type}X`]: convertStyleValue(values[1]) });
          }
          if (values[2]) {
            next.push({ [`${type}X`]: convertStyleValue(values[2]) });
          }
        }
        return next;
      },
      [],
    );
  })();
  return {
    transform,
    transformOrigin: undefined,
  };
};