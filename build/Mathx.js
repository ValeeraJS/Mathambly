(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.Mathx = {}));
})(this, (function (exports) { 'use strict';

	const DEG_TO_RAD = Math.PI / 180;
	const DEG_360_RAD = Math.PI * 2;
	const DEG_90_RAD = Math.PI / 2;
	const DEG_60_RAD = Math.PI / 3;
	const DEG_45_RAD = Math.PI / 4;
	const DEG_30_RAD = Math.PI / 6;
	const EPSILON = Math.pow(2, -52);
	const RAD_TO_DEG = 180 / Math.PI;

	var constants = /*#__PURE__*/Object.freeze({
		__proto__: null,
		DEG_30_RAD: DEG_30_RAD,
		DEG_360_RAD: DEG_360_RAD,
		DEG_45_RAD: DEG_45_RAD,
		DEG_60_RAD: DEG_60_RAD,
		DEG_90_RAD: DEG_90_RAD,
		DEG_TO_RAD: DEG_TO_RAD,
		EPSILON: EPSILON,
		RAD_TO_DEG: RAD_TO_DEG
	});

	const COLOR_HEX_MAP = {
	    aliceblue: 0xf0f8ff,
	    antiquewhite: 0xfaebd7,
	    aqua: 0x00ffff,
	    aquamarine: 0x7fffd4,
	    azure: 0xf0ffff,
	    beige: 0xf5f5dc,
	    bisque: 0xffe4c4,
	    black: 0x000000,
	    blanchedalmond: 0xffebcd,
	    blue: 0x0000ff,
	    blueviolet: 0x8a2be2,
	    brown: 0xa52a2a,
	    burlywood: 0xdeb887,
	    cadetblue: 0x5f9ea0,
	    chartreuse: 0x7fff00,
	    chocolate: 0xd2691e,
	    coral: 0xff7f50,
	    cornflowerblue: 0x6495ed,
	    cornsilk: 0xfff8dc,
	    crimson: 0xdc143c,
	    cyan: 0x00ffff,
	    darkblue: 0x00008b,
	    darkcyan: 0x008b8b,
	    darkgoldenrod: 0xb8860b,
	    darkgray: 0xa9a9a9,
	    darkgreen: 0x006400,
	    darkgrey: 0xa9a9a9,
	    darkkhaki: 0xbdb76b,
	    darkmagenta: 0x8b008b,
	    darkolivegreen: 0x556b2f,
	    darkorange: 0xff8c00,
	    darkorchid: 0x9932cc,
	    darkred: 0x8b0000,
	    darksalmon: 0xe9967a,
	    darkseagreen: 0x8fbc8f,
	    darkslateblue: 0x483d8b,
	    darkslategray: 0x2f4f4f,
	    darkslategrey: 0x2f4f4f,
	    darkturquoise: 0x00ced1,
	    darkviolet: 0x9400d3,
	    deeppink: 0xff1493,
	    deepskyblue: 0x00bfff,
	    dimgray: 0x696969,
	    dimgrey: 0x696969,
	    dodgerblue: 0x1e90ff,
	    firebrick: 0xb22222,
	    floralwhite: 0xfffaf0,
	    forestgreen: 0x228b22,
	    fuchsia: 0xff00ff,
	    gainsboro: 0xdcdcdc,
	    ghostwhite: 0xf8f8ff,
	    gold: 0xffd700,
	    goldenrod: 0xdaa520,
	    gray: 0x808080,
	    green: 0x008000,
	    greenyellow: 0xadff2f,
	    grey: 0x808080,
	    honeydew: 0xf0fff0,
	    hotpink: 0xff69b4,
	    indianred: 0xcd5c5c,
	    indigo: 0x4b0082,
	    ivory: 0xfffff0,
	    khaki: 0xf0e68c,
	    lavender: 0xe6e6fa,
	    lavenderblush: 0xfff0f5,
	    lawngreen: 0x7cfc00,
	    lemonchiffon: 0xfffacd,
	    lightblue: 0xadd8e6,
	    lightcoral: 0xf08080,
	    lightcyan: 0xe0ffff,
	    lightgoldenrodyellow: 0xfafad2,
	    lightgray: 0xd3d3d3,
	    lightgreen: 0x90ee90,
	    lightgrey: 0xd3d3d3,
	    lightpink: 0xffb6c1,
	    lightsalmon: 0xffa07a,
	    lightseagreen: 0x20b2aa,
	    lightskyblue: 0x87cefa,
	    lightslategray: 0x778899,
	    lightslategrey: 0x778899,
	    lightsteelblue: 0xb0c4de,
	    lightyellow: 0xffffe0,
	    lime: 0x00ff00,
	    limegreen: 0x32cd32,
	    linen: 0xfaf0e6,
	    magenta: 0xff00ff,
	    maroon: 0x800000,
	    mediumaquamarine: 0x66cdaa,
	    mediumblue: 0x0000cd,
	    mediumorchid: 0xba55d3,
	    mediumpurple: 0x9370db,
	    mediumseagreen: 0x3cb371,
	    mediumslateblue: 0x7b68ee,
	    mediumspringgreen: 0x00fa9a,
	    mediumturquoise: 0x48d1cc,
	    mediumvioletred: 0xc71585,
	    midnightblue: 0x191970,
	    mintcream: 0xf5fffa,
	    mistyrose: 0xffe4e1,
	    moccasin: 0xffe4b5,
	    navajowhite: 0xffdead,
	    navy: 0x000080,
	    oldlace: 0xfdf5e6,
	    olive: 0x808000,
	    olivedrab: 0x6b8e23,
	    orange: 0xffa500,
	    orangered: 0xff4500,
	    orchid: 0xda70d6,
	    palegoldenrod: 0xeee8aa,
	    palegreen: 0x98fb98,
	    paleturquoise: 0xafeeee,
	    palevioletred: 0xdb7093,
	    papayawhip: 0xffefd5,
	    peachpuff: 0xffdab9,
	    peru: 0xcd853f,
	    pink: 0xffc0cb,
	    plum: 0xdda0dd,
	    powderblue: 0xb0e0e6,
	    purple: 0x800080,
	    rebeccapurple: 0x663399,
	    red: 0xff0000,
	    rosybrown: 0xbc8f8f,
	    royalblue: 0x4169e1,
	    saddlebrown: 0x8b4513,
	    salmon: 0xfa8072,
	    sandybrown: 0xf4a460,
	    seagreen: 0x2e8b57,
	    seashell: 0xfff5ee,
	    sienna: 0xa0522d,
	    silver: 0xc0c0c0,
	    skyblue: 0x87ceeb,
	    slateblue: 0x6a5acd,
	    slategray: 0x708090,
	    slategrey: 0x708090,
	    snow: 0xfffafa,
	    springgreen: 0x00ff7f,
	    steelblue: 0x4682b4,
	    tan: 0xd2b48c,
	    teal: 0x008080,
	    thistle: 0xd8bfd8,
	    tomato: 0xff6347,
	    turquoise: 0x40e0d0,
	    violet: 0xee82ee,
	    wheat: 0xf5deb3,
	    white: 0xffffff,
	    whitesmoke: 0xf5f5f5,
	    yellow: 0xffff00,
	    yellowgreen: 0x9acd32
	};

	const ArraybufferDataType = {
	    COLOR_GPU: "col",
	    COLOR_RGB: "col_rgb",
	    COLOR_RGBA: "col_rgba",
	    EULER: "euler",
	    MATRIX2: "mat2",
	    MATRIX3: "mat3",
	    MATRIX4: "mat4",
	    POLAR: "polar",
	    QUATERNION: "qua",
	    VECTOR2: "vec2",
	    VECTOR3: "vec3",
	    VECTOR4: "vec4"
	};

	class ColorRGBA extends Uint8Array {
	    static average = (color) => {
	        return (color[0] + color[1] + color[2]) / 3;
	    };
	    static averageWeighted = (color, wr = 0.299, wg = 0.587, wb = 0.114) => {
	        return color[0] * wr + color[1] * wg + color[2] * wb;
	    };
	    static clone = (color) => {
	        return new ColorRGBA(color[0], color[1], color[2], color[3]);
	    };
	    static create = (r = 0, g = 0, b = 0, a = 1) => {
	        return new ColorRGBA(r, g, b, a);
	    };
	    static equals = (a, b) => {
	        return ((a.r ?? a[0]) === (b.r ?? b[0]) &&
	            (a.g ?? a[1]) === (b.g ?? b[1]) &&
	            (a.b ?? a[2]) === (b.b ?? b[2]) &&
	            (a.a ?? a[3]) === (b.a ?? b[3]));
	    };
	    static fromArray = (arr, out = new ColorRGBA()) => {
	        out[0] = arr[0];
	        out[1] = arr[1];
	        out[2] = arr[2];
	        out[3] = arr[3];
	        return out;
	    };
	    static fromHex = (hex, alpha = 255, out = new ColorRGBA()) => {
	        out[0] = hex >> 16;
	        out[1] = (hex >> 8) & 255;
	        out[2] = hex & 255;
	        out[3] = alpha;
	        return out;
	    };
	    static fromJson = (json, out = new ColorRGBA()) => {
	        out[0] = json.r;
	        out[1] = json.g;
	        out[2] = json.b;
	        out[3] = json.a;
	        return out;
	    };
	    static fromScalar = (scalar, alpha = 255, out = new ColorRGBA()) => {
	        out[0] = scalar;
	        out[1] = scalar;
	        out[2] = scalar;
	        out[3] = alpha;
	        return out;
	    };
	    static fromString = (str, out = new ColorRGBA()) => {
	        if (str in COLOR_HEX_MAP) {
	            return ColorRGBA.fromHex(COLOR_HEX_MAP[str], 255, out);
	        }
	        else if (str.startsWith("#")) {
	            str = str.substr(1);
	            return ColorRGBA.fromScalar(parseInt(str, 16), 255, out);
	        }
	        else if (str.startsWith("rgba(")) {
	            str = str.substring(4, str.length - 1);
	            const arr = str.split(",");
	            out[0] = parseInt(arr[0], 10);
	            out[1] = parseInt(arr[1], 10);
	            out[2] = parseInt(arr[2], 10);
	            out[3] = parseInt(arr[3], 10);
	        }
	        return out;
	    };
	    static grayscale = (color, wr = 0.299, wg = 0.587, wb = 0.114, out = new ColorRGBA()) => {
	        const gray = ColorRGBA.averageWeighted(color, wr, wg, wb);
	        ColorRGBA.fromScalar(gray, color[3], out);
	        return out;
	    };
	    length;
	    dataType = ArraybufferDataType.COLOR_RGBA;
	    constructor(r = 0, g = 0, b = 0, a = 1) {
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
	        return this[4];
	    }
	    set a(val) {
	        this[4] = val;
	    }
	}

	class ColorRGB extends Uint8Array {
	    static average = (color) => {
	        return (color[0] + color[1] + color[2]) / 3;
	    };
	    static averageWeighted = (color, wr = 0.299, wg = 0.587, wb = 0.114) => {
	        return color[0] * wr + color[1] * wg + color[2] * wb;
	    };
	    static clone = (color) => {
	        return new ColorRGB(color[0], color[1], color[2]);
	    };
	    static create = (r = 0, g = 0, b = 0) => {
	        return new ColorRGB(r, g, b);
	    };
	    static equals = (a, b) => {
	        return ((a.r ?? a[0]) === (b.r ?? b[0]) &&
	            (a.g ?? a[1]) === (b.g ?? b[1]) &&
	            (a.b ?? a[2]) === (b.b ?? b[2]));
	    };
	    static fromArray = (arr, out = new ColorRGB()) => {
	        out[0] = arr[0];
	        out[1] = arr[1];
	        out[2] = arr[2];
	        return out;
	    };
	    static fromHex = (hex, out = new ColorRGB()) => {
	        out[0] = hex >> 16;
	        out[1] = (hex >> 8) & 255;
	        out[2] = hex & 255;
	        return out;
	    };
	    static fromJson = (json, out = new ColorRGB()) => {
	        out[0] = json.r;
	        out[1] = json.g;
	        out[2] = json.b;
	        return out;
	    };
	    static fromScalar = (scalar, out = new ColorRGB()) => {
	        out[0] = scalar;
	        out[1] = scalar;
	        out[2] = scalar;
	        return out;
	    };
	    static fromString = (str, out = new ColorRGB()) => {
	        if (str in COLOR_HEX_MAP) {
	            return ColorRGB.fromHex(COLOR_HEX_MAP[str], out);
	        }
	        else if (str.startsWith("#")) {
	            str = str.substr(1);
	            return ColorRGB.fromScalar(parseInt(str, 16), out);
	        }
	        else if (str.startsWith("rgb(")) {
	            str = str.substring(4, str.length - 1);
	            const arr = str.split(",");
	            out[0] = parseInt(arr[0], 10);
	            out[1] = parseInt(arr[1], 10);
	            out[2] = parseInt(arr[2], 10);
	        }
	        return out;
	    };
	    static grayscale = (color, wr = 0.299, wg = 0.587, wb = 0.114, out = new ColorRGB()) => {
	        const gray = ColorRGB.averageWeighted(color, wr, wg, wb);
	        ColorRGB.fromScalar(gray, out);
	        return out;
	    };
	    length;
	    dataType = ArraybufferDataType.COLOR_RGB;
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

	class ColorGPU extends Float32Array {
	    static average = (color) => {
	        return (color[0] + color[1] + color[2]) / 3;
	    };
	    static averageWeighted = (color, wr = 0.299, wg = 0.587, wb = 0.114) => {
	        return color[0] * wr + color[1] * wg + color[2] * wb;
	    };
	    static clone = (color) => {
	        return new ColorGPU(color[0], color[1], color[2], color[3]);
	    };
	    static create = (r = 0, g = 0, b = 0, a = 0) => {
	        return new ColorGPU(r, g, b, a);
	    };
	    static equals = (a, b) => {
	        return ((a.r ?? a[0]) === (b.r ?? b[0]) &&
	            (a.g ?? a[1]) === (b.g ?? b[1]) &&
	            (a.b ?? a[2]) === (b.b ?? b[2]) &&
	            (a.a ?? a[3]) === (b.a ?? b[3]));
	    };
	    static fromArray = (arr, out = new ColorGPU()) => {
	        out[0] = arr[0];
	        out[1] = arr[1];
	        out[2] = arr[2];
	        out[3] = arr[3];
	        return out;
	    };
	    static fromColorRGB(color, out = new ColorGPU()) {
	        out[0] = color[0] / 255;
	        out[1] = color[1] / 255;
	        out[2] = color[2] / 255;
	        out[3] = 1;
	        return out;
	    }
	    static fromColorRGBA(color, out = new ColorGPU()) {
	        out[0] = color[0] / 255;
	        out[1] = color[1] / 255;
	        out[2] = color[2] / 255;
	        out[3] = color[3] / 255;
	        return out;
	    }
	    static fromHex = (hex, alpha = 1, out = new ColorGPU()) => {
	        out[0] = (hex >> 16) / 255;
	        out[1] = ((hex >> 8) & 255) / 255;
	        out[2] = (hex & 255) / 255;
	        out[3] = alpha;
	        return out;
	    };
	    static fromJson = (json, out = new ColorGPU()) => {
	        out[0] = json.r;
	        out[1] = json.g;
	        out[2] = json.b;
	        out[3] = json.a;
	        return out;
	    };
	    static fromScalar = (scalar, out = new ColorGPU()) => {
	        out[0] = scalar;
	        out[1] = scalar;
	        out[2] = scalar;
	        return out;
	    };
	    static fromString = (str, out = new ColorGPU()) => {
	        if (str in COLOR_HEX_MAP) {
	            return ColorGPU.fromHex(COLOR_HEX_MAP[str], 1, out);
	        }
	        else if (str.startsWith("#")) {
	            str = str.substr(1);
	            return ColorGPU.fromHex(parseInt(str, 16), 1, out);
	        }
	        else if (str.startsWith("rgb(")) {
	            str = str.substring(4, str.length - 1);
	            const arr = str.split(",");
	            out[0] = parseInt(arr[0], 10) / 255;
	            out[1] = parseInt(arr[1], 10) / 255;
	            out[2] = parseInt(arr[2], 10) / 255;
	        }
	        return out;
	    };
	    static grayscale = (color, wr = 0.299, wg = 0.587, wb = 0.114, out = new ColorGPU()) => {
	        const gray = ColorGPU.averageWeighted(color, wr, wg, wb);
	        ColorGPU.fromScalar(gray, out);
	        return out;
	    };
	    length;
	    dataType = ArraybufferDataType.COLOR_GPU;
	    constructor(r = 0, g = 0, b = 0, a = 0) {
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

	let circle, v$1;
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
	    v$1 = floorToZeroCommon(min / circle) * circle + (val % circle);
	    if (v$1 < min) {
	        return v$1 + circle;
	    }
	    else if (v$1 > max) {
	        return v$1 - circle;
	    }
	    return v$1;
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

	var lerp = (a, b, p) => {
	    return (b - a) * p + a;
	};

	let d1 = 0, d2$1 = 0;
	/**
	 * @function mapRange
	 * @desc 将目标值按照区间线性映射到另一个区间里面的值。
	 * @param {number} value 目标值
	 * @param {number} range1 值所在的线性区间
	 * @param {number} range2 值需要映射到的目标区间
	 * @returns {number} 映射之后的值
	 * @example Mathx.mapRange(50, [0, 100], [0, 1]); // 0.5;
	 * Mathx.clamp(150, [100, 200], [0, -100]); // -50;
	 * Mathx.clamp(10, [0, 1], [0, -2]); // -20;
	 */
	var mapRange = (value, range1, range2) => {
	    d1 = range1[1] - range1[0];
	    d2$1 = range2[1] - range2[0];
	    return (value - d1 * 0.5) / d2$1 / d1;
	};

	var randFloat = (min = 0, max = 1) => {
	    return min + Math.random() * (max - min);
	};

	var randInt = (min = 0, max = 1) => {
	    return min + Math.floor(Math.random() * (max - min + 1));
	};

	let len$3 = 0, sum$1 = 0;
	/**
	 * @function sumArray
	 * @desc 求数组的和
	 * @see sum
	 * @param {number[]} arr
	 * @returns {number} 和
	 * @example Mathx.sumArray([1, 2, 3]); // 6;
	 */
	var sumArray = (arr) => {
	    sum$1 = 0;
	    len$3 = arr.length;
	    for (let i = 0; i < len$3; i++) {
	        sum$1 += arr[i];
	    }
	    return sum$1;
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
	var sum = (...arr) => {
	    return sumArray(arr);
	};

	var BackIn = (p) => {
	    const s = 1.70158;
	    return p === 1 ? 1 : p * p * ((s + 1) * p - s);
	};

	var BackInOut = (p) => {
	    const s = 1.70158 * 1.525;
	    if ((p *= 2) < 1) {
	        return 0.5 * (p * p * ((s + 1) * p - s));
	    }
	    p -= 2;
	    return 0.5 * (p * p * ((s + 1) * p + s) + 2);
	};

	var BackOut = (p) => {
	    const s = 1.70158;
	    return p === 0 ? 0 : --p * p * ((s + 1) * p + s) + 1;
	};

	/* eslint-disable no-return-assign */
	var BounceOut = (p) => {
	    if (p < 1 / 2.75) {
	        return 7.5625 * p * p;
	    }
	    else if (p < 2 / 2.75) {
	        return 7.5625 * (p -= 1.5 / 2.75) * p + 0.75;
	    }
	    else if (p < 2.5 / 2.75) {
	        return 7.5625 * (p -= 2.25 / 2.75) * p + 0.9375;
	    }
	    else {
	        return 7.5625 * (p -= 2.625 / 2.75) * p + 0.984375;
	    }
	};

	var BounceIn = (p) => {
	    return 1 - BounceOut(1 - p);
	};

	var BounceInOut = (p) => {
	    if (p < 0.5) {
	        return BounceIn(p * 2) * 0.5;
	    }
	    return BounceOut(p * 2 - 1) * 0.5 + 0.5;
	};

	var CircularIn = (p) => {
	    return 1 - Math.sqrt(1 - p * p);
	};

	var CircularInOut = (p) => {
	    if ((p *= 2) < 1) {
	        return -0.5 * (Math.sqrt(1 - p * p) - 1);
	    }
	    p -= 2;
	    return 0.5 * (Math.sqrt(1 - p * p) + 1);
	};

	var CircularOut = (p) => {
	    return Math.sqrt(1 - --p * p);
	};

	var CubicIn = (p) => {
	    return p * p * p;
	};

	var CubicInOut = (p) => {
	    if ((p *= 2) < 1) {
	        return 0.5 * p * p * p;
	    }
	    p -= 2;
	    return 0.5 * (p * p * p + 2);
	};

	var CubicOut = (p) => {
	    return --p * p * p + 1;
	};

	var ElasticIn = (p) => {
	    if (p === 0 || p === 1) {
	        return p;
	    }
	    return -Math.pow(2, 10 * (p - 1)) * Math.sin((p - 1.1) * 5 * Math.PI);
	};

	var ElasticInOut = (p) => {
	    if (p === 0 || p === 1) {
	        return p;
	    }
	    p *= 2;
	    if (p < 1) {
	        return -0.5 * Math.pow(2, 10 * (p - 1)) * Math.sin((p - 1.1) * 5 * Math.PI);
	    }
	    return 0.5 * Math.pow(2, -10 * (p - 1)) * Math.sin((p - 1.1) * 5 * Math.PI) + 1;
	};

	var ElasticOut = (p) => {
	    if (p === 0 || p === 1) {
	        return p;
	    }
	    return Math.pow(2, -10 * p) * Math.sin((p - 0.1) * 5 * Math.PI) + 1;
	};

	var ExponentialIn = (p) => {
	    return p === 0 ? 0 : Math.pow(1024, p - 1);
	};

	var ExponentialInOut = (p) => {
	    if (p === 0 || p === 1) {
	        return p;
	    }
	    if ((p *= 2) < 1) {
	        return 0.5 * Math.pow(1024, p - 1);
	    }
	    return 0.5 * (-Math.pow(2, -10 * (p - 1)) + 2);
	};

	var ExponentialOut = (p) => {
	    return p === 1 ? 1 : 1 - Math.pow(2, -10 * p);
	};

	var Linear = (p) => {
	    return p;
	};

	var QuadraticIn = (p) => {
	    return p * p;
	};

	var QuadraticInOut = (p) => {
	    if ((p *= 2) < 1) {
	        return 0.5 * p * p;
	    }
	    return -0.5 * (--p * (p - 2) - 1);
	};

	var QuadraticOut = (p) => {
	    return p * (2 - p);
	};

	var QuarticIn = (p) => {
	    return p * p * p * p;
	};

	var QuarticInOut = (p) => {
	    if ((p *= 2) < 1) {
	        return 0.5 * p * p * p * p;
	    }
	    p -= 2;
	    return -0.5 * (p * p * p * p - 2);
	};

	var QuarticOut = (p) => {
	    return 1 - --p * p * p * p;
	};

	var QuinticIn = (p) => {
	    return p * p * p * p * p;
	};

	var QuinticInOut = (p) => {
	    if ((p *= 2) < 1) {
	        return 0.5 * p * p * p * p * p;
	    }
	    p -= 2;
	    return 0.5 * (p * p * p * p * p + 2);
	};

	var QuinticOut = (p) => {
	    return --p * p * p * p * p + 1;
	};

	var SinusoidalIn = (p) => {
	    return 1 - Math.sin(((1.0 - p) * Math.PI) / 2);
	};

	var SinusoidalInOut = (p) => {
	    return 0.5 * (1 - Math.sin(Math.PI * (0.5 - p)));
	};

	var SinusoidalOut = (p) => {
	    return Math.sin((p * Math.PI) / 2);
	};

	var index = /*#__PURE__*/Object.freeze({
		__proto__: null,
		BackIn: BackIn,
		BackInOut: BackInOut,
		BackOut: BackOut,
		BounceIn: BounceIn,
		BounceInOut: BounceInOut,
		BounceOut: BounceOut,
		CircularIn: CircularIn,
		CircularInOut: CircularInOut,
		CircularOut: CircularOut,
		CubicIn: CubicIn,
		CubicInOut: CubicInOut,
		CubicOut: CubicOut,
		ElasticIn: ElasticIn,
		ElasticInOut: ElasticInOut,
		ElasticOut: ElasticOut,
		ExponentialIn: ExponentialIn,
		ExponentialInOut: ExponentialInOut,
		ExponentialOut: ExponentialOut,
		Linear: Linear,
		QuadraticIn: QuadraticIn,
		QuadraticInOut: QuadraticInOut,
		QuadraticOut: QuadraticOut,
		QuarticIn: QuarticIn,
		QuarticInOut: QuarticInOut,
		QuarticOut: QuarticOut,
		QuinticIn: QuinticIn,
		QuinticInOut: QuinticInOut,
		QuinticOut: QuinticOut,
		SinusoidalIn: SinusoidalIn,
		SinusoidalInOut: SinusoidalInOut,
		SinusoidalOut: SinusoidalOut
	});

	exports.EulerRotationOrders = void 0;
	(function (EulerRotationOrders) {
	    EulerRotationOrders["XYZ"] = "xyz";
	    EulerRotationOrders["ZXY"] = "zxy";
	    EulerRotationOrders["YZX"] = "yzx";
	    EulerRotationOrders["XZY"] = "xzy";
	    EulerRotationOrders["ZYX"] = "zyx";
	    EulerRotationOrders["YXZ"] = "yxz";
	})(exports.EulerRotationOrders || (exports.EulerRotationOrders = {}));

	class EulerAngle extends Float32Array {
	    static ORDERS = exports.EulerRotationOrders;
	    static clone(euler) {
	        return new EulerAngle(euler.x, euler.y, euler.z, euler.order);
	    }
	    static create(x = 0, y = 0, z = 0, order = exports.EulerRotationOrders.XYZ) {
	        return new EulerAngle(x, y, z, order);
	    }
	    static fromMatrix4(matrix4, out = new EulerAngle()) {
	        const m11 = matrix4[0], m12 = matrix4[4], m13 = matrix4[8];
	        const m21 = matrix4[1], m22 = matrix4[5], m23 = matrix4[9];
	        const m31 = matrix4[2], m32 = matrix4[6], m33 = matrix4[10];
	        switch (out.order) {
	            case exports.EulerRotationOrders.XYZ:
	                out.y = Math.asin(clampCommon(m13, -1, 1));
	                if (Math.abs(m13) < 0.9999999) {
	                    out.x = Math.atan2(-m23, m33);
	                    out.z = Math.atan2(-m12, m11);
	                }
	                else {
	                    out.x = Math.atan2(m32, m22);
	                    out.z = 0;
	                }
	                break;
	            case exports.EulerRotationOrders.YXZ:
	                out.x = Math.asin(-clampCommon(m23, -1, 1));
	                if (Math.abs(m23) < 0.9999999) {
	                    out.y = Math.atan2(m13, m33);
	                    out.z = Math.atan2(m21, m22);
	                }
	                else {
	                    out.y = Math.atan2(-m31, m11);
	                    out.z = 0;
	                }
	                break;
	            case exports.EulerRotationOrders.ZXY:
	                out.x = Math.asin(clampCommon(m32, -1, 1));
	                if (Math.abs(m32) < 0.9999999) {
	                    out.y = Math.atan2(-m31, m33);
	                    out.z = Math.atan2(-m12, m22);
	                }
	                else {
	                    out.y = 0;
	                    out.z = Math.atan2(m21, m11);
	                }
	                break;
	            case exports.EulerRotationOrders.ZYX:
	                out.y = Math.asin(-clampCommon(m31, -1, 1));
	                if (Math.abs(m31) < 0.9999999) {
	                    out.x = Math.atan2(m32, m33);
	                    out.z = Math.atan2(m21, m11);
	                }
	                else {
	                    out.x = 0;
	                    out.z = Math.atan2(-m12, m22);
	                }
	                break;
	            case exports.EulerRotationOrders.YZX:
	                out.z = Math.asin(clampCommon(m21, -1, 1));
	                if (Math.abs(m21) < 0.9999999) {
	                    out.x = Math.atan2(-m23, m22);
	                    out.y = Math.atan2(-m31, m11);
	                }
	                else {
	                    out.x = 0;
	                    out.y = Math.atan2(m13, m33);
	                }
	                break;
	            case exports.EulerRotationOrders.XZY:
	                out.z = Math.asin(-clampCommon(m12, -1, 1));
	                if (Math.abs(m12) < 0.9999999) {
	                    out.x = Math.atan2(m32, m22);
	                    out.y = Math.atan2(m13, m11);
	                }
	                else {
	                    out.x = Math.atan2(-m23, m33);
	                    out.y = 0;
	                }
	                break;
	        }
	        return out;
	    }
	    order;
	    dataType = ArraybufferDataType.EULER;
	    constructor(x = 0, y = 0, z = 0, order = exports.EulerRotationOrders.XYZ) {
	        super(3);
	        this[0] = x;
	        this[1] = y;
	        this[2] = z;
	        this.order = order;
	    }
	    get x() {
	        return this[0];
	    }
	    set x(value) {
	        this[0] = value;
	    }
	    get y() {
	        return this[1];
	    }
	    set y(value) {
	        this[1] = value;
	    }
	    get z() {
	        return this[2];
	    }
	    set z(value) {
	        this[2] = value;
	    }
	}

	let a00$2 = 0, a01$2 = 0, a10$2 = 0, a11$2 = 0;
	let b00$2 = 0, b01$2 = 0, b10$2 = 0, b11$2 = 0, det$1 = 0;
	let x$4 = 0, y$4 = 0;
	const UNIT_MATRIX2_DATA = [1, 0, 0, 1];
	class Matrix2 extends Float32Array {
	    static UNIT_MATRIX2 = new Matrix2(UNIT_MATRIX2_DATA);
	    static add = (a, b, out) => {
	        out[0] = a[0] + b[0];
	        out[1] = a[1] + b[1];
	        out[2] = a[2] + b[2];
	        out[3] = a[3] + b[3];
	        return out;
	    };
	    static adjoint = (a, out) => {
	        a00$2 = a[0];
	        out[0] = a[3];
	        out[1] = -a[1];
	        out[2] = -a[2];
	        out[3] = a00$2;
	        return out;
	    };
	    static clone = (source) => {
	        return new Matrix2(source);
	    };
	    static closeTo = (a, b) => {
	        a00$2 = a[0];
	        a10$2 = a[1];
	        a01$2 = a[2];
	        a11$2 = a[3];
	        b00$2 = b[0];
	        b10$2 = b[1];
	        b01$2 = b[2];
	        b11$2 = b[3];
	        return (closeToCommon(a00$2, b00$2) &&
	            closeToCommon(a01$2, b01$2) &&
	            closeToCommon(a10$2, b10$2) &&
	            closeToCommon(a11$2, b11$2));
	    };
	    static create = (a = UNIT_MATRIX2_DATA) => {
	        return new Matrix2(a);
	    };
	    static determinant = (a) => {
	        return a[0] * a[3] - a[1] * a[2];
	    };
	    static equals = (a, b) => {
	        return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3];
	    };
	    static frobNorm = (a) => {
	        return Math.hypot(a[0], a[1], a[2], a[3]);
	    };
	    static fromArray = (source, out = new Matrix2()) => {
	        out.set(source);
	        return out;
	    };
	    static fromRotation = (rad, out = new Matrix2()) => {
	        y$4 = Math.sin(rad);
	        x$4 = Math.cos(rad);
	        out[0] = x$4;
	        out[1] = y$4;
	        out[2] = -y$4;
	        out[3] = x$4;
	        return out;
	    };
	    static fromScaling = (v, out = new Matrix2()) => {
	        out[0] = v[0];
	        out[1] = 0;
	        out[2] = 0;
	        out[3] = v[1];
	        return out;
	    };
	    static identity = (out = new Matrix2()) => {
	        out[0] = 1;
	        out[1] = 0;
	        out[2] = 0;
	        out[3] = 1;
	        return out;
	    };
	    static invert = (a, out = new Matrix2()) => {
	        a00$2 = a[0];
	        a10$2 = a[1];
	        a01$2 = a[2];
	        a11$2 = a[3];
	        det$1 = Matrix2.determinant(a);
	        if (!det$1) {
	            return null;
	        }
	        det$1 = 1.0 / det$1;
	        out[0] = a11$2 * det$1;
	        out[1] = -a10$2 * det$1;
	        out[2] = -a01$2 * det$1;
	        out[3] = a00$2 * det$1;
	        return out;
	    };
	    static minus = (a, b, out = new Matrix2()) => {
	        out[0] = a[0] - b[0];
	        out[1] = a[1] - b[1];
	        out[2] = a[2] - b[2];
	        out[3] = a[3] - b[3];
	        return out;
	    };
	    static multiply = (a, b, out = new Matrix2()) => {
	        a00$2 = a[0];
	        a10$2 = a[1];
	        a01$2 = a[2];
	        a11$2 = a[3];
	        b00$2 = b[0];
	        b10$2 = b[1];
	        b01$2 = b[2];
	        b11$2 = b[3];
	        out[0] = a00$2 * b00$2 + a01$2 * b10$2;
	        out[1] = a10$2 * b00$2 + a11$2 * b10$2;
	        out[2] = a00$2 * b01$2 + a01$2 * b11$2;
	        out[3] = a10$2 * b01$2 + a11$2 * b11$2;
	        return out;
	    };
	    static multiplyScalar = (a, b, out = new Matrix2()) => {
	        out[0] = a[0] * b;
	        out[1] = a[1] * b;
	        out[2] = a[2] * b;
	        out[3] = a[3] * b;
	        return out;
	    };
	    static rotate = (a, rad, out = new Matrix2()) => {
	        a00$2 = a[0];
	        a10$2 = a[1];
	        a01$2 = a[2];
	        a11$2 = a[3];
	        y$4 = Math.sin(rad);
	        x$4 = Math.cos(rad);
	        out[0] = a00$2 * x$4 + a01$2 * y$4;
	        out[1] = a10$2 * x$4 + a11$2 * y$4;
	        out[2] = a00$2 * -y$4 + a01$2 * x$4;
	        out[3] = a10$2 * -y$4 + a11$2 * x$4;
	        return out;
	    };
	    static scale = (a, v, out = new Matrix2()) => {
	        a00$2 = a[0];
	        a10$2 = a[1];
	        a01$2 = a[2];
	        a11$2 = a[3];
	        x$4 = v[0];
	        y$4 = v[1];
	        out[0] = a00$2 * x$4;
	        out[1] = a10$2 * x$4;
	        out[2] = a01$2 * y$4;
	        out[3] = a11$2 * y$4;
	        return out;
	    };
	    static toString = (a) => {
	        return `mat2(${a[0]}, ${a[1]}, ${a[2]}, ${a[3]})`;
	    };
	    static transpose = (a, out = new Matrix2()) => {
	        if (out === a) {
	            a01$2 = a[1];
	            out[1] = a[2];
	            out[2] = a01$2;
	        }
	        else {
	            out[0] = a[0];
	            out[1] = a[2];
	            out[2] = a[1];
	            out[3] = a[3];
	        }
	        return out;
	    };
	    constructor(data = UNIT_MATRIX2_DATA) {
	        super(data);
	    }
	}

	let a00$1 = 0, a01$1 = 0, a02$1 = 0, a11$1 = 0, a10$1 = 0, a12$1 = 0, a20$1 = 0, a21$1 = 0, a22$1 = 0;
	let b00$1 = 0, b01$1 = 0, b02$1 = 0, b11$1 = 0, b10$1 = 0, b12$1 = 0, b20$1 = 0, b21$1 = 0, b22$1 = 0;
	let x$3 = 0, y$3 = 0;
	const UNIT_MATRIX3_DATA = [1, 0, 0, 0, 1, 0, 0, 0, 1];
	class Matrix3 extends Float32Array {
	    static UNIT_MATRIX3 = new Matrix3(UNIT_MATRIX3_DATA);
	    static clone = (source) => {
	        return new Matrix3(source);
	    };
	    static cofactor00 = (a) => {
	        return a[4] * a[8] - a[5] * a[7];
	    };
	    static cofactor01 = (a) => {
	        return a[1] * a[8] - a[7] * a[2];
	    };
	    static cofactor02 = (a) => {
	        return a[1] * a[5] - a[4] * a[2];
	    };
	    static cofactor10 = (a) => {
	        return a[3] * a[8] - a[6] * a[5];
	    };
	    static cofactor11 = (a) => {
	        return a[0] * a[8] - a[6] * a[2];
	    };
	    static cofactor12 = (a) => {
	        return a[0] * a[5] - a[3] * a[2];
	    };
	    static cofactor20 = (a) => {
	        return a[3] * a[7] - a[6] * a[4];
	    };
	    static cofactor21 = (a) => {
	        return a[0] * a[7] - a[6] * a[1];
	    };
	    static cofactor22 = (a) => {
	        return a[0] * a[4] - a[3] * a[1];
	    };
	    static create = () => {
	        return new Matrix3(UNIT_MATRIX3_DATA);
	    };
	    static determinant = (a) => {
	        a00$1 = a[0];
	        a01$1 = a[1];
	        a02$1 = a[2];
	        a10$1 = a[3];
	        a11$1 = a[4];
	        a12$1 = a[5];
	        a20$1 = a[6];
	        a21$1 = a[7];
	        a22$1 = a[8];
	        return (a00$1 * (a22$1 * a11$1 - a12$1 * a21$1) +
	            a01$1 * (-a22$1 * a10$1 + a12$1 * a20$1) +
	            a02$1 * (a21$1 * a10$1 - a11$1 * a20$1));
	    };
	    static fromArray = (source, out = new Matrix3()) => {
	        out.set(source);
	        return out;
	    };
	    static fromMatrix2 = (mat4, out = new Matrix3()) => {
	        out[0] = mat4[0];
	        out[1] = mat4[1];
	        out[2] = 0;
	        out[3] = mat4[2];
	        out[4] = mat4[3];
	        out[5] = 0;
	        out[6] = 0;
	        out[7] = 0;
	        out[8] = 1;
	        return out;
	    };
	    static fromMatrix4 = (mat4, out = new Matrix3()) => {
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
	    static fromRotation = (rad, out = new Matrix3()) => {
	        y$3 = Math.sin(rad);
	        x$3 = Math.cos(rad);
	        out[0] = x$3;
	        out[1] = y$3;
	        out[2] = 0;
	        out[3] = -y$3;
	        out[4] = x$3;
	        out[5] = 0;
	        out[6] = 0;
	        out[7] = 0;
	        out[8] = 1;
	        return out;
	    };
	    static fromScaling = (v, out = new Matrix3()) => {
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
	    static fromTranslation = (v, out = new Matrix3()) => {
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
	    };
	    static identity = (out = new Matrix3()) => {
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
	    static invert = (a, out = new Matrix3()) => {
	        a00$1 = a[0];
	        a01$1 = a[1];
	        a02$1 = a[2];
	        a10$1 = a[3];
	        a11$1 = a[4];
	        a12$1 = a[5];
	        a20$1 = a[6];
	        a21$1 = a[7];
	        a22$1 = a[8];
	        b01$1 = a22$1 * a11$1 - a12$1 * a21$1;
	        b11$1 = -a22$1 * a10$1 + a12$1 * a20$1;
	        b21$1 = a21$1 * a10$1 - a11$1 * a20$1;
	        let det = a00$1 * b01$1 + a01$1 * b11$1 + a02$1 * b21$1;
	        if (!det) {
	            return null;
	        }
	        det = 1.0 / det;
	        out[0] = b01$1 * det;
	        out[1] = (-a22$1 * a01$1 + a02$1 * a21$1) * det;
	        out[2] = (a12$1 * a01$1 - a02$1 * a11$1) * det;
	        out[3] = b11$1 * det;
	        out[4] = (a22$1 * a00$1 - a02$1 * a20$1) * det;
	        out[5] = (-a12$1 * a00$1 + a02$1 * a10$1) * det;
	        out[6] = b21$1 * det;
	        out[7] = (-a21$1 * a00$1 + a01$1 * a20$1) * det;
	        out[8] = (a11$1 * a00$1 - a01$1 * a10$1) * det;
	        return out;
	    };
	    static multiply = (a, b, out = new Matrix3()) => {
	        a00$1 = a[0];
	        a01$1 = a[1];
	        a02$1 = a[2];
	        a10$1 = a[3];
	        a11$1 = a[4];
	        a12$1 = a[5];
	        a20$1 = a[6];
	        a21$1 = a[7];
	        a22$1 = a[8];
	        b00$1 = b[0];
	        b01$1 = b[1];
	        b02$1 = b[2];
	        b10$1 = b[3];
	        b11$1 = b[4];
	        b12$1 = b[5];
	        b20$1 = b[6];
	        b21$1 = b[7];
	        b22$1 = b[8];
	        out[0] = b00$1 * a00$1 + b01$1 * a10$1 + b02$1 * a20$1;
	        out[1] = b00$1 * a01$1 + b01$1 * a11$1 + b02$1 * a21$1;
	        out[2] = b00$1 * a02$1 + b01$1 * a12$1 + b02$1 * a22$1;
	        out[3] = b10$1 * a00$1 + b11$1 * a10$1 + b12$1 * a20$1;
	        out[4] = b10$1 * a01$1 + b11$1 * a11$1 + b12$1 * a21$1;
	        out[5] = b10$1 * a02$1 + b11$1 * a12$1 + b12$1 * a22$1;
	        out[6] = b20$1 * a00$1 + b21$1 * a10$1 + b22$1 * a20$1;
	        out[7] = b20$1 * a01$1 + b21$1 * a11$1 + b22$1 * a21$1;
	        out[8] = b20$1 * a02$1 + b21$1 * a12$1 + b22$1 * a22$1;
	        return out;
	    };
	    static multiplyRotationMatrix = (a, b, out = new Matrix3()) => {
	        a00$1 = a[0];
	        a01$1 = a[1];
	        a02$1 = a[2];
	        a10$1 = a[3];
	        a11$1 = a[4];
	        a12$1 = a[5];
	        a20$1 = a[6];
	        a21$1 = a[7];
	        a22$1 = a[8];
	        b00$1 = b[0];
	        b01$1 = b[1];
	        b10$1 = b[3];
	        b11$1 = b[4];
	        out[0] = b00$1 * a00$1 + b01$1 * a10$1;
	        out[1] = b00$1 * a01$1 + b01$1 * a11$1;
	        out[2] = b00$1 * a02$1 + b01$1 * a12$1;
	        out[3] = b10$1 * a00$1 + b11$1 * a10$1;
	        out[4] = b10$1 * a01$1 + b11$1 * a11$1;
	        out[5] = b10$1 * a02$1 + b11$1 * a12$1;
	        out[6] = a20$1;
	        out[7] = a21$1;
	        out[8] = a22$1;
	        return out;
	    };
	    static multiplyScaleMatrix = (a, b, out = new Matrix3()) => {
	        a00$1 = a[0];
	        a01$1 = a[1];
	        a02$1 = a[2];
	        a10$1 = a[3];
	        a11$1 = a[4];
	        a12$1 = a[5];
	        a20$1 = a[6];
	        a21$1 = a[7];
	        a22$1 = a[8];
	        b00$1 = b[0];
	        b11$1 = b[4];
	        out[0] = b00$1 * a00$1;
	        out[1] = b00$1 * a01$1;
	        out[2] = b00$1 * a02$1;
	        out[3] = b11$1 * a10$1;
	        out[4] = b11$1 * a11$1;
	        out[5] = b11$1 * a12$1;
	        out[6] = a20$1;
	        out[7] = a21$1;
	        out[8] = a22$1;
	        return out;
	    };
	    static multiplyTranslateMatrix = (a, b, out = new Matrix3()) => {
	        a00$1 = a[0];
	        a01$1 = a[1];
	        a02$1 = a[2];
	        a10$1 = a[3];
	        a11$1 = a[4];
	        a12$1 = a[5];
	        a20$1 = a[6];
	        a21$1 = a[7];
	        a22$1 = a[8];
	        b20$1 = b[6];
	        b21$1 = b[7];
	        out[0] = a00$1;
	        out[1] = a01$1;
	        out[2] = a02$1;
	        out[3] = a10$1;
	        out[4] = a11$1;
	        out[5] = a12$1;
	        out[6] = b20$1 * a00$1 + b21$1 * a10$1 + a20$1;
	        out[7] = b20$1 * a01$1 + b21$1 * a11$1 + a21$1;
	        out[8] = b20$1 * a02$1 + b21$1 * a12$1 + a22$1;
	        return out;
	    };
	    static rotate = (a, rad, out = new Matrix3()) => {
	        a00$1 = a[0];
	        a01$1 = a[1];
	        a02$1 = a[2];
	        a10$1 = a[3];
	        a11$1 = a[4];
	        a12$1 = a[5];
	        a20$1 = a[6];
	        a21$1 = a[7];
	        a22$1 = a[8];
	        y$3 = Math.sin(rad);
	        x$3 = Math.cos(rad);
	        out[0] = x$3 * a00$1 + y$3 * a10$1;
	        out[1] = x$3 * a01$1 + y$3 * a11$1;
	        out[2] = x$3 * a02$1 + y$3 * a12$1;
	        out[3] = y$3 * a10$1 - x$3 * a00$1;
	        out[4] = y$3 * a11$1 - x$3 * a01$1;
	        out[5] = y$3 * a12$1 - x$3 * a02$1;
	        out[6] = a20$1;
	        out[7] = a21$1;
	        out[8] = a22$1;
	        return out;
	    };
	    static scale = (a, v, out = new Matrix3()) => {
	        x$3 = v[0];
	        y$3 = v[1];
	        out[0] = x$3 * a[0];
	        out[1] = x$3 * a[1];
	        out[2] = x$3 * a[2];
	        out[3] = y$3 * a[3];
	        out[4] = y$3 * a[4];
	        out[5] = y$3 * a[5];
	        out[6] = a[6];
	        out[7] = a[7];
	        out[8] = a[8];
	        return out;
	    };
	    static translate = (a, v, out = new Matrix3()) => {
	        a00$1 = a[0];
	        a01$1 = a[1];
	        a02$1 = a[2];
	        a10$1 = a[3];
	        a11$1 = a[4];
	        a12$1 = a[5];
	        a20$1 = a[6];
	        a21$1 = a[7];
	        a22$1 = a[8];
	        x$3 = v[0];
	        y$3 = v[1];
	        out[0] = a00$1;
	        out[1] = a01$1;
	        out[2] = a02$1;
	        out[3] = a10$1;
	        out[4] = a11$1;
	        out[5] = a12$1;
	        out[6] = x$3 * a00$1 + y$3 * a10$1 + a20$1;
	        out[7] = x$3 * a01$1 + y$3 * a11$1 + a21$1;
	        out[8] = x$3 * a02$1 + y$3 * a12$1 + a22$1;
	        return out;
	    };
	    static transpose = (a, out = new Matrix3()) => {
	        if (out === a) {
	            a01$1 = a[1];
	            a02$1 = a[2];
	            a12$1 = a[5];
	            out[1] = a[3];
	            out[2] = a[6];
	            out[3] = a01$1;
	            out[5] = a[7];
	            out[6] = a02$1;
	            out[7] = a12$1;
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
	    constructor(data = UNIT_MATRIX3_DATA) {
	        super(data);
	    }
	}

	let ax$2, ay$2, az$2, bx$2, by$2, bz$2;
	let ag, s$3;
	class Vector3 extends Float32Array {
	    static VECTOR3_ZERO = new Vector3(0, 0, 0);
	    static VECTOR3_ONE = new Vector3(1, 1, 1);
	    static VECTOR3_TOP = new Vector3(0, 1, 0);
	    static VECTOR3_BOTTOM = new Vector3(0, -1, 0);
	    static VECTOR3_LEFT = new Vector3(-1, 0, 0);
	    static VECTOR3_RIGHT = new Vector3(1, 0, 0);
	    static VECTOR3_FRONT = new Vector3(0, 0, -1);
	    static VECTOR3_BACK = new Vector3(0, 0, 1);
	    static add = (a, b, out = new Vector3()) => {
	        out[0] = a[0] + b[0];
	        out[1] = a[1] + b[1];
	        out[2] = a[2] + b[2];
	        return out;
	    };
	    static addScalar = (a, b, out = new Vector3()) => {
	        out[0] = a[0] + b;
	        out[1] = a[1] + b;
	        out[2] = a[2] + b;
	        return out;
	    };
	    static angle = (a, b) => {
	        ax$2 = a[0];
	        ay$2 = a[1];
	        az$2 = a[2];
	        bx$2 = b[0];
	        by$2 = b[1];
	        bz$2 = b[2];
	        const mag1 = Math.sqrt(ax$2 * ax$2 + ay$2 * ay$2 + az$2 * az$2), mag2 = Math.sqrt(bx$2 * bx$2 + by$2 * by$2 + bz$2 * bz$2), mag = mag1 * mag2, cosine = mag && Vector3.dot(a, b) / mag;
	        return Math.acos(clampCommon(cosine, -1, 1));
	    };
	    static clamp = (a, min, max, out = new Vector3()) => {
	        out[0] = clampCommon(a[0], min[0], max[0]);
	        out[1] = clampCommon(a[1], min[1], max[1]);
	        out[2] = clampCommon(a[2], min[2], max[2]);
	        return out;
	    };
	    static clampSafe = (a, min, max, out = new Vector3()) => {
	        out[0] = clampSafeCommon(a[0], min[0], max[0]);
	        out[1] = clampSafeCommon(a[1], min[1], max[1]);
	        out[1] = clampSafeCommon(a[2], min[2], max[2]);
	        return out;
	    };
	    static clampScalar = (a, min, max, out = new Vector3()) => {
	        out[0] = clampCommon(a[0], min, max);
	        out[1] = clampCommon(a[1], min, max);
	        out[2] = clampCommon(a[2], min, max);
	        return out;
	    };
	    static clone = (a, out = new Vector3()) => {
	        out[0] = a[0];
	        out[1] = a[1];
	        out[2] = a[2];
	        return out;
	    };
	    static closeTo = (a, b) => {
	        return closeToCommon(a[0], b[0]) && closeToCommon(a[1], b[1]) && closeToCommon(a[2], b[2]);
	    };
	    static create = (x = 0, y = 0, z = 0, out = new Vector3()) => {
	        out[0] = x;
	        out[1] = y;
	        out[2] = z;
	        return out;
	    };
	    static cross = (a, b, out = new Vector3()) => {
	        ax$2 = a[0];
	        ay$2 = a[1];
	        az$2 = a[2];
	        bx$2 = b[0];
	        by$2 = b[1];
	        bz$2 = b[2];
	        out[0] = ay$2 * bz$2 - az$2 * by$2;
	        out[1] = az$2 * bx$2 - ax$2 * bz$2;
	        out[2] = ax$2 * by$2 - ay$2 * bx$2;
	        return out;
	    };
	    static distanceTo = (a, b) => {
	        ax$2 = b[0] - a[0];
	        ay$2 = b[1] - a[1];
	        az$2 = b[2] - a[2];
	        return Math.hypot(ax$2, ay$2, az$2);
	    };
	    static distanceToManhattan = (a, b) => {
	        return Math.abs(a[0] - b[0]) + Math.abs(a[1] - b[1]) + Math.abs(a[2] - b[2]);
	    };
	    static distanceToSquared = (a, b) => {
	        ax$2 = a[0] - b[0];
	        ay$2 = a[1] - b[1];
	        az$2 = a[2] - b[2];
	        return ax$2 * ax$2 + ay$2 * ay$2 + az$2 * az$2;
	    };
	    static divide = (a, b, out = new Vector3()) => {
	        out[0] = a[0] / b[0];
	        out[1] = a[1] / b[1];
	        out[2] = a[2] / b[2];
	        return out;
	    };
	    static divideScalar = (a, b, out = new Vector3()) => {
	        out[0] = a[0] / b;
	        out[1] = a[1] / b;
	        out[2] = a[2] / b;
	        return out;
	    };
	    static dot = (a, b) => {
	        return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
	    };
	    static equals = (a, b) => {
	        return a[0] === b[0] && a[1] === b[1] && a[2] === b[2];
	    };
	    static fromArray = (a, offset = 0, out = new Vector3()) => {
	        out[0] = a[offset];
	        out[1] = a[offset + 1];
	        out[2] = a[offset + 2];
	        return out;
	    };
	    static fromScalar = (num, out = new Vector3(3)) => {
	        out[0] = out[1] = out[2] = num;
	        return out;
	    };
	    static fromValues = (x, y, z, out = new Vector3(3)) => {
	        out[0] = x;
	        out[1] = y;
	        out[2] = z;
	        return out;
	    };
	    static hermite = (a, b, c, d, t, out = new Vector3()) => {
	        ag = t * t;
	        const factor1 = ag * (2 * t - 3) + 1;
	        const factor2 = ag * (t - 2) + t;
	        const factor3 = ag * (t - 1);
	        const factor4 = ag * (3 - 2 * t);
	        out[0] = a[0] * factor1 + b[0] * factor2 + c[0] * factor3 + d[0] * factor4;
	        out[1] = a[1] * factor1 + b[1] * factor2 + c[1] * factor3 + d[1] * factor4;
	        out[2] = a[2] * factor1 + b[2] * factor2 + c[2] * factor3 + d[2] * factor4;
	        return out;
	    };
	    static inverse = (a, out = new Vector3()) => {
	        out[0] = 1.0 / a[0];
	        out[1] = 1.0 / a[1];
	        out[2] = 1.0 / a[2];
	        return out;
	    };
	    static norm = (a) => {
	        return Math.sqrt(Vector3.lengthSquared(a));
	    };
	    static lengthManhattan = (a) => {
	        return Math.abs(a[0]) + Math.abs(a[1]) + Math.abs(a[2]);
	    };
	    static lengthSquared = (a) => {
	        return a[0] * a[0] + a[1] * a[1] + a[2] * a[2];
	    };
	    static lerp = (a, b, alpha, out = new Vector3()) => {
	        out[0] += (b[0] - a[0]) * alpha;
	        out[1] += (b[1] - a[1]) * alpha;
	        out[2] += (b[2] - a[2]) * alpha;
	        return out;
	    };
	    static max = (a, b, out = new Vector3()) => {
	        out[0] = Math.max(a[0], b[0]);
	        out[1] = Math.max(a[1], b[1]);
	        out[2] = Math.max(a[2], b[2]);
	        return out;
	    };
	    static min = (a, b, out = new Vector3()) => {
	        out[0] = Math.min(a[0], b[0]);
	        out[1] = Math.min(a[1], b[1]);
	        out[2] = Math.min(a[2], b[2]);
	        return out;
	    };
	    static minus = (a, b, out = new Vector3()) => {
	        out[0] = a[0] - b[0];
	        out[1] = a[1] - b[1];
	        out[2] = a[2] - b[2];
	        return out;
	    };
	    static minusScalar = (a, b, out = new Vector3()) => {
	        out[0] = a[0] - b;
	        out[1] = a[1] - b;
	        out[2] = a[2] - b;
	        return out;
	    };
	    static multiply = (a, b, out = new Vector3()) => {
	        out[0] = a[0] * b[0];
	        out[1] = a[1] * b[1];
	        out[2] = a[2] * b[2];
	        return out;
	    };
	    static multiplyScalar = (a, scalar, out = new Vector3()) => {
	        out[0] = a[0] * scalar;
	        out[1] = a[1] * scalar;
	        out[2] = a[2] * scalar;
	        return out;
	    };
	    static negate = (a, out = new Vector3()) => {
	        out[0] = -a[0];
	        out[1] = -a[1];
	        out[2] = -a[2];
	        return out;
	    };
	    static normalize = (a, out = new Vector3()) => {
	        return Vector3.divideScalar(a, Vector3.norm(a) || 1, out);
	    };
	    static rotateX = (a, b, rad, out = new Vector3()) => {
	        ax$2 = a[0] - b[0];
	        ay$2 = a[1] - b[1];
	        az$2 = a[2] - b[2];
	        bx$2 = ax$2;
	        by$2 = ay$2 * Math.cos(rad) - az$2 * Math.sin(rad);
	        bz$2 = ay$2 * Math.sin(rad) + az$2 * Math.cos(rad);
	        out[0] = bx$2 + b[0];
	        out[1] = by$2 + b[1];
	        out[2] = bz$2 + b[2];
	        return out;
	    };
	    static rotateY = (a, b, rad, out = new Vector3()) => {
	        ax$2 = a[0] - b[0];
	        ay$2 = a[1] - b[1];
	        az$2 = a[2] - b[2];
	        bx$2 = az$2 * Math.sin(rad) + ax$2 * Math.cos(rad);
	        by$2 = ay$2;
	        bz$2 = az$2 * Math.cos(rad) - ax$2 * Math.sin(rad);
	        out[0] = bx$2 + b[0];
	        out[1] = by$2 + b[1];
	        out[2] = bz$2 + b[2];
	        return out;
	    };
	    static rotateZ = (a, b, rad, out = new Vector3()) => {
	        ax$2 = a[0] - b[0];
	        ay$2 = a[1] - b[1];
	        az$2 = a[2] - b[2];
	        bx$2 = ax$2 * Math.cos(rad) - ay$2 * Math.sin(rad);
	        by$2 = ax$2 * Math.sin(rad) + ay$2 * Math.cos(rad);
	        bz$2 = az$2;
	        out[0] = bx$2 + b[0];
	        out[1] = by$2 + b[1];
	        out[2] = bz$2 + b[2];
	        return out;
	    };
	    static round = (a, out = new Vector3()) => {
	        out[0] = Math.round(a[0]);
	        out[1] = Math.round(a[1]);
	        out[2] = Math.round(a[2]);
	        return out;
	    };
	    static set = (x = 0, y = 0, z = 0, out = new Vector3()) => {
	        out[0] = x;
	        out[1] = y;
	        out[2] = z;
	        return out;
	    };
	    static setNorm = (a, len, out = new Vector3()) => {
	        return Vector3.multiplyScalar(Vector3.normalize(a, out), len, out);
	    };
	    static slerp = (a, b, t, out = new Vector3()) => {
	        ag = Math.acos(Math.min(Math.max(Vector3.dot(a, b), -1), 1));
	        s$3 = Math.sin(ag);
	        ax$2 = Math.sin((1 - t) * ag) / s$3;
	        bx$2 = Math.sin(t * ag) / s$3;
	        out[0] = ax$2 * a[0] + bx$2 * b[0];
	        out[1] = ax$2 * a[1] + bx$2 * b[1];
	        out[2] = ax$2 * a[2] + bx$2 * b[2];
	        return out;
	    };
	    static toString = (a) => {
	        return `(${a[0]}, ${a[1]}, ${a[2]})`;
	    };
	    static transformMatrix3 = (a, m, out = new Vector3()) => {
	        ax$2 = a[0];
	        ay$2 = a[1];
	        az$2 = a[2];
	        out[0] = ax$2 * m[0] + ay$2 * m[3] + az$2 * m[6];
	        out[1] = ax$2 * m[1] + ay$2 * m[4] + az$2 * m[7];
	        out[2] = ax$2 * m[2] + ay$2 * m[5] + az$2 * m[8];
	        return out;
	    };
	    static transformMatrix4 = (a, m, out = new Vector3()) => {
	        ax$2 = a[0];
	        ay$2 = a[1];
	        az$2 = a[2];
	        ag = m[3] * ax$2 + m[7] * ay$2 + m[11] * az$2 + m[15];
	        ag = ag || 1.0;
	        out[0] = (m[0] * ax$2 + m[4] * ay$2 + m[8] * az$2 + m[12]) / ag;
	        out[1] = (m[1] * ax$2 + m[5] * ay$2 + m[9] * az$2 + m[13]) / ag;
	        out[2] = (m[2] * ax$2 + m[6] * ay$2 + m[10] * az$2 + m[14]) / ag;
	        return out;
	    };
	    static transformQuat = (a, q, out = new Vector3()) => {
	        const qx = q[0], qy = q[1], qz = q[2], qw = q[3];
	        const x = a[0], y = a[1], z = a[2];
	        // var qvec = [qx, qy, qz];
	        // var uv = vec3.cross([], qvec, a);
	        let uvx = qy * z - qz * y, uvy = qz * x - qx * z, uvz = qx * y - qy * x;
	        // var uuv = vec3.cross([], qvec, uv);
	        let uuvx = qy * uvz - qz * uvy, uuvy = qz * uvx - qx * uvz, uuvz = qx * uvy - qy * uvx;
	        // vec3.scale(uv, uv, 2 * w);
	        const w2 = qw * 2;
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
	    length;
	    dataType = ArraybufferDataType.VECTOR3;
	    constructor(x = 0, y = 0, z = 0) {
	        super(3);
	        this[0] = x;
	        this[1] = y;
	        this[2] = z;
	    }
	    get x() {
	        return this[0];
	    }
	    set x(value) {
	        this[0] = value;
	    }
	    get y() {
	        return this[1];
	    }
	    set y(value) {
	        this[1] = value;
	    }
	    get z() {
	        return this[2];
	    }
	    set z(value) {
	        this[2] = value;
	    }
	}

	/* eslint-disable max-lines */
	let a00 = 0, a01 = 0, a02 = 0, a03 = 0, a11 = 0, a10 = 0, a12 = 0, a13 = 0, a20 = 0, a21 = 0, a22 = 0, a23 = 0, a31 = 0, a30 = 0, a32 = 0, a33 = 0;
	let b00 = 0, b01 = 0, b02 = 0, b03 = 0, b11 = 0, b10 = 0, b12 = 0, b13 = 0, b20 = 0, b21 = 0, b22 = 0, b23 = 0, b31 = 0, b30 = 0, b32 = 0, b33 = 0;
	let x$2 = 0, y$2 = 0, z = 0, det = 0, len$2 = 0, s$2 = 0, t = 0, a = 0, b = 0, c$2 = 0, d = 0, e = 0, f = 0;
	const UNIT_MATRIX4_DATA = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
	class Matrix4 extends Float32Array {
	    static UNIT_MATRIX4 = new Matrix4(UNIT_MATRIX4_DATA);
	    static clone = (source) => {
	        return new Matrix4(source);
	    };
	    static create = () => {
	        return new Matrix4(UNIT_MATRIX4_DATA);
	    };
	    static determinant = (a) => {
	        a00 = a[0];
	        a01 = a[1];
	        a02 = a[2];
	        a03 = a[3];
	        a10 = a[4];
	        a11 = a[5];
	        a12 = a[6];
	        a13 = a[7];
	        a20 = a[8];
	        a21 = a[9];
	        a22 = a[10];
	        a23 = a[11];
	        a30 = a[12];
	        a31 = a[13];
	        a32 = a[14];
	        a33 = a[15];
	        b00 = a00 * a11 - a01 * a10;
	        b01 = a00 * a12 - a02 * a10;
	        b02 = a01 * a12 - a02 * a11;
	        b03 = a20 * a31 - a21 * a30;
	        b10 = a20 * a32 - a22 * a30;
	        b11 = a21 * a32 - a22 * a31;
	        b12 = a00 * b11 - a01 * b10 + a02 * b03;
	        b13 = a10 * b11 - a11 * b10 + a12 * b03;
	        b20 = a20 * b02 - a21 * b01 + a22 * b00;
	        b21 = a30 * b02 - a31 * b01 + a32 * b00;
	        return a13 * b12 - a03 * b13 + a33 * b20 - a23 * b21;
	    };
	    static fromArray = (source, out = new Matrix4()) => {
	        out.set(source);
	        return out;
	    };
	    static fromEuler = (euler, out = new Matrix4()) => {
	        x$2 = euler.x;
	        y$2 = euler.y;
	        z = euler.z;
	        a = Math.cos(x$2);
	        b = Math.sin(x$2);
	        c$2 = Math.cos(y$2);
	        d = Math.sin(y$2);
	        e = Math.cos(z);
	        f = Math.sin(z);
	        if (euler.order === exports.EulerRotationOrders.XYZ) {
	            const ae = a * e, af = a * f, be = b * e, bf = b * f;
	            out[0] = c$2 * e;
	            out[4] = -c$2 * f;
	            out[8] = d;
	            out[1] = af + be * d;
	            out[5] = ae - bf * d;
	            out[9] = -b * c$2;
	            out[2] = bf - ae * d;
	            out[6] = be + af * d;
	            out[10] = a * c$2;
	        }
	        else if (euler.order === exports.EulerRotationOrders.YXZ) {
	            const ce = c$2 * e, cf = c$2 * f, de = d * e, df = d * f;
	            out[0] = ce + df * b;
	            out[4] = de * b - cf;
	            out[8] = a * d;
	            out[1] = a * f;
	            out[5] = a * e;
	            out[9] = -b;
	            out[2] = cf * b - de;
	            out[6] = df + ce * b;
	            out[10] = a * c$2;
	        }
	        else if (euler.order === exports.EulerRotationOrders.ZXY) {
	            const ce = c$2 * e, cf = c$2 * f, de = d * e, df = d * f;
	            out[0] = ce - df * b;
	            out[4] = -a * f;
	            out[8] = de + cf * b;
	            out[1] = cf + de * b;
	            out[5] = a * e;
	            out[9] = df - ce * b;
	            out[2] = -a * d;
	            out[6] = b;
	            out[10] = a * c$2;
	        }
	        else if (euler.order === exports.EulerRotationOrders.ZYX) {
	            const ae = a * e, af = a * f, be = b * e, bf = b * f;
	            out[0] = c$2 * e;
	            out[4] = be * d - af;
	            out[8] = ae * d + bf;
	            out[1] = c$2 * f;
	            out[5] = bf * d + ae;
	            out[9] = af * d - be;
	            out[2] = -d;
	            out[6] = b * c$2;
	            out[10] = a * c$2;
	        }
	        else if (euler.order === exports.EulerRotationOrders.YZX) {
	            const ac = a * c$2, ad = a * d, bc = b * c$2, bd = b * d;
	            out[0] = c$2 * e;
	            out[4] = bd - ac * f;
	            out[8] = bc * f + ad;
	            out[1] = f;
	            out[5] = a * e;
	            out[9] = -b * e;
	            out[2] = -d * e;
	            out[6] = ad * f + bc;
	            out[10] = ac - bd * f;
	        }
	        else if (euler.order === exports.EulerRotationOrders.XZY) {
	            const ac = a * c$2, ad = a * d, bc = b * c$2, bd = b * d;
	            out[0] = c$2 * e;
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
	    static fromMatrix3 = (data, out = new Matrix4()) => {
	        out[0] = data[0];
	        out[1] = data[1];
	        out[2] = data[2];
	        out[3] = 0;
	        out[4] = data[3];
	        out[5] = data[4];
	        out[6] = data[5];
	        out[7] = 0;
	        out[8] = data[6];
	        out[9] = data[7];
	        out[10] = data[8];
	        out[11] = 0;
	        out[12] = 0;
	        out[13] = 0;
	        out[14] = 0;
	        out[15] = 1;
	        return out;
	    };
	    static fromQuaternion = (q, out = new Matrix4()) => {
	        const x = q[0], y = q[1], z = q[2], w = q[3];
	        const x2 = x + x;
	        const y2 = y + y;
	        const z2 = z + z;
	        const xx = x * x2;
	        const yx = y * x2;
	        const yy = y * y2;
	        const zx = z * x2;
	        const zy = z * y2;
	        const zz = z * z2;
	        const wx = w * x2;
	        const wy = w * y2;
	        const wz = w * z2;
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
	    };
	    static fromRotation = (rad, axis, out = new Matrix4()) => {
	        x$2 = axis[0];
	        y$2 = axis[1];
	        z = axis[2];
	        len$2 = Math.hypot(x$2, y$2, z);
	        if (len$2 < EPSILON) {
	            return null;
	        }
	        len$2 = 1 / len$2;
	        x$2 *= len$2;
	        y$2 *= len$2;
	        z *= len$2;
	        s$2 = Math.sin(rad);
	        c$2 = Math.cos(rad);
	        t = 1 - c$2;
	        out[0] = x$2 * x$2 * t + c$2;
	        out[1] = y$2 * x$2 * t + z * s$2;
	        out[2] = z * x$2 * t - y$2 * s$2;
	        out[3] = 0;
	        out[4] = x$2 * y$2 * t - z * s$2;
	        out[5] = y$2 * y$2 * t + c$2;
	        out[6] = z * y$2 * t + x$2 * s$2;
	        out[7] = 0;
	        out[8] = x$2 * z * t + y$2 * s$2;
	        out[9] = y$2 * z * t - x$2 * s$2;
	        out[10] = z * z * t + c$2;
	        out[11] = 0;
	        out[12] = 0;
	        out[13] = 0;
	        out[14] = 0;
	        out[15] = 1;
	        return out;
	    };
	    static fromRotationX = (rad, out = new Matrix4()) => {
	        s$2 = Math.sin(rad);
	        c$2 = Math.cos(rad);
	        out[0] = 1;
	        out[1] = 0;
	        out[2] = 0;
	        out[3] = 0;
	        out[4] = 0;
	        out[5] = c$2;
	        out[6] = s$2;
	        out[7] = 0;
	        out[8] = 0;
	        out[9] = -s$2;
	        out[10] = c$2;
	        out[11] = 0;
	        out[12] = 0;
	        out[13] = 0;
	        out[14] = 0;
	        out[15] = 1;
	        return out;
	    };
	    static fromRotationY = (rad, out = new Matrix4()) => {
	        s$2 = Math.sin(rad);
	        c$2 = Math.cos(rad);
	        out[0] = c$2;
	        out[1] = 0;
	        out[2] = -s$2;
	        out[3] = 0;
	        out[4] = 0;
	        out[5] = 1;
	        out[6] = 0;
	        out[7] = 0;
	        out[8] = s$2;
	        out[9] = 0;
	        out[10] = c$2;
	        out[11] = 0;
	        out[12] = 0;
	        out[13] = 0;
	        out[14] = 0;
	        out[15] = 1;
	        return out;
	    };
	    static fromRotationZ = (rad, out = new Matrix4()) => {
	        s$2 = Math.sin(rad);
	        c$2 = Math.cos(rad);
	        out[0] = c$2;
	        out[1] = s$2;
	        out[2] = 0;
	        out[3] = 0;
	        out[4] = -s$2;
	        out[5] = c$2;
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
	    static fromScaling = (v, out = new Matrix4()) => {
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
	    static fromTranslation = (v, out = new Matrix4()) => {
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
	    static identity = (out = new Matrix4()) => {
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
	    static invert = (a, out = new Matrix4()) => {
	        a00 = a[0];
	        a01 = a[1];
	        a02 = a[2];
	        a03 = a[3];
	        a10 = a[4];
	        a11 = a[5];
	        a12 = a[6];
	        a13 = a[7];
	        a20 = a[8];
	        a21 = a[9];
	        a22 = a[10];
	        a23 = a[11];
	        a30 = a[12];
	        a31 = a[13];
	        a32 = a[14];
	        a33 = a[15];
	        b00 = a00 * a11 - a01 * a10;
	        b01 = a00 * a12 - a02 * a10;
	        b02 = a00 * a13 - a03 * a10;
	        b03 = a01 * a12 - a02 * a11;
	        b20 = a01 * a13 - a03 * a11;
	        b21 = a02 * a13 - a03 * a12;
	        b22 = a20 * a31 - a21 * a30;
	        b23 = a20 * a32 - a22 * a30;
	        b30 = a20 * a33 - a23 * a30;
	        b31 = a21 * a32 - a22 * a31;
	        b32 = a21 * a33 - a23 * a31;
	        b33 = a22 * a33 - a23 * a32;
	        det = b00 * b33 - b01 * b32 + b02 * b31 + b03 * b30 - b20 * b23 + b21 * b22;
	        if (!det) {
	            return null;
	        }
	        det = 1.0 / det;
	        out[0] = (a11 * b33 - a12 * b32 + a13 * b31) * det;
	        out[1] = (a02 * b32 - a01 * b33 - a03 * b31) * det;
	        out[2] = (a31 * b21 - a32 * b20 + a33 * b03) * det;
	        out[3] = (a22 * b20 - a21 * b21 - a23 * b03) * det;
	        out[4] = (a12 * b30 - a10 * b33 - a13 * b23) * det;
	        out[5] = (a00 * b33 - a02 * b30 + a03 * b23) * det;
	        out[6] = (a32 * b02 - a30 * b21 - a33 * b01) * det;
	        out[7] = (a20 * b21 - a22 * b02 + a23 * b01) * det;
	        out[8] = (a10 * b32 - a11 * b30 + a13 * b22) * det;
	        out[9] = (a01 * b30 - a00 * b32 - a03 * b22) * det;
	        out[10] = (a30 * b20 - a31 * b02 + a33 * b00) * det;
	        out[11] = (a21 * b02 - a20 * b20 - a23 * b00) * det;
	        out[12] = (a11 * b23 - a10 * b31 - a12 * b22) * det;
	        out[13] = (a00 * b31 - a01 * b23 + a02 * b22) * det;
	        out[14] = (a31 * b01 - a30 * b03 - a32 * b00) * det;
	        out[15] = (a20 * b03 - a21 * b01 + a22 * b00) * det;
	        return out;
	    };
	    static lookAt = (eye, center, up = Vector3.VECTOR3_TOP, out = new Matrix4()) => {
	        let x0, x1, x2, y0, y1, y2, z0, z1, z2, len;
	        const eyex = eye[0];
	        const eyey = eye[1];
	        const eyez = eye[2];
	        const upx = up[0];
	        const upy = up[1];
	        const upz = up[2];
	        const centerx = center[0];
	        const centery = center[1];
	        const centerz = center[2];
	        if (closeToCommon(eyex, centerx) && closeToCommon(eyey, centery) && closeToCommon(eyez, centerz)) {
	            return Matrix4.identity(out);
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
	    static multiply = (a, b, out = new Matrix4()) => {
	        a00 = a[0];
	        a01 = a[1];
	        a02 = a[2];
	        a03 = a[3];
	        a10 = a[4];
	        a11 = a[5];
	        a12 = a[6];
	        a13 = a[7];
	        a20 = a[8];
	        a21 = a[9];
	        a22 = a[10];
	        a23 = a[11];
	        a30 = a[12];
	        a31 = a[13];
	        a32 = a[14];
	        a33 = a[15];
	        b00 = b[0];
	        b01 = b[1];
	        b02 = b[2];
	        b03 = b[3];
	        out[0] = b00 * a00 + b01 * a10 + b02 * a20 + b03 * a30;
	        out[1] = b00 * a01 + b01 * a11 + b02 * a21 + b03 * a31;
	        out[2] = b00 * a02 + b01 * a12 + b02 * a22 + b03 * a32;
	        out[3] = b00 * a03 + b01 * a13 + b02 * a23 + b03 * a33;
	        b00 = b[4];
	        b01 = b[5];
	        b02 = b[6];
	        b03 = b[7];
	        out[4] = b00 * a00 + b01 * a10 + b02 * a20 + b03 * a30;
	        out[5] = b00 * a01 + b01 * a11 + b02 * a21 + b03 * a31;
	        out[6] = b00 * a02 + b01 * a12 + b02 * a22 + b03 * a32;
	        out[7] = b00 * a03 + b01 * a13 + b02 * a23 + b03 * a33;
	        b00 = b[8];
	        b01 = b[9];
	        b02 = b[10];
	        b03 = b[11];
	        out[8] = b00 * a00 + b01 * a10 + b02 * a20 + b03 * a30;
	        out[9] = b00 * a01 + b01 * a11 + b02 * a21 + b03 * a31;
	        out[10] = b00 * a02 + b01 * a12 + b02 * a22 + b03 * a32;
	        out[11] = b00 * a03 + b01 * a13 + b02 * a23 + b03 * a33;
	        b00 = b[12];
	        b01 = b[13];
	        b02 = b[14];
	        b03 = b[15];
	        out[12] = b00 * a00 + b01 * a10 + b02 * a20 + b03 * a30;
	        out[13] = b00 * a01 + b01 * a11 + b02 * a21 + b03 * a31;
	        out[14] = b00 * a02 + b01 * a12 + b02 * a22 + b03 * a32;
	        out[15] = b00 * a03 + b01 * a13 + b02 * a23 + b03 * a33;
	        return out;
	    };
	    // 乘以缩放矩阵
	    static multiplyScaleMatrix = (a, b, out = new Matrix4()) => {
	        a00 = a[0];
	        a01 = a[1];
	        a02 = a[2];
	        a03 = a[3];
	        a10 = a[4];
	        a11 = a[5];
	        a12 = a[6];
	        a13 = a[7];
	        a20 = a[8];
	        a21 = a[9];
	        a22 = a[10];
	        a23 = a[11];
	        a30 = a[12];
	        a31 = a[13];
	        a32 = a[14];
	        a33 = a[15];
	        b00 = b[0];
	        out[0] = b00 * a00;
	        out[1] = b00 * a01;
	        out[2] = b00 * a02;
	        out[3] = b00 * a03;
	        b01 = b[5];
	        out[4] = b01 * a10;
	        out[5] = b01 * a11;
	        out[6] = b01 * a12;
	        out[7] = b01 * a13;
	        b02 = b[10];
	        out[8] = b02 * a20;
	        out[9] = b02 * a21;
	        out[10] = b02 * a22;
	        out[11] = b02 * a23;
	        out[12] = a30;
	        out[13] = a31;
	        out[14] = a32;
	        out[15] = a33;
	        return out;
	    };
	    // 乘以平移矩阵
	    static multiplyTranslateMatrix = (a, b, out = new Matrix4()) => {
	        a00 = a[0];
	        a01 = a[1];
	        a02 = a[2];
	        a03 = a[3];
	        a10 = a[4];
	        a11 = a[5];
	        a12 = a[6];
	        a13 = a[7];
	        a20 = a[8];
	        a21 = a[9];
	        a22 = a[10];
	        a23 = a[11];
	        a30 = a[12];
	        a31 = a[13];
	        a32 = a[14];
	        a33 = a[15];
	        out[0] = a00;
	        out[1] = a01;
	        out[2] = a02;
	        out[3] = a03;
	        out[4] = a10;
	        out[5] = a11;
	        out[6] = a12;
	        out[7] = a13;
	        out[8] = a20;
	        out[9] = a21;
	        out[10] = a22;
	        out[11] = a23;
	        b00 = b[12];
	        b01 = b[13];
	        b02 = b[14];
	        out[12] = b00 * a00 + b01 * a10 + b02 * a20 + a30;
	        out[13] = b00 * a01 + b01 * a11 + b02 * a21 + a31;
	        out[14] = b00 * a02 + b01 * a12 + b02 * a22 + a32;
	        out[15] = b00 * a03 + b01 * a13 + b02 * a23 + a33;
	        return out;
	    };
	    static orthogonal = (left, right, bottom, top, near, far, out = new Matrix4()) => {
	        c$2 = 1 / (left - right);
	        b = 1 / (bottom - top);
	        a = 1 / (near - far);
	        out[0] = -2 * c$2;
	        out[1] = 0;
	        out[2] = 0;
	        out[3] = 0;
	        out[4] = 0;
	        out[5] = -2 * b;
	        out[6] = 0;
	        out[7] = 0;
	        out[8] = 0;
	        out[9] = 0;
	        out[10] = 2 * a;
	        out[11] = 0;
	        out[12] = (left + right) * c$2;
	        out[13] = (top + bottom) * b;
	        out[14] = (far + near) * a;
	        out[15] = 1;
	        return out;
	    };
	    static orthogonalZ0 = (left, right, bottom, top, near, far, out = new Matrix4()) => {
	        c$2 = 1 / (left - right);
	        b = 1 / (bottom - top);
	        a = 1 / (near - far);
	        out[0] = -2 * c$2;
	        out[1] = 0;
	        out[2] = 0;
	        out[3] = 0;
	        out[4] = 0;
	        out[5] = -2 * b;
	        out[6] = 0;
	        out[7] = 0;
	        out[8] = 0;
	        out[9] = 0;
	        out[10] = a;
	        out[11] = 0;
	        out[12] = (left + right) * c$2;
	        out[13] = (top + bottom) * b;
	        out[14] = near * a;
	        out[15] = 1;
	        return out;
	    };
	    static perspective = (fovy, aspect, near, far, out = new Matrix4()) => {
	        f = 1.0 / Math.tan(fovy / 2);
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
	        if (far !== null && far !== Infinity) {
	            a = 1 / (near - far);
	            out[10] = (far + near) * a;
	            out[14] = 2 * far * near * a;
	        }
	        else {
	            out[10] = -1;
	            out[14] = -2 * near;
	        }
	        return out;
	    };
	    static perspectiveZ0 = (fovy, aspect, near, far, out = new Matrix4()) => {
	        f = 1.0 / Math.tan(fovy / 2);
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
	        if (far !== null && far !== Infinity) {
	            a = 1 / (near - far);
	            out[10] = far * a;
	            out[14] = far * near * a;
	        }
	        else {
	            out[10] = -1;
	            out[14] = -near;
	        }
	        return out;
	    };
	    static rotate = (a, rad, axis, out = new Matrix4()) => {
	        x$2 = axis[0];
	        y$2 = axis[1];
	        z = axis[2];
	        len$2 = Math.hypot(x$2, y$2, z);
	        if (len$2 < EPSILON) {
	            return null;
	        }
	        len$2 = 1 / len$2;
	        x$2 *= len$2;
	        y$2 *= len$2;
	        z *= len$2;
	        s$2 = Math.sin(rad);
	        c$2 = Math.cos(rad);
	        t = 1 - c$2;
	        a00 = a[0];
	        a01 = a[1];
	        a02 = a[2];
	        a03 = a[3];
	        a10 = a[4];
	        a11 = a[5];
	        a12 = a[6];
	        a13 = a[7];
	        a20 = a[8];
	        a21 = a[9];
	        a22 = a[10];
	        a23 = a[11];
	        b00 = x$2 * x$2 * t + c$2;
	        b01 = y$2 * x$2 * t + z * s$2;
	        b02 = z * x$2 * t - y$2 * s$2;
	        b10 = x$2 * y$2 * t - z * s$2;
	        b11 = y$2 * y$2 * t + c$2;
	        b12 = z * y$2 * t + x$2 * s$2;
	        b20 = x$2 * z * t + y$2 * s$2;
	        b21 = y$2 * z * t - x$2 * s$2;
	        b22 = z * z * t + c$2;
	        out[0] = a00 * b00 + a10 * b01 + a20 * b02;
	        out[1] = a01 * b00 + a11 * b01 + a21 * b02;
	        out[2] = a02 * b00 + a12 * b01 + a22 * b02;
	        out[3] = a03 * b00 + a13 * b01 + a23 * b02;
	        out[4] = a00 * b10 + a10 * b11 + a20 * b12;
	        out[5] = a01 * b10 + a11 * b11 + a21 * b12;
	        out[6] = a02 * b10 + a12 * b11 + a22 * b12;
	        out[7] = a03 * b10 + a13 * b11 + a23 * b12;
	        out[8] = a00 * b20 + a10 * b21 + a20 * b22;
	        out[9] = a01 * b20 + a11 * b21 + a21 * b22;
	        out[10] = a02 * b20 + a12 * b21 + a22 * b22;
	        out[11] = a03 * b20 + a13 * b21 + a23 * b22;
	        if (a !== out) {
	            out[12] = a[12];
	            out[13] = a[13];
	            out[14] = a[14];
	            out[15] = a[15];
	        }
	        return out;
	    };
	    static rotateX = (a, rad, out = new Matrix4()) => {
	        s$2 = Math.sin(rad);
	        c$2 = Math.cos(rad);
	        a10 = a[4];
	        a11 = a[5];
	        a12 = a[6];
	        a13 = a[7];
	        a20 = a[8];
	        a21 = a[9];
	        a22 = a[10];
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
	        out[4] = a10 * c$2 + a20 * s$2;
	        out[5] = a11 * c$2 + a21 * s$2;
	        out[6] = a12 * c$2 + a22 * s$2;
	        out[7] = a13 * c$2 + a23 * s$2;
	        out[8] = a20 * c$2 - a10 * s$2;
	        out[9] = a21 * c$2 - a11 * s$2;
	        out[10] = a22 * c$2 - a12 * s$2;
	        out[11] = a23 * c$2 - a13 * s$2;
	        return out;
	    };
	    static rotateY = (a, rad, out = new Matrix4()) => {
	        s$2 = Math.sin(rad);
	        c$2 = Math.cos(rad);
	        a00 = a[0];
	        a01 = a[1];
	        a02 = a[2];
	        a03 = a[3];
	        a20 = a[8];
	        a21 = a[9];
	        a22 = a[10];
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
	        out[0] = a00 * c$2 - a20 * s$2;
	        out[1] = a01 * c$2 - a21 * s$2;
	        out[2] = a02 * c$2 - a22 * s$2;
	        out[3] = a03 * c$2 - a23 * s$2;
	        out[8] = a00 * s$2 + a20 * c$2;
	        out[9] = a01 * s$2 + a21 * c$2;
	        out[10] = a02 * s$2 + a22 * c$2;
	        out[11] = a03 * s$2 + a23 * c$2;
	        return out;
	    };
	    static rotateZ = (a, rad, out = new Matrix4()) => {
	        s$2 = Math.sin(rad);
	        c$2 = Math.cos(rad);
	        a00 = a[0];
	        a01 = a[1];
	        a02 = a[2];
	        a03 = a[3];
	        a10 = a[4];
	        a11 = a[5];
	        a12 = a[6];
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
	        out[0] = a00 * c$2 + a10 * s$2;
	        out[1] = a01 * c$2 + a11 * s$2;
	        out[2] = a02 * c$2 + a12 * s$2;
	        out[3] = a03 * c$2 + a13 * s$2;
	        out[4] = a10 * c$2 - a00 * s$2;
	        out[5] = a11 * c$2 - a01 * s$2;
	        out[6] = a12 * c$2 - a02 * s$2;
	        out[7] = a13 * c$2 - a03 * s$2;
	        return out;
	    };
	    static scale = (a, v, out = new Matrix4()) => {
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
	    static targetTo = (eye, target, up = Vector3.VECTOR3_TOP, out = new Matrix4()) => {
	        const eyex = eye[0], eyey = eye[1], eyez = eye[2], upx = up[0], upy = up[1], upz = up[2];
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
	    static translate = (a, v, out = new Matrix4()) => {
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
	            a00 = a[0];
	            a01 = a[1];
	            a02 = a[2];
	            a03 = a[3];
	            a10 = a[4];
	            a11 = a[5];
	            a12 = a[6];
	            a13 = a[7];
	            a20 = a[8];
	            a21 = a[9];
	            a22 = a[10];
	            a23 = a[11];
	            out[0] = a00;
	            out[1] = a01;
	            out[2] = a02;
	            out[3] = a03;
	            out[4] = a10;
	            out[5] = a11;
	            out[6] = a12;
	            out[7] = a13;
	            out[8] = a20;
	            out[9] = a21;
	            out[10] = a22;
	            out[11] = a23;
	            out[12] = a00 * x$2 + a10 * y$2 + a20 * z + a[12];
	            out[13] = a01 * x$2 + a11 * y$2 + a21 * z + a[13];
	            out[14] = a02 * x$2 + a12 * y$2 + a22 * z + a[14];
	            out[15] = a03 * x$2 + a13 * y$2 + a23 * z + a[15];
	        }
	        return out;
	    };
	    static transpose = (a, out = new Matrix4()) => {
	        if (out === a) {
	            a01 = a[1];
	            a02 = a[2];
	            a03 = a[3];
	            a12 = a[6];
	            a13 = a[7];
	            a23 = a[11];
	            out[1] = a[4];
	            out[2] = a[8];
	            out[3] = a[12];
	            out[4] = a01;
	            out[6] = a[9];
	            out[7] = a[13];
	            out[8] = a02;
	            out[9] = a12;
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
	    constructor(data = UNIT_MATRIX4_DATA) {
	        super(data);
	    }
	}

	let x$1, y$1;
	/**
	 * @class
	 * @classdesc 极坐标
	 * @implements {Mathx.IPolar}
	 * @name Mathx.Polar
	 * @desc 极坐标，遵守数学右手定则。规定逆时针方向为正方向。
	 * @param {number} [r=0] | 距离极点距离
	 * @param {number} [a=0] | 旋转弧度，规定0弧度为笛卡尔坐标系x轴方向
	 */
	class Polar {
	    /**
	     * @public
	     * @method create
	     * @memberof Mathx.Polar
	     * @desc 创建一个极坐标
	     * @param {number} [r=0] 距离
	     * @param {number} [a=0] 弧度
	     * @returns {Mathx.Polar} 新的极坐标实例
	     */
	    static create(r = 0, a = 0) {
	        return new Polar(r, a);
	    }
	    a;
	    r;
	    dataType = ArraybufferDataType.POLAR;
	    /**
	     * @public
	     * @member {number} Mathx.Polar.prototype.a
	     * @desc 旋转弧度
	     * @default 0
	     */
	    /**
	     * @public
	     * @member {number} Mathx.Polar.prototype.r
	     * @desc 距离
	     * @default 0
	     */
	    constructor(r = 0, a = 0) {
	        this.r = r;
	        this.a = a;
	    }
	    /**
	     * @public
	     * @method Mathx.Polar.prototype.distanceTo
	     * @desc 求该坐标到另一个极坐标的欧几里得距离
	     * @param {Mathx.IPolar} p | 目标极坐标
	     * @returns {number} 欧几里得距离
	     */
	    distanceTo(p) {
	        return Math.sqrt(this.distanceToSquared(p));
	    }
	    /**
	     * @public
	     * @method Mathx.Polar.prototype.distanceToManhattan
	     * @desc 求该坐标到另一个极坐标的曼哈顿距离
	     * @param {Mathx.IPolar} p | 目标极坐标
	     * @returns {number} 曼哈顿距离
	     */
	    distanceToManhattan({ r, a }) {
	        return Math.cos(a) * r - this.x() + Math.sin(a) * r - this.y();
	    }
	    /**
	     * @public
	     * @method Mathx.Polar.prototype.distanceToSquared
	     * @desc 求该坐标到另一个极坐标的欧几里得距离平方
	     * @param {Mathx.IPolar} p | 目标极坐标
	     * @returns {number} 欧几里得距离平方
	     */
	    distanceToSquared({ r, a }) {
	        return this.r * this.r + r * r - 2 * r * this.r * Math.cos(a - this.a);
	    }
	    /**
	     * @public
	     * @method Mathx.Polar.prototype.fromVector2
	     * @desc 将一个二维向量数据转化为自身的极坐标值
	     * @param {Mathx.IVector2} vector2 | 二维向量
	     * @returns {number} this
	     */
	    fromVector2(v) {
	        x$1 = v[0];
	        y$1 = v[1];
	        this.r = Math.sqrt(x$1 * x$1 + y$1 * y$1);
	        this.a = Math.atan2(y$1, x$1);
	        return this;
	    }
	    /**
	     * @public
	     * @method Mathx.Polar.prototype.lengthManhattan
	     * @desc 求自身离原点的曼哈顿距离
	     * @returns {number} 曼哈顿距离
	     */
	    lengthManhattan() {
	        return (Math.cos(this.a) + Math.sin(this.a)) * this.r;
	    }
	    /**
	     * @public
	     * @method Mathx.Polar.prototype.set
	     * @desc 设置极坐标值
	     * @param {number} [r=0] 距离
	     * @param {number} [a=0] 弧度
	     * @returns {number} this
	     */
	    set(r = 0, a = 0) {
	        this.r = r;
	        this.a = a;
	        return this;
	    }
	    /**
	     * @public
	     * @method Mathx.Polar.prototype.setA
	     * @desc 设置极坐标的弧度
	     * @param {number} [a=0] 角度
	     * @returns {number} this
	     */
	    setA(a = 0) {
	        this.a = a;
	        return this;
	    }
	    /**
	     * @public
	     * @method Mathx.Polar.prototype.setR
	     * @desc 设置极坐标的弧度
	     * @param {number} [r=0] 距离
	     * @returns {number} this
	     */
	    setR(r = 0) {
	        this.r = r;
	        return this;
	    }
	    /**
	     * @public
	     * @method Mathx.Polar.prototype.toJson
	     * @desc 将极坐标转化为纯json对象，纯数据
	     * @param {IPolar} [json] 被修改的json对象，如果不传则会新创建json对象。
	     * @returns {Mathx.IPolar} json
	     */
	    toJson(json = { a: 0, r: 0 }) {
	        json.r = this.r;
	        json.a = this.a;
	        return json;
	    }
	    /**
	     * @public
	     * @method Mathx.Polar.prototype.toString
	     * @desc 将极坐标转化为字符串
	     * @returns {string} 形式为"(r, a)"的字符串
	     */
	    toString() {
	        return `(${this.r}, ${this.a})`;
	    }
	    /**
	     * @public
	     * @method Mathx.Polar.prototype.x
	     * @desc 获取极坐标对应二维向量的x的值
	     * @returns {number} x
	     */
	    x() {
	        return Math.cos(this.a) * this.r;
	    }
	    /**
	     * @public
	     * @method Mathx.Polar.prototype.y
	     * @desc 获取极坐标对应二维向量的y的值
	     * @returns {number} y
	     */
	    y() {
	        return Math.sin(this.a) * this.r;
	    }
	}

	let ax$1, ay$1, az$1, aw$1, bx$1, by$1, bz$1, bw;
	let s$1 = 0, c$1 = 0, rad = 0, dotTmp = 0, omega = 0, len$1 = 0, scale0 = 0, scale1 = 0;
	const tmpVec3 = new Float32Array(3);
	class Quaternion extends Float32Array {
	    static angleTo = (a, b) => {
	        dotTmp = Quaternion.dot(a, b);
	        return Math.acos(2 * dotTmp * dotTmp - 1);
	    };
	    static conjugate = (a, out = new Quaternion()) => {
	        out[0] = -a[0];
	        out[1] = -a[1];
	        out[2] = -a[2];
	        out[3] = a[3];
	        return out;
	    };
	    static create = (x = 0, y = 0, z = 0, w = 1, out = new Quaternion()) => {
	        out[0] = x;
	        out[1] = y;
	        out[2] = z;
	        out[3] = w;
	        return out;
	    };
	    static dot = (a, b) => {
	        return a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3];
	    };
	    static fromAxisAngle = (axis, rad, out = new Quaternion()) => {
	        rad = rad * 0.5;
	        s$1 = Math.sin(rad);
	        out[0] = s$1 * axis[0];
	        out[1] = s$1 * axis[1];
	        out[2] = s$1 * axis[2];
	        out[3] = Math.cos(rad);
	        return out;
	    };
	    static fromMatrix3 = (m, out = new Quaternion()) => {
	        const fTrace = m[0] + m[4] + m[8];
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
	            const j = (i + 1) % 3;
	            const k = (i + 2) % 3;
	            fRoot = Math.sqrt(m[i * 3 + i] - m[j * 3 + j] - m[k * 3 + k] + 1.0);
	            out[i] = 0.5 * fRoot;
	            fRoot = 0.5 / fRoot;
	            out[3] = (m[j * 3 + k] - m[k * 3 + j]) * fRoot;
	            out[j] = (m[j * 3 + i] + m[i * 3 + j]) * fRoot;
	            out[k] = (m[k * 3 + i] + m[i * 3 + k]) * fRoot;
	        }
	        return out;
	    };
	    static identity = (out = new Quaternion()) => {
	        out[0] = 0;
	        out[1] = 0;
	        out[2] = 0;
	        out[3] = 1;
	        return out;
	    };
	    static invert = (a, out = new Quaternion()) => {
	        ax$1 = a[0];
	        ay$1 = a[1];
	        az$1 = a[2];
	        aw$1 = a[3];
	        dotTmp = ax$1 * ax$1 + ay$1 * ay$1 + az$1 * az$1 + aw$1 * aw$1;
	        if (dotTmp) {
	            c$1 = 1.0 / dotTmp;
	            out[0] = -ax$1 * c$1;
	            out[1] = -ay$1 * c$1;
	            out[2] = -az$1 * c$1;
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
	    static lerp = (a, b, t, out = new Quaternion()) => {
	        ax$1 = a[0];
	        ay$1 = a[1];
	        az$1 = a[2];
	        aw$1 = a[3];
	        out[0] = ax$1 + t * (b[0] - ax$1);
	        out[1] = ay$1 + t * (b[1] - ay$1);
	        out[2] = az$1 + t * (b[2] - az$1);
	        out[3] = aw$1 + t * (b[3] - aw$1);
	        return out;
	    };
	    static multiply = (a, b, out = new Quaternion()) => {
	        ax$1 = a[0];
	        ay$1 = a[1];
	        az$1 = a[2];
	        aw$1 = a[3];
	        bx$1 = b[0];
	        by$1 = b[1];
	        bz$1 = b[2];
	        bw = b[3];
	        out[0] = ax$1 * bw + aw$1 * bx$1 + ay$1 * bz$1 - az$1 * by$1;
	        out[1] = ay$1 * bw + aw$1 * by$1 + az$1 * bx$1 - ax$1 * bz$1;
	        out[2] = az$1 * bw + aw$1 * bz$1 + ax$1 * by$1 - ay$1 * bx$1;
	        out[3] = aw$1 * bw - ax$1 * bx$1 - ay$1 * by$1 - az$1 * bz$1;
	        return out;
	    };
	    static normalize = (a, out = new Quaternion()) => {
	        ax$1 = a[0];
	        ay$1 = a[1];
	        az$1 = a[2];
	        aw$1 = a[3];
	        len$1 = ax$1 * ax$1 + ay$1 * ay$1 + az$1 * az$1 + aw$1 * aw$1;
	        if (len$1 > 0) {
	            len$1 = 1 / Math.sqrt(len$1);
	        }
	        out[0] = ax$1 * len$1;
	        out[1] = ay$1 * len$1;
	        out[2] = az$1 * len$1;
	        out[3] = aw$1 * len$1;
	        return out;
	    };
	    static random = (out = new Quaternion()) => {
	        ax$1 = Math.random();
	        ay$1 = Math.random();
	        az$1 = Math.random();
	        c$1 = Math.sqrt(1 - ax$1);
	        s$1 = Math.sqrt(ax$1);
	        out[0] = c$1 * Math.sin(2.0 * Math.PI * ay$1);
	        out[1] = c$1 * Math.cos(2.0 * Math.PI * ay$1);
	        out[2] = s$1 * Math.sin(2.0 * Math.PI * az$1);
	        out[3] = s$1 * Math.cos(2.0 * Math.PI * az$1);
	        return out;
	    };
	    static rotationTo = (a, b, out = new Quaternion()) => {
	        dotTmp = Vector3.dot(a, b);
	        if (dotTmp < -1 + EPSILON) {
	            Vector3.cross(Vector3.VECTOR3_LEFT, a, tmpVec3);
	            if (Vector3.norm(tmpVec3) < EPSILON) {
	                Vector3.cross(Vector3.VECTOR3_TOP, a, tmpVec3);
	            }
	            Vector3.normalize(tmpVec3, tmpVec3);
	            Quaternion.fromAxisAngle(tmpVec3, Math.PI, out);
	            return out;
	        }
	        else if (dotTmp > 1 - EPSILON) {
	            out[0] = 0;
	            out[1] = 0;
	            out[2] = 0;
	            out[3] = 1;
	            return out;
	        }
	        else {
	            Vector3.cross(tmpVec3, a, b);
	            out[0] = tmpVec3[0];
	            out[1] = tmpVec3[1];
	            out[2] = tmpVec3[2];
	            out[3] = 1 + dotTmp;
	            return Quaternion.normalize(out, out);
	        }
	    };
	    static rotateX = (a, rad, out = new Quaternion()) => {
	        rad *= 0.5;
	        ax$1 = a[0];
	        ay$1 = a[1];
	        az$1 = a[2];
	        aw$1 = a[3];
	        bx$1 = Math.sin(rad);
	        bw = Math.cos(rad);
	        out[0] = ax$1 * bw + aw$1 * bx$1;
	        out[1] = ay$1 * bw + az$1 * bx$1;
	        out[2] = az$1 * bw - ay$1 * bx$1;
	        out[3] = aw$1 * bw - ax$1 * bx$1;
	        return out;
	    };
	    static rotateY = (a, rad, out = new Quaternion()) => {
	        rad *= 0.5;
	        ax$1 = a[0];
	        ay$1 = a[1];
	        az$1 = a[2];
	        aw$1 = a[3];
	        by$1 = Math.sin(rad);
	        bw = Math.cos(rad);
	        out[0] = ax$1 * bw - az$1 * by$1;
	        out[1] = ay$1 * bw + aw$1 * by$1;
	        out[2] = az$1 * bw + ax$1 * by$1;
	        out[3] = aw$1 * bw - ay$1 * by$1;
	        return out;
	    };
	    static rotateZ = (a, rad, out = new Quaternion()) => {
	        rad *= 0.5;
	        ax$1 = a[0];
	        ay$1 = a[1];
	        az$1 = a[2];
	        aw$1 = a[3];
	        bz$1 = Math.sin(rad);
	        bw = Math.cos(rad);
	        out[0] = ax$1 * bw + ay$1 * bz$1;
	        out[1] = ay$1 * bw - ax$1 * bz$1;
	        out[2] = az$1 * bw + aw$1 * bz$1;
	        out[3] = aw$1 * bw - az$1 * bz$1;
	        return out;
	    };
	    static slerp = (a, b, t, out = new Quaternion()) => {
	        ax$1 = a[0];
	        ay$1 = a[1];
	        az$1 = a[2];
	        aw$1 = a[3];
	        bx$1 = b[0];
	        by$1 = b[1];
	        bz$1 = b[2];
	        bw = b[3];
	        c$1 = ax$1 * bx$1 + ay$1 * by$1 + az$1 * bz$1 + aw$1 * bw;
	        if (c$1 < 0.0) {
	            c$1 = -c$1;
	            bx$1 = -bx$1;
	            by$1 = -by$1;
	            bz$1 = -bz$1;
	            bw = -bw;
	        }
	        if (1.0 - c$1 > EPSILON) {
	            omega = Math.acos(c$1);
	            s$1 = Math.sin(omega);
	            scale0 = Math.sin((1.0 - t) * omega) / s$1;
	            scale1 = Math.sin(t * omega) / s$1;
	        }
	        else {
	            scale0 = 1.0 - t;
	            scale1 = t;
	        }
	        out[0] = scale0 * ax$1 + scale1 * bx$1;
	        out[1] = scale0 * ay$1 + scale1 * by$1;
	        out[2] = scale0 * az$1 + scale1 * bz$1;
	        out[3] = scale0 * aw$1 + scale1 * bw;
	        return out;
	    };
	    static toAxisAngle = (q, outAxis) => {
	        rad = Math.acos(q[3]) * 2.0;
	        s$1 = Math.sin(rad / 2.0);
	        if (s$1 > EPSILON) {
	            outAxis[0] = q[0] / s$1;
	            outAxis[1] = q[1] / s$1;
	            outAxis[2] = q[2] / s$1;
	        }
	        else {
	            outAxis[0] = 1;
	            outAxis[1] = 0;
	            outAxis[2] = 0;
	        }
	        return rad;
	    };
	    static toString = (a) => {
	        return `quat("${a[0]}, ${a[1]}, ${a[2]}, ${a[3]})`;
	    };
	    length;
	    dataType = ArraybufferDataType.QUATERNION;
	    constructor(x = 0, y = 0, z = 0, w = 0) {
	        super(4);
	        this[0] = x;
	        this[1] = y;
	        this[2] = z;
	        this[3] = w;
	    }
	    get x() {
	        return this[0];
	    }
	    set x(value) {
	        this[0] = value;
	    }
	    get y() {
	        return this[1];
	    }
	    set y(value) {
	        this[1] = value;
	    }
	    get z() {
	        return this[2];
	    }
	    set z(value) {
	        this[2] = value;
	    }
	    get w() {
	        return this[3];
	    }
	    set w(value) {
	        this[3] = value;
	    }
	}

	var rndFloat = (low, high) => {
	    return low + Math.random() * (high - low);
	};

	var rndFloatRange = (range) => {
	    return range * (0.5 - Math.random());
	};

	var rndInt = (low, high) => {
	    return low + Math.floor(Math.random() * (high - low + 1));
	};

	// import Matrix3 from "../matrix/Matrix3";
	const v1 = new Vector3(), v2 = new Vector3(), v0 = new Vector3(), f1 = new Vector3(), f2 = new Vector3(), f0 = new Vector3();
	const ta = new Vector3();
	// const ma: Matrix3 = new Matrix3();
	const tb = new Vector3(), vA = new Vector3();
	const defaultMax = [1, 1, 1];
	class Cube {
	    static clampPoint = (a, point, out = new Vector3()) => {
	        return Vector3.clamp(point, a.min, a.max, out);
	    };
	    static containsPoint = (a, b) => {
	        return (b[0] >= a.min[0] &&
	            b[0] <= a.max[0] &&
	            b[1] >= a.min[1] &&
	            b[1] <= a.max[1] &&
	            b[2] >= a.min[2] &&
	            b[2] <= a.max[2]);
	    };
	    static containsCube = (a, b) => {
	        return (a.min[0] <= b.min[0] &&
	            b.max[0] <= a.max[0] &&
	            a.min[1] <= b.min[1] &&
	            b.max[1] <= a.max[1] &&
	            a.min[2] <= b.min[2] &&
	            b.max[2] <= a.max[2]);
	    };
	    static depth = (a) => {
	        return a.max[2] - a.min[2];
	    };
	    static equals = (a, b) => {
	        return Vector3.equals(a.min, b.min) && Vector3.equals(a.max, b.max);
	    };
	    static getCenter = (a, out = new Vector3()) => {
	        Vector3.add(a.min, a.max, out);
	        return Vector3.multiplyScalar(out, 0.5, out);
	    };
	    static getSize = (a, out = new Vector3()) => {
	        return Vector3.minus(a.max, a.min, out);
	    };
	    static height = (a) => {
	        return a.max[1] - a.min[1];
	    };
	    static intersect = (a, b, out = new Cube()) => {
	        Vector3.max(a.min, b.min, out.min);
	        Vector3.min(a.max, b.max, out.max);
	        return out;
	    };
	    static intersectsBox = (a, b) => {
	        return !(b.max[0] < a.min[0] ||
	            b.min[0] > a.max[0] ||
	            b.max[1] < a.min[1] ||
	            b.min[1] > a.max[1] ||
	            b.max[2] < a.min[2] ||
	            b.min[2] > a.max[2]);
	    };
	    static intersectsSphere = (a, b) => {
	        Cube.clampPoint(a, b.position, ta);
	        return Vector3.distanceToSquared(ta, b.position) <= b.radius * b.radius;
	    };
	    static intersectsTriangle = (a, b) => {
	        if (Cube.isEmpty(a)) {
	            return false;
	        }
	        Cube.getCenter(a, ta);
	        Vector3.minus(a.max, ta, tb);
	        // translate triangle to aabb origin
	        Vector3.minus(b.a, ta, v0);
	        Vector3.minus(b.b, ta, v1);
	        Vector3.minus(b.c, ta, v2);
	        // compute edge vectors for triangle
	        Vector3.minus(v1, v0, f0);
	        Vector3.minus(v2, v1, f1);
	        Vector3.minus(v0, v2, f2);
	        // test against axes that are given by cross product combinations of the edges of the triangle and the edges of the aabb
	        // make an axis testing of each of the 3 sides of the aabb against each of the 3 sides of the triangle = 9 axis of separation
	        // axis_ij = u_i x f_j (u0, u1, u2 = face normals of aabb = x,y,z axes vectors since aabb is axis aligned)
	        const axes = [
	            0,
	            -f0[2],
	            f0[1],
	            0,
	            -f1[2],
	            f1[1],
	            0,
	            -f2[2],
	            f2[1],
	            f0[2],
	            0,
	            -f0[0],
	            f1[2],
	            0,
	            -f1[0],
	            f2[2],
	            0,
	            -f2[0],
	            -f0[1],
	            f0[0],
	            0,
	            -f1[1],
	            f1[0],
	            0,
	            -f2[1],
	            f2[0],
	            0
	        ];
	        if (!satForAxes(axes, v0, v1, v2, tb)) {
	            return false;
	        }
	        // test 3 face normals from the aabb
	        // ta = Matrix3.identity(); ???
	        if (!satForAxes(axes, v0, v1, v2, tb)) {
	            return false;
	        }
	        // finally testing the face normal of the triangle
	        // use already existing triangle edge vectors here
	        Vector3.cross(f0, f1, ta);
	        // axes = [_triangleNormal.x, _triangleNormal.y, _triangleNormal.z];
	        return satForAxes(ta, v0, v1, v2, tb);
	    };
	    static isEmpty = (a) => {
	        return a.max[0] < a.min[0] || a.max[0] < a.min[0] || a.max[0] < a.min[0];
	    };
	    static round = (a, out = new Cube()) => {
	        Vector3.round(a.min, out.min);
	        Vector3.round(a.max, out.max);
	        return out;
	    };
	    static size = (a, out = new Vector3()) => {
	        return Vector3.minus(a.max, a.min, out);
	    };
	    static stretch = (a, b, c, out = new Cube()) => {
	        Vector3.add(a.min, b, out.min);
	        Vector3.add(a.max, c, out.max);
	        return out;
	    };
	    static surfaceArea = (a) => {
	        Cube.getSize(a, ta);
	        return (ta.x * ta.y + ta.x * ta.z + ta.y * ta.z) * 2;
	    };
	    static translate = (a, b, out = new Cube()) => {
	        Vector3.add(a.min, b, out.min);
	        Vector3.add(a.max, b, out.max);
	        return out;
	    };
	    static union = (a, b, out = new Cube()) => {
	        Vector3.min(a.min, b.min, out.min);
	        Vector3.max(a.max, b.max, out.max);
	        return out;
	    };
	    static volume = (a) => {
	        return (a.max[0] - a.min[0]) * (a.max[1] - a.min[1]) * (a.max[2] - a.min[2]);
	    };
	    static width = (a) => {
	        return a.max[0] - a.min[0];
	    };
	    min = new Vector3();
	    max = new Vector3();
	    constructor(a = new Vector3(), b = Vector3.fromArray(defaultMax)) {
	        Vector3.min(a, b, this.min);
	        Vector3.max(a, b, this.max);
	    }
	}
	let i, j, p0, p1, p2, r$1;
	function satForAxes(axes, v0, v1, v2, extents) {
	    for (i = 0, j = axes.length - 3; i <= j; i += 3) {
	        Vector3.fromArray(axes, i, vA);
	        // project the aabb onto the seperating axis
	        r$1 =
	            extents[0] * Math.abs(vA[0]) +
	                extents[1] * Math.abs(vA[1]) +
	                extents[2] * Math.abs(vA[2]);
	        // project all 3 vertices of the triangle onto the seperating axis
	        p0 = Vector3.dot(v0, vA);
	        p1 = Vector3.dot(v1, vA);
	        p2 = Vector3.dot(v2, vA);
	        // actual test, basically see if either of the most extreme of the triangle points intersects r
	        if (Math.max(-Math.max(p0, p1, p2), Math.min(p0, p1, p2)) > r$1) {
	            // points of the projected triangle are outside the projected half-length of the aabb
	            // the axis is seperating and we can exit
	            return false;
	        }
	    }
	    return true;
	}

	let x = 0;
	let y = 0;
	let c = 0;
	let s = 0;
	class Vector2 extends Float32Array {
	    static VECTOR2_ZERO = new Vector2(0, 0);
	    static VECTOR2_TOP = new Vector2(0, 1);
	    static VECTOR2_BOTTOM = new Vector2(0, -1);
	    static VECTOR2_LEFT = new Vector2(-1, 0);
	    static VECTOR2_RIGHT = new Vector2(1, 0);
	    static VECTOR2_ONE = new Vector2(1, 1);
	    static add = (a, b, out = new Vector2()) => {
	        out[0] = a[0] + b[0];
	        out[1] = a[1] + b[1];
	        return out;
	    };
	    static addScalar = (a, b, out = new Vector2(2)) => {
	        out[0] = a[0] + b;
	        out[1] = a[1] + b;
	        return out;
	    };
	    static angle = (a) => {
	        return Math.atan2(a[1], a[0]);
	    };
	    static ceil = (a, out = new Vector2()) => {
	        out[0] = Math.ceil(a[0]);
	        out[1] = Math.ceil(a[1]);
	        return out;
	    };
	    static clamp = (a, min, max, out = new Vector2()) => {
	        out[0] = clampCommon(a[0], min[0], max[0]);
	        out[1] = clampCommon(a[1], min[1], max[1]);
	        return out;
	    };
	    static clampSafe = (a, min, max, out = new Vector2()) => {
	        out[0] = clampSafeCommon(a[0], min[0], max[0]);
	        out[1] = clampSafeCommon(a[1], min[1], max[1]);
	        return out;
	    };
	    static clampLength = (a, min, max, out = new Vector2()) => {
	        out[0] = clampSafeCommon(a[0], min[0], max[0]);
	        out[1] = clampSafeCommon(a[1], min[1], max[1]);
	        return out;
	    };
	    static clampScalar = (a, min, max, out = new Vector2()) => {
	        out[0] = clampCommon(a[0], min, max);
	        out[1] = clampCommon(a[1], min, max);
	        return out;
	    };
	    static closeTo = (a, b, epsilon = EPSILON) => {
	        return Vector2.distanceTo(a, b) <= epsilon;
	    };
	    static closeToRect = (a, b, epsilon = EPSILON) => {
	        return closeToCommon(a[0], b[0], epsilon) && closeToCommon(a[1], b[1], epsilon);
	    };
	    static closeToManhattan = (a, b, epsilon = EPSILON) => {
	        return Vector2.distanceToManhattan(a, b) <= epsilon;
	    };
	    static clone = (a, out = new Vector2()) => {
	        out[0] = a[0];
	        out[1] = a[1];
	        return out;
	    };
	    static cross = (a, b) => {
	        return a[0] * b[1] - a[1] * b[0];
	    };
	    static create = (x = 0, y = 0, out = new Vector2()) => {
	        out[0] = x;
	        out[1] = y;
	        return out;
	    };
	    static distanceTo = (a, b) => {
	        x = b[0] - a[0];
	        y = b[1] - a[1];
	        return Math.hypot(x, y);
	    };
	    static distanceToManhattan = (a, b) => {
	        return Math.abs(a[0] - b[0]) + Math.abs(a[1] - b[1]);
	    };
	    static distanceToSquared = (a, b) => {
	        x = a[0] - b[0];
	        y = a[1] - b[1];
	        return x * x + y * y;
	    };
	    static divide = (a, b, out = new Vector2()) => {
	        out[0] = a[0] / b[0];
	        out[1] = a[1] / b[1];
	        return out;
	    };
	    static divideScalar = (a, scalar, out = new Vector2()) => {
	        return Vector2.multiplyScalar(a, 1 / scalar, out);
	    };
	    static dot = (a, b) => {
	        return a[0] * b[0] + a[1] * b[1];
	    };
	    static equals = (a, b) => {
	        return a[0] === b[0] && a[1] === b[1];
	    };
	    static floor = (a, out = new Vector2()) => {
	        out[0] = Math.floor(a[0]);
	        out[1] = Math.floor(a[1]);
	        return out;
	    };
	    static floorToZero = (a, out = new Vector2()) => {
	        out[0] = floorToZeroCommon(a[0]);
	        out[1] = floorToZeroCommon(a[1]);
	        return out;
	    };
	    static fromArray = (arr, index = 0, out = new Vector2()) => {
	        out[0] = arr[index];
	        out[1] = arr[index + 1];
	        return out;
	    };
	    static fromJson = (j, out = new Vector2()) => {
	        out[0] = j.x;
	        out[1] = j.y;
	        return out;
	    };
	    static fromPolar = (p, out = new Vector2()) => {
	        out[0] = Math.cos(p.a) * p.r;
	        out[1] = Math.sin(p.a) * p.r;
	        return out;
	    };
	    static fromScalar = (value = 0, out = new Vector2()) => {
	        out[0] = out[1] = value;
	        return out;
	    };
	    static inverse = (a, out = new Vector2()) => {
	        out[0] = 1 / a[0] || 0;
	        out[1] = 1 / a[1] || 0;
	        return out;
	    };
	    static norm = (a) => {
	        return Math.sqrt(a[0] * a[0] + a[1] * a[1]);
	    };
	    static lengthManhattan = (a) => {
	        return Math.abs(a[0]) + Math.abs(a[1]);
	    };
	    static lengthSquared = (a) => {
	        return a[0] * a[0] + a[1] * a[1];
	    };
	    static lerp = (a, b, alpha, out = new Vector2()) => {
	        out[0] = (b[0] - a[0]) * alpha + a[0];
	        out[1] = (b[1] - a[1]) * alpha + a[1];
	        return out;
	    };
	    static max = (a, b, out = new Vector2()) => {
	        out[0] = Math.max(a[0], b[0]);
	        out[1] = Math.max(a[1], b[1]);
	        return out;
	    };
	    static min = (a, b, out = new Vector2()) => {
	        out[0] = Math.min(a[0], b[0]);
	        out[1] = Math.min(a[1], b[1]);
	        return out;
	    };
	    static minus = (a, b, out = new Vector2()) => {
	        out[0] = a[0] - b[0];
	        out[1] = a[1] - b[0];
	        return out;
	    };
	    static minusScalar = (a, num, out = new Vector2()) => {
	        out[0] = a[0] - num;
	        out[1] = a[1] - num;
	        return out;
	    };
	    static multiply = (a, b, out = new Vector2()) => {
	        out[0] = a[0] * b[0];
	        out[1] = a[1] * b[1];
	        return out;
	    };
	    static multiplyScalar = (a, scalar, out = new Vector2()) => {
	        out[0] = a[0] * scalar;
	        out[1] = a[1] * scalar;
	        return out;
	    };
	    static negate = (a, out = new Vector2()) => {
	        out[0] = -a[0];
	        out[1] = -a[1];
	        return out;
	    };
	    static normalize = (a, out = new Vector2()) => {
	        return Vector2.divideScalar(a, Vector2.norm(a) || 1, out);
	    };
	    static random = (norm = 1, out = new Vector2()) => {
	        x = Math.random() * DEG_360_RAD;
	        out[0] = Math.cos(x) * norm;
	        out[1] = Math.sin(x) * norm;
	        return out;
	    };
	    static rotate = (a, angle, center = Vector2.VECTOR2_ZERO, out = new Vector2(2)) => {
	        c = Math.cos(angle);
	        s = Math.sin(angle);
	        x = a[0] - center[0];
	        y = a[1] - center[1];
	        out[0] = x * c - y * s + center[0];
	        out[1] = x * s + y * c + center[1];
	        return out;
	    };
	    static round = (a, out = new Vector2()) => {
	        out[0] = Math.round(a[0]);
	        out[1] = Math.round(a[1]);
	        return out;
	    };
	    static set = (x = 0, y = 0, out = new Vector2()) => {
	        out[0] = x;
	        out[1] = y;
	        return out;
	    };
	    static setNorm = (a, length, out = new Vector2(2)) => {
	        Vector2.normalize(a, out);
	        Vector2.multiplyScalar(out, length, out);
	        return out;
	    };
	    static toArray = (a, arr = []) => {
	        arr[0] = a[0];
	        arr[1] = a[1];
	        return arr;
	    };
	    static toPalorJson = (a, p = { a: 0, r: 0 }) => {
	        p.r = Vector2.norm(a);
	        p.a = Vector2.angle(a);
	        return p;
	    };
	    static toString = (a) => {
	        return `(${a[0]}, ${a[1]})`;
	    };
	    static transformMatrix3 = (a, m, out = new Vector2()) => {
	        x = a[0];
	        y = a[1];
	        out[0] = m[0] * x + m[3] * y + m[6];
	        out[1] = m[1] * x + m[4] * y + m[7];
	        return out;
	    };
	    length;
	    dataType = ArraybufferDataType.VECTOR2;
	    constructor(x = 0, y = 0) {
	        super(2);
	        this[0] = x;
	        this[1] = y;
	    }
	    get x() {
	        return this[0];
	    }
	    set x(value) {
	        this[0] = value;
	    }
	    get y() {
	        return this[1];
	    }
	    set y(value) {
	        this[1] = value;
	    }
	}

	class Rectangle2 {
	    static area = (a) => {
	        return (a.max[0] - a.min[0]) * (a.max[1] - a.min[1]);
	    };
	    static containsPoint = (rect, a) => {
	        return (a[0] >= rect.min[0] && a[0] <= rect.max[0] && a[1] >= rect.min[1] && a[1] <= rect.max[1]);
	    };
	    static containsRectangle = (rect, box) => {
	        return (rect.min[0] <= box.min[0] &&
	            box.max[0] <= rect.max[0] &&
	            rect.min[1] <= box.min[1] &&
	            box.max[1] <= rect.max[1]);
	    };
	    static create = (a = Vector2.create(), b = Vector2.create(1, 1)) => {
	        return {
	            max: Vector2.max(a, b),
	            min: Vector2.min(a, b)
	        };
	    };
	    static equals = (a, b) => {
	        return Vector2.equals(a.min, b.min) && Vector2.equals(a.max, b.max);
	    };
	    static getCenter = (a, out = Vector2.create()) => {
	        Vector2.add(a.min, a.max, out);
	        return Vector2.multiplyScalar(out, 0.5, out);
	    };
	    static getSize = (a, out = Vector2.create()) => {
	        return Vector2.minus(a.max, a.min, out);
	    };
	    static height = (a) => {
	        return a.max[1] - a.min[1];
	    };
	    static intersect = (a, b, out = new Rectangle2()) => {
	        Vector2.max(a.min, b.min, out.min);
	        Vector2.min(a.max, b.max, out.max);
	        return out;
	    };
	    static stretch = (a, b, c, out = new Rectangle2()) => {
	        Vector2.add(a.min, b, out.min);
	        Vector2.add(a.max, c, out.max);
	        return out;
	    };
	    static translate = (a, b, out = new Rectangle2()) => {
	        Vector2.add(a.min, b, out.min);
	        Vector2.add(a.max, b, out.max);
	        return out;
	    };
	    static union = (a, b, out = new Rectangle2()) => {
	        Vector2.min(a.min, b.min, out.min);
	        Vector2.max(a.max, b.max, out.max);
	        return out;
	    };
	    static width = (a) => {
	        return a.max[0] - a.min[0];
	    };
	    min = Vector2.create();
	    max = Vector2.create();
	    constructor(a = Vector2.create(), b = Vector2.create(1, 1)) {
	        Vector2.min(a, b, this.min);
	        Vector2.max(a, b, this.max);
	    }
	}

	let r = 0;
	class Sphere {
	    static boundingBox = (a, out = new Cube()) => {
	        Vector3.minusScalar(a.position, a.radius, out.min);
	        Vector3.addScalar(a.position, a.radius, out.max);
	        return out;
	    };
	    static containsPoint = (a, b) => {
	        return Vector3.distanceToSquared(a.position, b) <= a.radius * a.radius;
	    };
	    static distanceToPoint = (a, b) => {
	        return Vector3.distanceTo(a.position, b) - a.radius;
	    };
	    static equals = (a, b) => {
	        return Vector3.equals(a.position, b.position) && a.radius === b.radius;
	    };
	    static intersectsSphere = (a, b) => {
	        r = a.radius + b.radius;
	        return Vector3.distanceToSquared(a.position, b.position) <= r * r;
	    };
	    position;
	    radius;
	    constructor(position = new Vector3(), radius = 1) {
	        this.position = position;
	        this.radius = radius;
	    }
	}

	const ab = new Vector3();
	const bc = new Vector3();
	class Triangle3 {
	    static area = (t) => {
	        const c = Triangle3.getABLength(t);
	        const a = Triangle3.getBCLength(t);
	        const b = Triangle3.getCALength(t);
	        const p = (c + a + b) / 2;
	        return Math.sqrt(p * (p - a) * (p - b) * (p - c));
	    };
	    static create = (a = new Vector3(-1, -1, 0), b = new Vector3(1, -1, 0), c = new Vector3(0, 1, 0)) => {
	        return { a, b, c };
	    };
	    static getABLength = (t) => {
	        return Vector3.distanceTo(t.a, t.b);
	    };
	    static getBCLength = (t) => {
	        return Vector3.distanceTo(t.b, t.c);
	    };
	    static getCALength = (t) => {
	        return Vector3.distanceTo(t.c, t.a);
	    };
	    static normal = (t, out = Vector3.create()) => {
	        Vector3.minus(t.c, t.b, bc);
	        Vector3.minus(t.b, t.a, ab);
	        Vector3.cross(ab, bc, out);
	        return Vector3.normalize(out);
	    };
	    static toFloat32Array = (t, out = new Float32Array(9)) => {
	        out.set(t.a, 0);
	        out.set(t.b, 3);
	        out.set(t.c, 6);
	        return out;
	    };
	    a;
	    b;
	    c;
	    constructor(a = new Vector3(-1, -1, 0), b = new Vector3(1, -1, 0), c = new Vector3(0, 1, 0)) {
	        this.a = a;
	        this.b = b;
	        this.c = c;
	    }
	}

	let dis, r2, d2;
	const v = new Vector3();
	class Ray3 {
	    static at = (a, b, out = new Vector3()) => {
	        return Vector3.multiplyScalar(a.direction, b, out);
	    };
	    static distanceToPoint = (a, point) => {
	        return Math.sqrt(Ray3.distanceSqToPoint(a, point));
	    };
	    static distanceSqToPoint = (a, point) => {
	        Vector3.minus(point, a.position, v);
	        dis = Vector3.dot(v, a.direction);
	        if (dis < 0) {
	            return Vector3.distanceToSquared(a.position, point);
	        }
	        Vector3.multiplyScalar(a.direction, dis, v);
	        Vector3.add(v, a.position, v);
	        return Vector3.distanceToSquared(v, point);
	    };
	    static lookAt = (a, b, out = new Ray3()) => {
	        if (a !== out) {
	            Vector3.fromArray(a.position, 0, out.position);
	        }
	        Vector3.normalize(Vector3.minus(b, a.position, out.direction));
	        return out;
	    };
	    static intersectSphere = (ray, sphere, target) => {
	        Vector3.minus(sphere.position, ray.position, v);
	        dis = Vector3.dot(v, ray.direction);
	        d2 = Vector3.dot(v, v) - dis * dis;
	        r2 = sphere.radius * sphere.radius;
	        if (d2 > r2)
	            return null;
	        const thc = Math.sqrt(r2 - d2);
	        const t0 = dis - thc;
	        const t1 = dis + thc;
	        if (t0 < 0 && t1 < 0)
	            return null;
	        if (t0 < 0)
	            return Ray3.at(ray, t1, target);
	        return Ray3.at(ray, t0, target);
	    };
	    static intersectsSphere = (ray, sphere) => {
	        return Ray3.distanceSqToPoint(ray, sphere.position) <= sphere.radius * sphere.radius;
	    };
	    position;
	    direction;
	    constructor(position = new Vector3(), direction = new Vector3(0, 0, -1)) {
	        this.position = position;
	        this.direction = Vector3.normalize(direction);
	    }
	}

	// import clampCommon from "../common/clamp";
	let ax, ay, az, aw, bx, by, bz, len;
	let ix, iy, iz, iw;
	let A, B, C, D, E, F, G, H, I, J;
	class Vector4 extends Float32Array {
	    static VECTOR3_ZERO = new Vector4(0, 0, 0, 0);
	    static VECTOR3_ONE = new Vector4(1, 1, 1, 1);
	    static add = (a, b, out = new Vector4()) => {
	        out[0] = a[0] + b[0];
	        out[1] = a[1] + b[1];
	        out[2] = a[2] + b[2];
	        out[3] = a[3] + b[3];
	        return out;
	    };
	    static ceil = (a, out = new Vector4()) => {
	        out[0] = Math.ceil(a[0]);
	        out[1] = Math.ceil(a[1]);
	        out[2] = Math.ceil(a[2]);
	        out[3] = Math.ceil(a[3]);
	        return out;
	    };
	    static closeTo = (a, b) => {
	        return (closeToCommon(a[0], b[0]) &&
	            closeToCommon(a[1], b[1]) &&
	            closeToCommon(a[2], b[2]) &&
	            closeToCommon(a[3], b[3]));
	    };
	    static create = (x = 0, y = 0, z = 0, w = 0, out = new Vector4()) => {
	        out[0] = x;
	        out[1] = y;
	        out[2] = z;
	        out[3] = w;
	        return out;
	    };
	    static cross = (u, v, w, out = new Vector4(4)) => {
	        A = v[0] * w[1] - v[1] * w[0];
	        B = v[0] * w[2] - v[2] * w[0];
	        C = v[0] * w[3] - v[3] * w[0];
	        D = v[1] * w[2] - v[2] * w[1];
	        E = v[1] * w[3] - v[3] * w[1];
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
	    static distanceTo = (a, b) => {
	        ax = b[0] - a[0];
	        ay = b[1] - a[1];
	        az = b[2] - a[2];
	        aw = b[3] - a[3];
	        return Math.hypot(ax, ay, az, aw);
	    };
	    static distanceToSquared = (a, b) => {
	        ax = b[0] - a[0];
	        ay = b[1] - a[1];
	        az = b[2] - a[2];
	        aw = b[3] - a[3];
	        return ax * ax + ay * ay + az * az + aw * aw;
	    };
	    static divide = (a, b, out = new Vector4()) => {
	        out[0] = a[0] / b[0];
	        out[1] = a[1] / b[1];
	        out[2] = a[2] / b[2];
	        out[3] = a[3] / b[3];
	        return out;
	    };
	    static dot = (a, b) => {
	        return a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3];
	    };
	    static equals = (a, b) => {
	        return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3];
	    };
	    static floor = (a, out = new Vector4()) => {
	        out[0] = Math.floor(a[0]);
	        out[1] = Math.floor(a[1]);
	        out[2] = Math.floor(a[2]);
	        out[3] = Math.floor(a[3]);
	        return out;
	    };
	    static fromValues = (x, y, z, w, out = new Vector4()) => {
	        out[0] = x;
	        out[1] = y;
	        out[2] = z;
	        out[3] = w;
	        return out;
	    };
	    static inverse = (a, out = new Vector4()) => {
	        out[0] = 1.0 / a[0];
	        out[1] = 1.0 / a[1];
	        out[2] = 1.0 / a[2];
	        out[3] = 1.0 / a[3];
	        return out;
	    };
	    static norm = (a) => {
	        return Math.hypot(a[0], a[1], a[2], a[3]);
	    };
	    static lengthSquared = (a) => {
	        ax = a[0];
	        ay = a[1];
	        az = a[2];
	        aw = a[3];
	        return ax * ax + ay * ay + az * az + aw * aw;
	    };
	    static lerp = (a, b, t, out = new Vector4()) => {
	        ax = a[0];
	        ay = a[1];
	        az = a[2];
	        aw = a[3];
	        out[0] = ax + t * (b[0] - ax);
	        out[1] = ay + t * (b[1] - ay);
	        out[2] = az + t * (b[2] - az);
	        out[3] = aw + t * (b[3] - aw);
	        return out;
	    };
	    static max = (a, b, out = new Vector4()) => {
	        out[0] = Math.max(a[0], b[0]);
	        out[1] = Math.max(a[1], b[1]);
	        out[2] = Math.max(a[2], b[2]);
	        out[3] = Math.max(a[3], b[3]);
	        return out;
	    };
	    static min = (a, b, out = new Vector4()) => {
	        out[0] = Math.min(a[0], b[0]);
	        out[1] = Math.min(a[1], b[1]);
	        out[2] = Math.min(a[2], b[2]);
	        out[3] = Math.min(a[3], b[3]);
	        return out;
	    };
	    static minus = (a, b, out = new Vector4()) => {
	        out[0] = a[0] - b[0];
	        out[1] = a[1] - b[1];
	        out[2] = a[2] - b[2];
	        out[3] = a[3] - b[3];
	        return out;
	    };
	    static multiply = (a, b, out = new Vector4()) => {
	        out[0] = a[0] * b[0];
	        out[1] = a[1] * b[1];
	        out[2] = a[2] * b[2];
	        out[3] = a[3] * b[3];
	        return out;
	    };
	    static multiplyScalar = (a, b, out = new Vector4()) => {
	        out[0] = a[0] * b;
	        out[1] = a[1] * b;
	        out[2] = a[2] * b;
	        out[3] = a[3] * b;
	        return out;
	    };
	    static negate = (a, out = new Vector4()) => {
	        out[0] = -a[0];
	        out[1] = -a[1];
	        out[2] = -a[2];
	        out[3] = -a[3];
	        return out;
	    };
	    static normalize = (a, out = new Vector4()) => {
	        ax = a[0];
	        ay = a[1];
	        az = a[2];
	        aw = a[3];
	        len = ax * ax + ay * ay + az * az + aw * aw;
	        if (len > 0) {
	            len = 1 / Math.sqrt(len);
	        }
	        out[0] = ax * len;
	        out[1] = ay * len;
	        out[2] = az * len;
	        out[3] = aw * len;
	        return out;
	    };
	    static round = (a, out = new Vector4()) => {
	        out[0] = Math.round(a[0]);
	        out[1] = Math.round(a[1]);
	        out[2] = Math.round(a[2]);
	        out[3] = Math.round(a[3]);
	        return out;
	    };
	    static set = (x = 0, y = 0, z = 0, w = 0, out = new Vector4()) => {
	        out[0] = x;
	        out[1] = y;
	        out[2] = z;
	        out[4] = w;
	        return out;
	    };
	    static setNorm = (a, length, out = new Vector4(2)) => {
	        Vector4.normalize(a, out);
	        Vector4.multiplyScalar(out, length, out);
	        return out;
	    };
	    static toString = (a) => {
	        return `(${a[0]}, ${a[1]}, ${a[2]}, ${a[3]})`;
	    };
	    static transformMatrix4 = (a, m, out = new Vector4()) => {
	        ax = a[0];
	        ay = a[1];
	        az = a[2];
	        aw = a[3];
	        out[0] = m[0] * ax + m[4] * ay + m[8] * az + m[12] * aw;
	        out[1] = m[1] * ax + m[5] * ay + m[9] * az + m[13] * aw;
	        out[2] = m[2] * ax + m[6] * ay + m[10] * az + m[14] * aw;
	        out[3] = m[3] * ax + m[7] * ay + m[11] * az + m[15] * aw;
	        return out;
	    };
	    static transformQuat = (a, q, out = new Vector4()) => {
	        bx = a[0];
	        by = a[1];
	        bz = a[2];
	        ax = q[0];
	        ay = q[1];
	        az = q[2];
	        aw = q[3];
	        ix = aw * bx + ay * bz - az * by;
	        iy = aw * by + az * bx - ax * bz;
	        iz = aw * bz + ax * by - ay * bx;
	        iw = -ax * bx - ay * by - az * bz;
	        out[0] = ix * aw + iw * -ax + iy * -az - iz * -ay;
	        out[1] = iy * aw + iw * -ay + iz * -ax - ix * -az;
	        out[2] = iz * aw + iw * -az + ix * -ay - iy * -ax;
	        out[3] = a[3];
	        return out;
	    };
	    length;
	    dataType = ArraybufferDataType.VECTOR4;
	    constructor(x = 0, y = 0, z = 0, w = 0) {
	        super(4);
	        this[0] = x;
	        this[1] = y;
	        this[2] = z;
	        this[3] = w;
	    }
	    get x() {
	        return this[0];
	    }
	    set x(value) {
	        this[0] = value;
	    }
	    get y() {
	        return this[1];
	    }
	    set y(value) {
	        this[1] = value;
	    }
	    get z() {
	        return this[2];
	    }
	    set z(value) {
	        this[2] = value;
	    }
	    get w() {
	        return this[3];
	    }
	    set w(value) {
	        this[3] = value;
	    }
	}

	exports.ArraybufferDataType = ArraybufferDataType;
	exports.COLOR_HEX_MAP = COLOR_HEX_MAP;
	exports.ColorGPU = ColorGPU;
	exports.ColorRGB = ColorRGB;
	exports.ColorRGBA = ColorRGBA;
	exports.Constants = constants;
	exports.Cube = Cube;
	exports.Easing = index;
	exports.EulerAngle = EulerAngle;
	exports.Matrix2 = Matrix2;
	exports.Matrix3 = Matrix3;
	exports.Matrix4 = Matrix4;
	exports.Polar = Polar;
	exports.Quaternion = Quaternion;
	exports.Ray3 = Ray3;
	exports.Rectangle2 = Rectangle2;
	exports.Sphere = Sphere;
	exports.Triangle3 = Triangle3;
	exports.Vector2 = Vector2;
	exports.Vector3 = Vector3;
	exports.Vector4 = Vector4;
	exports.ceilPowerOfTwo = ceilPowerOfTwo;
	exports.clamp = clampCommon;
	exports.clampCircle = clampCircle;
	exports.clampSafe = clampSafeCommon;
	exports.closeTo = closeToCommon;
	exports.floorPowerOfTwo = floorPowerOfTwo;
	exports.floorToZero = floorToZeroCommon;
	exports.isPowerOfTwo = isPowerOfTwo;
	exports.lerp = lerp;
	exports.mapRange = mapRange;
	exports.randFloat = randFloat;
	exports.randInt = randInt;
	exports.rndFloat = rndFloat;
	exports.rndFloatRange = rndFloatRange;
	exports.rndInt = rndInt;
	exports.sum = sum;
	exports.sumArray = sumArray;

}));
//# sourceMappingURL=Mathx.js.map
