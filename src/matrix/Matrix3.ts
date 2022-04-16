import { IVector2 } from "../vector/Vector2";

let a00 = 0,
	a01 = 0,
	a02 = 0,
	a11 = 0,
	a10 = 0,
	a12 = 0,
	a20 = 0,
	a21 = 0,
	a22 = 0;
let b00 = 0,
	b01 = 0,
	b02 = 0,
	b11 = 0,
	b10 = 0,
	b12 = 0,
	b20 = 0,
	b21 = 0,
	b22 = 0;
let x = 0,
	y = 0;

const UNIT_MATRIX3_DATA = [1, 0, 0, 0, 1, 0, 0, 0, 1];

export default class Matrix3 extends Float32Array {
	public static readonly UNIT_MATRIX3 = new Matrix3(UNIT_MATRIX3_DATA);

	public static clone = (source: Matrix3 | Float32Array | number[]): Matrix3 => {
		return new Matrix3(source);
	};

	public static cofactor00 = (a: Float32Array | number[] | Matrix3): number => {
		return a[4] * a[8] - a[5] * a[7];
	};

	public static cofactor01 = (a: Float32Array | number[] | Matrix3): number => {
		return a[1] * a[8] - a[7] * a[2];
	};

	public static cofactor02 = (a: Float32Array | number[] | Matrix3): number => {
		return a[1] * a[5] - a[4] * a[2];
	};

	public static cofactor10 = (a: Float32Array | number[] | Matrix3): number => {
		return a[3] * a[8] - a[6] * a[5];
	};

	public static cofactor11 = (a: Float32Array | number[] | Matrix3): number => {
		return a[0] * a[8] - a[6] * a[2];
	};

	public static cofactor12 = (a: Float32Array | number[] | Matrix3): number => {
		return a[0] * a[5] - a[3] * a[2];
	};

	public static cofactor20 = (a: Float32Array | number[] | Matrix3): number => {
		return a[3] * a[7] - a[6] * a[4];
	};

	public static cofactor21 = (a: Float32Array | number[] | Matrix3): number => {
		return a[0] * a[7] - a[6] * a[1];
	};

	public static cofactor22 = (a: Float32Array | number[] | Matrix3): number => {
		return a[0] * a[4] - a[3] * a[1];
	};

	public static create = (): Matrix3 => {
		return new Matrix3(UNIT_MATRIX3_DATA);
	};

	public static determinant = (a: Float32Array | number[] | Matrix3): number => {
		a00 = a[0];
		a01 = a[1];
		a02 = a[2];
		a10 = a[3];
		a11 = a[4];
		a12 = a[5];
		a20 = a[6];
		a21 = a[7];
		a22 = a[8];

		return (
			a00 * (a22 * a11 - a12 * a21) +
			a01 * (-a22 * a10 + a12 * a20) +
			a02 * (a21 * a10 - a11 * a20)
		);
	};

	public static fromArray = (
		source: Matrix3 | Float32Array | number[],
		out: Matrix3 = new Matrix3()
	): Matrix3 => {
		out.set(source);

		return out;
	};

	public static fromMatrix4 = (
		mat4: Float32Array | number[],
		out: Matrix3 = new Matrix3()
	): Matrix3 => {
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

	public static fromRotation = (rad: number, out: Matrix3 = new Matrix3()): Matrix3 => {
		y = Math.sin(rad);
		x = Math.cos(rad);

		out[0] = x;
		out[1] = y;
		out[2] = 0;

		out[3] = -y;
		out[4] = x;
		out[5] = 0;

		out[6] = 0;
		out[7] = 0;
		out[8] = 1;

		return out;
	};

	public static fromScaling = (
		v: Float32Array | IVector2 | number[],
		out: Matrix3 = new Matrix3()
	): Matrix3 => {
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

	public static fromTranslation = (
		v: Float32Array | IVector2 | number[],
		out: Matrix3 = new Matrix3()
	): Matrix3 => {
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

	public static identity = (out: Matrix3 = new Matrix3()): Matrix3 => {
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

	public static invert = (
		a: Float32Array | number[] | Matrix3,
		out: Matrix3 = new Matrix3()
	): Matrix3 | null => {
		a00 = a[0];
		a01 = a[1];
		a02 = a[2];
		a10 = a[3];
		a11 = a[4];
		a12 = a[5];
		a20 = a[6];
		a21 = a[7];
		a22 = a[8];

		b01 = a22 * a11 - a12 * a21;
		b11 = -a22 * a10 + a12 * a20;
		b21 = a21 * a10 - a11 * a20;

		let det = a00 * b01 + a01 * b11 + a02 * b21;

		if (!det) {
			return null;
		}

		det = 1.0 / det;

		out[0] = b01 * det;
		out[1] = (-a22 * a01 + a02 * a21) * det;
		out[2] = (a12 * a01 - a02 * a11) * det;
		out[3] = b11 * det;
		out[4] = (a22 * a00 - a02 * a20) * det;
		out[5] = (-a12 * a00 + a02 * a10) * det;
		out[6] = b21 * det;
		out[7] = (-a21 * a00 + a01 * a20) * det;
		out[8] = (a11 * a00 - a01 * a10) * det;

		return out;
	};

	public static multiply = () => (
		a: Float32Array | number[] | Matrix3,
		b: Float32Array | number[] | Matrix3,
		out: Matrix3 = new Matrix3()
	): Matrix3 => {
		a00 = a[0];
		a01 = a[1];
		a02 = a[2];
		a10 = a[3];
		a11 = a[4];
		a12 = a[5];
		a20 = a[6];
		a21 = a[7];
		a22 = a[8];

		b00 = b[0];
		b01 = b[1];
		b02 = b[2];
		b10 = b[3];
		b11 = b[4];
		b12 = b[5];
		b20 = b[6];
		b21 = b[7];
		b22 = b[8];

		out[0] = b00 * a00 + b01 * a10 + b02 * a20;
		out[1] = b00 * a01 + b01 * a11 + b02 * a21;
		out[2] = b00 * a02 + b01 * a12 + b02 * a22;

		out[3] = b10 * a00 + b11 * a10 + b12 * a20;
		out[4] = b10 * a01 + b11 * a11 + b12 * a21;
		out[5] = b10 * a02 + b11 * a12 + b12 * a22;

		out[6] = b20 * a00 + b21 * a10 + b22 * a20;
		out[7] = b20 * a01 + b21 * a11 + b22 * a21;
		out[8] = b20 * a02 + b21 * a12 + b22 * a22;

		return out;
	};

	public static rotate = (
		a: Float32Array | number[] | Matrix3,
		rad: number,
		out: Matrix3 = new Matrix3()
	): Matrix3 => {
		a00 = a[0];
		a01 = a[1];
		a02 = a[2];
		a10 = a[3];
		a11 = a[4];
		a12 = a[5];
		a20 = a[6];
		a21 = a[7];
		a22 = a[8];
		y = Math.sin(rad);
		x = Math.cos(rad);

		out[0] = x * a00 + y * a10;
		out[1] = x * a01 + y * a11;
		out[2] = x * a02 + y * a12;

		out[3] = y * a10 - x * a00;
		out[4] = y * a11 - x * a01;
		out[5] = y * a12 - x * a02;

		out[6] = a20;
		out[7] = a21;
		out[8] = a22;

		return out;
	};

	public static scale = (
		a: Float32Array | number[] | Matrix3,
		v: Float32Array | number[] | IVector2,
		out: Matrix3 = new Matrix3()
	): Matrix3 => {
		x = v[0];
		y = v[1];

		out[0] = x * a[0];
		out[1] = x * a[1];
		out[2] = x * a[2];

		out[3] = y * a[3];
		out[4] = y * a[4];
		out[5] = y * a[5];

		out[6] = a[6];
		out[7] = a[7];
		out[8] = a[8];

		return out;
	};

	public static translate = (
		a: Float32Array | number[] | Matrix3,
		v: Float32Array | number[] | IVector2,
		out: Matrix3 = new Matrix3()
	): Matrix3 => {
		a00 = a[0];
		a01 = a[1];
		a02 = a[2];
		a10 = a[3];
		a11 = a[4];
		a12 = a[5];
		a20 = a[6];
		a21 = a[7];
		a22 = a[8];
		x = v[0];
		y = v[1];

		out[0] = a00;
		out[1] = a01;
		out[2] = a02;

		out[3] = a10;
		out[4] = a11;
		out[5] = a12;

		out[6] = x * a00 + y * a10 + a20;
		out[7] = x * a01 + y * a11 + a21;
		out[8] = x * a02 + y * a12 + a22;

		return out;
	};

	public static transpose = (
		a: Float32Array | number[] | Matrix3,
		out: Matrix3 = new Matrix3()
	): Matrix3 => {
		if (out === a) {
			a01 = a[1];
			a02 = a[2];
			a12 = a[5];
			out[1] = a[3];
			out[2] = a[6];
			out[3] = a01;
			out[5] = a[7];
			out[6] = a02;
			out[7] = a12;
		} else {
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

	public constructor(data: Float32Array | number[] | Matrix3 = UNIT_MATRIX3_DATA) {
		super(data);
	}
}
