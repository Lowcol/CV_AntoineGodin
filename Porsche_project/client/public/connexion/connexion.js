function verifierUtilisateur(event) {
    event.preventDefault();
    let formData = new URLSearchParams(new FormData(event.target));

    fetch(`http://localhost:2000/Voircompte`, { method: "POST", body : formData })
    .then(reponse => {
        return reponse.json();
    })
    .then(reponseJson => {
        if (reponseJson.success) {
            alert("Le compte a été vérifier avec succes")
            window.location.href = "http://localhost:3000/voirproduits"
        }
        else {
            alert("Oupps, il y a eu une erreur: " + reponseJson.message);
        }
    })
}