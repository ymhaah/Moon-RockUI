// remove Math.floor() for num like this => 1.2
function randomNum(min, max) {
    let rand = Math.floor(Math.random() * (max - min + 1)) + min;
    return rand;
}

export default randomNum;
