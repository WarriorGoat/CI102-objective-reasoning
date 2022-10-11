// ┌─────────────────┐
// │ Your code here! │	
// └─────────────────┘
function isAdmin(user){
    if (user.userRole === "ADMIN") {
        return true;
    } else { return false;}
}


function getEmail (user) {
    let email = `${user.firstName.toLowerCase()}.${user.lastName.toLowerCase()}@codeimmersives.com`;
    return email;
}

function getPlaylistLength(list){
    let length = list.songs.length;
    return length
}

function getHardestHomework(hmWrkAry){ 

    let hard = "test";  //initial variable

    if (hmWrkAry.length === 0){ // null case
        hard = "";
    }
    else {
        let low = hmWrkAry[0].averageScore;
        hard = hmWrkAry[0].name;
        for(let i = 0; i<hmWrkAry.length; i++)
        if (hmWrkAry[i].averageScore < low){  //find name with lowest score
            hard = hmWrkAry[i].name;
            }
    } 
return hard; 
}

function createPhonebook (names,numbers){
    let book = {}
    for(let i = 0; i<names.length; i++){
    book[names[i]] = numbers[i];
    }
return book
}






// ┌─────────────────────────────────────┐
// │ Do not modify code below this line. │
// └─────────────────────────────────────┘

if (typeof isAdmin === 'undefined') {
    isAdmin = undefined;
}
if (typeof getEmail === 'undefined') {
    getEmail = undefined;
}
if (typeof getPlaylistLength === 'undefined') {
    getPlaylistLength = undefined;
}
if (typeof getHardestHomework === 'undefined') {
    getHardestHomework = undefined;
}
if (typeof createPhonebook === 'undefined') {
    createPhonebook = undefined;
}

module.exports = {
    isAdmin,
    getEmail,
    getPlaylistLength,
    getHardestHomework,
    createPhonebook
};