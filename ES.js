// Data access
const data =[{id:1, name:'imon',Address :'khilgon'}];
console.log(data[0].Address);

// more 
const product ={
    count :5000,
    data :[
        {id:1, name:'laptop', price :56000},
        {id:1, name:'laptop', price :156000}
    
    ]
}
console.log(product.data[0].price);


// chain system
const user ={
    name:'shakib khan',
    id:67,
    wife:{
        fast: 'apu bissash',
        second :'Shovnam bubly',

        profession :{
            actor: 'hero',
            singer:'no'
        }
    }
}
console.log(user.wife.profession.singer);