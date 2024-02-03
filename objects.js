// object declearation is non premitive data type 

const subject={
    credit:3,
    course:'Java script',
    teacher: 'Jangkar Mahbub',
    student: 'Shanto',
    Platform: 'Online',
    Medium:'Programming Hero',
    version:'Bangla',
    Fee:[100,200,300,400,500,600,700],
    Regular:true,
    Year: 2024,
    section: {
        room:601,
        class:611,
        vertual:'VC Room',
        People:63,
        failure:'Shanto',
    },
}
console.log(subject);
// -------------------------------------
// -------------------------------
console.log(subject.teacher)

const fees=subject.Fee=[20000,30000,50000,70000];
console.log(subject.section)



const keys= Object.keys(subject.section);
console.log(keys)







const values=Object.values(subject);
console.log(values);





 




