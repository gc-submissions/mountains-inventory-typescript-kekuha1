export interface Product{
    name: string;
    price: number;
}
const products: Product[]=[
    {name: "milk", price: 5.99},
    {name: "eggs", price: 10.99},
    {name: "tomatoes", price: 3.99},
]
export function calcAverageProductPrice(productArray: Product[]){
    if (productArray.length === 0){
        return 0
    }
    else{
    let total = 0;
    for(
        let i = 0; i < productArray.length; i++
    ){
    total+=productArray[i].price}
    return total/productArray.length;}
}
const average = calcAverageProductPrice(products)
console.log(products)