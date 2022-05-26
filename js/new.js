function getGradgeTen(age){
    if(age <0) return -1;
    if(age==16) return 'Du';
    return 'Khong Du';
}
console.log(getGradgeTen(5));