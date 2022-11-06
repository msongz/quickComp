function makeRandomID(length) {
    let result           = '';
    let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;
    
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(generateRandomNumber() * charactersLength));
    }
    return result;
}

function compactDateNow() {
    let now = new Date().toString().split(' ');
    now.pop();
    now = now.join('').replace(/:/g,"");
    return now;
}

function isAltKey() {
    return ScriptUI.environment.keyboardState.altKey ? true : false;
}

export { makeRandomID , compactDateNow, isAltKey };