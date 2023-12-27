document.write("42.to check whether three given numbers are increasing in strict or in soft mode"+"<br>");
function test42(x,y,z){
    if(y>x&& z>y){
        return "strict Mode";
    }
    else if(z>y){
        return "soft Mode";
    }
    return "Undefined";
}
document.write("The numbers are : 10,15,31 "+"<br>")
document.write(test42(30,32,34)+"<br>");