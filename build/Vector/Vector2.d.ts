import type { IPolar } from "../polar";
import type { Matrix3Like } from "../matrix/Matrix3";
export interface IVector2Json {
    x: number;
    y: number;
}
export interface IVector2 extends Float32Array, IVector2Json {
}
export type Vector2Like = IVector2 | Vector2 | number[] | Float32Array;
export declare class Vector2 extends Float32Array implements IVector2 {
    static readonly VECTOR2_ZERO: Vector2;
    static readonly VECTOR2_TOP: Vector2;
    static readonly VECTOR2_BOTTOM: Vector2;
    static readonly VECTOR2_LEFT: Vector2;
    static readonly VECTOR2_RIGHT: Vector2;
    static readonly VECTOR2_ONE: Vector2;
    static add: <T extends Vector2Like = Vector2>(a: Vector2Like, b: Vector2Like, out?: T) => T;
    static addScalar: <T extends Vector2Like = Vector2>(a: Vector2Like, b: number, out?: T) => T;
    static angle: (a: Vector2Like) => number;
    static area: (a: Vector2Like) => number;
    static ceil: <T extends Vector2Like = Vector2>(a: Vector2Like, out?: T) => T;
    static clamp: <T extends Vector2Like = Vector2>(a: Vector2Like, min: Vector2Like, max: Vector2Like, out?: T) => T;
    static clampSafe: <T extends Vector2Like = Vector2>(a: Vector2Like, min: Vector2Like, max: Vector2Like, out?: T) => T;
    static clampLength: <T extends Vector2Like = Vector2>(a: Vector2Like, min: Vector2Like, max: Vector2Like, out?: T) => T;
    static clampScalar: <T extends Vector2Like = Vector2>(a: Vector2Like, min: number, max: number, out?: T) => T;
    static closeTo: (a: Vector2Like, b: Vector2Like, epsilon?: number) => boolean;
    static closeToRect: (a: Vector2Like, b: Vector2Like, epsilon?: number) => boolean;
    static closeToManhattan: (a: Vector2Like, b: Vector2Like, epsilon?: number) => boolean;
    static clone: <T extends Vector2Like = Vector2>(a: Vector2Like, out?: T) => T;
    static cross: (a: Vector2Like, b: Vector2Like) => number;
    static create: (x?: number, y?: number) => Vector2;
    static distanceTo: (a: Vector2Like, b: Vector2Like) => number;
    static distanceToManhattan: (a: Vector2Like, b: Vector2Like) => number;
    static distanceToSquared: (a: Vector2Like, b: Vector2Like) => number;
    static divide: <T extends Vector2Like = Vector2>(a: Vector2Like, b: Vector2Like, out?: T) => T;
    static divideScalar: <T extends Vector2Like = Vector2>(a: Vector2Like, scalar: number, out?: T) => T;
    static dot: (a: Vector2Like, b: Vector2Like) => number;
    static equals: (a: Vector2Like, b: Vector2Like) => boolean;
    static floor: <T extends Vector2Like = Vector2>(a: Vector2Like, out?: T) => T;
    static floorToZero: <T extends Vector2Like = Vector2>(a: Vector2Like, out?: T) => T;
    static fromArray: <T extends Vector2Like = Vector2>(arr: Vector2Like, index?: number, out?: T) => T;
    static fromJson: <T extends Vector2Like = Vector2>(j: IVector2Json, out?: T) => T;
    static fromPolar: <T extends Vector2Like = Vector2>(p: IPolar, out?: T) => T;
    static fromScalar: <T extends Vector2Like = Vector2>(value?: number, out?: T) => T;
    static fromValues: <T extends Vector2Like = Vector2>(x: number, y: number, out?: T) => T;
    static inverse: <T extends Vector2Like = Vector2>(a: Vector2Like, out?: T) => T;
    static norm: (a: Vector2Like) => number;
    static lengthManhattan: (a: Vector2Like) => number;
    static lengthSquared: (a: Vector2Like) => number;
    static lerp: <T extends Vector2Like = Vector2>(a: Vector2Like, b: Vector2Like, alpha: number, out?: T) => T;
    static max: <T extends Vector2Like = Vector2>(a: Vector2Like, b: Vector2Like, out?: T) => T;
    static min: <T extends Vector2Like = Vector2>(a: Vector2Like, b: Vector2Like, out?: T) => T;
    static minus: <T extends Vector2Like = Vector2>(a: Vector2Like, b: Vector2Like, out?: T) => T;
    static minusScalar: <T extends Vector2Like = Vector2>(a: Vector2Like, num: number, out?: T) => T;
    static multiply: <T extends Vector2Like = Vector2>(a: Vector2Like, b: Vector2Like, out?: T) => T;
    static multiplyScalar: <T extends Vector2Like = Vector2>(a: Vector2Like, scalar: number, out?: T) => T;
    static negate: <T extends Vector2Like = Vector2>(a: Vector2Like, out?: T) => T;
    static normalize: <T extends Vector2Like = Vector2>(a: Vector2Like, out?: T) => T;
    static random: <T extends Vector2Like = Vector2>(norm?: number, out?: T) => T;
    static reflect: <T extends Vector2Like = Vector2>(origin: Vector2Like, normal: Vector2Like, out?: T) => T;
    static rotate: <T extends Vector2Like = Vector2>(a: Vector2Like, angle: number, center?: Vector2Like, out?: T) => T;
    static round: <T extends Vector2Like = Vector2>(a: Vector2Like, out?: T) => T;
    static setNorm: <T extends Vector2Like = Vector2>(a: Vector2Like, norm: number, out?: T) => T;
    static toArray: (a: Vector2Like, arr?: number[]) => number[];
    static toPalorJson: (a: Vector2Like, p?: {
        a: number;
        r: number;
    }) => IPolar;
    static toString: (a: Vector2Like) => string;
    static transformDirection: <T extends Vector2Like = Vector2>(a: Vector2Like, m: Matrix3Like, out?: T) => T;
    static transformMatrix3: <T extends Vector2Like = Vector2>(a: Vector2Like, m: Float32Array | number[], out?: T) => T;
    readonly dataType: string;
    constructor(x?: number, y?: number);
    get x(): number;
    set x(value: number);
    get y(): number;
    set y(value: number);
}
