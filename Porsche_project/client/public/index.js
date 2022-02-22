window.onload = load;

function load() {
  fetch("http://localhost:2000/produits")
    .then(blobProduits => {
      return blobProduits.json();
    })
    .then(produits => {
      let ancrage = document.querySelector("#debutproduit");
      var nbcolumns = 0
      let identifiant


      produits.forEach(produit => {
        if (nbcolumns % 3 == 0) {
          row1 = document.createElement("tr")
          row1.className = "row";
          var column = document.createElement("td");
          column.className = "column";
          var img = document.createElement("img");
          img.id = produit.Nom;
          img.src = produit.Url;
          img.alt = produit.Nom;
          img.onclick = function() {window.location.href = "http://localhost:3000/porsche/"+produit.Nom;}
          column.appendChild(img);
          row1.appendChild(column);
          ancrage.appendChild(row1);
        } else {
          var column = document.createElement("td");
          column.className = "column";
          var img = document.createElement("img");
          img.id = produit.Nom;
          img.src = produit.Url;
          img.alt = produit.Nom;
          img.onclick = function() {window.location.href = "http://localhost:3000/porsche/"+produit.Nom;}
          // img.setAttribute('click', location.href="http://localhost:3000/porsche/"+produit.Nom);
          column.appendChild(img);
          row1.appendChild(column);
        };


        identifiant = produit.Nom
        nbcolumns = nbcolumns + 1
      });
    })
}


var slidePosition = 0;
SlideShow();

function plusSlides(n) {
  SlideShow(slidePosition += n);
}

function currentSlide(n) {
  SlideShow(slidePosition = n);
}

function SlideShow() {
  var i;
  var slides = document.getElementsByClassName("Containers");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slidePosition++;
  if (slidePosition > slides.length) {
    slidePosition = 1
  }
  slides[slidePosition - 1].style.display = "block";
  setTimeout(SlideShow, 4000);
}


function ouvrirPage() {
  window.location.href = "http://localhost:3000/connexion";
}


function verificationCompte(event) {
  event.preventDefault();
  let formData = new URLSearchParams(new FormData(event.target));

  fetch(`http://localhost:2000/Voircompte`, { method: "POST", body: formData })
    .then(reponse => {
      return reponse.json();
    })
    .then(reponseJson => {
      if (reponseJson.success) {
        alert("Le compte a été vérifier avec succes")
        window.location.href = "http://localhost:3000/Compte/${body.Utilisateur}";
      }
      else { alert("Oupps, il y a eu une erreur: " + reponseJson.message); }
    })
}
