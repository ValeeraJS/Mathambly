import { IVector2 } from "../vector/Vector2";
export default class Matrix3 extends Float32Array {
    static readonly UNIT_MATRIX3: Matrix3;
    static cofactor00: (a: Float32Array | number[] | Matrix3) => number;
    static cofactor01: (a: Float32Array | number[] | Matrix3) => number;
    static cofactor02: (a: Float32Array | number[] | Matrix3) => number;
    static cofactor10: (a: Float32Array | number[] | Matrix3) => number;
    static cofactor11: (a: Float32Array | number[] | Matrix3) => number;
    static cofactor12: (a: Float32Array | number[] | Matrix3) => number;
    static cofactor20: (a: Float32Array | number[] | Matrix3) => number;
    static cofactor21: (a: Float32Array | number[] | Matrix3) => number;
    static cofactor22: (a: Float32Array | number[] | Matrix3) => number;
    static create: () => Matrix3;
    static determinant: (a: Float32Array | number[] | Matrix3) => number;
    static fromMatrix4: (mat4: Float32Array | number[], out?: Matrix3) => Matrix3;
    static fromRotation: (rad: number, out?: Matrix3) => Matrix3;
    static fromScaling: (v: Float32Array | IVector2 | number[], out?: Matrix3) => Matrix3;
    static fromTranslation: (v: Float32Array | IVector2 | number[], out?: Matrix3) => Matrix3;
    static identity: (out?: Matrix3) => Matrix3;
    static invert: (a: Float32Array | number[] | Matrix3, out?: Matrix3) => Matrix3 | null;
    static multiply: () => (a: Float32Array | number[] | Matrix3, b: Float32Array | number[] | Matrix3, out?: Matrix3) => Matrix3;
    static rotate: (a: Float32Array | number[] | Matrix3, rad: number, out?: Matrix3) => Matrix3;
    static scale: (a: Float32Array | number[] | Matrix3, v: Float32Array | number[] | IVector2, out?: Matrix3) => Matrix3;
    static translate: (a: Float32Array | number[] | Matrix3, v: Float32Array | number[] | IVector2, out?: Matrix3) => Matrix3;
    static transpose: (a: Float32Array | number[] | Matrix3, out?: Matrix3) => Matrix3;
    constructor(data?: Float32Array | number[] | Matrix3);
}
