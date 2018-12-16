export default (direction = 'row') => ({
  display: 'flex',
  flexDirection: direction,
  [direction === 'row' ? 'alignItems' : 'justifyContent']: 'center',
});