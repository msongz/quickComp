import values from 'just-values';
export default function quickComp(compInfoObj) {
    compInfoObj = typeof compInfoObj == 'object'  && values(compInfoObj).length >= 6 ? compInfoObj : {'name': 'compInfoError', 'width': 1920, 'height': 1080, 'pixelAspect': 1, 'duration': 10, 'frameRate': 30};
    let comp = app.project.items.addComp(...values(compInfoObj))

    return comp;
}
