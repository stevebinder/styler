import { isEmpty } from './utils';

export default (grow, shrink, basis) => ({
  flexBasis: !isEmpty(basis) ? basis : 'auto',
  flexGrow: grow,
  flexShrink: !isEmpty(shrink) ? shrink : grow,
});