function concatDescription(caracteristicas){
    var stringFinal = '';
    caracteristicas.forEach(function (c) {
        //console.log('Calculating item ' + i.name + '; you should see this message in debug run')
        stringFinal += `${c.nombre} ${c.opciones[0]}, `
    });
    return stringFinal
}

function concatUrl(nombre) {
    return 'http://localhost:3030/api/v1/img/'+ nombre
}