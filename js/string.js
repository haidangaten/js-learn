// using indexOf()
function isSecureUrlV1(url) {
    // if(url.indexOf('https') && url.indexOf('wss')){
    //     return true;
    // }else return false;
    return (url.indexOf('https') || url.indexOf('wss')) !==-1 ? 'secure urls': 'not secure' ;
}
console.log(isSecureUrlV1('http://abc.com'));
console.log(isSecureUrlV1('wss://abc.com'));
// using startsWith()
function isSecureUrlV2(url) {
    if(url.startsWith('https') || url.startsWith('wss')) return true;
}
console.log(isSecureUrlV2('https://abc.com'));
