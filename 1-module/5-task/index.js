function truncate(str, maxlength) {
    if (str.length > maxlength){
    let shortedStr = str.slice(0, maxlength - 1);
    return shortedStr + `…`;
    }
    else{
        return str;
    }
}
