
class ProductManager{
    static Id = 0

    constructor(title, description, price, thumbnail, code, stock){
        this.title = title
        this.description = description
        this.price = price
        this.thumbnail = thumbnail
        this.code = code
        this.stock = stock
    }
    addProduct(title, description, price, thumbnail, code, stock){
        while(true){
        this.title = title
        this.description = description
        this.price = price
        this.thumbnail = thumbnail
        this.code = code
        this.stock = stock
        ProductManager.id ++
    }
    }
    getProducts(){

    }
    getProductsById(){
    }
}

let producto1 = new ProductManager("Lies of P", "A Souls-like videogame", 40, "LiesofP.jpg", 25, true)

console.log(producto1)