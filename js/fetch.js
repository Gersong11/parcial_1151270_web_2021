const section = document.querySelector('#contenedor');

fetch('http://demo6497253.mockable.io/noticias')
    .then(function(response) {
        return response.json();

    })
    .then(function(data) {
        creartarjetas(data);
        console.log('data = ', data);
    })
    .catch(function(err) {
        console.error(err);
    });

function creartarjetas(jsonObj) {
    const noticias = jsonObj;

    for (var i = 0; i < noticias.length; i++) {
        const myArticle = document.createElement('article');
        const myH2 = document.createElement('h3');
        const descripcion = document.createElement('p');
        //const detalle = document.createElement('p');
        //const img = document.createElement('img');
        const hr = document.createElement('hr');
        const a = document.createElement('a');
        myH2.textContent = noticias[i].titulo + " - " + noticias[i].categoria + " - " + noticias[i].fecha;

        descripcion.textContent = noticias[i].descripcion;
        a.textContent = "Ver mas...";

        //detalle.textContent = noticias[i].detalle;

        //img.src = noticias[i].img;





        myArticle.appendChild(myH2);

        myArticle.appendChild(descripcion);
        // myArticle.appendChild(detalle);
        //myArticle.appendChild(img);
        myArticle.appendChild(a);
        myArticle.appendChild(hr);


        section.appendChild(myArticle);

    }
}