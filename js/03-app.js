localStorage.removeItem('nombre');

//Update a register

const mesesArray = JSON.parse(localStorage.getItem('meses'));
console.log(mesesArray);

mesesArray.push('Nuevo mes');
console.log(mesesArray);
localStorage.setItem('meses', JSON.stringify(mesesArray));

localStorage.clear();