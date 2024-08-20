document.addEventListener("DOMContentLoaded", function () {
    var pathDepth = window.location.pathname.split('/').length - 2;
    var relativePath = '';

    for (var i = 0; i < pathDepth; i++) {
        relativePath += '../';
    }

    var navPath = relativePath + 'includes/nav.html';

    fetch(navPath)
        .then(response => {
            if (!response.ok) {
                throw new Error("La respuesta de la red no fue correcta");
            }
            return response.text();
        })
        // .then(data => {
        //     const navbar = document.getElementById("navbard");
        //     if (navbar) {
        //         navbar.innerHTML = data;
        //     } else {
        //         console.error("No se encontró el elemento con id navbard");
        //     }
        // })
        .then(data => document.getElementById("navbard").innerHTML = data)
        .catch(error => console.error("Hubo un problema con la operación de búsqueda:", error));
});

document.addEventListener("DOMContentLoaded", function () {
    var pathDepth = window.location.pathname.split('/').length - 2;
    var relativePath = '';

    for (var i = 0; i < pathDepth; i++) {
        relativePath += '../';
    }

    var navPath = relativePath + 'includes/footer.html';

    fetch(navPath)
        .then(response => {
            if (!response.ok) {
                throw new Error("La respuesta de la red no fue correcta");
            }
            return response.text();
        })
        // .then(data => {
        //     const navbar = document.getElementById("footer");
        //     if (navbar) {
        //         navbar.innerHTML = data;
        //     } else {
        //         console.error("No se encontró el elemento con id navbard");
        //     }
        // })
        .then(data => document.getElementById("footer").innerHTML = data)
        .catch(error => console.error("Hubo un problema con la operación de búsqueda:", error));
});


// function loadStylesheet(paths) {
//     for (let i = 0; i < paths.length; i++) {
//         let link = document.createElement("link");
//         link.rel = "stylesheet";
//         link.href = paths[i];
        
//         link.onload = function() {
//             console.log(`Successfully loaded: ${paths[i]}`);
//             return;
//         };
        
//         link.onerror = function() {
//             console.log(`Failed to load: ${paths[i]}`);
//             document.head.removeChild(link);
//         };

//         document.head.appendChild(link);
//     }
// }

// const stylesheets = [
//     "./path/to/primary-styles.css",
//     "./path/to/secondary-styles.css",
//     "./path/to/backup-styles.css"
// ];

// loadStylesheet(stylesheets);