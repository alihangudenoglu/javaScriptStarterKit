function addToCarts(quantity,productName="elma") {
    console.log("Sepete eklendi : ürün : " + productName +" adet : "+quantity);
}

//addToCarts()
//addToCarts("karpuz")
//addToCarts("yumurta")

addToCarts(10,"Limon")

let sayHello=()=>{
    console.log("hello")
}

sayHello()

let product1={productName:"Elma",unitPrice:10,quantity:5}
function addToCart3(product) {
    console.log("Ürün : "+product.productName)
    console.log("Adet : "+product.quantity)
    console.log("Fiyat : "+product.unitPrice)
}

addToCart3(product1)

let product2={productName:"Elma",unitPrice:10,quantity:5}
let product3={productName:"Limon",unitPrice:10,quantity:5}
product2=product3
product2.productName="Karpuz"
console.log(product3)

function addToCart(products) {
    console.log(products)
}

let products=[
    {productName:"Elma",unitPrice:10,quantity:5},
    {productName:"Karpuz",unitPrice:10,quantity:5},
    {productName:"Armut",unitPrice:10,quantity:5}
]

function addToCart4(products) {
    console.log(products)
}

addToCart4(products)

let[icAnadolu,marmara,karadeniz,[icAnadoluSehirleri]]=[
    {name:"İç Anadolu",population:"20M"},
    {name:"Marmara",population:"30M"},
    {name:"Karadeniz",population:"10M"},
    [
        ["Ankara","Konya"],
        ["İstanbul","Bursa"],
        ["Sinop","Trabzon"]
    ]
]

console.log(icAnadolu)
console.log(marmara)
console.log(icAnadoluSehirleri)

let newProductName,newUnitPrice,newQuantity
({productName:newProductName,unitPrice:newUnitPrice,quantity:newQuantity}
={productName:"Elmacık",unitPrice:10,quantity:5})
console.log(newProductName)