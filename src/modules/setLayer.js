import values from 'just-values';

function setProxyWithPlaceholder(projItem, placeHolderInfoObj) {
    projItem.setProxyWithPlaceholder(...values(placeHolderInfoObj));
}

export { setProxyWithPlaceholder };