import absolute from './absolute';
import align from './align';
import animation from './animation';
import background from './background';
import border from './border';
import center from './center';
import circle from './circle';
import color from './color';
import fixed from './fixed';
import flex from './flex';
import font from './font';
import height from './height';
import margin from './margin';
import padding from './padding';
import square from './square';
import transition from './transition';
import transform from './transform';
import { build, configure, extend, wrap } from './utils';
import width from './width';

const styler = obj => wrap(() => obj, styler)();

extend(styler, 'configure', configure);
extend(styler, 'then', wrap);

build(styler, [
  [animation, 'animation', 'an'],
  [align, 'align', 'al'],
  [absolute, 'absolute', 'abs'],
  [background, 'background', 'bg'],
  [border, 'border', 'b'],
  [center, 'center'],
  [circle, 'circle'],
  [color, 'color', 'c'],
  [fixed, 'fixed', 'fix'],
  [flex, 'flex', 'fl'],
  [font, 'font', 'f'],
  [height, 'height', 'h'],
  [margin, 'margin', 'm'],
  [padding, 'padding', 'p'],
  [square, 'square', 'sq'],
  [transition, 'transition', 'tr'],
  [transform, 'transform', 'tf'],
  [width, 'width', 'w'],
]);

export default styler;