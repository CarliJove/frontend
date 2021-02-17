export const revisarEnergia = (getEnergia, getRestante) => {
    let clase;

    if ( (getEnergia / 4) > getRestante) { clase = 'alert alert-danger';}
    else if ((getEnergia / 2) > getRestante) { clase = "alert alert-warning";}
    else { clase = "alert alert-success";}

    return clase;
}