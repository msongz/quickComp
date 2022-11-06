
import values from 'just-values';

function addSolid(compObj,solidObj) {
    let solidLayer = compObj.layers.addSolid(...values(solidObj));
    return solidLayer;
}

function addNull(compObj,duration) {
    let nullLayer = compObj.layers.addNull(duration);
    return nullLayer;
}

export { addSolid, addNull };