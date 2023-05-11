// Obtencion del el botón y los elementos de superposición
const adoptionFormBtn = document.getElementById("adoption-form-btn");
const adoptionOverlay = document.getElementById("adoption-overlay");
const closeBtn = document.getElementById("close-btn");

// Adicion detector de eventos al botón para mostrar la superposición
adoptionFormBtn.addEventListener("click", () => {
  adoptionOverlay.style.display = "block";
});

// Adicion detector de eventos al botón de cierre para ocultar la superposición
closeBtn.addEventListener("click", () => {
  adoptionOverlay.style.display = "none";
});

// Adicion detector de eventos a la superposición para ocultarlo si se hace clic fuera del formulario
adoptionOverlay.addEventListener("click", (event) => {
  if (event.target === adoptionOverlay) {
    adoptionOverlay.style.display = "none";
  }
});




const forms = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = forms.elements['name'].value;
  const email = forms.elements['email'].value;
  const phone = forms.elements['phone'].value;
  const address = forms.elements['address'].value;
  const petType = forms.elements['pet-type'].value;
  const petName = forms.elements['pet-name'].value;
  const petAge = forms.elements['pet-age'].value;

  //   Enviar datos de formulario al servidor mediante fetch o Ajax
  // ...

  // Restablecer formulario después del envío
  forms.reset();
});




// Adicion detector de eventos de clic a cada opción de pie de página
const footerLinks = document.querySelectorAll('.footer-links a');
footerLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    // Manejo evento de clic aquí
    console.log(`Clicked ${link.textContent}`);
  });
});



// Adicion escucha de eventos de clic al enlace "Consejos"
const aboutUsLink = document.querySelector('nav a[href="about.html"]');
aboutUsLink.addEventListener('click', (event) => {
  // Manejo evento de clic aquí
  console.log(`Clicked ${aboutUsLink.textContent}`);
});

// Agregar detector de eventos de clic al enlace "Tips"
const tipsLink = document.querySelector('nav a[href="#"][target="_blank"]');
tipsLink.addEventListener('click', (event) => {
  event.preventDefault();
  // Manejo evento de clic aquí
  console.log(`Clicked ${tipsLink.textContent}`);
  window.open('https://example.com/pet-care-tips', '_blank');
});




// Desplazamiento suave
$('a[href^="#"]').on('click', function(event) {
  var target = $(this.getAttribute('href'));
  if (target.length) {
      event.preventDefault();
      $('html, body').stop().animate({
          scrollTop: target.offset().top
      }, 1000);
  }
});

// Cambio de enlace activo
$(window).on('scroll', function() {
  $('section').each(function() {
      if($(window).scrollTop() >= $(this).offset().top - 50) {
          var id = $(this).attr('id');
          $('nav a').removeClass('active');
          $('nav').find('a[href="#' + id + '"]').addClass('active');
      }
  });
});

