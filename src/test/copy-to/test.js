

var slice = Array.prototype.slice;


module.exports = Copy;


function Copy(src, withAccess) {
    if (!(this instanceof Copy)) return new Copy(src, withAccess);
    this.src = src;
    this._withAccess = withAccess;
}

Copy.prototype.withAccess = function (w) {
    this._withAccess = w !== false;
    return this;
};

Copy.prototype.pick = function(keys) {
    if (!Array.isArray(keys)) {
        keys = slice.call(arguments);
    }
    if (keys.length) {
        this.keys = keys;
    }
    return this;
};


Copy.prototype.to = function(to) {
    to = to || {};

    if (!this.src) return to;
    var keys = this.keys || Object.keys(this.src);

    if (!this._withAccess) {
        for (var i = 0; i < keys.length; i++) {
            key = keys[i];
            if (to[key] !== undefined) continue;
            to[key] = this.src[key];
        }
        return to;
    }

    for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        if (!notDefined(to, key)) continue;
        var getter = this.src.__lookupGetter__(key);
        var setter = this.src.__lookupSetter__(key);
        if (getter) to.__defineGetter__(key, getter);
        if (setter) to.__defineSetter__(key, setter);

        if (!getter && !setter) {
            to[key] = this.src[key];
        }
    }
    return to;
};


Copy.prototype.toCover = function(to) {
    var keys = this.keys || Object.keys(this.src);

    for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        delete to[key];
        var getter = this.src.__lookupGetter__(key);
        var setter = this.src.__lookupSetter__(key);
        if (getter) to.__defineGetter__(key, getter);
        if (setter) to.__defineSetter__(key, setter);

        if (!getter && !setter) {
            to[key] = this.src[key];
        }
    }
};

Copy.prototype.override = Copy.prototype.toCover;


Copy.prototype.and = function (obj) {
    var src = {};
    this.to(src);
    this.src = obj;
    this.to(src);
    this.src = src;

    return this;
};


function notDefined(obj, key) {
    return obj[key] === undefined
        && obj.__lookupGetter__(key) === undefined
        && obj.__lookupSetter__(key) === undefined;
}

const a= {hello: 'world'};
Copy({foo: 'nar', hello: 'copy'}).to(a);
console.log(a);