   
    const a = parseFloat(prompt("Enter parameter a"));
    const b = parseFloat(prompt("Enter parameter b"));
    const c = parseFloat(prompt("Enter parameter c"));
    if (isNaN(a && b && c)){
	alert('Enter Numbers')
    }
    else {alert (quad(a,b,c));
    }
function quad(a,b,c){
    let d=b*b-4*a*c;
    if (d<0){
        alert('D<0. No answer')
    }
    let x1 = (-b+Math.sqrt(d))/(2*a);
    let x2 = (-b-Math.sqrt(d))/(2*a);
    return('x1= ' + x1 + ', ' + 'x2= '+ x2);
}
