window.addEventListener("DOMContentLoaded", function () {

  // récupère les éléments de formulaire définis dans votre formulaire HTML ci-dessus

  var form = document.getElementById("test-form");
  var button = document.getElementById("test-form-submit");
  var status = document.getElementById("status");

  // Fonctions de réussite et d'erreur après la soumission du formulaire

  function success() {
    form.reset();
    status.classList.add('success');
    status.innerHTML = "Thanks!";
  }

  function error() {
    status.classList.add('error');
    status.innerHTML = "Oops! Il y a un probléme.";
  }

  // gérer l'événement de soumission de formulaire

  form.addEventListener("submit", function (ev) {
    ev.preventDefault();
    var data = new FormData(form);
    ajax(form.method, form.action, data, success, error);
  });
});

// fonction d'assistance pour l'envoi d'une requête AJAX

function ajax(method, url, data, success, error) {
  var xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.setRequestHeader("Accept", "application/json");
  xhr.onreadystatechange = function () {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;
    if (xhr.status === 200) {
      success(xhr.response, xhr.responseType);
    } else {
      error(xhr.status, xhr.response, xhr.responseType);
    }
  };
  xhr.send(data);
}