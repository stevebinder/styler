# Styler

## Story

<details>
  <summary>Joe is a software engineer...</summary>

Joe is a software engineer at the world's greatest tech company. He's pretty great when it comes to styling components. Some would even call him the master. Let's look at an  example of a common styling workflow that Joe sees every day.

The first file Joe opens this morning is a component written by his coworker Jim who sucks at coding. Jim has written this ugly thing and Joe knows he can make it shine:

```js
const styles = {
  container: {
    position: 'absolute',
    left: '0px',
    top: '0px',
  },
  content: {
    fontFamily: 'Arial',
    fontSize: '16px',
    paddingRight: '5px',
    paddingTop: '10px',
  },
  close: {
    position: 'absolute',
    left: '50px',
    top: '0px',
  },
};

export default () => (
  <div style={styles.container}>
    <p style={styles.content}>Hello World</p>
    <button style={styles.close}>Close</button>
  </div>
);
```

Pretty soon Joe leans back in his chair with a smug look on his face. He's made Jim's ugly code more concise. I mean, just look at this thing of beauty:

```js
const absolute = {
  position: 'absolute',
  left: '0px',
  top: '0px',
};
const styles = {
  container: absolute,
  content: {
    font: '16px Arial',
    padding: '10px 5px 0 0',
  },
  close: { ...absolute, top: '50px' },
};

export default () => (
  <div style={styles.container}>
    <p style={styles.content}>Hello World</p>
    <button style={styles.close}>Close</button>
  </div>
);
```

Nice job Joe! You really showed Jim. You should go over and shove your commit in his face! Better yet, demand he reviews your PR immediately.

But wait just a second there Joe... here comes Joy, she is the office know-it-all. While you've been too busy plotting your next malevolent move she's swooped in and is carefully studying your code.

"That's obtuse!" Joy says, "Why don't you do it this way!?"

Joe has no idea what she's talking about. The code is perfect. Stunned, Joy grabs Joe's keyboard and produces this little gem:

```js
import styler from 'styler';

const styles = {
  container: styler.absolute(0,,,0);
  content: styler
    .font(16, 'Arial')
    .padding(10, 5),
  close: styler.absolute(50),
};

export default () => (
  <div style={styles.container}>
    <p style={styles.content}>Hello World</p>
    <button style={styles.close}>Close</button>
  </div>
);
```

What on earth just happened!? Joe says, he's completely stunned. onfounded, Joe stares at his screen while the drool pours from his bottom lip.

But just then Joe remembers: he is pretty slick. He wipes the drool from his face, does a little studying, and within the hour is producing masterpieces like this to the amazement of his coworkers:

```js
import s from 'styler';

const styles = {
    container: s.cover(),
    header: s.dim('50 100%').bg('#000').c('#fff').font('20px Arial'),
    text: s.c('#fff').p('10px'),
};

export default () => (
  <div style={styles.container}>
    <h1 style={styles.header}>Welcome</h1>
    <p style={styles.text}>To Joe's Awesome Website</p>
  </div>
);
```

Joe is now the office hero. Not only is he twice as fast at styling and can't control the urge to grin menacingly at Jim... who still sucks.
</details>

## Cheatsheet

|Method|Alias|
|---|---|
|**absolute**```(top, right, bottom, left)```|abs|
|**align**(direction = 'row')|al|
|**animation**```(name, duration, timing, delay, count, direction, fill, state)```|anim, a|
|**background**```(color, image, repeat, position, size, origin, clip, attachment)```|bg|
|**border**```(width, style, color, radius)```|b|
|**center**```()```|cen, cn|
|**circle**```(size)```|cir|
|**cover**```(position = 'absolute')```|cov, cv|
|**dimensions**```(height, width)```|dimension, dim, d|
|**fill**```()```||
|**fixed**```(top, right, bottom, left)```|fix|
|**flex**```(grow, shrink, basis)```|fl, fx|
|**font**```(style, variant, weight, size, family)```|fnt, f|
|**margin**```(top, right, bottom, left)```|mar, m|
|**padding**```(top, right, bottom, left)```|pad, p|
|**radius**```(topLeft, topRight, bottomLeft, bottomRight)```|rad, r|
|**square**```(size)```|sq|
|**transition**```(...args)```|ts, t|
|**transform**```(...args)```|tr|

## Configuration
By default, Styler runs in **strict** mode which means it converts all numerical values to numbers. However, you may want to generate valid css in which case all numerical values will be converted to strings.

|input|strict output|css output|
|---|---|---|
|```0``` or ```"0px"```|```0```|```"0px"```|
|```0.5``` or ```"0.5"```|```0```|```"0px"```|
|50 or ```"50px"```|```50```|```"50px"```|
|100 or ```"100ms"```|```100```|```"100ms"```|
|```"200deg"```|```"200deg"```|```"200deg"```|

_** Note that units other than px, pt, ms, and s will not be converted._

Change to **css** mode by calling **Styler.configure** in your index file:

```js
Styler.configure({ mode: 'css' });
```


