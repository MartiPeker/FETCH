fetch("https://api.npoint.io/caa675e5edd5ab2c8a2b")
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(err => console.log('Solicitud fallida', err));
