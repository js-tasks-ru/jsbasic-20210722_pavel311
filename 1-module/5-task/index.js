function truncate(str, maxlength) {
    if (str.lenght > maxlength){
      str.charAt[maxlength] = `"…"`;
    }
}