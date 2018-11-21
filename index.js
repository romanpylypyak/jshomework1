   
   const a = parseInt(prompt("Enter parameter a"));
    const b = parseInt(prompt("Enter parameter b"));
    const c = parseInt(prompt("Enter parameter c"));
    let d=b*b-4*a*c;
    if (d<0){
        alert('error')
    }
    let x1 = (-b+Math.sqrt(d))/(2*a);
    let x2 = (-b-Math.sqrt(d))/(2*a);
    alert('x1= ' + x1 + ', ' + 'x2= '+ x2);
