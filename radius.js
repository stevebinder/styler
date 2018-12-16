import { make4Way } from './helpers';
import { isEmpty } from './utils';

export default (topLeft, topRight, bottomLeft, bottomRight) => {
  if (
    isEmpty(topRight)
    && isEmpty(bottomLeft)
    && isEmpty(bottomRight)
  ) {
    return {
      borderRadius: topLeft,
    };
  }
  const values = make4Way('')(topLeft, topRight, bottomLeft, bottomRight);
  return {
    borderTopLeftRadius: values.Top,
    borderTopRightRadius: values.Right,
    borderBottomRightRadius: values.Bottom,
    borderBottomLeftRadius: values.Left,
  };
};