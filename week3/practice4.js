//func Triangle area
function AreaTriangle(b,h){
    return 0.5*b*h;
}
console.log(AreaTriangle(5,5));

//arrow func Square area
const AreaSquare =(w,l)=>{
    return w*l;
}
console.log(AreaSquare(5,5));

//arrow func Circle area no bracket
const AreaCircle = (r)=> 3.14*r*r;
console.log(AreaCircle(5));