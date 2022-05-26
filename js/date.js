let a=new Date();
let b=a.getFullYear(); 
let c=a.getDate();
let d=a.getHours();
let e=a.getMilliseconds();
console.log(a);
console.log(a.getTime());
console.log(b);
console.log(c);
console.log(d);

let g=new Date(2022,8,5);
let h=g.getMonth() + 1;
console.log(h);
const birthday = new Date(1994, 8, 5);
console.log(birthday.getFullYear()); // 1994
// in ra tháng
// getMonth(): 0-11
// 0 tháng 1(Jan) 11 tháng 12(Dec)
console.log(birthday.getMonth()); // 8
// in ra ngày của tháng: 1 -> 31
console.log(birthday.getDate()); //5
// in ra thứ của tuần
// 0-6: 0: chủ nhật, 6: thứ bảy
console.log(birthday.getDay()); // 1
// in ra giờ
console.log(birthday.getHours());
// in ra phút
console.log(birthday.getMinutes());
// in ra giây
console.log(birthday.getSeconds());
// in ra mili giây
console.log(birthday.getMilliseconds());
// in ra timestamp
console.log(birthday.getTime()); // 778698000000
// Các hàm set trong Date
console.log(`My birthday: ${birthday}`);
birthday.setFullYear(1993);
birthday.setMonth(10);
birthday.setDate(30);
birthday.setHours(23);
birthday.setMinutes(23);
birthday.setSeconds(23);
console.log(`My birthday after update: ${birthday}`);
console.log(birthday.getUTCFullYear());
// in ra tháng
// getMonth(): 0-11
// 0 tháng 1(Jan) 11 tháng 12(Dec)
console.log(birthday.getUTCMonth());
// in ra ngày của tháng: 1 -> 31
console.log(birthday.getUTCDate());
// in ra thứ của tuần
// 0-6: 0: chủ nhật, 6: thứ bảy
console.log(birthday.getUTCDay());
// in ra giờ
console.log(birthday.getUTCHours());
// in ra phút
console.log(birthday.getUTCMinutes());
// in ra giây
console.log(birthday.getUTCSeconds());
// in ra mili giây
console.log(birthday.getUTCMilliseconds());
// date string