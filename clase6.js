class Producto{
    constructor(precio, id){
        this.precio=precio;
        this.id=id;
    } 
    total(){
        this.precioTotal=this.precio * 2.1;
    } 
    vender(){
        this.vendido=true
    }
}
const bateria=new Producto(1, 1 );
bateria.total();
let contadorBatería=0

const guitarra=new Producto(2, 2);
guitarra.total();
let contadorGuitarra=0

const piano=new Producto(3, 3 );
piano.total();
let contadorPiano=0

const teclado=new Producto (4, 4)
teclado.total()
let contadorTeclado=0

const bajo=new Producto(5, 5);
bajo.total();
let contadorBajo=0

let contador=0
let listaCompras=[]
let listaPrecio=[]
let totalCompra=0
let listaFinalProductos=[]

alert(`tenemos los siguientes productos a la venta: batería, guitarra, piano, teclado y bajo`)
let ProductoElegido= prompt("elíja algun instrumento para comprar") .toUpperCase()
while(ProductoElegido!=""){
    switch(ProductoElegido){
        case "BATERIA":
            contador=contador+1;
            alert("EL precio el precio de este producto es de: "+bateria.precioTotal+" y la cantidad de productos comprados es de:"+contador);
            listaCompras.push('Batería');
            listaPrecio.push(bateria.precio);
            totalCompra=totalCompra+bateria.precio;
            contadorBatería=contadorBatería+1;
            break;
        case "BATERÍA":
            contador=contador+1;
            alert("EL precio de este producto es de: "+bateria.precioTotal+" y la cantidad de productos comprados es de:"+contador);
            listaCompras.push('Batería');
            listaPrecio.push(bateria.precio);
            totalCompra=totalCompra+bateria.precio;
            contadorBatería=contadorBatería+1;
            break;
        case "GUITARRA":
            contador=contador+1;
            alert("EL precio de este producto es de: "+guitarra.precioTotal+" y la cantidad de productos comprados es de:"+contador);
            listaCompras.push('Guitarra');
            listaPrecio.push(guitarra.precio);
            totalCompra=totalCompra+guitarra.precio;
            contadorGuitarra=contadorGuitarra+1;
            break;
        case "PIANO":
            contador=contador+1;
            alert("EL precio de este producto es de: "+piano.precioTotal+" y la cantidad de productos comprados es de:"+contador);
            listaCompras.push('Piano');
            listaPrecio.push(piano.precio);
            totalCompra=totalCompra+piano.precio;
            contadorPiano=contadorPiano+1;
            break;
        case "TECLADO":
            contador=contador+1;
            alert("EL precio de este producto es de: "+teclado.precioTotal+" y la cantidad de productos comprados es de:"+contador);
            listaCompras.push('Teclado');
            listaPrecio.push(teclado.precio);
            totalCompra=totalCompra+teclado.precio;
            contadorTeclado=contadorTeclado+1;
            break;
        case "BAJO":
            contador=contador+1;
            alert("EL precio de este producto es de: "+bajo.precioTotal+" y la cantidad de productos comprados es de:"+contador);
            listaCompras.push('Bajo');
            listaPrecio.push(bajo.precio);
            totalCompra=totalCompra+bajo.precio;
            contadorBajo=contadorBajo+1;
            break;
        default:
            alert("no tenemos ese producto")
    }
    ProductoElegido= prompt("elíja algun instrumento para comprar") .toUpperCase()
}
alert(`usted compro: ${listaCompras}`);
