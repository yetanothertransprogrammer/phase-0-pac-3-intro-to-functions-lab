function shout(string) {
    return string.toUpperCase();
}

function whisper(string){
    return string.toLowerCase();
}

function logShout(string){
    const spy = string.toUpperCase();
    console.log(spy);
}

function logWhisper(string){
    const spy = string.toLowerCase();
    console.log(spy);
}

function sayHiToHeadphonedRoommate(string){
    let response;
    let isStringLowerCase = string === string.toLowerCase();
    let isStringUpperCase = string === string.toUpperCase();
    if (isStringLowerCase){
        response = `I can\'t hear you!`;
    } else if (isStringUpperCase){
        response = `YES INDEED!`;
    } else if (string == 'Let\'s have dinner together!'){
        response = 'I would love to!';
    }
    return response
}