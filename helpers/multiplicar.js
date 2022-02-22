const fs = require('fs');
const colors = require('colors');


const crearArchivo = async(base = 5, listar=false, hasta=10) =>{
    try {
        let salida,consola = '';
        for(i=1; i<=hasta; i++){
            salida += `${base} ${'x'.brightBlue} ${i} ${'='.brightBlue} ${base * i}\n`;
            consola += `${base} x ${i} '=' ${base * i}\n`;
        }
        if( listar == true ){
            console.log('===============================');
            console.log('Tabla del', colors.brightBlue(base));
            console.log('===============================');
            console.log(salida);
        }
        fs.writeFileSync(`./salida/Tabla-${base}.txt`,consola);
        return `Tabla-${base} creada`;
    } catch (err) {
        throw err
    }
}

module.exports = {
    crearArchivo
}