const money = ['usd','cad','pound','ndt','vnd','usd'];
console.log(money[0]); //usd
console.log(money[1]); //cad
console.log(money[2]); //pound
console.log(money[3]); //ndt
console.log(money[4]); //vnd
//index: vi tri cac phan tu ,bat dau tu 0
//length: chieu dai mang,bat dau tu 1
console.log(money[money.length-1]); //vnd

//Array methods
//length :độ dài phần tử 
console.log(money.length);
//reverse :đảo ngược
// console.log(money.reverse());
//join:nối phần tử mảng thành chuỗi
console.log(money.join());
//includes:kiểm tra mảng có chứa phần tử đó hay không
console.log(money.includes("usd")); //true
//indexOf:trả về vị trí phần tử trong mảng tìm thấy đầu tiên (vd mảng có 2 phần tử giá trị như nhau)
console.log(money.indexOf("usd"));
//lastIndexOf:trả về vị trí phần tử trong mảng tìm thấy cuối cùng
console.log(money.lastIndexOf("cad")); //1
//push : thêm phần tử vào cuối mảng 
console.log(money.push("java"));
console.log(money);
//unshift : thêm phần tử vào đầu mảng 
console.log(money.unshift("js"));
console.log(money);
//pop: xóa phần tử cuối cùng trong mảng 
console.log(money);
money.pop();
console.log(money);
//shift : xóa phần tử đầu trong mảng 
console.log(money);
money.shift();
console.log(money);