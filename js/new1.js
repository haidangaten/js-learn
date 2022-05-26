function captilize(str) {
    
    if(str === '') return '';

    const firstLetter = str[0].toUpperCase();
    const rest = str.slice(1).toLowerCase();

    return `${firstLetter}${rest}`;
}
console.log(captilize(''));
console.log(captilize('dsds'));
console.log(captilize('viet Nam'));


function parameterize(str) {
    // return str.toLowerCase().replaceAll(' ','-');
    return str.toLowerCase().split(' ').join('-');
}
console.log(parameterize('Js Is Silly'));