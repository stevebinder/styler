import absolute from './absolute';
import align from './align';
import animation from './animation';
import background from './background';
import border from './border';
import center from './center';
import circle from './circle';
import color from './color';
import cover from './cover';
import dimensions from './dimensions';
import fill from './fill';
import fixed from './fixed';
import flex from './flex';
import font from './font';
import margin from './margin';
import padding from './padding';
import radius from './radius';
import square from './square';
import transition from './transition';
import transform from './transform';
import { configure, wrap } from './utils';

const styler = obj => wrap(() => obj);

styler.configure = configure;
styler.with = wrap;

[
  [animation, 'animation', 'anim', 'a'],
  [align, 'align', 'al'],
  [absolute, 'absolute', 'abs', 'a'],
  [background, 'background', 'bg'],
  [border, 'border', 'bor', 'b'],
  [center, 'center', 'cen', 'cn'],
  [circle, 'circle', 'cir'],
  [color, 'color', 'c'],
  [cover, 'cover', 'cov', 'cv'],
  [dimensions, 'dimensions', 'dimension', 'dim', 'd'],
  [fill, 'fill', 'fil'],
  [fixed, 'fixed', 'fix'],
  [flex, 'flex', 'fl', 'fx'],
  [font, 'font', 'fnt', 'f'],
  [margin, 'margin', 'mar', 'm'],
  [padding, 'padding', 'pad', 'p'],
  [radius, 'radius', 'rad', 'r'],
  [square, 'square', 'sq'],
  [transition, 'transition', 'ts', 't'],
  [transform, 'transform', 'tf'],
].forEach(([method, ...aliases]) => {
  const wrapped = wrap(method, styler);
  aliases.forEach(alias => styler[alias] = wrapped);
})

export default styler;