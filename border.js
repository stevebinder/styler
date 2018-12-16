import { isEmpty } from './utils';

export default (width, style, color, radius) => ({
  borderColor: !isEmpty(color) ? color : style,
  borderRadius: radius,
  borderStyle: !isEmpty(color) ? style : null,
  borderWidth: width,
});