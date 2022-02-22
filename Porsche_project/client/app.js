const exp = require("constants");
const express = require("express");
const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.static("public"));


app.get("/porsche/:id", (req, reponse) =>{
    reponse.sendFile(__dirname + "/public/page_produits/page_produit.html");
})

app.get("/connexion", (req, reponse) =>{
    reponse.sendFile(__dirname + "/public/connexion/connexion.html");
})

app.get("/voirproduits", (req, reponse) =>{
    reponse.sendFile(__dirname + "/public/voir_liste_produits/voir_liste_produits.html");
})

app.listen(PORT, () => {
    console.log(`Mon application frontale roule sur le port ${PORT}`);
})