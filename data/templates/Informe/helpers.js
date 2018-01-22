function concatDescription(caracteristicas){
    var stringFinal = '';
    caracteristicas.forEach(function (c) {
        //console.log('Calculating item ' + i.name + '; you should see this message in debug run')
        stringFinal += `${c.nombre} ${c.opciones[0]}, `
    });
    return stringFinal
}