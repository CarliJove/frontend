const descargarUsuarios = cantidad => new Promise((resolve, reject) => {
    //pasa cantidad a la api
    const api = `https://randomuser.me/api/?results=${cantidad}&nat=us`;

    //lamado a ajax
    const xhr = new XMLHttpRequest();

    // abrir la conexion
    xhr.open('GET', api, true);

    //on load
    xhr.onload = () => {
        if (xhr.status === 200) {
            resolve(JSON.parse(xhr.responseText).results);
        } else {
            reject (Error(xhr.statusText));
        }
    }


    //opcional en error

    xhr.onerror = (error) => reject(error);
    //para enviar
    xhr.send()
});

descargarUsuarios(20).then(
    miembros => imprimirHTML(miembros),
    error => console.error(
        new Error('Error ' + error)
    )
);

function imprimirHTML(usuarios) {
    let html = '';
    usuarios.forEach(usuario => {
    html += `
        <li>
        Nombre: ${usuario.name.first} ${usuario.name.last}
        Pais: ${usuario.nat}
        Imagen: 
            <img src="${usuario.picture.medium}"> 
        <li>
    ` 
});

const contenedorApp = document.querySelector('#app');
contenedorApp.innerHTML = html;
}