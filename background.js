export default (color, image, repeat, position, size, origin, clip, attachment) => ({
  backgroundAttachment: attachment,
  backgroundClip: clip,
  backgroundColor: color,
  backgroundImage: image,
  backgroundOrigin: origin,
  backgroundPosition: position,
  backgroundRepeat: repeat,
  backgroundSize: size,
});