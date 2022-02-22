window.onload = load;

function load() {
    const queryString = window.location.pathname
    const urlParams = new URLSearchParams(queryString);
    const param = urlParams.toString().slice(13).slice(0, -1);


    fetch("http://localhost:2000/produits/" + param)
        .then(blobProduits => {
            return blobProduits.json();
        })
        .then(produits => {

            produits.forEach(produit => {
                let ancrageTitre = document.getElementById('Title');
                titre = document.createElement("h1")
                const HTMLtitre = document.createTextNode(produit.Nom);
                titre.appendChild(HTMLtitre)
                ancrageTitre.appendChild(titre)


                let ancrageImage = document.querySelector("#Image");
                var img = document.createElement("img");
                img.id = produit.Nom;
                img.src = produit.Url;
                img.alt = produit.Nom;
                ancrageImage.appendChild(img)

                let ancragePrix = document.querySelector("#Prix");
                prix = document.createElement("h2")
                const HTMLprix = document.createTextNode("Prix total: " + produit.Prix + "$")
                prix.appendChild(HTMLprix)
                ancragePrix.appendChild(prix)

                let ancrageDescription = document.querySelector("#Description")
                description = document.createElement("p")
                const HTMLdescription = document.createTextNode(produit.Description)
                description.appendChild(HTMLdescription)
                ancrageDescription.appendChild(description)
            }

            )
        }
        )

}