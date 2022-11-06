import { isAltKey } from "./songzUtils";

const globalWidth       = 1920;
const globalHeight      = 1080;
const globalPixelAspect = 1;
const globalFPS         = isAltKey() ? 25 : 60;
const globalDuration    = 10;
const globalName        = `${PRODUCT_DISPLAY_NAME}`;

let compInfoObj = {
	name       : globalName,
	width      : globalWidth,
	height     : globalHeight,
	pixelAspect: globalPixelAspect,
	duration   : globalDuration,
	frameRate  : globalFPS
};

let solidInfoObj = {
	color      : [0.5, 0.5, 0.5],
	name       : globalName,
	width      : globalWidth,
	height     : globalHeight,
	pixelAspect: globalPixelAspect,
	duration   : globalDuration
};

let placeHolderInfoObj = {
	name     : globalName,
	width    : globalWidth,
	height   : globalHeight,
	duration : globalDuration,
	frameRate: globalFPS
};

let nullInfoObj = {
	duration: globalDuration
};

export { compInfoObj, solidInfoObj, nullInfoObj, placeHolderInfoObj };
