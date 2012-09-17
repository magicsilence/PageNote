var keyPrefix = '__pagenote__';

function test() {
    console.log('utils::test function');
}


function saveOptions() {
    console.log('utils::saveOptions');
}

function goFeedback() {
    console.log('utils::goFeedback');
}

function goAbout() {
    console.log('utils::goAbout');
}


function getKey(key) {
    return localStorage[keyPrefix + key];
}

function setKey(key, value) {
    localStorage[keyPrefix + key] = value;
}


