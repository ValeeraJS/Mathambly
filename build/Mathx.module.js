const COLOR_HEX_MAP = {
    aliceblue: 0xF0F8FF,
    antiquewhite: 0xFAEBD7,
    aqua: 0x00FFFF,
    aquamarine: 0x7FFFD4,
    azure: 0xF0FFFF,
    beige: 0xF5F5DC,
    bisque: 0xFFE4C4,
    black: 0x000000,
    blanchedalmond: 0xFFEBCD,
    blue: 0x0000FF,
    blueviolet: 0x8A2BE2,
    brown: 0xA52A2A,
    burlywood: 0xDEB887,
    cadetblue: 0x5F9EA0,
    chartreuse: 0x7FFF00,
    chocolate: 0xD2691E,
    coral: 0xFF7F50,
    cornflowerblue: 0x6495ED,
    cornsilk: 0xFFF8DC,
    crimson: 0xDC143C,
    cyan: 0x00FFFF,
    darkblue: 0x00008B,
    darkcyan: 0x008B8B,
    darkgoldenrod: 0xB8860B,
    darkgray: 0xA9A9A9,
    darkgreen: 0x006400,
    darkgrey: 0xA9A9A9,
    darkkhaki: 0xBDB76B,
    darkmagenta: 0x8B008B,
    darkolivegreen: 0x556B2F,
    darkorange: 0xFF8C00,
    darkorchid: 0x9932CC,
    darkred: 0x8B0000,
    darksalmon: 0xE9967A,
    darkseagreen: 0x8FBC8F,
    darkslateblue: 0x483D8B,
    darkslategray: 0x2F4F4F,
    darkslategrey: 0x2F4F4F,
    darkturquoise: 0x00CED1,
    darkviolet: 0x9400D3,
    deeppink: 0xFF1493,
    deepskyblue: 0x00BFFF,
    dimgray: 0x696969,
    dimgrey: 0x696969,
    dodgerblue: 0x1E90FF,
    firebrick: 0xB22222,
    floralwhite: 0xFFFAF0,
    forestgreen: 0x228B22,
    fuchsia: 0xFF00FF,
    gainsboro: 0xDCDCDC,
    ghostwhite: 0xF8F8FF,
    gold: 0xFFD700,
    goldenrod: 0xDAA520,
    gray: 0x808080,
    green: 0x008000,
    greenyellow: 0xADFF2F,
    grey: 0x808080,
    honeydew: 0xF0FFF0,
    hotpink: 0xFF69B4,
    indianred: 0xCD5C5C,
    indigo: 0x4B0082,
    ivory: 0xFFFFF0,
    khaki: 0xF0E68C,
    lavender: 0xE6E6FA,
    lavenderblush: 0xFFF0F5,
    lawngreen: 0x7CFC00,
    lemonchiffon: 0xFFFACD,
    lightblue: 0xADD8E6,
    lightcoral: 0xF08080,
    lightcyan: 0xE0FFFF,
    lightgoldenrodyellow: 0xFAFAD2,
    lightgray: 0xD3D3D3,
    lightgreen: 0x90EE90,
    lightgrey: 0xD3D3D3,
    lightpink: 0xFFB6C1,
    lightsalmon: 0xFFA07A,
    lightseagreen: 0x20B2AA,
    lightskyblue: 0x87CEFA,
    lightslategray: 0x778899,
    lightslategrey: 0x778899,
    lightsteelblue: 0xB0C4DE,
    lightyellow: 0xFFFFE0,
    lime: 0x00FF00,
    limegreen: 0x32CD32,
    linen: 0xFAF0E6,
    magenta: 0xFF00FF,
    maroon: 0x800000,
    mediumaquamarine: 0x66CDAA,
    mediumblue: 0x0000CD,
    mediumorchid: 0xBA55D3,
    mediumpurple: 0x9370DB,
    mediumseagreen: 0x3CB371,
    mediumslateblue: 0x7B68EE,
    mediumspringgreen: 0x00FA9A,
    mediumturquoise: 0x48D1CC,
    mediumvioletred: 0xC71585,
    midnightblue: 0x191970,
    mintcream: 0xF5FFFA,
    mistyrose: 0xFFE4E1,
    moccasin: 0xFFE4B5,
    navajowhite: 0xFFDEAD,
    navy: 0x000080,
    oldlace: 0xFDF5E6,
    olive: 0x808000,
    olivedrab: 0x6B8E23,
    orange: 0xFFA500,
    orangered: 0xFF4500,
    orchid: 0xDA70D6,
    palegoldenrod: 0xEEE8AA,
    palegreen: 0x98FB98,
    paleturquoise: 0xAFEEEE,
    palevioletred: 0xDB7093,
    papayawhip: 0xFFEFD5,
    peachpuff: 0xFFDAB9,
    peru: 0xCD853F,
    pink: 0xFFC0CB,
    plum: 0xDDA0DD,
    powderblue: 0xB0E0E6,
    purple: 0x800080,
    rebeccapurple: 0x663399,
    red: 0xFF0000,
    rosybrown: 0xBC8F8F,
    royalblue: 0x4169E1,
    saddlebrown: 0x8B4513,
    salmon: 0xFA8072,
    sandybrown: 0xF4A460,
    seagreen: 0x2E8B57,
    seashell: 0xFFF5EE,
    sienna: 0xA0522D,
    silver: 0xC0C0C0,
    skyblue: 0x87CEEB,
    slateblue: 0x6A5ACD,
    slategray: 0x708090,
    slategrey: 0x708090,
    snow: 0xFFFAFA,
    springgreen: 0x00FF7F,
    steelblue: 0x4682B4,
    tan: 0xD2B48C,
    teal: 0x008080,
    thistle: 0xD8BFD8,
    tomato: 0xFF6347,
    turquoise: 0x40E0D0,
    violet: 0xEE82EE,
    wheat: 0xF5DEB3,
    white: 0xFFFFFF,
    whitesmoke: 0xF5F5F5,
    yellow: 0xFFFF00,
    yellowgreen: 0x9ACD32
};

class ColorRGBA extends Uint8Array {
    constructor(r = 0, g = 0, b = 0, a = 255) {
        super(4);
        this[0] = r;
        this[1] = g;
        this[2] = b;
        this[3] = a;
    }
    get r() {
        return this[0];
    }
    set r(val) {
        this[0] = val;
    }
    get g() {
        return this[1];
    }
    set g(val) {
        this[1] = val;
    }
    get b() {
        return this[2];
    }
    set b(val) {
        this[2] = val;
    }
    get a() {
        return this[3];
    }
    set a(val) {
        this[3] = val;
    }
}

class ColorRGB extends Uint8Array {
    constructor(r = 0, g = 0, b = 0) {
        super(3);
        this[0] = r;
        this[1] = g;
        this[2] = b;
    }
    get r() {
        return this[0];
    }
    set r(val) {
        this[0] = val;
    }
    get g() {
        return this[1];
    }
    set g(val) {
        this[1] = val;
    }
    get b() {
        return this[2];
    }
    set b(val) {
        this[2] = val;
    }
}

var ceilPowerOfTwo = (value) => {
    return Math.pow(2, Math.ceil(Math.log(value) / Math.LN2));
};

/**
 * @function clamp
 * @desc 将目标值限定在指定区间内。假定min小于等于max才能得到正确的结果。
 * @see clampSafe
 * @param {number} val 目标值
 * @param {number} min 最小值，必须小于等于max
 * @param {number} max 最大值，必须大于等于min
 * @returns {number} 限制之后的值
 * @example Mathx.clamp(1, 0, 2); // 1;
 * Mathx.clamp(-1, 0, 2); // 0;
 * Mathx.clamp(3, 0, 2); // 2;
 */
var clampCommon = (val, min, max) => {
    return Math.max(min, Math.min(max, val));
};

/**
 * @function floorToZero
 * @desc 以0为中心取整
 * @param {number} num 数值
 * @return {number} 取整之后的结果
 * @example Mathx.roundToZero(0.8 ); // 0;
 * Mathx.roundToZero(-0.8); // 0;
 * Mathx.roundToZero(-1.1); // -1;
 */
var floorToZeroCommon = (num) => {
    return num < 0 ? Math.ceil(num) : Math.floor(num);
};

let circle, v;
/**
 * @function clampCircle
 * @desc 将目标值限定在指定周期区间内。假定min小于等于max才能得到正确的结果。
 * @param {number} val 目标值
 * @param {number} min 最小值，必须小于等于max
 * @param {number} max 最大值，必须大于等于min
 * @returns {number} 限制之后的值
 * @example Mathx.clampCircle(3 * Math.PI, 0, 2 * Math.PI); // Math.PI;
 * Mathx.clampCircle(2 * Math.PI, -Math.PI, Math.PI); // 0;
 */
var clampCircle = (val, min, max) => {
    circle = max - min;
    v = floorToZeroCommon(min / circle) * circle + (val % circle);
    if (v < min) {
        return v + circle;
    }
    else if (v > max) {
        return v - circle;
    }
    return v;
};

/**
 * @function clampSafe
 * @desc 与clamp函数功能一样，将目标值限定在指定区间内。但此函数是安全的，不要求第二个参数必须小于第三个参数
 * @see clamp
 * @param {number} val 目标值
 * @param {number} a 区间中一个最值
 * @param {number} b 区间中另一个最值
 * @returns {number} 限制之后的值
 * @example Mathx.clamp(1, 0, 2); // 1;
 * Mathx.clamp(1, 2, 0); // 1;
 * Mathx.clamp(-1, 0, 2); // 0;
 * Mathx.clamp(-1, 2, 0); // 0;
 * Mathx.clamp(3, 0, 2); // 2;
 * Mathx.clamp(3, 2, 0); // 2;
 */
var clampSafeCommon = (val, a, b) => {
    if (a > b) {
        return Math.max(b, Math.min(a, val));
    }
    else if (b > a) {
        return Math.max(a, Math.min(b, val));
    }
    return a;
};

const DEG_360_RAD = Math.PI * 2;
const EPSILON = Math.pow(2, -52);

/**
 * @function closeTo
 * @desc 判断一个数是否在另一个数的邻域内，通常用于检验浮点计算是否精度在EPSILON以内
 * @param {number} val 需要判断的数值
 * @param {number} target 目标数值
 * @param {number} [epsilon = Number.EPSILON] 邻域半径
 * @example Mathx.closeTo(0.1 + 0.2, 0.3); // true;
 * Mathx.clamp(2, 3, 1); // true;
 * Mathx.clamp(2, 3, 0.5); // false;
 */
var closeToCommon = (val, target, epsilon = EPSILON) => {
    return Math.abs(val - target) <= epsilon;
};

var floorPowerOfTwo = (value) => {
    return Math.pow(2, Math.floor(Math.log(value) / Math.LN2));
};

var isPowerOfTwo = (value) => {
    return (value & (value - 1)) === 0 && value !== 0;
};

var randFloat = (min = 0, max = 1) => {
    return min + Math.random() * (max - min);
};

var randInt = (min = 0, max = 1) => {
    return min + Math.floor(Math.random() * (max - min + 1));
};

let len = 0, sum = 0;
/**
 * @function sumArray
 * @desc 求数组的和
 * @see sum
 * @param {number[]} arr
 * @returns {number} 和
 * @example Mathx.sumArray([1, 2, 3]); // 6;
 */
var sumArray = (arr) => {
    sum = 0;
    len = arr.length;
    for (let i = 0; i < len; i++) {
        sum += arr[i];
    }
    return sum;
};

/**
 * @function sum
 * @desc 求参数之和
 * @see sumArray
 * @param {number[]} arr
 * @returns {number} 和
 * @example Mathx.sumArray(1, 2, 3); // 6;
 * Mathx.sumArray(1, 2, 3, 4, 5); // 15;
 */
var sum$1 = (...arr) => {
    return sumArray(arr);
};

let a00 = 0, a01 = 0, a10 = 0, a11 = 0;
let b00 = 0, b01 = 0, b10 = 0, b11 = 0, det = 0;
let x = 0, y = 0;
const UNIT_MATRIX2_DATA = [
    1, 0,
    0, 1,
];
const UNIT_MATRIX2 = new Float32Array(UNIT_MATRIX2_DATA);
const add = (a, b, out) => {
    out[0] = a[0] + b[0];
    out[1] = a[1] + b[1];
    out[2] = a[2] + b[2];
    out[3] = a[3] + b[3];
    return out;
};
const adjoint = (a, out) => {
    a00 = a[0];
    out[0] = a[3];
    out[1] = -a[1];
    out[2] = -a[2];
    out[3] = a00;
    return out;
};
const closeTo = (a, b) => {
    a00 = a[0];
    a10 = a[1];
    a01 = a[2];
    a11 = a[3];
    b00 = b[0];
    b10 = b[1];
    b01 = b[2];
    b11 = b[3];
    return closeToCommon(a00, b00) && closeToCommon(a01, b01) && closeToCommon(a10, b10) && closeToCommon(a11, b11);
};
const create = (a = UNIT_MATRIX2_DATA) => {
    return new Float32Array(a);
};
const determinant = (a) => {
    return a[0] * a[3] - a[1] * a[2];
};
const equals = (a, b) => {
    return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3];
};
const frobNorm = (a) => {
    return Math.hypot(a[0], a[1], a[2], a[3]);
};
const from = (a, out = new Float32Array(4)) => {
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    return out;
};
const fromRotation = (rad, out = new Float32Array(4)) => {
    y = Math.sin(rad);
    x = Math.cos(rad);
    out[0] = x;
    out[1] = y;
    out[2] = -y;
    out[3] = x;
    return out;
};
const fromScaling = (v, out = new Float32Array(4)) => {
    out[0] = v[0];
    out[1] = 0;
    out[2] = 0;
    out[3] = v[1];
    return out;
};
const identity = (out = new Float32Array(4)) => {
    out[0] = 1;
    out[1] = 0;
    out[2] = 0;
    out[3] = 1;
    return out;
};
function invert(a, out = new Float32Array(4)) {
    a00 = a[0];
    a10 = a[1];
    a01 = a[2];
    a11 = a[3];
    det = determinant(a);
    if (!det) {
        return null;
    }
    det = 1.0 / det;
    out[0] = a11 * det;
    out[1] = -a10 * det;
    out[2] = -a01 * det;
    out[3] = a00 * det;
    return out;
}
function minus(a, b, out = new Float32Array(4)) {
    out[0] = a[0] - b[0];
    out[1] = a[1] - b[1];
    out[2] = a[2] - b[2];
    out[3] = a[3] - b[3];
    return out;
}
const multiply = (a, b, out = new Float32Array(4)) => {
    a00 = a[0];
    a10 = a[1];
    a01 = a[2];
    a11 = a[3];
    b00 = b[0];
    b10 = b[1];
    b01 = b[2];
    b11 = b[3];
    out[0] = a00 * b00 + a01 * b10;
    out[1] = a10 * b00 + a11 * b10;
    out[2] = a00 * b01 + a01 * b11;
    out[3] = a10 * b01 + a11 * b11;
    return out;
};
const multiplyScalar = (a, b, out = new Float32Array(4)) => {
    out[0] = a[0] * b;
    out[1] = a[1] * b;
    out[2] = a[2] * b;
    out[3] = a[3] * b;
    return out;
};
const rotate = (a, rad, out = new Float32Array(4)) => {
    a00 = a[0];
    a10 = a[1];
    a01 = a[2];
    a11 = a[3];
    y = Math.sin(rad);
    x = Math.cos(rad);
    out[0] = a00 * x + a01 * y;
    out[1] = a10 * x + a11 * y;
    out[2] = a00 * -y + a01 * x;
    out[3] = a10 * -y + a11 * x;
    return out;
};
const scale = (a, v, out = new Float32Array(4)) => {
    a00 = a[0];
    a10 = a[1];
    a01 = a[2];
    a11 = a[3];
    x = v[0];
    y = v[1];
    out[0] = a00 * x;
    out[1] = a10 * x;
    out[2] = a01 * y;
    out[3] = a11 * y;
    return out;
};
function toString(a) {
    return `mat2(${a[0]}, ${a[1]}, ${a[2]}, ${a[3]})`;
}
const transpose = (a, out = new Float32Array(4)) => {
    if (out === a) {
        a01 = a[1];
        out[1] = a[2];
        out[2] = a01;
    }
    else {
        out[0] = a[0];
        out[1] = a[2];
        out[2] = a[1];
        out[3] = a[3];
    }
    return out;
};

var Matrix2 = /*#__PURE__*/Object.freeze({
	__proto__: null,
	UNIT_MATRIX2: UNIT_MATRIX2,
	add: add,
	adjoint: adjoint,
	closeTo: closeTo,
	create: create,
	determinant: determinant,
	equals: equals,
	frobNorm: frobNorm,
	from: from,
	fromRotation: fromRotation,
	fromScaling: fromScaling,
	identity: identity,
	invert: invert,
	minus: minus,
	multiply: multiply,
	multiplyScalar: multiplyScalar,
	rotate: rotate,
	scale: scale,
	toString: toString,
	transpose: transpose
});

let a00$1 = 0, a01$1 = 0, a02 = 0, a11$1 = 0, a10$1 = 0, a12 = 0, a20 = 0, a21 = 0, a22 = 0;
let b00$1 = 0, b01$1 = 0, b02 = 0, b11$1 = 0, b10$1 = 0, b12 = 0, b20 = 0, b21 = 0, b22 = 0;
let x$1 = 0, y$1 = 0;
const UNIT_MATRIX3_DATA = [
    1, 0, 0,
    0, 1, 0,
    0, 0, 1
];
const UNIT_MATRIX3 = new Float32Array(UNIT_MATRIX3_DATA);
const cofactor00 = (a) => {
    return a[4] * a[8] - a[5] * a[7];
};
const cofactor01 = (a) => {
    return a[1] * a[8] - a[7] * a[2];
};
const cofactor02 = (a) => {
    return a[1] * a[5] - a[4] * a[2];
};
const cofactor10 = (a) => {
    return a[3] * a[8] - a[6] * a[5];
};
const cofactor11 = (a) => {
    return a[0] * a[8] - a[6] * a[2];
};
const cofactor12 = (a) => {
    return a[0] * a[5] - a[3] * a[2];
};
const cofactor20 = (a) => {
    return a[3] * a[7] - a[6] * a[4];
};
const cofactor21 = (a) => {
    return a[0] * a[7] - a[6] * a[1];
};
const cofactor22 = (a) => {
    return a[0] * a[4] - a[3] * a[1];
};
const create$1 = () => {
    return new Float32Array(UNIT_MATRIX3_DATA);
};
const determinant$1 = (a) => {
    a00$1 = a[0],
        a01$1 = a[1],
        a02 = a[2];
    a10$1 = a[3],
        a11$1 = a[4],
        a12 = a[5];
    a20 = a[6],
        a21 = a[7],
        a22 = a[8];
    return (a00$1 * (a22 * a11$1 - a12 * a21) +
        a01$1 * (-a22 * a10$1 + a12 * a20) +
        a02 * (a21 * a10$1 - a11$1 * a20));
};
const from$1 = (arr, out = new Float32Array(9)) => {
    out[0] = arr[0];
    out[1] = arr[1];
    out[2] = arr[2];
    out[3] = arr[3];
    out[4] = arr[4];
    out[5] = arr[5];
    out[6] = arr[6];
    out[7] = arr[7];
    out[8] = arr[8];
    return out;
};
const fromMatrix4 = (mat4, out = new Float32Array(9)) => {
    out[0] = mat4[0];
    out[1] = mat4[1];
    out[2] = mat4[2];
    out[3] = mat4[4];
    out[4] = mat4[5];
    out[5] = mat4[6];
    out[6] = mat4[8];
    out[7] = mat4[9];
    out[8] = mat4[10];
    return out;
};
const fromRotation$1 = (rad, out = new Float32Array(9)) => {
    y$1 = Math.sin(rad);
    x$1 = Math.cos(rad);
    out[0] = x$1;
    out[1] = y$1;
    out[2] = 0;
    out[3] = -y$1;
    out[4] = x$1;
    out[5] = 0;
    out[6] = 0;
    out[7] = 0;
    out[8] = 1;
    return out;
};
const fromScaling$1 = (v, out) => {
    out[0] = v[0];
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = v[1];
    out[5] = 0;
    out[6] = 0;
    out[7] = 0;
    out[8] = 1;
    return out;
};
function fromTranslation(v, out = new Float32Array(9)) {
    out[0] = 1;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 1;
    out[5] = 0;
    out[6] = v[0];
    out[7] = v[1];
    out[8] = 1;
    return out;
}
const identity$1 = (out = new Float32Array(9)) => {
    out[0] = 1;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 1;
    out[5] = 0;
    out[6] = 0;
    out[7] = 0;
    out[8] = 1;
    return out;
};
const invert$1 = (a, out) => {
    a00$1 = a[0],
        a01$1 = a[1],
        a02 = a[2];
    a10$1 = a[3],
        a11$1 = a[4],
        a12 = a[5];
    a20 = a[6],
        a21 = a[7],
        a22 = a[8];
    b01$1 = a22 * a11$1 - a12 * a21;
    b11$1 = -a22 * a10$1 + a12 * a20;
    b21 = a21 * a10$1 - a11$1 * a20;
    let det = a00$1 * b01$1 + a01$1 * b11$1 + a02 * b21;
    if (!det) {
        return null;
    }
    det = 1.0 / det;
    out[0] = b01$1 * det;
    out[1] = (-a22 * a01$1 + a02 * a21) * det;
    out[2] = (a12 * a01$1 - a02 * a11$1) * det;
    out[3] = b11$1 * det;
    out[4] = (a22 * a00$1 - a02 * a20) * det;
    out[5] = (-a12 * a00$1 + a02 * a10$1) * det;
    out[6] = b21 * det;
    out[7] = (-a21 * a00$1 + a01$1 * a20) * det;
    out[8] = (a11$1 * a00$1 - a01$1 * a10$1) * det;
    return out;
};
const multiply$1 = () => (a, b, out = new Float32Array(9)) => {
    a00$1 = a[0],
        a01$1 = a[1],
        a02 = a[2];
    a10$1 = a[3],
        a11$1 = a[4],
        a12 = a[5];
    a20 = a[6],
        a21 = a[7],
        a22 = a[8];
    b00$1 = b[0],
        b01$1 = b[1],
        b02 = b[2];
    b10$1 = b[3],
        b11$1 = b[4],
        b12 = b[5];
    b20 = b[6],
        b21 = b[7],
        b22 = b[8];
    out[0] = b00$1 * a00$1 + b01$1 * a10$1 + b02 * a20;
    out[1] = b00$1 * a01$1 + b01$1 * a11$1 + b02 * a21;
    out[2] = b00$1 * a02 + b01$1 * a12 + b02 * a22;
    out[3] = b10$1 * a00$1 + b11$1 * a10$1 + b12 * a20;
    out[4] = b10$1 * a01$1 + b11$1 * a11$1 + b12 * a21;
    out[5] = b10$1 * a02 + b11$1 * a12 + b12 * a22;
    out[6] = b20 * a00$1 + b21 * a10$1 + b22 * a20;
    out[7] = b20 * a01$1 + b21 * a11$1 + b22 * a21;
    out[8] = b20 * a02 + b21 * a12 + b22 * a22;
    return out;
};
const rotate$1 = (a, rad, out = new Float32Array(9)) => {
    a00$1 = a[0],
        a01$1 = a[1],
        a02 = a[2],
        a10$1 = a[3],
        a11$1 = a[4],
        a12 = a[5],
        a20 = a[6],
        a21 = a[7],
        a22 = a[8],
        y$1 = Math.sin(rad),
        x$1 = Math.cos(rad);
    out[0] = x$1 * a00$1 + y$1 * a10$1;
    out[1] = x$1 * a01$1 + y$1 * a11$1;
    out[2] = x$1 * a02 + y$1 * a12;
    out[3] = y$1 * a10$1 - x$1 * a00$1;
    out[4] = y$1 * a11$1 - x$1 * a01$1;
    out[5] = y$1 * a12 - x$1 * a02;
    out[6] = a20;
    out[7] = a21;
    out[8] = a22;
    return out;
};
function scale$1(a, v, out = new Float32Array(9)) {
    x$1 = v[0];
    y$1 = v[1];
    out[0] = x$1 * a[0];
    out[1] = x$1 * a[1];
    out[2] = x$1 * a[2];
    out[3] = y$1 * a[3];
    out[4] = y$1 * a[4];
    out[5] = y$1 * a[5];
    out[6] = a[6];
    out[7] = a[7];
    out[8] = a[8];
    return out;
}
const translate = (a, v, out = new Float32Array(9)) => {
    a00$1 = a[0];
    a01$1 = a[1];
    a02 = a[2];
    a10$1 = a[3];
    a11$1 = a[4];
    a12 = a[5];
    a20 = a[6];
    a21 = a[7];
    a22 = a[8];
    x$1 = v[0];
    y$1 = v[1];
    out[0] = a00$1;
    out[1] = a01$1;
    out[2] = a02;
    out[3] = a10$1;
    out[4] = a11$1;
    out[5] = a12;
    out[6] = x$1 * a00$1 + y$1 * a10$1 + a20;
    out[7] = x$1 * a01$1 + y$1 * a11$1 + a21;
    out[8] = x$1 * a02 + y$1 * a12 + a22;
    return out;
};
const transpose$1 = (a, out = new Float32Array(9)) => {
    if (out === a) {
        a01$1 = a[1];
        a02 = a[2];
        a12 = a[5];
        out[1] = a[3];
        out[2] = a[6];
        out[3] = a01$1;
        out[5] = a[7];
        out[6] = a02;
        out[7] = a12;
    }
    else {
        out[0] = a[0];
        out[1] = a[3];
        out[2] = a[6];
        out[3] = a[1];
        out[4] = a[4];
        out[5] = a[7];
        out[6] = a[2];
        out[7] = a[5];
        out[8] = a[8];
    }
    return out;
};

var Matrix3 = /*#__PURE__*/Object.freeze({
	__proto__: null,
	UNIT_MATRIX3: UNIT_MATRIX3,
	cofactor00: cofactor00,
	cofactor01: cofactor01,
	cofactor02: cofactor02,
	cofactor10: cofactor10,
	cofactor11: cofactor11,
	cofactor12: cofactor12,
	cofactor20: cofactor20,
	cofactor21: cofactor21,
	cofactor22: cofactor22,
	create: create$1,
	determinant: determinant$1,
	from: from$1,
	fromMatrix4: fromMatrix4,
	fromRotation: fromRotation$1,
	fromScaling: fromScaling$1,
	fromTranslation: fromTranslation,
	identity: identity$1,
	invert: invert$1,
	multiply: multiply$1,
	rotate: rotate$1,
	scale: scale$1,
	translate: translate,
	transpose: transpose$1
});

var EulerRotationOrders;
(function (EulerRotationOrders) {
    EulerRotationOrders["XYZ"] = "xyz";
    EulerRotationOrders["ZXY"] = "zxy";
    EulerRotationOrders["YZX"] = "yzx";
    EulerRotationOrders["XZY"] = "xzy";
    EulerRotationOrders["ZYX"] = "zyx";
    EulerRotationOrders["YXZ"] = "yxz";
})(EulerRotationOrders || (EulerRotationOrders = {}));

let a00$2 = 0, a01$2 = 0, a02$1 = 0, a03 = 0, a11$2 = 0, a10$2 = 0, a12$1 = 0, a13 = 0, a20$1 = 0, a21$1 = 0, a22$1 = 0, a23 = 0, a31 = 0, a30 = 0, a32 = 0, a33 = 0;
let b00$2 = 0, b01$2 = 0, b02$1 = 0, b03 = 0, b11$2 = 0, b10$2 = 0, b12$1 = 0, b13 = 0, b20$1 = 0, b21$1 = 0, b22$1 = 0, b23 = 0, b31 = 0, b30 = 0, b32 = 0, b33 = 0;
let x$2 = 0, y$2 = 0, z = 0, det$1 = 0, len$1 = 0, s = 0, t = 0, a = 0, b = 0, c = 0, d = 0, e = 0, f = 0;
const UNIT_MATRIX4_DATA = Object.freeze([
    1, 0, 0, 0,
    0, 1, 0, 0,
    0, 0, 1, 0,
    0, 0, 0, 1
]);
const UNIT_MATRIX4 = new Float32Array(UNIT_MATRIX4_DATA);
const create$2 = () => {
    return new Float32Array(UNIT_MATRIX4_DATA);
};
const determinant$2 = (a) => {
    a00$2 = a[0],
        a01$2 = a[1],
        a02$1 = a[2],
        a03 = a[3];
    a10$2 = a[4],
        a11$2 = a[5],
        a12$1 = a[6],
        a13 = a[7];
    a20$1 = a[8],
        a21$1 = a[9],
        a22$1 = a[10],
        a23 = a[11];
    a30 = a[12],
        a31 = a[13],
        a32 = a[14],
        a33 = a[15];
    b00$2 = a00$2 * a11$2 - a01$2 * a10$2;
    b01$2 = a00$2 * a12$1 - a02$1 * a10$2;
    b02$1 = a01$2 * a12$1 - a02$1 * a11$2;
    b03 = a20$1 * a31 - a21$1 * a30;
    b10$2 = a20$1 * a32 - a22$1 * a30;
    b11$2 = a21$1 * a32 - a22$1 * a31;
    b12$1 = a00$2 * b11$2 - a01$2 * b10$2 + a02$1 * b03;
    b13 = a10$2 * b11$2 - a11$2 * b10$2 + a12$1 * b03;
    b20$1 = a20$1 * b02$1 - a21$1 * b01$2 + a22$1 * b00$2;
    b21$1 = a30 * b02$1 - a31 * b01$2 + a32 * b00$2;
    return a13 * b12$1 - a03 * b13 + a33 * b20$1 - a23 * b21$1;
};
const from$2 = (a, out = new Float32Array(16)) => {
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    out[4] = a[4];
    out[5] = a[5];
    out[6] = a[6];
    out[7] = a[7];
    out[8] = a[8];
    out[9] = a[9];
    out[10] = a[10];
    out[11] = a[11];
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
    return out;
};
const fromEuler = (euler, out = new Float32Array(16)) => {
    x$2 = euler.x;
    y$2 = euler.y;
    z = euler.z;
    a = Math.cos(x$2), b = Math.sin(x$2);
    c = Math.cos(y$2), d = Math.sin(y$2);
    e = Math.cos(z), f = Math.sin(z);
    if (euler.order === EulerRotationOrders.XYZ) {
        const ae = a * e, af = a * f, be = b * e, bf = b * f;
        out[0] = c * e;
        out[4] = -c * f;
        out[8] = d;
        out[1] = af + be * d;
        out[5] = ae - bf * d;
        out[9] = -b * c;
        out[2] = bf - ae * d;
        out[6] = be + af * d;
        out[10] = a * c;
    }
    else if (euler.order === EulerRotationOrders.YXZ) {
        const ce = c * e, cf = c * f, de = d * e, df = d * f;
        out[0] = ce + df * b;
        out[4] = de * b - cf;
        out[8] = a * d;
        out[1] = a * f;
        out[5] = a * e;
        out[9] = -b;
        out[2] = cf * b - de;
        out[6] = df + ce * b;
        out[10] = a * c;
    }
    else if (euler.order === EulerRotationOrders.ZXY) {
        const ce = c * e, cf = c * f, de = d * e, df = d * f;
        out[0] = ce - df * b;
        out[4] = -a * f;
        out[8] = de + cf * b;
        out[1] = cf + de * b;
        out[5] = a * e;
        out[9] = df - ce * b;
        out[2] = -a * d;
        out[6] = b;
        out[10] = a * c;
    }
    else if (euler.order === EulerRotationOrders.ZYX) {
        const ae = a * e, af = a * f, be = b * e, bf = b * f;
        out[0] = c * e;
        out[4] = be * d - af;
        out[8] = ae * d + bf;
        out[1] = c * f;
        out[5] = bf * d + ae;
        out[9] = af * d - be;
        out[2] = -d;
        out[6] = b * c;
        out[10] = a * c;
    }
    else if (euler.order === EulerRotationOrders.YZX) {
        const ac = a * c, ad = a * d, bc = b * c, bd = b * d;
        out[0] = c * e;
        out[4] = bd - ac * f;
        out[8] = bc * f + ad;
        out[1] = f;
        out[5] = a * e;
        out[9] = -b * e;
        out[2] = -d * e;
        out[6] = ad * f + bc;
        out[10] = ac - bd * f;
    }
    else if (euler.order === EulerRotationOrders.XZY) {
        const ac = a * c, ad = a * d, bc = b * c, bd = b * d;
        out[0] = c * e;
        out[4] = -f;
        out[8] = d * e;
        out[1] = ac * f + bd;
        out[5] = a * e;
        out[9] = ad * f - bc;
        out[2] = bc * f - ad;
        out[6] = b * e;
        out[10] = bd * f + ac;
    }
    // bottom row
    out[3] = 0;
    out[7] = 0;
    out[11] = 0;
    // last column
    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
    out[15] = 1;
    return out;
};
function fromQuaternion(q, out) {
    let x = q[0], y = q[1], z = q[2], w = q[3];
    let x2 = x + x;
    let y2 = y + y;
    let z2 = z + z;
    let xx = x * x2;
    let yx = y * x2;
    let yy = y * y2;
    let zx = z * x2;
    let zy = z * y2;
    let zz = z * z2;
    let wx = w * x2;
    let wy = w * y2;
    let wz = w * z2;
    out[0] = 1 - yy - zz;
    out[1] = yx + wz;
    out[2] = zx - wy;
    out[3] = 0;
    out[4] = yx - wz;
    out[5] = 1 - xx - zz;
    out[6] = zy + wx;
    out[7] = 0;
    out[8] = zx + wy;
    out[9] = zy - wx;
    out[10] = 1 - xx - yy;
    out[11] = 0;
    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
    out[15] = 1;
    return out;
}
const fromRotation$2 = (rad, axis, out) => {
    x$2 = axis[0];
    y$2 = axis[1];
    z = axis[2];
    len$1 = Math.hypot(x$2, y$2, z);
    if (len$1 < EPSILON) {
        return null;
    }
    len$1 = 1 / len$1;
    x$2 *= len$1;
    y$2 *= len$1;
    z *= len$1;
    s = Math.sin(rad);
    c = Math.cos(rad);
    t = 1 - c;
    out[0] = x$2 * x$2 * t + c;
    out[1] = y$2 * x$2 * t + z * s;
    out[2] = z * x$2 * t - y$2 * s;
    out[3] = 0;
    out[4] = x$2 * y$2 * t - z * s;
    out[5] = y$2 * y$2 * t + c;
    out[6] = z * y$2 * t + x$2 * s;
    out[7] = 0;
    out[8] = x$2 * z * t + y$2 * s;
    out[9] = y$2 * z * t - x$2 * s;
    out[10] = z * z * t + c;
    out[11] = 0;
    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
    out[15] = 1;
    return out;
};
const fromRotationX = (rad, out) => {
    s = Math.sin(rad);
    c = Math.cos(rad);
    out[0] = 1;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = c;
    out[6] = s;
    out[7] = 0;
    out[8] = 0;
    out[9] = -s;
    out[10] = c;
    out[11] = 0;
    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
    out[15] = 1;
    return out;
};
const fromRotationY = (rad, out) => {
    s = Math.sin(rad);
    c = Math.cos(rad);
    out[0] = c;
    out[1] = 0;
    out[2] = -s;
    out[3] = 0;
    out[4] = 0;
    out[5] = 1;
    out[6] = 0;
    out[7] = 0;
    out[8] = s;
    out[9] = 0;
    out[10] = c;
    out[11] = 0;
    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
    out[15] = 1;
    return out;
};
const fromRotationZ = (rad, out) => {
    s = Math.sin(rad);
    c = Math.cos(rad);
    out[0] = c;
    out[1] = s;
    out[2] = 0;
    out[3] = 0;
    out[4] = -s;
    out[5] = c;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[10] = 1;
    out[11] = 0;
    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
    out[15] = 1;
    return out;
};
const fromScaling$2 = (v, out = new Float32Array(16)) => {
    out[0] = v[0];
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = v[1];
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[10] = v[2];
    out[11] = 0;
    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
    out[15] = 1;
    return out;
};
const fromTranslation$1 = (v, out = new Float32Array(16)) => {
    out[0] = 1;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = 1;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[10] = 1;
    out[11] = 0;
    out[12] = v[0];
    out[13] = v[1];
    out[14] = v[2];
    out[15] = 1;
    return out;
};
const identity$2 = (out = new Float32Array(16)) => {
    out[0] = 1;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = 1;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[10] = 1;
    out[11] = 0;
    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
    out[15] = 1;
    return out;
};
function invert$2(a, out = new Float32Array(16)) {
    a00$2 = a[0],
        a01$2 = a[1],
        a02$1 = a[2],
        a03 = a[3];
    a10$2 = a[4],
        a11$2 = a[5],
        a12$1 = a[6],
        a13 = a[7];
    a20$1 = a[8],
        a21$1 = a[9],
        a22$1 = a[10],
        a23 = a[11];
    a30 = a[12],
        a31 = a[13],
        a32 = a[14],
        a33 = a[15];
    b00$2 = a00$2 * a11$2 - a01$2 * a10$2;
    b01$2 = a00$2 * a12$1 - a02$1 * a10$2;
    b02$1 = a00$2 * a13 - a03 * a10$2;
    b03 = a01$2 * a12$1 - a02$1 * a11$2;
    b20$1 = a01$2 * a13 - a03 * a11$2;
    b21$1 = a02$1 * a13 - a03 * a12$1;
    b22$1 = a20$1 * a31 - a21$1 * a30;
    b23 = a20$1 * a32 - a22$1 * a30;
    b30 = a20$1 * a33 - a23 * a30;
    b31 = a21$1 * a32 - a22$1 * a31;
    b32 = a21$1 * a33 - a23 * a31;
    b33 = a22$1 * a33 - a23 * a32;
    det$1 =
        b00$2 * b33 - b01$2 * b32 + b02$1 * b31 + b03 * b30 - b20$1 * b23 + b21$1 * b22$1;
    if (!det$1) {
        return null;
    }
    det$1 = 1.0 / det$1;
    out[0] = (a11$2 * b33 - a12$1 * b32 + a13 * b31) * det$1;
    out[1] = (a02$1 * b32 - a01$2 * b33 - a03 * b31) * det$1;
    out[2] = (a31 * b21$1 - a32 * b20$1 + a33 * b03) * det$1;
    out[3] = (a22$1 * b20$1 - a21$1 * b21$1 - a23 * b03) * det$1;
    out[4] = (a12$1 * b30 - a10$2 * b33 - a13 * b23) * det$1;
    out[5] = (a00$2 * b33 - a02$1 * b30 + a03 * b23) * det$1;
    out[6] = (a32 * b02$1 - a30 * b21$1 - a33 * b01$2) * det$1;
    out[7] = (a20$1 * b21$1 - a22$1 * b02$1 + a23 * b01$2) * det$1;
    out[8] = (a10$2 * b32 - a11$2 * b30 + a13 * b22$1) * det$1;
    out[9] = (a01$2 * b30 - a00$2 * b32 - a03 * b22$1) * det$1;
    out[10] = (a30 * b20$1 - a31 * b02$1 + a33 * b00$2) * det$1;
    out[11] = (a21$1 * b02$1 - a20$1 * b20$1 - a23 * b00$2) * det$1;
    out[12] = (a11$2 * b23 - a10$2 * b31 - a12$1 * b22$1) * det$1;
    out[13] = (a00$2 * b31 - a01$2 * b23 + a02$1 * b22$1) * det$1;
    out[14] = (a31 * b01$2 - a30 * b03 - a32 * b00$2) * det$1;
    out[15] = (a20$1 * b03 - a21$1 * b01$2 + a22$1 * b00$2) * det$1;
    return out;
}
const lookAt = (eye, center, up, out) => {
    let x0, x1, x2, y0, y1, y2, z0, z1, z2, len;
    let eyex = eye[0];
    let eyey = eye[1];
    let eyez = eye[2];
    let upx = up[0];
    let upy = up[1];
    let upz = up[2];
    let centerx = center[0];
    let centery = center[1];
    let centerz = center[2];
    if (Math.abs(eyex - centerx) < EPSILON &&
        Math.abs(eyey - centery) < EPSILON &&
        Math.abs(eyez - centerz) < EPSILON) {
        return identity$2(out);
    }
    z0 = eyex - centerx;
    z1 = eyey - centery;
    z2 = eyez - centerz;
    len = 1 / Math.hypot(z0, z1, z2);
    z0 *= len;
    z1 *= len;
    z2 *= len;
    x0 = upy * z2 - upz * z1;
    x1 = upz * z0 - upx * z2;
    x2 = upx * z1 - upy * z0;
    len = Math.hypot(x0, x1, x2);
    if (!len) {
        x0 = 0;
        x1 = 0;
        x2 = 0;
    }
    else {
        len = 1 / len;
        x0 *= len;
        x1 *= len;
        x2 *= len;
    }
    y0 = z1 * x2 - z2 * x1;
    y1 = z2 * x0 - z0 * x2;
    y2 = z0 * x1 - z1 * x0;
    len = Math.hypot(y0, y1, y2);
    if (!len) {
        y0 = 0;
        y1 = 0;
        y2 = 0;
    }
    else {
        len = 1 / len;
        y0 *= len;
        y1 *= len;
        y2 *= len;
    }
    out[0] = x0;
    out[1] = y0;
    out[2] = z0;
    out[3] = 0;
    out[4] = x1;
    out[5] = y1;
    out[6] = z1;
    out[7] = 0;
    out[8] = x2;
    out[9] = y2;
    out[10] = z2;
    out[11] = 0;
    out[12] = -(x0 * eyex + x1 * eyey + x2 * eyez);
    out[13] = -(y0 * eyex + y1 * eyey + y2 * eyez);
    out[14] = -(z0 * eyex + z1 * eyey + z2 * eyez);
    out[15] = 1;
    return out;
};
const multiply$2 = (a, b, out = new Float32Array(16)) => {
    a00$2 = a[0],
        a01$2 = a[1],
        a02$1 = a[2],
        a03 = a[3];
    a10$2 = a[4],
        a11$2 = a[5],
        a12$1 = a[6],
        a13 = a[7];
    a20$1 = a[8],
        a21$1 = a[9],
        a22$1 = a[10],
        a23 = a[11];
    a30 = a[12],
        a31 = a[13],
        a32 = a[14],
        a33 = a[15];
    b00$2 = b[0],
        b01$2 = b[1],
        b02$1 = b[2],
        b03 = b[3];
    out[0] = b00$2 * a00$2 + b01$2 * a10$2 + b02$1 * a20$1 + b03 * a30;
    out[1] = b00$2 * a01$2 + b01$2 * a11$2 + b02$1 * a21$1 + b03 * a31;
    out[2] = b00$2 * a02$1 + b01$2 * a12$1 + b02$1 * a22$1 + b03 * a32;
    out[3] = b00$2 * a03 + b01$2 * a13 + b02$1 * a23 + b03 * a33;
    b00$2 = b[4];
    b01$2 = b[5];
    b02$1 = b[6];
    b03 = b[7];
    out[4] = b00$2 * a00$2 + b01$2 * a10$2 + b02$1 * a20$1 + b03 * a30;
    out[5] = b00$2 * a01$2 + b01$2 * a11$2 + b02$1 * a21$1 + b03 * a31;
    out[6] = b00$2 * a02$1 + b01$2 * a12$1 + b02$1 * a22$1 + b03 * a32;
    out[7] = b00$2 * a03 + b01$2 * a13 + b02$1 * a23 + b03 * a33;
    b00$2 = b[8];
    b01$2 = b[9];
    b02$1 = b[10];
    b03 = b[11];
    out[8] = b00$2 * a00$2 + b01$2 * a10$2 + b02$1 * a20$1 + b03 * a30;
    out[9] = b00$2 * a01$2 + b01$2 * a11$2 + b02$1 * a21$1 + b03 * a31;
    out[10] = b00$2 * a02$1 + b01$2 * a12$1 + b02$1 * a22$1 + b03 * a32;
    out[11] = b00$2 * a03 + b01$2 * a13 + b02$1 * a23 + b03 * a33;
    b00$2 = b[12];
    b01$2 = b[13];
    b02$1 = b[14];
    b03 = b[15];
    out[12] = b00$2 * a00$2 + b01$2 * a10$2 + b02$1 * a20$1 + b03 * a30;
    out[13] = b00$2 * a01$2 + b01$2 * a11$2 + b02$1 * a21$1 + b03 * a31;
    out[14] = b00$2 * a02$1 + b01$2 * a12$1 + b02$1 * a22$1 + b03 * a32;
    out[15] = b00$2 * a03 + b01$2 * a13 + b02$1 * a23 + b03 * a33;
    return out;
};
const orthogonal = (left, right, bottom, top, near, far, out) => {
    let lr = 1 / (left - right);
    let bt = 1 / (bottom - top);
    let nf = 1 / (near - far);
    out[0] = -2 * lr;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = -2 * bt;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[10] = 2 * nf;
    out[11] = 0;
    out[12] = (left + right) * lr;
    out[13] = (top + bottom) * bt;
    out[14] = (far + near) * nf;
    out[15] = 1;
    return out;
};
const perspective = (fovy, aspect, near, far, out) => {
    let f = 1.0 / Math.tan(fovy / 2), nf;
    out[0] = f / aspect;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = f;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[11] = -1;
    out[12] = 0;
    out[13] = 0;
    out[15] = 0;
    if (far != null && far !== Infinity) {
        nf = 1 / (near - far);
        out[10] = (far + near) * nf;
        out[14] = 2 * far * near * nf;
    }
    else {
        out[10] = -1;
        out[14] = -2 * near;
    }
    return out;
};
const rotate$2 = (a, rad, axis, out) => {
    x$2 = axis[0];
    y$2 = axis[1];
    z = axis[2];
    len$1 = Math.hypot(x$2, y$2, z);
    if (len$1 < EPSILON) {
        return null;
    }
    len$1 = 1 / len$1;
    x$2 *= len$1;
    y$2 *= len$1;
    z *= len$1;
    s = Math.sin(rad);
    c = Math.cos(rad);
    t = 1 - c;
    a00$2 = a[0];
    a01$2 = a[1];
    a02$1 = a[2];
    a03 = a[3];
    a10$2 = a[4];
    a11$2 = a[5];
    a12$1 = a[6];
    a13 = a[7];
    a20$1 = a[8];
    a21$1 = a[9];
    a22$1 = a[10];
    a23 = a[11];
    b00$2 = x$2 * x$2 * t + c;
    b01$2 = y$2 * x$2 * t + z * s;
    b02$1 = z * x$2 * t - y$2 * s;
    b10$2 = x$2 * y$2 * t - z * s;
    b11$2 = y$2 * y$2 * t + c;
    b12$1 = z * y$2 * t + x$2 * s;
    b20$1 = x$2 * z * t + y$2 * s;
    b21$1 = y$2 * z * t - x$2 * s;
    b22$1 = z * z * t + c;
    out[0] = a00$2 * b00$2 + a10$2 * b01$2 + a20$1 * b02$1;
    out[1] = a01$2 * b00$2 + a11$2 * b01$2 + a21$1 * b02$1;
    out[2] = a02$1 * b00$2 + a12$1 * b01$2 + a22$1 * b02$1;
    out[3] = a03 * b00$2 + a13 * b01$2 + a23 * b02$1;
    out[4] = a00$2 * b10$2 + a10$2 * b11$2 + a20$1 * b12$1;
    out[5] = a01$2 * b10$2 + a11$2 * b11$2 + a21$1 * b12$1;
    out[6] = a02$1 * b10$2 + a12$1 * b11$2 + a22$1 * b12$1;
    out[7] = a03 * b10$2 + a13 * b11$2 + a23 * b12$1;
    out[8] = a00$2 * b20$1 + a10$2 * b21$1 + a20$1 * b22$1;
    out[9] = a01$2 * b20$1 + a11$2 * b21$1 + a21$1 * b22$1;
    out[10] = a02$1 * b20$1 + a12$1 * b21$1 + a22$1 * b22$1;
    out[11] = a03 * b20$1 + a13 * b21$1 + a23 * b22$1;
    if (a !== out) {
        out[12] = a[12];
        out[13] = a[13];
        out[14] = a[14];
        out[15] = a[15];
    }
    return out;
};
const rotateX = (a, rad, out) => {
    s = Math.sin(rad);
    c = Math.cos(rad);
    a10$2 = a[4];
    a11$2 = a[5];
    a12$1 = a[6];
    a13 = a[7];
    a20$1 = a[8];
    a21$1 = a[9];
    a22$1 = a[10];
    a23 = a[11];
    if (a !== out) {
        out[0] = a[0];
        out[1] = a[1];
        out[2] = a[2];
        out[3] = a[3];
        out[12] = a[12];
        out[13] = a[13];
        out[14] = a[14];
        out[15] = a[15];
    }
    out[4] = a10$2 * c + a20$1 * s;
    out[5] = a11$2 * c + a21$1 * s;
    out[6] = a12$1 * c + a22$1 * s;
    out[7] = a13 * c + a23 * s;
    out[8] = a20$1 * c - a10$2 * s;
    out[9] = a21$1 * c - a11$2 * s;
    out[10] = a22$1 * c - a12$1 * s;
    out[11] = a23 * c - a13 * s;
    return out;
};
function rotateY(a, rad, out) {
    s = Math.sin(rad);
    c = Math.cos(rad);
    a00$2 = a[0];
    a01$2 = a[1];
    a02$1 = a[2];
    a03 = a[3];
    a20$1 = a[8];
    a21$1 = a[9];
    a22$1 = a[10];
    a23 = a[11];
    if (a !== out) {
        out[4] = a[4];
        out[5] = a[5];
        out[6] = a[6];
        out[7] = a[7];
        out[12] = a[12];
        out[13] = a[13];
        out[14] = a[14];
        out[15] = a[15];
    }
    out[0] = a00$2 * c - a20$1 * s;
    out[1] = a01$2 * c - a21$1 * s;
    out[2] = a02$1 * c - a22$1 * s;
    out[3] = a03 * c - a23 * s;
    out[8] = a00$2 * s + a20$1 * c;
    out[9] = a01$2 * s + a21$1 * c;
    out[10] = a02$1 * s + a22$1 * c;
    out[11] = a03 * s + a23 * c;
    return out;
}
const rotateZ = (a, rad, out) => {
    s = Math.sin(rad);
    c = Math.cos(rad);
    a00$2 = a[0];
    a01$2 = a[1];
    a02$1 = a[2];
    a03 = a[3];
    a10$2 = a[4];
    a11$2 = a[5];
    a12$1 = a[6];
    a13 = a[7];
    if (a !== out) {
        out[8] = a[8];
        out[9] = a[9];
        out[10] = a[10];
        out[11] = a[11];
        out[12] = a[12];
        out[13] = a[13];
        out[14] = a[14];
        out[15] = a[15];
    }
    out[0] = a00$2 * c + a10$2 * s;
    out[1] = a01$2 * c + a11$2 * s;
    out[2] = a02$1 * c + a12$1 * s;
    out[3] = a03 * c + a13 * s;
    out[4] = a10$2 * c - a00$2 * s;
    out[5] = a11$2 * c - a01$2 * s;
    out[6] = a12$1 * c - a02$1 * s;
    out[7] = a13 * c - a03 * s;
    return out;
};
const scale$2 = (a, v, out = new Float32Array(16)) => {
    x$2 = v[0];
    y$2 = v[1];
    z = v[2];
    out[0] = a[0] * x$2;
    out[1] = a[1] * x$2;
    out[2] = a[2] * x$2;
    out[3] = a[3] * x$2;
    out[4] = a[4] * y$2;
    out[5] = a[5] * y$2;
    out[6] = a[6] * y$2;
    out[7] = a[7] * y$2;
    out[8] = a[8] * z;
    out[9] = a[9] * z;
    out[10] = a[10] * z;
    out[11] = a[11] * z;
    if (out !== a) {
        out[12] = a[12];
        out[13] = a[13];
        out[14] = a[14];
        out[15] = a[15];
    }
    return out;
};
const targetTo = (eye, target, up, out = new Float32Array(16)) => {
    let eyex = eye[0], eyey = eye[1], eyez = eye[2], upx = up[0], upy = up[1], upz = up[2];
    let z0 = eyex - target[0], z1 = eyey - target[1], z2 = eyez - target[2];
    let len = z0 * z0 + z1 * z1 + z2 * z2;
    if (len > 0) {
        len = 1 / Math.sqrt(len);
        z0 *= len;
        z1 *= len;
        z2 *= len;
    }
    let x0 = upy * z2 - upz * z1, x1 = upz * z0 - upx * z2, x2 = upx * z1 - upy * z0;
    len = x0 * x0 + x1 * x1 + x2 * x2;
    if (len > 0) {
        len = 1 / Math.sqrt(len);
        x0 *= len;
        x1 *= len;
        x2 *= len;
    }
    out[0] = x0;
    out[1] = x1;
    out[2] = x2;
    out[3] = 0;
    out[4] = z1 * x2 - z2 * x1;
    out[5] = z2 * x0 - z0 * x2;
    out[6] = z0 * x1 - z1 * x0;
    out[7] = 0;
    out[8] = z0;
    out[9] = z1;
    out[10] = z2;
    out[11] = 0;
    out[12] = eyex;
    out[13] = eyey;
    out[14] = eyez;
    out[15] = 1;
    return out;
};
const translate$1 = (a, v, out = new Float32Array(16)) => {
    x$2 = v[0];
    y$2 = v[1];
    z = v[2];
    if (a === out) {
        out[12] = a[0] * x$2 + a[4] * y$2 + a[8] * z + a[12];
        out[13] = a[1] * x$2 + a[5] * y$2 + a[9] * z + a[13];
        out[14] = a[2] * x$2 + a[6] * y$2 + a[10] * z + a[14];
        out[15] = a[3] * x$2 + a[7] * y$2 + a[11] * z + a[15];
    }
    else {
        a00$2 = a[0];
        a01$2 = a[1];
        a02$1 = a[2];
        a03 = a[3];
        a10$2 = a[4];
        a11$2 = a[5];
        a12$1 = a[6];
        a13 = a[7];
        a20$1 = a[8];
        a21$1 = a[9];
        a22$1 = a[10];
        a23 = a[11];
        out[0] = a00$2;
        out[1] = a01$2;
        out[2] = a02$1;
        out[3] = a03;
        out[4] = a10$2;
        out[5] = a11$2;
        out[6] = a12$1;
        out[7] = a13;
        out[8] = a20$1;
        out[9] = a21$1;
        out[10] = a22$1;
        out[11] = a23;
        out[12] = a00$2 * x$2 + a10$2 * y$2 + a20$1 * z + a[12];
        out[13] = a01$2 * x$2 + a11$2 * y$2 + a21$1 * z + a[13];
        out[14] = a02$1 * x$2 + a12$1 * y$2 + a22$1 * z + a[14];
        out[15] = a03 * x$2 + a13 * y$2 + a23 * z + a[15];
    }
    return out;
};
const transpose$2 = (a, out = new Float32Array(16)) => {
    if (out === a) {
        a01$2 = a[1],
            a02$1 = a[2],
            a03 = a[3];
        a12$1 = a[6],
            a13 = a[7];
        a23 = a[11];
        out[1] = a[4];
        out[2] = a[8];
        out[3] = a[12];
        out[4] = a01$2;
        out[6] = a[9];
        out[7] = a[13];
        out[8] = a02$1;
        out[9] = a12$1;
        out[11] = a[14];
        out[12] = a03;
        out[13] = a13;
        out[14] = a23;
    }
    else {
        out[0] = a[0];
        out[1] = a[4];
        out[2] = a[8];
        out[3] = a[12];
        out[4] = a[1];
        out[5] = a[5];
        out[6] = a[9];
        out[7] = a[13];
        out[8] = a[2];
        out[9] = a[6];
        out[10] = a[10];
        out[11] = a[14];
        out[12] = a[3];
        out[13] = a[7];
        out[14] = a[11];
        out[15] = a[15];
    }
    return out;
};

var Matrix4 = /*#__PURE__*/Object.freeze({
	__proto__: null,
	UNIT_MATRIX4: UNIT_MATRIX4,
	create: create$2,
	determinant: determinant$2,
	from: from$2,
	fromEuler: fromEuler,
	fromQuaternion: fromQuaternion,
	fromRotation: fromRotation$2,
	fromRotationX: fromRotationX,
	fromRotationY: fromRotationY,
	fromRotationZ: fromRotationZ,
	fromScaling: fromScaling$2,
	fromTranslation: fromTranslation$1,
	identity: identity$2,
	invert: invert$2,
	lookAt: lookAt,
	multiply: multiply$2,
	orthogonal: orthogonal,
	perspective: perspective,
	rotate: rotate$2,
	rotateX: rotateX,
	rotateY: rotateY,
	rotateZ: rotateZ,
	scale: scale$2,
	targetTo: targetTo,
	translate: translate$1,
	transpose: transpose$2
});

let ax, ay, az, bx, by, bz;
let ag, s$1;
const add$1 = (a, b, out = new Float32Array(3)) => {
    out[0] = a[0] + b[0];
    out[1] = a[1] + b[1];
    out[2] = a[2] + b[2];
    return out;
};
const addScalar = (a, b, out = new Float32Array(3)) => {
    out[0] = a[0] + b;
    out[1] = a[1] + b;
    out[2] = a[2] + b;
    return out;
};
const angle = (a, b) => {
    ax = a[0],
        ay = a[1],
        az = a[2],
        bx = b[0],
        by = b[1],
        bz = b[2];
    let mag1 = Math.sqrt(ax * ax + ay * ay + az * az), mag2 = Math.sqrt(bx * bx + by * by + bz * bz), mag = mag1 * mag2, cosine = mag && dot(a, b) / mag;
    return Math.acos(clampCommon(cosine, -1, 1));
};
const clamp = (a, min, max, out = new Float32Array(3)) => {
    out[0] = clampCommon(a[0], min[0], max[0]);
    out[1] = clampCommon(a[1], min[1], max[1]);
    out[2] = clampCommon(a[2], min[2], max[2]);
    return out;
};
const clampSafe = (a, min, max, out = new Float32Array(3)) => {
    out[0] = clampSafeCommon(a[0], min[0], max[0]);
    out[1] = clampSafeCommon(a[1], min[1], max[1]);
    out[1] = clampSafeCommon(a[2], min[2], max[2]);
    return out;
};
const clampScalar = (a, min, max, out = new Float32Array(3)) => {
    out[0] = clampCommon(a[0], min, max);
    out[1] = clampCommon(a[1], min, max);
    out[2] = clampCommon(a[2], min, max);
    return out;
};
const clone = (a, out = new Float32Array(3)) => {
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    return out;
};
const closeTo$1 = (a, b) => {
    return closeToCommon(a[0], b[0]) && closeToCommon(a[1], b[1]) && closeToCommon(a[2], b[2]);
};
const create$3 = (x, y = 0, z, out = new Float32Array(3)) => {
    out[0] = x;
    out[1] = y;
    out[2] = z;
    return out;
};
const cross = (a, b, out = new Float32Array(3)) => {
    ax = a[0], ay = a[1], az = a[2];
    bx = b[0], by = b[1], bz = b[2];
    out[0] = ay * bz - az * by;
    out[1] = az * bx - ax * bz;
    out[2] = ax * by - ay * bx;
    return out;
};
const distanceTo = (a, b) => {
    ax = b[0] - a[0];
    ay = b[1] - a[1];
    az = b[2] - a[2];
    return Math.hypot(ax, ay, az);
};
const distanceToManhattan = (a, b) => {
    return Math.abs(a[0] - b[0]) + Math.abs(a[1] - b[1]) + Math.abs(a[2] - b[2]);
};
const distanceToSquared = (a, b) => {
    ax = a[0] - b[0];
    ay = a[1] - b[1];
    az = a[2] - b[2];
    return ax * ax + ay * ay + az * az;
};
const divide = (a, b, out = new Float32Array(3)) => {
    out[0] = a[0] / b[0];
    out[1] = a[1] / b[1];
    out[2] = a[2] / b[2];
    return out;
};
const divideScalar = (a, b, out = new Float32Array(3)) => {
    out[0] = a[0] / b;
    out[1] = a[1] / b;
    out[2] = a[2] / b;
    return out;
};
const dot = (a, b) => {
    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
};
const equals$1 = (a, b) => {
    return ((a[0] === b[0]) && (a[1] === b[1]) && (a[2] === b[2]));
};
const from$3 = (a, out = new Float32Array(3)) => {
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    return out;
};
const fromArray = (a, offset = 0, out = new Float32Array(3)) => {
    out[0] = a[offset];
    out[1] = a[offset + 1];
    out[2] = a[offset + 2];
    return out;
};
const fromScalar = (num, out = new Float32Array(3)) => {
    out[0] = out[1] = out[2] = num;
    return out;
};
const fromValues = (x, y, z, out = new Float32Array(3)) => {
    out[0] = x;
    out[1] = y;
    out[2] = z;
    return out;
};
const hermite = (a, b, c, d, t, out = new Float32Array(3)) => {
    ag = t * t;
    let factor1 = ag * (2 * t - 3) + 1;
    let factor2 = ag * (t - 2) + t;
    let factor3 = ag * (t - 1);
    let factor4 = ag * (3 - 2 * t);
    out[0] = a[0] * factor1 + b[0] * factor2 + c[0] * factor3 + d[0] * factor4;
    out[1] = a[1] * factor1 + b[1] * factor2 + c[1] * factor3 + d[1] * factor4;
    out[2] = a[2] * factor1 + b[2] * factor2 + c[2] * factor3 + d[2] * factor4;
    return out;
};
const inverse = (a, out = new Float32Array(3)) => {
    out[0] = 1.0 / a[0];
    out[1] = 1.0 / a[1];
    out[2] = 1.0 / a[2];
    return out;
};
const length = (a) => {
    return Math.sqrt(lengthSquared(a));
};
const lengthManhattan = (a) => {
    return Math.abs(a[0]) + Math.abs(a[1]) + Math.abs(a[2]);
};
const lengthSquared = (a) => {
    return a[0] * a[0] + a[1] * a[1] + a[2] * a[2];
};
const lerp = (a, b, alpha, out = new Float32Array(3)) => {
    out[0] += (b[0] - a[0]) * alpha;
    out[1] += (b[1] - a[1]) * alpha;
    out[2] += (b[2] - a[2]) * alpha;
    return out;
};
const max = (a, b, out = new Float32Array(3)) => {
    out[0] = Math.max(a[0], b[0]);
    out[1] = Math.max(a[1], b[1]);
    out[2] = Math.max(a[2], b[2]);
    return out;
};
const min = (a, b, out = new Float32Array(3)) => {
    out[0] = Math.min(a[0], b[0]);
    out[1] = Math.min(a[1], b[1]);
    out[2] = Math.min(a[2], b[2]);
    return out;
};
const minus$1 = (a, b, out = new Float32Array(3)) => {
    out[0] = a[0] - b[0];
    out[1] = a[1] - b[1];
    out[2] = a[2] - b[2];
    return out;
};
const minusScalar = (a, b, out = new Float32Array(3)) => {
    out[0] = a[0] - b;
    out[1] = a[1] - b;
    out[2] = a[2] - b;
    return out;
};
const multiply$3 = (a, b, out = new Float32Array(3)) => {
    out[0] = a[0] * b[0];
    out[1] = a[1] * b[1];
    out[2] = a[2] * b[2];
    return out;
};
const multiplyScalar$1 = (a, scalar, out = new Float32Array(3)) => {
    out[0] = a[0] * scalar;
    out[1] = a[1] * scalar;
    out[2] = a[2] * scalar;
    return out;
};
const negate = (a, out = new Float32Array(3)) => {
    out[0] = -a[0];
    out[1] = -a[1];
    out[2] = -a[2];
    return out;
};
const normalize = (a, out = new Float32Array(3)) => {
    return divideScalar(a, length(a) || 1, out);
};
const rotateX$1 = (a, b, rad, out) => {
    ax = a[0] - b[0];
    ay = a[1] - b[1];
    az = a[2] - b[2];
    bx = ax;
    by = ay * Math.cos(rad) - az * Math.sin(rad);
    bz = ay * Math.sin(rad) + az * Math.cos(rad);
    out[0] = bx + b[0];
    out[1] = by + b[1];
    out[2] = bz + b[2];
    return out;
};
const rotateY$1 = (a, b, rad, out) => {
    ax = a[0] - b[0];
    ay = a[1] - b[1];
    az = a[2] - b[2];
    bx = az * Math.sin(rad) + ax * Math.cos(rad);
    by = ay;
    bz = az * Math.cos(rad) - ax * Math.sin(rad);
    out[0] = bx + b[0];
    out[1] = by + b[1];
    out[2] = bz + b[2];
    return out;
};
const rotateZ$1 = (a, b, rad, out) => {
    ax = a[0] - b[0];
    ay = a[1] - b[1];
    az = a[2] - b[2];
    bx = ax * Math.cos(rad) - ay * Math.sin(rad);
    by = ax * Math.sin(rad) + ay * Math.cos(rad);
    bz = az;
    out[0] = bx + b[0];
    out[1] = by + b[1];
    out[2] = bz + b[2];
    return out;
};
const round = (a, out = new Float32Array(3)) => {
    out[0] = Math.round(a[0]);
    out[1] = Math.round(a[1]);
    out[2] = Math.round(a[2]);
    return out;
};
const set = (x = 0, y = 0, z = 0, out = new Float32Array(3)) => {
    out[0] = x;
    out[1] = y;
    out[2] = z;
    return out;
};
const setLength = (a, len, out = new Float32Array(3)) => {
    return multiplyScalar$1(normalize(a, out), len, out);
};
const slerp = (a, b, t, out = new Float32Array(3)) => {
    ag = Math.acos(Math.min(Math.max(dot(a, b), -1), 1));
    s$1 = Math.sin(ag);
    ax = Math.sin((1 - t) * ag) / s$1;
    bx = Math.sin(t * ag) / s$1;
    out[0] = ax * a[0] + bx * b[0];
    out[1] = ax * a[1] + bx * b[1];
    out[2] = ax * a[2] + bx * b[2];
    return out;
};
const toString$1 = (a) => {
    return `vec3(${a[0]}, ${a[1]}, ${a[2]})`;
};
const transformMatrix3 = (a, m, out) => {
    ax = a[0],
        ay = a[1],
        az = a[2];
    out[0] = ax * m[0] + ay * m[3] + az * m[6];
    out[1] = ax * m[1] + ay * m[4] + az * m[7];
    out[2] = ax * m[2] + ay * m[5] + az * m[8];
    return out;
};
function transformMatrix4(a, m, out = new Float32Array(3)) {
    ax = a[0],
        ay = a[1],
        az = a[2];
    ag = m[3] * ax + m[7] * ay + m[11] * az + m[15];
    ag = ag || 1.0;
    out[0] = (m[0] * ax + m[4] * ay + m[8] * az + m[12]) / ag;
    out[1] = (m[1] * ax + m[5] * ay + m[9] * az + m[13]) / ag;
    out[2] = (m[2] * ax + m[6] * ay + m[10] * az + m[14]) / ag;
    return out;
}
const transformQuat = (a, q, out = new Float32Array(3)) => {
    let qx = q[0], qy = q[1], qz = q[2], qw = q[3];
    let x = a[0], y = a[1], z = a[2];
    // var qvec = [qx, qy, qz];
    // var uv = vec3.cross([], qvec, a);
    let uvx = qy * z - qz * y, uvy = qz * x - qx * z, uvz = qx * y - qy * x;
    // var uuv = vec3.cross([], qvec, uv);
    let uuvx = qy * uvz - qz * uvy, uuvy = qz * uvx - qx * uvz, uuvz = qx * uvy - qy * uvx;
    // vec3.scale(uv, uv, 2 * w);
    let w2 = qw * 2;
    uvx *= w2;
    uvy *= w2;
    uvz *= w2;
    // vec3.scale(uuv, uuv, 2);
    uuvx *= 2;
    uuvy *= 2;
    uuvz *= 2;
    // return vec3.add(out, a, vec3.add(out, uv, uuv));
    out[0] = x + uvx + uuvx;
    out[1] = y + uvy + uuvy;
    out[2] = z + uvz + uuvz;
    return out;
};
const VECTOR3_ZERO = new Float32Array([0, 0, 0]);
const VECTOR3_ONE = new Float32Array([1, 1, 1]);
const VECTOR3_TOP = new Float32Array([0, 1, 0]);
const VECTOR3_BOTTOM = new Float32Array([0, -1, 0]);
const VECTOR3_LEFT = new Float32Array([-1, 0, 0]);
const VECTOR3_RIGHT = new Float32Array([1, 0, 0]);
const VECTOR3_FRONT = new Float32Array([0, 0, -1]);
const VECTOR3_BACK = new Float32Array([0, 0, 1]);

var Vector3 = /*#__PURE__*/Object.freeze({
	__proto__: null,
	add: add$1,
	addScalar: addScalar,
	angle: angle,
	clamp: clamp,
	clampSafe: clampSafe,
	clampScalar: clampScalar,
	clone: clone,
	closeTo: closeTo$1,
	create: create$3,
	cross: cross,
	distanceTo: distanceTo,
	distanceToManhattan: distanceToManhattan,
	distanceToSquared: distanceToSquared,
	divide: divide,
	divideScalar: divideScalar,
	dot: dot,
	equals: equals$1,
	from: from$3,
	fromArray: fromArray,
	fromScalar: fromScalar,
	fromValues: fromValues,
	hermite: hermite,
	inverse: inverse,
	length: length,
	lengthManhattan: lengthManhattan,
	lengthSquared: lengthSquared,
	lerp: lerp,
	max: max,
	min: min,
	minus: minus$1,
	minusScalar: minusScalar,
	multiply: multiply$3,
	multiplyScalar: multiplyScalar$1,
	negate: negate,
	normalize: normalize,
	rotateX: rotateX$1,
	rotateY: rotateY$1,
	rotateZ: rotateZ$1,
	round: round,
	set: set,
	setLength: setLength,
	slerp: slerp,
	toString: toString$1,
	transformMatrix3: transformMatrix3,
	transformMatrix4: transformMatrix4,
	transformQuat: transformQuat,
	VECTOR3_ZERO: VECTOR3_ZERO,
	VECTOR3_ONE: VECTOR3_ONE,
	VECTOR3_TOP: VECTOR3_TOP,
	VECTOR3_BOTTOM: VECTOR3_BOTTOM,
	VECTOR3_LEFT: VECTOR3_LEFT,
	VECTOR3_RIGHT: VECTOR3_RIGHT,
	VECTOR3_FRONT: VECTOR3_FRONT,
	VECTOR3_BACK: VECTOR3_BACK
});

// import clampCommon from "../common/clamp";
let ax$1, ay$1, az$1, aw, bx$1, by$1, bz$1, len$2;
let ix, iy, iz, iw;
let A, B, C, D, E, F, G, H, I, J;
const add$2 = (a, b, out = new Float32Array(4)) => {
    out[0] = a[0] + b[0];
    out[1] = a[1] + b[1];
    out[2] = a[2] + b[2];
    out[3] = a[3] + b[3];
    return out;
};
function ceil(a, out = new Float32Array(4)) {
    out[0] = Math.ceil(a[0]);
    out[1] = Math.ceil(a[1]);
    out[2] = Math.ceil(a[2]);
    out[3] = Math.ceil(a[3]);
    return out;
}
const closeTo$2 = (a, b) => {
    return closeToCommon(a[0], b[0]) && closeToCommon(a[1], b[1]) && closeToCommon(a[2], b[2]) && closeToCommon(a[3], b[3]);
};
const create$4 = (x = 0, y = 0, z = 0, w = 0, out = new Float32Array(4)) => {
    out[0] = x;
    out[1] = y;
    out[2] = z;
    out[3] = w;
    return out;
};
const cross$1 = (u, v, w, out = new Float32Array(4)) => {
    A = v[0] * w[1] - v[1] * w[0],
        B = v[0] * w[2] - v[2] * w[0],
        C = v[0] * w[3] - v[3] * w[0],
        D = v[1] * w[2] - v[2] * w[1],
        E = v[1] * w[3] - v[3] * w[1],
        F = v[2] * w[3] - v[3] * w[2];
    G = u[0];
    H = u[1];
    I = u[2];
    J = u[3];
    out[0] = H * F - I * E + J * D;
    out[1] = -(G * F) + I * C - J * B;
    out[2] = G * E - H * C + J * A;
    out[3] = -(G * D) + H * B - I * A;
    return out;
};
const distanceTo$1 = (a, b) => {
    ax$1 = b[0] - a[0];
    ay$1 = b[1] - a[1];
    az$1 = b[2] - a[2];
    aw = b[3] - a[3];
    return Math.hypot(ax$1, ay$1, az$1, aw);
};
const distanceToSquared$1 = (a, b) => {
    ax$1 = b[0] - a[0];
    ay$1 = b[1] - a[1];
    az$1 = b[2] - a[2];
    aw = b[3] - a[3];
    return ax$1 * ax$1 + ay$1 * ay$1 + az$1 * az$1 + aw * aw;
};
const divide$1 = (a, b, out = new Float32Array(4)) => {
    out[0] = a[0] / b[0];
    out[1] = a[1] / b[1];
    out[2] = a[2] / b[2];
    out[3] = a[3] / b[3];
    return out;
};
const dot$1 = (a, b) => {
    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3];
};
const equals$2 = (a, b) => {
    return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3];
};
function floor(a, out) {
    out[0] = Math.floor(a[0]);
    out[1] = Math.floor(a[1]);
    out[2] = Math.floor(a[2]);
    out[3] = Math.floor(a[3]);
    return out;
}
const from$4 = (a, out = new Float32Array(4)) => {
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    return out;
};
const fromValues$1 = (x, y, z, w, out = new Float32Array(4)) => {
    out[0] = x;
    out[1] = y;
    out[2] = z;
    out[3] = w;
    return out;
};
const inverse$1 = (a, out = new Float32Array(4)) => {
    out[0] = 1.0 / a[0];
    out[1] = 1.0 / a[1];
    out[2] = 1.0 / a[2];
    out[3] = 1.0 / a[3];
    return out;
};
const length$1 = (a) => {
    return Math.hypot(a[0], a[1], a[2], a[3]);
};
const lengthSquared$1 = (a) => {
    ax$1 = a[0];
    ay$1 = a[1];
    az$1 = a[2];
    aw = a[3];
    return ax$1 * ax$1 + ay$1 * ay$1 + az$1 * az$1 + aw * aw;
};
const lerp$1 = (a, b, t, out = new Float32Array(4)) => {
    ax$1 = a[0];
    ay$1 = a[1];
    az$1 = a[2];
    aw = a[3];
    out[0] = ax$1 + t * (b[0] - ax$1);
    out[1] = ay$1 + t * (b[1] - ay$1);
    out[2] = az$1 + t * (b[2] - az$1);
    out[3] = aw + t * (b[3] - aw);
    return out;
};
const max$1 = (a, b, out = new Float32Array(4)) => {
    out[0] = Math.max(a[0], b[0]);
    out[1] = Math.max(a[1], b[1]);
    out[2] = Math.max(a[2], b[2]);
    out[3] = Math.max(a[3], b[3]);
    return out;
};
const min$1 = (a, b, out = new Float32Array(4)) => {
    out[0] = Math.min(a[0], b[0]);
    out[1] = Math.min(a[1], b[1]);
    out[2] = Math.min(a[2], b[2]);
    out[3] = Math.min(a[3], b[3]);
    return out;
};
const minus$2 = (a, b, out = new Float32Array(4)) => {
    out[0] = a[0] - b[0];
    out[1] = a[1] - b[1];
    out[2] = a[2] - b[2];
    out[3] = a[3] - b[3];
    return out;
};
const multiply$4 = (a, b, out = new Float32Array(4)) => {
    out[0] = a[0] * b[0];
    out[1] = a[1] * b[1];
    out[2] = a[2] * b[2];
    out[3] = a[3] * b[3];
    return out;
};
const multiplyScalar$2 = (a, b, out = new Float32Array(4)) => {
    out[0] = a[0] * b;
    out[1] = a[1] * b;
    out[2] = a[2] * b;
    out[3] = a[3] * b;
    return out;
};
const negate$1 = (a, out = new Float32Array(4)) => {
    out[0] = -a[0];
    out[1] = -a[1];
    out[2] = -a[2];
    out[3] = -a[3];
    return out;
};
const normalize$1 = (a, out = new Float32Array(4)) => {
    ax$1 = a[0];
    ay$1 = a[1];
    az$1 = a[2];
    aw = a[3];
    len$2 = ax$1 * ax$1 + ay$1 * ay$1 + az$1 * az$1 + aw * aw;
    if (len$2 > 0) {
        len$2 = 1 / Math.sqrt(len$2);
    }
    out[0] = ax$1 * len$2;
    out[1] = ay$1 * len$2;
    out[2] = az$1 * len$2;
    out[3] = aw * len$2;
    return out;
};
const round$1 = (a, out = new Float32Array(4)) => {
    out[0] = Math.round(a[0]);
    out[1] = Math.round(a[1]);
    out[2] = Math.round(a[2]);
    out[3] = Math.round(a[3]);
    return out;
};
function toString$2(a) {
    return `vec4(${a[0]}, ${a[1]}, ${a[2]}, ${a[3]})`;
}
function transformMatrix4$1(a, m, out = new Float32Array(4)) {
    ax$1 = a[0],
        ay$1 = a[1],
        az$1 = a[2],
        aw = a[3];
    out[0] = m[0] * ax$1 + m[4] * ay$1 + m[8] * az$1 + m[12] * aw;
    out[1] = m[1] * ax$1 + m[5] * ay$1 + m[9] * az$1 + m[13] * aw;
    out[2] = m[2] * ax$1 + m[6] * ay$1 + m[10] * az$1 + m[14] * aw;
    out[3] = m[3] * ax$1 + m[7] * ay$1 + m[11] * az$1 + m[15] * aw;
    return out;
}
const transformQuat$1 = (a, q, out = new Float32Array(4)) => {
    bx$1 = a[0],
        by$1 = a[1],
        bz$1 = a[2];
    ax$1 = q[0],
        ay$1 = q[1],
        az$1 = q[2],
        aw = q[3];
    ix = aw * bx$1 + ay$1 * bz$1 - az$1 * by$1;
    iy = aw * by$1 + az$1 * bx$1 - ax$1 * bz$1;
    iz = aw * bz$1 + ax$1 * by$1 - ay$1 * bx$1;
    iw = -ax$1 * bx$1 - ay$1 * by$1 - az$1 * bz$1;
    out[0] = ix * aw + iw * -ax$1 + iy * -az$1 - iz * -ay$1;
    out[1] = iy * aw + iw * -ay$1 + iz * -ax$1 - ix * -az$1;
    out[2] = iz * aw + iw * -az$1 + ix * -ay$1 - iy * -ax$1;
    out[3] = a[3];
    return out;
};

var Vector4 = /*#__PURE__*/Object.freeze({
	__proto__: null,
	add: add$2,
	ceil: ceil,
	closeTo: closeTo$2,
	create: create$4,
	cross: cross$1,
	distanceTo: distanceTo$1,
	distanceToSquared: distanceToSquared$1,
	divide: divide$1,
	dot: dot$1,
	equals: equals$2,
	floor: floor,
	from: from$4,
	fromValues: fromValues$1,
	inverse: inverse$1,
	length: length$1,
	lengthSquared: lengthSquared$1,
	lerp: lerp$1,
	max: max$1,
	min: min$1,
	minus: minus$2,
	multiply: multiply$4,
	multiplyScalar: multiplyScalar$2,
	negate: negate$1,
	normalize: normalize$1,
	round: round$1,
	toString: toString$2,
	transformMatrix4: transformMatrix4$1,
	transformQuat: transformQuat$1
});

let ax$2, ay$2, az$2, aw$1, bx$2, by$2, bz$2, bw;
let s$2 = 0, c$1 = 0, rad = 0, dotTmp = 0, omega = 0, scale0 = 0, scale1 = 0;
let tmpVec3 = new Float32Array(3);
const angleTo = (a, b) => {
    dotTmp = dot$2(a, b);
    return Math.acos(2 * dotTmp * dotTmp - 1);
};
const conjugate = (a, out = new Float32Array(4)) => {
    out[0] = -a[0];
    out[1] = -a[1];
    out[2] = -a[2];
    out[3] = a[3];
    return out;
};
const create$5 = (x = 0, y = 0, z = 0, w = 1, out = new Float32Array(4)) => {
    out[0] = x;
    out[1] = y;
    out[2] = z;
    out[3] = w;
    return out;
};
const dot$2 = dot$1;
const fromAxisAngle = (axis, rad, out = new Float32Array(4)) => {
    rad = rad * 0.5;
    s$2 = Math.sin(rad);
    out[0] = s$2 * axis[0];
    out[1] = s$2 * axis[1];
    out[2] = s$2 * axis[2];
    out[3] = Math.cos(rad);
    return out;
};
function fromMatrix3(m, out) {
    let fTrace = m[0] + m[4] + m[8];
    let fRoot;
    if (fTrace > 0.0) {
        fRoot = Math.sqrt(fTrace + 1.0); // 2w
        out[3] = 0.5 * fRoot;
        fRoot = 0.5 / fRoot; // 1/(4w)
        out[0] = (m[5] - m[7]) * fRoot;
        out[1] = (m[6] - m[2]) * fRoot;
        out[2] = (m[1] - m[3]) * fRoot;
    }
    else {
        let i = 0;
        if (m[4] > m[0])
            i = 1;
        if (m[8] > m[i * 3 + i])
            i = 2;
        let j = (i + 1) % 3;
        let k = (i + 2) % 3;
        fRoot = Math.sqrt(m[i * 3 + i] - m[j * 3 + j] - m[k * 3 + k] + 1.0);
        out[i] = 0.5 * fRoot;
        fRoot = 0.5 / fRoot;
        out[3] = (m[j * 3 + k] - m[k * 3 + j]) * fRoot;
        out[j] = (m[j * 3 + i] + m[i * 3 + j]) * fRoot;
        out[k] = (m[k * 3 + i] + m[i * 3 + k]) * fRoot;
    }
    return out;
}
const identity$3 = (out = new Float32Array(4)) => {
    out[0] = 0;
    out[1] = 0;
    out[2] = 0;
    out[3] = 1;
    return out;
};
const invert$3 = (a, out = new Float32Array(4)) => {
    ax$2 = a[0],
        ay$2 = a[1],
        az$2 = a[2],
        aw$1 = a[3];
    dotTmp = ax$2 * ax$2 + ay$2 * ay$2 + az$2 * az$2 + aw$1 * aw$1;
    if (dotTmp) {
        c$1 = 1.0 / dotTmp;
        out[0] = -ax$2 * c$1;
        out[1] = -ay$2 * c$1;
        out[2] = -az$2 * c$1;
        out[3] = aw$1 * c$1;
    }
    else {
        out[0] = 0;
        out[1] = 0;
        out[2] = 0;
        out[3] = 0;
    }
    return out;
};
const lerp$2 = lerp$1;
const multiply$5 = (a, b, out) => {
    ax$2 = a[0],
        ay$2 = a[1],
        az$2 = a[2],
        aw$1 = a[3];
    bx$2 = b[0],
        by$2 = b[1],
        bz$2 = b[2],
        bw = b[3];
    out[0] = ax$2 * bw + aw$1 * bx$2 + ay$2 * bz$2 - az$2 * by$2;
    out[1] = ay$2 * bw + aw$1 * by$2 + az$2 * bx$2 - ax$2 * bz$2;
    out[2] = az$2 * bw + aw$1 * bz$2 + ax$2 * by$2 - ay$2 * bx$2;
    out[3] = aw$1 * bw - ax$2 * bx$2 - ay$2 * by$2 - az$2 * bz$2;
    return out;
};
const random = (out) => {
    ax$2 = Math.random();
    ay$2 = Math.random();
    az$2 = Math.random();
    c$1 = Math.sqrt(1 - ax$2);
    s$2 = Math.sqrt(ax$2);
    out[0] = c$1 * Math.sin(2.0 * Math.PI * ay$2);
    out[1] = c$1 * Math.cos(2.0 * Math.PI * ay$2);
    out[2] = s$2 * Math.sin(2.0 * Math.PI * az$2);
    out[3] = s$2 * Math.cos(2.0 * Math.PI * az$2);
    return out;
};
const rotationTo = (a, b, out) => {
    dotTmp = dot(a, b);
    if (dotTmp < -0.999999) {
        cross(VECTOR3_LEFT, a, tmpVec3);
        if (length(tmpVec3) < 0.000001) {
            cross(VECTOR3_TOP, a, tmpVec3);
        }
        normalize(tmpVec3, tmpVec3);
        fromAxisAngle(tmpVec3, Math.PI, out);
        return out;
    }
    else if (dotTmp > 0.999999) {
        out[0] = 0;
        out[1] = 0;
        out[2] = 0;
        out[3] = 1;
        return out;
    }
    else {
        cross(tmpVec3, a, b);
        out[0] = tmpVec3[0];
        out[1] = tmpVec3[1];
        out[2] = tmpVec3[2];
        out[3] = 1 + dotTmp;
        return normalize$1(out, out);
    }
};
const rotateX$2 = (a, rad, out) => {
    rad *= 0.5;
    ax$2 = a[0],
        ay$2 = a[1],
        az$2 = a[2],
        aw$1 = a[3];
    bx$2 = Math.sin(rad),
        bw = Math.cos(rad);
    out[0] = ax$2 * bw + aw$1 * bx$2;
    out[1] = ay$2 * bw + az$2 * bx$2;
    out[2] = az$2 * bw - ay$2 * bx$2;
    out[3] = aw$1 * bw - ax$2 * bx$2;
    return out;
};
const rotateY$2 = (a, rad, out) => {
    rad *= 0.5;
    ax$2 = a[0],
        ay$2 = a[1],
        az$2 = a[2],
        aw$1 = a[3];
    by$2 = Math.sin(rad),
        bw = Math.cos(rad);
    out[0] = ax$2 * bw - az$2 * by$2;
    out[1] = ay$2 * bw + aw$1 * by$2;
    out[2] = az$2 * bw + ax$2 * by$2;
    out[3] = aw$1 * bw - ay$2 * by$2;
    return out;
};
const rotateZ$2 = (a, rad, out) => {
    rad *= 0.5;
    ax$2 = a[0],
        ay$2 = a[1],
        az$2 = a[2],
        aw$1 = a[3];
    bz$2 = Math.sin(rad),
        bw = Math.cos(rad);
    out[0] = ax$2 * bw + ay$2 * bz$2;
    out[1] = ay$2 * bw - ax$2 * bz$2;
    out[2] = az$2 * bw + aw$1 * bz$2;
    out[3] = aw$1 * bw - az$2 * bz$2;
    return out;
};
const slerp$1 = (a, b, t, out) => {
    ax$2 = a[0],
        ay$2 = a[1],
        az$2 = a[2],
        aw$1 = a[3];
    bx$2 = b[0],
        by$2 = b[1],
        bz$2 = b[2],
        bw = b[3];
    c$1 = ax$2 * bx$2 + ay$2 * by$2 + az$2 * bz$2 + aw$1 * bw;
    if (c$1 < 0.0) {
        c$1 = -c$1;
        bx$2 = -bx$2;
        by$2 = -by$2;
        bz$2 = -bz$2;
        bw = -bw;
    }
    if (1.0 - c$1 > EPSILON) {
        omega = Math.acos(c$1);
        s$2 = Math.sin(omega);
        scale0 = Math.sin((1.0 - t) * omega) / s$2;
        scale1 = Math.sin(t * omega) / s$2;
    }
    else {
        scale0 = 1.0 - t;
        scale1 = t;
    }
    out[0] = scale0 * ax$2 + scale1 * bx$2;
    out[1] = scale0 * ay$2 + scale1 * by$2;
    out[2] = scale0 * az$2 + scale1 * bz$2;
    out[3] = scale0 * aw$1 + scale1 * bw;
    return out;
};
const toAxisAngle = (q, outAxis = new Float32Array(3)) => {
    rad = Math.acos(q[3]) * 2.0;
    s$2 = Math.sin(rad / 2.0);
    if (s$2 > EPSILON) {
        outAxis[0] = q[0] / s$2;
        outAxis[1] = q[1] / s$2;
        outAxis[2] = q[2] / s$2;
    }
    else {
        outAxis[0] = 1;
        outAxis[1] = 0;
        outAxis[2] = 0;
    }
    return rad;
};
const toString$3 = (a) => {
    return `quat("${a[0]}, ${a[1]}, ${a[2]}, ${a[3]})`;
};

var Quaternion = /*#__PURE__*/Object.freeze({
	__proto__: null,
	angleTo: angleTo,
	conjugate: conjugate,
	create: create$5,
	dot: dot$2,
	fromAxisAngle: fromAxisAngle,
	fromMatrix3: fromMatrix3,
	identity: identity$3,
	invert: invert$3,
	lerp: lerp$2,
	multiply: multiply$5,
	random: random,
	rotationTo: rotationTo,
	rotateX: rotateX$2,
	rotateY: rotateY$2,
	rotateZ: rotateZ$2,
	slerp: slerp$1,
	toAxisAngle: toAxisAngle,
	toString: toString$3
});

var rndFloat = (low, high) => {
    return low + Math.random() * (high - low);
};

var rndFloatRange = (range) => {
    return range * (0.5 - Math.random());
};

var rndInt = (low, high) => {
    return low + Math.floor(Math.random() * (high - low + 1));
};

let x$3 = 0, y$3 = 0, c$2 = 0, s$3 = 0;
const add$3 = (a, b, out = new Float32Array(2)) => {
    out[0] = a[0] + b[0];
    out[1] = a[1] + b[1];
    return out;
};
const addScalar$1 = (a, b, out = new Float32Array(2)) => {
    out[0] = a[0] + b;
    out[1] = a[1] + b;
    return out;
};
const angle$1 = (a) => {
    return Math.atan2(a[1], a[0]);
};
const ceil$1 = (a, out = new Float32Array(2)) => {
    out[0] = Math.ceil(a[0]);
    out[1] = Math.ceil(a[1]);
    return out;
};
const clamp$1 = (a, min, max, out = new Float32Array(2)) => {
    out[0] = clampCommon(a[0], min[0], max[0]);
    out[1] = clampCommon(a[1], min[1], max[1]);
    return out;
};
const clampSafe$1 = (a, min, max, out = new Float32Array(2)) => {
    out[0] = clampSafeCommon(a[0], min[0], max[0]);
    out[1] = clampSafeCommon(a[1], min[1], max[1]);
    return out;
};
const clampLength = (a, min, max, out = new Float32Array(2)) => {
    out[0] = clampSafeCommon(a[0], min[0], max[0]);
    out[1] = clampSafeCommon(a[1], min[1], max[1]);
    return out;
};
const clampScalar$1 = (a, min, max, out = new Float32Array(2)) => {
    out[0] = clampCommon(a[0], min, max);
    out[1] = clampCommon(a[1], min, max);
    return out;
};
const closeTo$3 = (a, b, epsilon = EPSILON) => {
    return distanceTo$2(a, b) <= epsilon;
};
const closeToRect = (a, b, epsilon = EPSILON) => {
    return closeToCommon(a[0], b[0], epsilon) && closeToCommon(a[1], b[1], epsilon);
};
const closeToManhattan = (a, b, epsilon = EPSILON) => {
    return distanceToManhattan$1(a, b) <= epsilon;
};
const clone$1 = (a, out = new Float32Array(2)) => {
    out[0] = a[0];
    out[1] = a[1];
    return out;
};
const cross$2 = (a, b) => {
    return a[0] * b[1] - a[1] * b[0];
};
const create$6 = (x, y, out = new Float32Array(2)) => {
    out[0] = x;
    out[1] = y;
    return out;
};
const distanceTo$2 = (a, b) => {
    x$3 = b[0] - a[0];
    y$3 = b[1] - a[1];
    return Math.hypot(x$3, y$3);
};
const distanceToManhattan$1 = (a, b) => {
    return Math.abs(a[0] - b[0]) + Math.abs(a[1] - b[1]);
};
const distanceToSquared$2 = (a, b) => {
    x$3 = a[0] - b[0];
    y$3 = a[1] - b[1];
    return x$3 * x$3 + y$3 * y$3;
};
const divide$2 = (a, b, out = new Float32Array(2)) => {
    out[0] = a[0] / b[0];
    out[1] = a[1] / b[1];
    return out;
};
const divideScalar$1 = (a, scalar, out = new Float32Array(2)) => {
    return multiplyScalar$3(a, 1 / scalar, out);
};
const dot$3 = (a, b) => {
    return a[0] * b[0] + a[1] * b[1];
};
const equals$3 = (a, b) => {
    return a[0] === b[0] && a[1] === b[1];
};
const floor$1 = (a, out = new Float32Array(2)) => {
    out[0] = Math.floor(a[0]);
    out[1] = Math.floor(a[1]);
    return out;
};
const floorToZero = (a, out = new Float32Array(2)) => {
    out[0] = floorToZeroCommon(a[0]);
    out[1] = floorToZeroCommon(a[1]);
    return out;
};
const from$5 = (a, out = new Float32Array(2)) => {
    out[0] = a[0];
    out[1] = a[1];
    return out;
};
const fromArray$1 = (arr, index = 0, out = new Float32Array(2)) => {
    out[0] = arr[index];
    out[1] = arr[index + 1];
    return out;
};
const fromJson = (j, out = new Float32Array(2)) => {
    out[0] = j.x;
    out[1] = j.y;
    return out;
};
const fromPolar = (p, out = new Float32Array(2)) => {
    out[0] = Math.cos(p.a) * p.r;
    out[1] = Math.sin(p.a) * p.r;
    return out;
};
const fromScalar$1 = (value = 0, out = new Float32Array(2)) => {
    out[0] = out[1] = value;
    return out;
};
const inverse$2 = (a, out = new Float32Array(2)) => {
    out[0] = 1 / a[0] || 0;
    out[1] = 1 / a[1] || 0;
    return out;
};
const length$2 = (a) => {
    return Math.sqrt(a[0] * a[0] + a[1] * a[1]);
};
const lengthManhattan$1 = (a) => {
    return Math.abs(a[0]) + Math.abs(a[1]);
};
const lengthSquared$2 = (a) => {
    return a[0] * a[0] + a[1] * a[1];
};
const lerp$3 = (a, b, alpha, out = new Float32Array(2)) => {
    out[0] = (b[0] - a[0]) * alpha + a[0];
    out[1] = (b[1] - a[1]) * alpha + a[1];
    return out;
};
const max$2 = (a, b, out = new Float32Array(2)) => {
    out[0] = Math.max(a[0], b[0]);
    out[1] = Math.max(a[1], b[1]);
    return out;
};
const min$2 = (a, b, out = new Float32Array(2)) => {
    out[0] = Math.min(a[0], b[0]);
    out[1] = Math.min(a[1], b[1]);
    return out;
};
const minus$3 = (a, b, out = new Float32Array(2)) => {
    out[0] = a[0] - b[0];
    out[1] = a[1] - b[0];
    return out;
};
const minusScalar$1 = (a, num, out = new Float32Array(2)) => {
    out[0] = a[0] - num;
    out[1] = a[1] - num;
    return out;
};
const multiply$6 = (a, b, out = new Float32Array(2)) => {
    out[0] = a[0] * b[0];
    out[1] = a[1] * b[1];
    return out;
};
const multiplyScalar$3 = (a, scalar, out = new Float32Array(2)) => {
    out[0] = a[0] * scalar;
    out[1] = a[1] * scalar;
    return out;
};
const negate$2 = (a, out = new Float32Array(2)) => {
    out[0] = -a[0];
    out[1] = -a[1];
    return out;
};
const normalize$2 = (a, out = new Float32Array(2)) => {
    return divideScalar$1(a, length$2(a) || 1, out);
};
const random$1 = (length = 1, out = new Float32Array(2)) => {
    x$3 = Math.random() * DEG_360_RAD;
    out[0] = Math.cos(x$3) * length;
    out[1] = Math.sin(x$3) * length;
    return out;
};
const rotate$3 = (a, angle, center = VECTOR2_ZERO, out = new Float32Array(2)) => {
    c$2 = Math.cos(angle);
    s$3 = Math.sin(angle);
    x$3 = a[0] - center[0];
    y$3 = a[1] - center[1];
    out[0] = x$3 * c$2 - y$3 * s$3 + center[0];
    out[1] = x$3 * s$3 + y$3 * c$2 + center[1];
    return out;
};
const round$2 = (a, out = new Float32Array(2)) => {
    out[0] = Math.round(a[0]);
    out[1] = Math.round(a[1]);
    return out;
};
const set$1 = (x = 0, y = 0, out = new Float32Array(2)) => {
    out[0] = x;
    out[1] = y;
    return out;
};
const setLength$1 = (a, length, out = new Float32Array(2)) => {
    normalize$2(a, out);
    multiplyScalar$3(out, length, out);
    return out;
};
const toArray = (a, arr = []) => {
    arr[0] = a[0];
    arr[1] = a[1];
    return arr;
};
const toPalorJson = (a, p = { a: 0, r: 0 }) => {
    p.r = length$2(a);
    p.a = angle$1(a);
    return p;
};
const toString$4 = (a) => {
    return `vec2(${a[0]}, ${a[1]})`;
};
const transformMatrix3$1 = (a, m, out) => {
    x$3 = a[0];
    y$3 = a[1];
    out[0] = m[0] * x$3 + m[3] * y$3 + m[6];
    out[1] = m[1] * x$3 + m[4] * y$3 + m[7];
    return out;
};
const VECTOR2_ZERO = new Float32Array([0, 0]);
const VECTOR2_TOP = new Float32Array([0, 1]);
const VECTOR2_BOTTOM = new Float32Array([0, -1]);
const VECTOR2_LEFT = new Float32Array([-1, 0]);
const VECTOR2_RIGHT = new Float32Array([1, 0]);

var Vector2 = /*#__PURE__*/Object.freeze({
	__proto__: null,
	add: add$3,
	addScalar: addScalar$1,
	angle: angle$1,
	ceil: ceil$1,
	clamp: clamp$1,
	clampSafe: clampSafe$1,
	clampLength: clampLength,
	clampScalar: clampScalar$1,
	closeTo: closeTo$3,
	closeToRect: closeToRect,
	closeToManhattan: closeToManhattan,
	clone: clone$1,
	cross: cross$2,
	create: create$6,
	distanceTo: distanceTo$2,
	distanceToManhattan: distanceToManhattan$1,
	distanceToSquared: distanceToSquared$2,
	divide: divide$2,
	divideScalar: divideScalar$1,
	dot: dot$3,
	equals: equals$3,
	floor: floor$1,
	floorToZero: floorToZero,
	from: from$5,
	fromArray: fromArray$1,
	fromJson: fromJson,
	fromPolar: fromPolar,
	fromScalar: fromScalar$1,
	inverse: inverse$2,
	length: length$2,
	lengthManhattan: lengthManhattan$1,
	lengthSquared: lengthSquared$2,
	lerp: lerp$3,
	max: max$2,
	min: min$2,
	minus: minus$3,
	minusScalar: minusScalar$1,
	multiply: multiply$6,
	multiplyScalar: multiplyScalar$3,
	negate: negate$2,
	normalize: normalize$2,
	random: random$1,
	rotate: rotate$3,
	round: round$2,
	set: set$1,
	setLength: setLength$1,
	toArray: toArray,
	toPalorJson: toPalorJson,
	toString: toString$4,
	transformMatrix3: transformMatrix3$1,
	VECTOR2_ZERO: VECTOR2_ZERO,
	VECTOR2_TOP: VECTOR2_TOP,
	VECTOR2_BOTTOM: VECTOR2_BOTTOM,
	VECTOR2_LEFT: VECTOR2_LEFT,
	VECTOR2_RIGHT: VECTOR2_RIGHT
});

export { COLOR_HEX_MAP, ColorRGB, ColorRGBA, Matrix2, Matrix3, Matrix4, Quaternion, Vector2, Vector3, Vector4, ceilPowerOfTwo, clampCommon as clamp, clampCircle, clampSafeCommon as clampSafe, closeToCommon as closeTo, floorPowerOfTwo, floorToZeroCommon as floorToZero, isPowerOfTwo, randFloat, randInt, rndFloat, rndFloatRange, rndInt, sum$1 as sum, sumArray };
//# sourceMappingURL=Mathx.module.js.map
