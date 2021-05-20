class Inventary {

    constructor(nombreArt, idArt, cantidadArt) {
        this.nombreArt = nombreArt;
        this.idArt = idArt;
        this.cantidadArt = cantidadArt;
    }

    actualizarInventario(nombreI) { 
        listaInventario.forEach(Inventary => {
            if(nombreI == Ingredient.nombreArt){
                Ingredient.cantidadArt=prompt("Ingresar nueva cantidad","");
                break;
            } else{
                console.log("No se encontró el artículo")
                break;
            }
        });

    }

}

class Product extends Inventary {

    constructor(nombreArt,idArt,cantidadArt,precio){
        super(nombreArt,idArt,cantidadArt);
        this.precio=precio;
    }

    actualizarPrecio(nombreP) { 
        Productos.forEach(Product => {
            if(nombreP == Product.nombreArt){
                Product.precio=prompt("Ingresar nuevo precio","");
                break;
            } else{
                console.log("No se encontró el Producto")
                break;
            }
        });

    }

}
