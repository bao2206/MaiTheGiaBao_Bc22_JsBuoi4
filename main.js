// Bài 1
//Đầu vào 
var n1 = 20;
var n2 = 10;
var n3 = 0;
var tmp ;
var max;
//Xử lý
if (n1 > n2){
    tmp = n1;
    n1 = n2;
    n2 = tmp;
}

if (n1 > n3){
    tmp = n1;
    n1 = n3;
    n3 = tmp;
}

if (n2 > n3){
    tmp = n2;
    n2 =  n3;
    n3 = tmp;
}

// Đầu ra
console.log("Day số sắp theo thứ tự từ tăng dần: ",n1 ,n2, n3);



//Bài 2 
//Đầu vào
var ngDung = "B";
var xacDinh;
// Xử lý
switch(ngDung)
{
    case 'B':
        xacDinh = " Bố";
        break;
    case 'M':
        xacDinh = " Mẹ";
        break;
    case 'A':
        xacDinh = " Anh Trai";
        break;
    case 'E':
        xacDinh = " Em Gái";    
        break;
    default:
        xacDinh = "Vui lòng nhập đúng ký tự"
}
//Đầu ra
console.log("Chào " + xacDinh);


//Bài 3
//Đầu vào 

var number_1 = 10;
var number_2 = 21;
var number_3 = 22;


//Xử lý và đầu ra
if(number_1 % 2 == 0 && number_2 % 2== 0 && number_3 % 2== 0) {
    console.log("Có 3 số chẵn");
} else if(number_1 % 2 == 0 && number_2 % 2 == 0 && number_3 % 2 != 0) {
    console.log("Có 2 số chẵn 1 số lẻ");
} else if(number_1 % 2 == 0 && number_2 % 2 != 0 && number_3 % 2 != 0){
    console.log("Có 1 số chẵn 2 số lẻ");
} else if(number_1 % 2 == 0 && number_2 % 2 == 0 && number_3 % 2 != 0){
    console.log("Có 1 số chẵn 2 số lẻ");
} else if(number_1 % 2 != 0 && number_2 % 2 != 0 && number_3 % 2 != 0){
    console.log("Có 3 số chẵn ");
} else if(number_1 % 2 != 0 && number_2 % 2 != 0 && number_3 % 2 == 0){
    console.log("Có 1 số chẵn 2 số lẻ");
} else if(number_1 % 2 == 0 && number_2 % 2 != 0 && number_3 % 2 == 0){
    console.log("Có 2 số chẵn 1 số lẻ");
} else if(number_1 % 2 != 0 && number_2 % 2 != 0 && number_3 % 2 == 0){
    console.log("Có 1 số chẵn 2 số lẻ");
}

// Bài 4

//Đầu vào
var a = 20, b = 20 ,c = 20;
// Xử lý và đầu ra
if(a+b <= c || a+c <= b || b + c <= a)
{
    console.log("Tam giác không hợp lệ: ");
}

else{
    if(a === b === c)
    {
        console.log("Đây là tam giác đều");
    }
    else if(Math.pow(a, 2) + Math.pow(b,2) == Math.pow(c,2) || Math.pow(b,2) + Math.pow(c,2) == Math.pow(a,2) || Math.pow(a,2) + Math.pow(c,2) == Math.pow(b,2)) 
    {
        console.log("Đây là tam giác vuông");
    }

    else if(a == b || b == c || a == c)
    {
        console.log("Đây là tam giác cân");
    }
}