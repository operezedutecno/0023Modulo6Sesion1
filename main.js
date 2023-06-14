console.log("*********** Primer programa con node************");
// let numero = 20
// if(numero > 10) 
//     console.log("Valor alto");
// else
//     console.log("Valor bajo");


// setTimeout(() => {
//     console.log("Primer Llamado");
// }, 5000);

// setTimeout(() => {
//     console.log("Segundo Llamado");
// }, 3000);


const peticion1 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Primer Llamado");
        }, 5000);
    })
}

const peticion2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // reject("Segundo Llamado");
            resolve("Segundo Llamado");
        }, 2000);
    })
}

//Ejemplo de Proceso asíncrono. No espera que termine la primera petición para realizar la segunda
// peticion1().then(resp => {
//     console.log(resp);
// })

// peticion2().then(resp => {
//     console.log(resp);
// }).catch((error) => {
//     console.log("Error", error);
// })



//Ejemplo de Proceso síncrono. SI Espera que termine la primera petición para realizar la segunda.
const rutina = async() => {

    try {
        const p1 = await peticion1()
        const p2 = await peticion2()

        console.log(p1);
        console.log(p2);    
    } catch (error) {
        console.log("Ha sucedido un error en las peticiones");
    }
    
}

rutina()







