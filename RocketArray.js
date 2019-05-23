"use strict";

/**
 * @param {number} nbr
 * @returns {object}
 */
Array.prototype.recurrent = function(nbr = 1) {
  let tmp = {};
  this.map(x => {
    if (typeof x !== "object") {
      x = x.toString();
      tmp[x] === undefined ? (tmp[x] = 1) : tmp[x]++;
    }
  });

  const thekeys = Object.keys(tmp);

  if (nbr >= thekeys.length) nbr = thekeys.length - 1;

  let re = [];

  let best = { number: 0, name: "" };

  for (let i = 0; i < nbr; i++) {
    thekeys.map(x => {
      if (tmp[x] > best.number) {
        best.number = tmp[x];
        best.name = x;
      }
    });
    re.push(best);

    delete tmp[best.name];
    best = { number: 0, name: "" };
  }

  return re;
};

/**
 * @param {string} type
 * @returns {object}
 */
Array.prototype.only = function(type = "string") {
  return this.filter(data => typeof data === type);
};

/**
 * @param {any} value
 * @returns {object}
 */
Array.prototype.pushBefore = function(value) {
  this.unshift(value);

  return this;
};

/**
 * @param {number} i
 * @param {number} number
 * @returns {object}
 */
Array.prototype.remove = function(i = 0, number = 1) {
  this.splice(i, number);

  return this;
};

/**
 * @param {object} params
 * @returns {object}
 */
Array.prototype.find = function(params) {
  let tmp = this;
  if (params.regex) tmp = tmp.filter(x => params.regex.test(x));

  if (params.morethan)
    tmp = tmp.filter((x, i) => {
      if (typeof x !== "object") {
        if (!isNaN(x)) {
          return Number(x) > params.morethan;
        } else {
          return false;
        }
      } else {
        return true;
      }
    });

  if (params.lessthan)
    tmp = tmp.filter((x, i) => {
      if (typeof tmp[i] !== "object") {
        if (!isNaN(x)) {
          return Number(x) < params.lessthan;
        } else {
          return false;
        }
      } else {
        return true;
      }
    });

  if (params.type) tmp = tmp.filter(x => typeof x === params.type);

  return tmp;
};

/**
 * @param {string} string
 * @param {object} params
 * @param {bool} valueIfNotObject
 * @param {bool} del
 * @returns {object}
 */
Array.prototype.search = function(
  string,
  params,
  valueIfNotObject = false,
  del = false
) {
  const subSearch = function(json, string, params, del = false) {
    if (!/\./.test(string)) {
      let end = true;

      if (params.regex && end) end = params.regex.test(json[string]);

      if (params.morethan && end) end = json[string] > params.morethan;

      if (params.lessthan && end) end = json[string] < params.lessthan;

      if (params.type && end) end = typeof json[string] === params.type;

      return del ? !end : end;
    } else {
      let spl = string.split(/\./g);
      return subSearch(json[spl[0]], spl.slice(1).join("."), params, del);
    }
  };

  let tmp = [];
  this.forEach(x => {
    typeof x === "object"
      ? subSearch(x, string, params, del)
        ? tmp.push(x)
        : false
      : valueIfNotObject
      ? tmp.push(x)
      : false;
  });
  return tmp;
};

/**
 * @param {object} params
 * @returns {object}
 */
Array.prototype.findJSON = function(params) {
  return this.search(params.where, params, false);
};

/**
 * @param {object} params
 * @returns {object}
 */
Array.prototype.findAndRemove = function(params) {
  let tmp = this;

  if (params.regex)
    tmp = tmp.filter((x, i) =>
      typeof x === "object" ? true : !params.regex.test(x)
    );

  if (params.morethan)
    tmp = tmp.filter((x, i) => {
      if (typeof x !== "object") {
        if (!isNaN(x)) {
          return !(Number(x) > params.morethan);
        } else {
          return true;
        }
      } else {
        return true;
      }
    });

  if (params.lessthan)
    tmp = tmp.filter((x, i) => {
      if (typeof tmp[i] !== "object") {
        if (!isNaN(x)) {
          return !(Number(x) < params.lessthan);
        } else {
          return true;
        }
      } else {
        return true;
      }
    });

  if (params.type) tmp = tmp.filter((x, i) => !(typeof x === params.type));

  return tmp;
};

/**
 * @param {object} params
 * @returns {object}
 */
Array.prototype.findAndRemoveInJSON = function(params) {
  const tmp = this.search(params.where, params, true, true);
  return this;
};

/**
 * @returns {object}
 */
Array.prototype.toString = function() {
  return JSON.stringify(this);
};

/**
 * @param {object} params
 * @returns {object}
 */
Array.prototype.mufindJSON = function(params) {
  let tmp = null;

  params.forEach(x => {
    tmp = this.search(x.where, x, false);
  });

  return tmp;
};

/**
 * @param {object} params
 * @returns {object}
 */
Array.prototype.mufindAndRemoveInJSON = function(params) {
  let tmp = null;

  params.forEach(x => {
    tmp = this.search(x.where, x, true, true);
  });

  return tmp;
};

/**
 * @returns {object}
 */
Array.prototype.removeRecurrents = function() {
  const rec = this.recurrent(this.length - 1);
  rec.map((x, i) => {
    if (x.number !== 1) {
      for (let n = 0; n <= x.number - 2; n++) {
        this.splice(this.indexOf(x.name), 1);
      }
    }
  });

  return this;
};
