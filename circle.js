import { isString } from './utils';

export default (size = '100%') => ({
  borderRadius: (() => {
    if (!isString(size)) {
      return (+size || 0) / 2;
    }
    if (size.includes('%')) {
      const num = parseInt(size, 10);
      return `${num / 2}%`;
    }
    if (size.includes('px')) {
      const num = parseInt(size, 10);
      return num / 2;
    }
    return 9999;
  })(),
  height: size,
  width: size,
});