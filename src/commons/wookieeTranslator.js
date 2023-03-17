const LOOKUP_WOOKIEE_TO_ENGLISH = {
  ra: 'a',
  rh: 'b',
  oa: 'c',
  wa: 'd',
  wo: 'e',
  ww: 'f',
  rr: 'g',
  ac: 'h',
  ah: 'i',
  sh: 'j',
  or: 'k',
  an: 'l',
  sc: 'm',
  wh: 'n',
  oo: 'o',
  ak: 'p',
  rq: 'q',
  rc: 'r',
  c: 's',
  ao: 't',
  hu: 'u',
  ho: 'v',
  oh: 'w',
  k: 'x',
  ro: 'y',
  uf: 'z',
};

const toWookie = (str) => {
  if (!str) return undefined;
  let wookie = '';
  const reverseLookup = Object.keys(LOOKUP_WOOKIEE_TO_ENGLISH).reduce((newLookup, key) => {
    const value = LOOKUP_WOOKIEE_TO_ENGLISH[key];
    newLookup[value] = key;
    return newLookup;
  }, {});

  const chars = str.split('');

  for (const c of chars) {
    wookie += (reverseLookup[c]);
  }
  return wookie;
};

const fromWookie = (str) => {
  if (!str) return undefined;
  const chars = str.split('');
  const lookup = LOOKUP_WOOKIEE_TO_ENGLISH;
  let english = '';
  let offset = 0;
  while (offset < chars.length) {
    const cur = chars[offset];
    const nxt = chars.slice(offset, offset + 2).join('');
    if (lookup[cur]) {
      english += lookup[cur];
    } else if (lookup[nxt]) {
      english += lookup[nxt];
      offset += 1;
    } else {
      english += cur;
    }
    offset += 1;
  }

  return english;
};

const getValueFromWookieeBody = (wookieeBody, key) => fromWookie(wookieeBody[toWookie(key)]);

module.exports = {
  LOOKUP_WOOKIEE_TO_ENGLISH,
  toWookie,
  fromWookie,
  getValueFromWookieeBody,
};
