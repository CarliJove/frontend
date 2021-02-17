export function obtenerDiferenciaToping(toping) {
    let def;

    switch(toping) {
        case 'chispitas':
            def = 0.2;
            break;

        case 'chips':
            def = 0.3;
            break;


        case 'azucar':
            def = 0.4;
            break;


        case 'frutos':
            def = 0.5;
            break;

        case 'nutella':
            def = 0.6;
            break;

        default:
            break;
    }

    return def;
}

export function calcularFactura(factura) {
    let incremento;

    switch(factura) {
        case 'membrillo':
            incremento = 1.30;
            break;
        case 'chocolate':
            incremento = 1.15;
            break;
        case 'pastelera':
            incremento = 1.05;
            break;
        default:
            break;
    }

    return incremento;
}

export function obtenerAdicional(adicional) {
    return (adicional === "concafe") ? 1.5 : 1;
}

export function primerMayuscula (texto) {
    return texto.charAt(0).toUpperCase() + texto.slice(1);
}