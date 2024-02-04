const mobile={
    brand:'samsung',
    price: 250000,
    color:'Black',
    camera:'64px',
    screen:true,
}
// for of ---array te 
// for in -----object a 
for(const prop in mobile ){
    console.log(prop)
    console.log(mobile[prop])
}