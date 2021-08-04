function truncate(str, maxlength) {
    if (str.length > maxlength){
    let shortedStr = str.slice(0, maxlength);
    return shortedStr + '‘&hellip;'
    ;
    }
    else{
        return str;
    }
}
