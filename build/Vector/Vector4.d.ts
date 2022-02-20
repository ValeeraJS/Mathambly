export declare const add: (a: Float32Array, b: Float32Array, out?: Float32Array) => Float32Array;
export declare const ceil: (a: Float32Array, out?: Float32Array) => Float32Array;
export declare const closeTo: (a: Float32Array, b: Float32Array) => boolean;
export declare const create: (x?: number, y?: number, z?: number, w?: number, out?: Float32Array) => Float32Array;
export declare const cross: (u: Float32Array, v: Float32Array, w: Float32Array, out?: Float32Array) => Float32Array;
export declare const distanceTo: (a: Float32Array, b: Float32Array) => number;
export declare const distanceToSquared: (a: Float32Array, b: Float32Array) => number;
export declare const divide: (a: Float32Array, b: Float32Array, out?: Float32Array) => Float32Array;
export declare const dot: (a: Float32Array, b: Float32Array) => number;
export declare const equals: (a: Float32Array, b: Float32Array) => boolean;
export declare function floor(a: Float32Array, out: Float32Array): Float32Array;
export declare const from: (a: Float32Array, out?: Float32Array) => Float32Array;
export declare const fromValues: (x: number, y: number, z: number, w: number, out?: Float32Array) => Float32Array;
export declare const inverse: (a: Float32Array, out?: Float32Array) => Float32Array;
export declare const length: (a: Float32Array) => number;
export declare const lengthSquared: (a: Float32Array) => number;
export declare const lerp: (a: Float32Array, b: Float32Array, t: number, out?: Float32Array) => Float32Array;
export declare const max: (a: Float32Array, b: Float32Array, out?: Float32Array) => Float32Array;
export declare const min: (a: Float32Array, b: Float32Array, out?: Float32Array) => Float32Array;
export declare const minus: (a: Float32Array, b: Float32Array, out?: Float32Array) => Float32Array;
export declare const multiply: (a: Float32Array, b: Float32Array, out?: Float32Array) => Float32Array;
export declare const multiplyScalar: (a: Float32Array, b: number, out?: Float32Array) => Float32Array;
export declare const negate: (a: Float32Array, out?: Float32Array) => Float32Array;
export declare const normalize: (a: Float32Array, out?: Float32Array) => Float32Array;
export declare const round: (a: Float32Array, out?: Float32Array) => Float32Array;
export declare const toString: (a: Float32Array) => string;
export declare const transformMatrix4: (a: Float32Array, m: Float32Array, out?: Float32Array) => Float32Array;
export declare const transformQuat: (a: Float32Array, q: Float32Array, out?: Float32Array) => Float32Array;
