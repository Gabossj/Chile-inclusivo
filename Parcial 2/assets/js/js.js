// ------------ cookies --------------------
$(document).ready(function () {
  const cookieAccepted = localStorage.getItem('cookieAccepted');

  if (!cookieAccepted) {
    $('#cookieBanner').removeClass('d-none');
  }
  //ocultamos banner luego de aceptar
  $('#aceptarCookies').on('click', function () {
    localStorage.setItem('cookieAccepted', 'true');
    $('#cookieBanner').addClass('d-none');
  });
});


// ------------ comentarios ----------------

const commentBtn = document.querySelector('.post-comment-btn');
const commentForm = document.querySelector('.post-comment-form');

commentBtn.addEventListener('click', () => {
  if (commentForm.style.display === 'none') {
    commentForm.style.display = 'block';
  } else {
    commentForm.style.display = 'none';
  }
});

// -----------sidebar---------------

document.getElementById("search-button").addEventListener("click", function() {
    var query = document.getElementById("search-input").value;
    // Aquí se puede incluir la lógica de búsqueda, como enviar una solicitud al servidor, etc.
    console.log("Buscando por: " + query);
});

// Seleccionar el botón del menú y la lista de opciones
const menuButton = document.querySelector('.menu-button');
const menuList = document.querySelector('.menu-list');

// Agregar un evento de clic al botón del menú
menuButton.addEventListener('click', () => {
  // Alternar la clase "active" en la lista de opciones
  menuList.classList.toggle('active');
});

// -----------Publicar---------------

// Obtener el botón de "Publicar" y agregarle un event listener
const publishBtn = document.querySelector('.create-post .options .option:last-child button');
publishBtn.addEventListener('click', () => {
  // Obtener el contenido del post del input correspondiente
  const postContent = document.querySelector('.create-post .post-content textarea').value;
  
  // Obtener la imagen adjunta, si existe
  const postImage = document.querySelector('.create-post .options .image-upload input[type="file"]').files[0];

  // Obtener la localización seleccionada, si existe
  const postLocation = document.querySelector('.create-post .options .location select').value;

  // Obtener el archivo adjunto, si existe
  const postFile = document.querySelector('.create-tweet .options .file-upload input[type="file"]').files[0];

  // Crear un objeto con la información del post
  const post = {
    content: postContent,
    image: postImage,
    location: postLocation,
    file: postFile
  };

  // Aquí iría la lógica para enviar el post al servidor o guardar en la base de datos
  
  // Limpiar el formulario después de enviar el post
  document.querySelector('.create-post .post-content textarea').value = '';
  document.querySelector('.create-post .options .image-upload input[type="file"]').value = '';
  document.querySelector('.create-post .options .location select').value = '';
  document.querySelector('.create-post .options .file-upload input[type="file"]').value = '';
});

  