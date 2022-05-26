//SLICE
//slice:tạo ra 1 mảng copy của mảng ban đầu ,tạo ra 1 array mới hoàn toàn k ảnh hưởng array ban đầu
const animals =['ga','heo','cho','meo','vit','chuot','trau'];
const animals2=animals.slice();
console.log(animals2); //(7) ['ga', 'heo', 'cho', 'meo', 'vit', 'chuot', 'trau']
//slice(start) start ->vị trí index trong mảng 
const animals3=animals.slice(1);
console.log(animals3); //(6) ['heo', 'cho', 'meo', 'vit', 'chuot', 'trau']
//slice(start,end) từ start tới end -1
const animals4=animals.slice(1,3);
console.log(animals4); //(2) ['heo', 'cho']
//slice(- so am) // so am la lấy ngược lại bat dau tu trau toi end +1
const animals5=animals.slice(-4);
console.log(animals5);

//SPLICE
console.log("----SPLICE-----");
// XÓA PHẦN TỬ TRONG MẢNG OR THAY THẾ PHẦN TỬ TRONG MẢNG ,thay đổi trực tiếp đến mảng ban đầu  ?? Xem sau
const pets=['dog','cat','bird','crocodile','eagle','lion','tiger','snake'];
const pets1= pets.splice(3);
console.log(pets1);
console.log(pets);
let myFish = ["angel", "clown", "drum", "sturgeon"];
let removed = myFish.splice(2, 2, "trumpet");
console.log(removed);

let months = ["January", "February", "Monday", "Tuesday"];
let days = months.splice(2, 2, "March", "April");

console.log(days); // ["Monday", "Tuesday"]
console.log(months); // ["January", "February", "March", "April"]