import quickComp from './modules/quickComp.js';
import { addSolid } from './modules/quickLayerAdd.js';
import { compInfoObj, solidInfoObj, placeHolderInfoObj} from './modules/infoObj.js';
import { setProxyWithPlaceholder } from './modules/setLayer.js';
import { compactDateNow, makeRandomID } from './modules/songzUtils.js';

placeHolderInfoObj.name += `${placeHolderInfoObj.width}x${placeHolderInfoObj.height}x${placeHolderInfoObj.frameRate}fps`;
compInfoObj.name += `_${compactDateNow()}_${makeRandomID(4)}`;

app.beginUndoGroup(`${PRODUCT_DISPLAY_NAME}`);

let comp = quickComp(compInfoObj);
let solid = addSolid(comp, solidInfoObj);
setProxyWithPlaceholder(solid.source, placeHolderInfoObj);

comp.openInViewer();
app.endUndoGroup();