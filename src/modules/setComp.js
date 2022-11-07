function setCompLabel(comp, labelIndex) {
    comp.label = isNaN(labelIndex) || (labelIndex < 0 || labelIndex > 16) ? comp.label : labelIndex;
}

export { setCompLabel };