const knex = require("knex")({
    client: "sqlite3",
    connection: {
        filename:"./database/database.sqlite"
    },

    useNullAsDefault: false
})

//Requetes afficher les images sur la page html
function getProduits() {
    return knex("Produits");
}


function getProduitsSpecifique(name){
    return knex("Produits").where("Nom", name);
}
function voirCompte(id, code) {
    return knex("Admin").where("Nom_utilisateur", id).andWhere("Mot_de_passe", code);
}

function modifierVoiture(voiture, id) {
    return knex("Produits").where("Identifiant", id).set(voiture);
}



module.exports = {
    getProduits,
    getProduitsSpecifique,
    voirCompte,

    modifierVoiture
}

