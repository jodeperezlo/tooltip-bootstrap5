// Habilitamos Bootstrap 5 Tooltip
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))

var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
});

// Obtenemos todos los tooltip con la clase example-tooltip
var exampleEl = document.querySelectorAll('.example-tooltip')

// Por cada tooltip guardado en la variable exampleEL, agregamos su template
exampleEl.forEach( ex => {
  new bootstrap.Tooltip(ex, {
      boundary: document.body,
      // En el template agregamos la clase tooltip-custom que personalizaremos con CSS
      template: 	'<div class="tooltip tooltip-custom" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>'
  });
});// Habilitamos Bootstrap 5 Tooltip
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))

var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
});

// Obtenemos todos los tooltip con la clase example-tooltip
var exampleEl = document.querySelectorAll('.example-tooltip')

// Por cada tooltip guardado en la variable exampleEL, agregamos su template
exampleEl.forEach( ex => {
  new bootstrap.Tooltip(ex, {
      boundary: document.body,
      // En el template agregamos la clase tooltip-custom que personalizaremos con CSS
      template: 	'<div class="tooltip tooltip-custom" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>'
  });
});