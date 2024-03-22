const products =[
    {name:'asus', id :1, price:45000},
    {name:'hp', id :2, price:45000},
    {name:'mac', id :3, price:145000}
]
const names = products.map(produc =>produc.name);
const price = products.map(p =>p.price);
console.log(names);
console.log(price);

// foreEach
products.forEach( p=> console.log(p.id))
// filter
const prc = products.filter(p=> p.price<50000);
console.log(prc);
// find 
const pc =products.find(p =>p.price>2000);
console.log(pc)

// reduce
const reduce = products.reduce((acu,current) => acu +current.price,0);
console.log(reduce);