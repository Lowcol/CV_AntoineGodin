window.onload = load;

let listeid = []
let listeNom = []
let listeQuantite = []
let listePrix = []
let listeDescription = []


function load() {
  fetch("http://localhost:2000/produits")
    .then(blobProduits => {
      return blobProduits.json();
    })
    .then(produits => {
      let tbody = document.getElementById("corpsDuTableau");
      let i = -1
      produits.forEach(produits => {
         i += 1


        let tr = document.createElement("tr");
        tr.id = 'ligne' + produits.Identifiant

        let tdIdentifiant = document.createElement("td");
        tdIdentifiant.innerText = produits.Identifiant;
        listeid[i] = tdIdentifiant.textContent
        tdIdentifiant.id = 'identifiant' + produits.Identifiant
        tr.appendChild(tdIdentifiant);

        let tdNom = document.createElement("td");
        tdNom.innerText = produits.Nom;
        listeNom[i] = tdNom.textContent
        tdNom.id = 'nom' + produits.Identifiant
        tr.appendChild(tdNom);

        let tdQuantite = document.createElement("td");
        tdQuantite.innerText = produits.Quantite;
        listeQuantite[i] = tdQuantite.textContent
        tdQuantite.id = 'quantite' + produits.Identifiant
        tr.appendChild(tdQuantite);

        let tdPrix = document.createElement("td");
        tdPrix.innerText = produits.Prix;
        listePrix[i] = tdPrix.textContent
        tdPrix.id = 'prix' + produits.Identifiant
        tr.appendChild(tdPrix);

        let tdDescription = document.createElement("td");
        tdDescription.innerText = produits.Description;
        listeDescription[i] = tdDescription.textContent
        tdDescription.id = 'description' + produits.Identifiant
        tr.appendChild(tdDescription);

        let tdedit = document.createElement("span");
        tdedit.classList.add('edit');
        tdedit.innerText = 'Editer';
        tdedit.id = 'bouton' + produits.Identifiant
        tr.appendChild(tdedit);

        tbody.appendChild(tr);

        
      });
    })
}


document.addEventListener('DOMContentLoaded', function () {
  const list = document.getElementById('corpsDuTableau');
  const forms = document.forms;



  list.addEventListener('click', (e) => {
    if (e.target.id == 'bouton1') {
      const ligne = document.getElementById('ligne1')
      ligne.contentEditable = "true"
      document.getElementById("bouton1").remove();

      row = document.getElementById("description1")
      editbtn = document.createElement("span");
      editbtn.id = 'edit1'
      editbtn.innerText = 'Annuler';
      editbtn.classList.add('annuler');
      editbtn.contentEditable = "false"
      row.after(editbtn);

      savebtn = document.createElement("span");
      savebtn.id = 'save1'
      savebtn.innerText = 'Enregistrer';
      savebtn.classList.add('save');
      savebtn.contentEditable = "false"
      row.after(savebtn);

      list.addEventListener('click', (e) => {
        if (e.target.id == 'save1') {
          document.getElementById("save1").remove();
          document.getElementById("edit1").remove();
          ligne.contentEditable = "false"

          var d1 = document.getElementById('description1');
          d1.insertAdjacentHTML('afterend', '<span id="bouton1" class="edit">Editer</span>');
          var map1 = new Object();
          map1[Identifiant] = document.getElementById("identifiant1").textContent
          map1[Nom] = document.getElementById("nom1").textContent
          map1[Quantite] = document.getElementById("quantite1").textContent
          map1[Prix] = document.getElementById("prix1").textContent
          map1[Description] = document.getElementById("description1").textContent

          fetch(`http://localhost:2000/updateproduits`, { method: "PUT", body: map1 })
            .then(reponse => {
              return reponse.json();
            })
            .then(reponseJson => {
              if (reponseJson.success) {
                alert("enregistrer avec success")
              }
              else {
                alert("Oupps, il y a eu une erreur: " + reponseJson.message);
              }
            })

        }
      })

      list.addEventListener('click', (e) => {
        if (e.target.id == 'edit1') {
          document.getElementById("save1").remove();
          document.getElementById("edit1").remove();
          ligne.contentEditable = "false"

          var d1 = document.getElementById('description1');
          d1.insertAdjacentHTML('afterend', '<span id="bouton1" class="edit">Editer</span>');

          id = document.getElementById('identifiant1')
          id.innerText = listeid[0]
          nom = document.getElementById('nom1')
          nom.innerText = listeNom[0]
          quantite = document.getElementById('quantite1')
          quantite.innerText = listeQuantite[0]
          prix = document.getElementById('prix1')
          prix.innerText = listePrix[0]
          dexcription = document.getElementById('description1')
          dexcription.innerText = listeDescription[0]

         

        }
      })

    }


    if (e.target.id == 'bouton2') {
      const ligne = document.getElementById('ligne2')
      ligne.contentEditable = "true"
      document.getElementById("bouton2").remove();

      row = document.getElementById("description2")
      editbtn = document.createElement("span");
      editbtn.id = 'edit2'
      editbtn.innerText = 'Annuler';
      editbtn.classList.add('annuler');
      editbtn.contentEditable = "false"
      row.after(editbtn);

      savebtn = document.createElement("span");
      savebtn.id = 'save2'
      savebtn.innerText = 'Enregistrer';
      savebtn.classList.add('save');
      savebtn.contentEditable = "false"
      row.after(savebtn);

      list.addEventListener('click', (e) => {
        if (e.target.id == 'save2') {
          document.getElementById("save2").remove();
          document.getElementById("edit2").remove();
          ligne.contentEditable = "false"

          var d1 = document.getElementById('description2');
          d1.insertAdjacentHTML('afterend', '<span id="bouton2" class="edit">Editer</span>');

          var map2 = new Object();
          map2[Identifiant] = document.getElementById("identifiant2").textContent
          map2[Nom] = document.getElementById("nom2").textContent
          map2[Quantite] = document.getElementById("quantite2").textContent
          map2[Prix] = document.getElementById("prix2").textContent
          map2[Description] = document.getElementById("description2").textContent

          fetch(`http://localhost:2000/updateproduits`, { method: "PUT", body: map2 })
            .then(reponse => {
              return reponse.json();
            })
            .then(reponseJson => {
              if (reponseJson.success) {
                alert("enregistrer avec success")
              }
              else {
                alert("Oupps, il y a eu une erreur: " + reponseJson.message);
              }
            })

        }
      })

      list.addEventListener('click', (e) => {
        if (e.target.id == 'edit2') {
          document.getElementById("save2").remove();
          document.getElementById("edit2").remove();
          ligne.contentEditable = "false"

          var d1 = document.getElementById('description2');
          d1.insertAdjacentHTML('afterend', '<span id="bouton2" class="edit">Editer</span>');

          id = document.getElementById('identifiant2')
          id.innerText = listeid[1]
          nom = document.getElementById('nom2')
          nom.innerText = listeNom[1]
          quantite = document.getElementById('quantite2')
          quantite.innerText = listeQuantite[1]
          prix = document.getElementById('prix2')
          prix.innerText = listePrix[1]
          dexcription = document.getElementById('description2')
          dexcription.innerText = listeDescription[1]

        }
      })

    }

    if (e.target.id == 'bouton3') {
      const ligne = document.getElementById('ligne3')
      ligne.contentEditable = "true"
      document.getElementById("bouton3").remove();

      row = document.getElementById("description3")
      editbtn = document.createElement("span");
      editbtn.id = 'edit3'
      editbtn.innerText = 'Annuler';
      editbtn.classList.add('annuler');
      editbtn.contentEditable = "false"
      row.after(editbtn);

      savebtn = document.createElement("span");
      savebtn.id = 'save3'
      savebtn.innerText = 'Enregistrer';
      savebtn.classList.add('save');
      savebtn.contentEditable = "false"
      row.after(savebtn);

      list.addEventListener('click', (e) => {
        if (e.target.id == 'save3') {
          document.getElementById("save3").remove();
          document.getElementById("edit3").remove();
          ligne.contentEditable = "false"

          var d1 = document.getElementById('description3');
          d1.insertAdjacentHTML('afterend', '<span id="bouton1" class="edit">Editer</span>');

          var map3 = new Object();
          map3[Identifiant] = document.getElementById("identifiant3").textContent
          map3[Nom] = document.getElementById("nom3").textContent
          map3[Quantite] = document.getElementById("quantite3").textContent
          map3[Prix] = document.getElementById("prix3").textContent
          map3[Description] = document.getElementById("description3").textContent

          fetch(`http://localhost:2000/updateproduits`, { method: "PUT", body: map3 })
            .then(reponse => {
              return reponse.json();
            })
            .then(reponseJson => {
              if (reponseJson.success) {
                alert("enregistrer avec success")
              }
              else {
                alert("Oupps, il y a eu une erreur: " + reponseJson.message);
              }
            })

        }
      })

      list.addEventListener('click', (e) => {
        if (e.target.id == 'edit3') {
          document.getElementById("save3").remove();
          document.getElementById("edit3").remove();
          ligne.contentEditable = "false"

          var d1 = document.getElementById('description3');
          d1.insertAdjacentHTML('afterend', '<span id="bouton3" class="edit">Editer</span>');

          id = document.getElementById('identifiant3')
          id.innerText = listeid[2]
          nom = document.getElementById('nom3')
          nom.innerText = listeNom[2]
          quantite = document.getElementById('quantite3')
          quantite.innerText = listeQuantite[2]
          prix = document.getElementById('prix3')
          prix.innerText = listePrix[2]
          dexcription = document.getElementById('description3')
          dexcription.innerText = listeDescription[2]

        }
      })

    }

    if (e.target.id == 'bouton4') {
      const ligne = document.getElementById('ligne4')
      ligne.contentEditable = "true"
      document.getElementById("bouton4").remove();

      row = document.getElementById("description4")
      editbtn = document.createElement("span");
      editbtn.id = 'edit4'
      editbtn.innerText = 'Annuler';
      editbtn.classList.add('annuler');
      editbtn.contentEditable = "false"
      row.after(editbtn);

      savebtn = document.createElement("span");
      savebtn.id = 'save4'
      savebtn.innerText = 'Enregistrer';
      savebtn.classList.add('save');
      savebtn.contentEditable = "false"
      row.after(savebtn);

      list.addEventListener('click', (e) => {
        if (e.target.id == 'save4') {
          document.getElementById("save4").remove();
          document.getElementById("edit4").remove();
          ligne.contentEditable = "false"

          var d1 = document.getElementById('description4');
          d1.insertAdjacentHTML('afterend', '<span id="bouton4" class="edit">Editer</span>');

          var map4 = new Object();
          map4[Identifiant] = document.getElementById("identifiant4").textContent
          map4[Nom] = document.getElementById("nom4").textContent
          map4[Quantite] = document.getElementById("quantite4").textContent
          map4[Prix] = document.getElementById("prix4").textContent
          map4[Description] = document.getElementById("description4").textContent

          fetch(`http://localhost:2000/updateproduits`, { method: "PUT", body: map4 })
            .then(reponse => {
              return reponse.json();
            })
            .then(reponseJson => {
              if (reponseJson.success) {
                alert("enregistrer avec success")
              }
              else {
                alert("Oupps, il y a eu une erreur: " + reponseJson.message);
              }
            })

        }
      })

      list.addEventListener('click', (e) => {
        if (e.target.id == 'edit4') {
          document.getElementById("save4").remove();
          document.getElementById("edit4").remove();
          ligne.contentEditable = "false"

          var d1 = document.getElementById('description4');
          d1.insertAdjacentHTML('afterend', '<span id="bouton4" class="edit">Editer</span>');

          id = document.getElementById('identifiant4')
          id.innerText = listeid[3]
          nom = document.getElementById('nom4')
          nom.innerText = listeNom[3]
          quantite = document.getElementById('quantite4')
          quantite.innerText = listeQuantite[3]
          prix = document.getElementById('prix4')
          prix.innerText = listePrix[3]
          dexcription = document.getElementById('description4')
          dexcription.innerText = listeDescription[3]

        }
      })

    }

    if (e.target.id == 'bouton5') {
      const ligne = document.getElementById('ligne5')
      ligne.contentEditable = "true"
      document.getElementById("bouton5").remove();

      row = document.getElementById("description5")
      editbtn = document.createElement("span");
      editbtn.id = 'edit5'
      editbtn.innerText = 'Annuler';
      editbtn.classList.add('annuler');
      editbtn.contentEditable = "false"
      row.after(editbtn);

      savebtn = document.createElement("span");
      savebtn.id = 'save5'
      savebtn.innerText = 'Enregistrer';
      savebtn.classList.add('save');
      savebtn.contentEditable = "false"
      row.after(savebtn);

      list.addEventListener('click', (e) => {
        if (e.target.id == 'save5') {
          document.getElementById("save5").remove();
          document.getElementById("edit5").remove();
          ligne.contentEditable = "false"

          var d1 = document.getElementById('description5');
          d1.insertAdjacentHTML('afterend', '<span id="bouton5" class="edit">Editer</span>');

          var map5 = new Object();
          map5[Identifiant] = document.getElementById("identifiant5").textContent
          map5[Nom] = document.getElementById("nom5").textContent
          map5[Quantite] = document.getElementById("quantite5").textContent
          map5[Prix] = document.getElementById("prix5").textContent
          map5[Description] = document.getElementById("description5").textContent

          fetch(`http://localhost:2000/updateproduits`, { method: "PUT", body: map5 })
            .then(reponse => {
              return reponse.json();
            })
            .then(reponseJson => {
              if (reponseJson.success) {
                alert("enregistrer avec success")
              }
              else {
                alert("Oupps, il y a eu une erreur: " + reponseJson.message);
              }
            })
        }
      })

      list.addEventListener('click', (e) => {
        if (e.target.id == 'edit5') {
          document.getElementById("save5").remove();
          document.getElementById("edit5").remove();
          ligne.contentEditable = "false"

          var d1 = document.getElementById('description5');
          d1.insertAdjacentHTML('afterend', '<span id="bouton5" class="edit">Editer</span>');

          id = document.getElementById('identifiant5')
          id.innerText = listeid[4]
          nom = document.getElementById('nom5')
          nom.innerText = listeNom[4]
          quantite = document.getElementById('quantite5')
          quantite.innerText = listeQuantite[4]
          prix = document.getElementById('prix5')
          prix.innerText = listePrix[4]
          dexcription = document.getElementById('description5')
          dexcription.innerText = listeDescription[4]

        }
      })

    }

    if (e.target.id == 'bouton6') {
      const ligne = document.getElementById('ligne6')
      ligne.contentEditable = "true"
      document.getElementById("bouton6").remove();

      row = document.getElementById("description6")
      editbtn = document.createElement("span");
      editbtn.id = 'edit6'
      editbtn.innerText = 'Annuler';
      editbtn.classList.add('annuler');
      editbtn.contentEditable = "false"
      row.after(editbtn);

      savebtn = document.createElement("span");
      savebtn.id = 'save6'
      savebtn.innerText = 'Enregistrer';
      savebtn.classList.add('save');
      savebtn.contentEditable = "false"
      row.after(savebtn);

      list.addEventListener('click', (e) => {
        if (e.target.id == 'save6') {
          document.getElementById("save6").remove();
          document.getElementById("edit6").remove();
          ligne.contentEditable = "false"

          var d1 = document.getElementById('description6');
          d1.insertAdjacentHTML('afterend', '<span id="bouton6" class="edit">Editer</span>');

          var map6 = new Object();
          map6[Identifiant] = document.getElementById("identifiant6").textContent
          map6[Nom] = document.getElementById("nom6").textContent
          map6[Quantite] = document.getElementById("quantite6").textContent
          map6[Prix] = document.getElementById("prix6").textContent
          map6[Description] = document.getElementById("description6").textContent

          fetch(`http://localhost:2000/updateproduits`, { method: "PUT", body: map6 })
            .then(reponse => {
              return reponse.json();
            })
            .then(reponseJson => {
              if (reponseJson.success) {
                alert("enregistrer avec success")
              }
              else {
                alert("Oupps, il y a eu une erreur: " + reponseJson.message);
              }
            })
        }
      })

      list.addEventListener('click', (e) => {
        if (e.target.id == 'edit6') {
          document.getElementById("save6").remove();
          document.getElementById("edit6").remove();
          ligne.contentEditable = "false"

          var d1 = document.getElementById('description6');
          d1.insertAdjacentHTML('afterend', '<span id="bouton6" class="edit">Editer</span>');

          id = document.getElementById('identifiant6')
          id.innerText = listeid[5]
          nom = document.getElementById('nom6')
          nom.innerText = listeNom[5]
          quantite = document.getElementById('quantite6')
          quantite.innerText = listeQuantite[5]
          prix = document.getElementById('prix6')
          prix.innerText = listePrix[5]
          dexcription = document.getElementById('description6')
          dexcription.innerText = listeDescription[5]

        }
      })

    }

  });

})

