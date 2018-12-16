export const MODE_CSS = 'css';
export const MODE_STRICT = 'strict';

const config = {
  mode: MODE_STRICT,
};

export const build = (base, config) => {
  const inject = (method, alias) =>
    base[alias] = wrap(method, base);
  config.forEach(([pack, name, alias]) => {
    const useAlias = alias || name;
    if (typeof pack === 'object') {
      Object.entries(pack).forEach(([key, method]) => {
        if (key === name) {
          inject(method, useAlias);
        } else {
          inject(method, `${useAlias}${key}`);
        }
      });
    } else {
      inject(pack, useAlias);
    }
  });
};

const chain = (base, result) => {
  const fn = (...args) => chain(
    base,
    {
      ...result,
      ...base(...args),
    },
  );
  Object
    .entries(result)
    .forEach(([key, value]) => fn[key] = value);
  Object
    .keys(base)
    .forEach(key => extend(
      fn,
      key,
      (...args) => chain(
        base,
        {
          ...result,
          ...base[key](...args),
        },
      ),
    ));
  return fn;
};

export const configure = ({ mode }) => {
  if (
    !mode
    || mode === MODE_CSS
    || mode === MODE_STRICT
  ) {
    config.mode = mode || MODE_STRICT;
  }
};

export const convert = (value = null, forceMode = '') => {
  const mode = getMode(forceMode);
  if (isEmpty(value)) {
    if (mode === MODE_CSS) {
      return 'initial';
    }
    return null;
  }
  if (mode === MODE_CSS) {
    return unit(value);
  }
  if (
    isString(value)
    && /^[ ]*[0-9.-]+(em|ms|pt|px|rm|s|vmax|vmin)?[ ]*$/.test(value)
  ) {
    const unit = (value.match(/([a-z]+)/i) || [])[0] || '';
    const num = parseInt(value, 10) || 0;
    if (unit === 's') {
      return num * 1000;
    }
    return num;
  }
  return value;
};

export const extend = (base, key, value) => Object.defineProperty(
  base,
  key,
  { enumerable: false, value },
);

export const filter = obj => Object.entries(obj).reduce(
  (result, [key, value]) => isEmpty(value)
    ? result
    : { ...result, [key]: value },
  {},
);

export const getMode = forceMode => {
  if (!forceMode) {
    return config.mode;
  }
  switch (forceMode) {
    case MODE_CSS:
      return MODE_CSS;
    case MODE_INLINE:
      return MODE_CSS;
  }
  return MODE_STRICT;
};

export const isEmpty = value => value === undefined || value === null;

export const isNumber = value => typeof value === 'number';

export const isString = value => typeof value === 'string';

const parse = (value = '') => {
  const parts = [];
  const text = `${value.trim().replace(/[ ]{2,}/g, ' ')} `;
  const length = text.length;
  let index = 0;
  let last = 0;
  let within = '';
  const commit = include => {
    if (last !== index) {
      parts.push(text.substring(last, index + (include ? 1 : 0)));
    }
    last = index + 1;
  };
  while (index !== length) {
    const char = text[index];
    if (within) {
      if (within === char || (within === '(' && char === ')')) {
        within = '';
        commit(char === ')');
      }
    } else {
      if (char === "'" || char === '"' || char === '(') {
        within = char;
        if (char !== '(') {
          last = index + 1;
        }
      } else if (char === ' ') {
        commit();
      }
    }
    index += 1;
  }
  return parts;
};

export const unit = (value = null, append = 'px') => {
  const str = `${!isEmpty(value) ? value : ''}`.trim();
  if (!str) {
    return `0${append}`;
  }
  if (/^[0-9.-]+$/.test(str)) {
    return `${parseInt(str, 10) || 0}${append}`;
  }
  return str;
};

export const wrap = (method, base) => (...args) => {
  const pass = args.length === 1 && isString(args[0])
    ? parse(args[0])
    : args;
  const raw = method(...pass);
  const safe = raw && typeof raw === 'object' ? raw : {};
  const converted = Object.entries(safe).reduce(
    (result, [key, value]) => ({
      ...result,
      [key]: convert(value),
    }),
    {},
  );
  return chain(base, converted);
};