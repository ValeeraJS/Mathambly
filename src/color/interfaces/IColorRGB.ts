import { IPairs3Uint8 } from "../../common/interfaces/IPairs3";

export type IColorRGBData = IPairs3Uint8;

export interface IColorRGBJson {
	r: number;
	g: number;
	b: number;
}

export default interface IColorRGB extends IColorRGBData, IColorRGBJson {}
