class ProductosApi {
    constructor() {
        this.productos = []
        this.id = 0
    }

    listar(id) {
        const productoId = this.productos.find(p => p.id == id);
        if (productoId == undefined){
            return { error : 'no se encontro el producto' }

        } else {
            return productoId;
        }
    }

    listarAll() {
        try {
            const lista = this.productos;
            return lista;
        } catch (error) {
            console.error("error:", error);
        }
    }

    guardar(prod) {
        if (this.productos.length == 0){
            prod.id = 1 ;
        } else {
            const ultimoProducto =  this.productos[this.productos.length - 1]
        prod.id = ultimoProducto.id + 1;
        }
        this.productos.push(prod);
        return prod.id
    }

    actualizar(prod, id) {
        let productoIndex = this.productos.findIndex(p => p.id == id);
        prod.id = id
        this.productos[productoIndex] = prod ;
        return prod
    }

    borrar(id) {
        let productoIndex = this.productos.findIndex(p => p.id == id);
        if (productoIndex >= 0) {
           this.productos.splice(productoIndex,1);
          }
          else {return { error : 'no se encontro el producto' }}
    }
}

module.exports = ProductosApi
