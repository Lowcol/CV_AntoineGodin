const express = require("express");
const requeteKnex = require("./database/requeteKnex");
const cors = require("cors");
const PORT = process.env.PORT || 2000;
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: false }))

app.get("/produits", async (req, res) => {
    try {
        let produits = await requeteKnex.getProduits();
        res.status(200).json(produits);

    } catch (error) {
        res.status(500).json({
            success: false,
            erreur: error
        });
    }
})

app.get("/produits/:id", async (req, res) => {
    try {
        let produits = await requeteKnex.getProduitsSpecifique(req.params.id);
        res.status(200).json(produits);

    } catch (error) {
        res.status(500).json({
            success: false,
            erreur: error
        });
    }

})



app.post("/Voircompte", async (req, reponse) => {
    try {
        if (req.body.id || req.body.id !== "") {
            let compte = await requeteKnex.voirCompte(req.body.Utilisateur, req.body.Password);

            if (compte === 0) {
                return reponse.status(200).json({
                    success: false,
                    message: "Le Mot de passe ou le nom d'Utilisateur n'est pas bon"
                });
            } else {
                return reponse.status(200).json({
                    success: true,
                    message: "Le compte a été vérifier"
                });
            }
        }
    } catch (error) {
        return reponse.status(500).json({
            success: false,
            message: error
        });
    }
})


//Update lorsqu'on click sur le bouton enregistré
app.put("/updateproduits", async (req, reponse) => {
    try {
        let produits = {
            "Identifiant": req.body.Identifiant,
            "Nom": req.body.Nom,
            "Quantite": req.body.Quantite,
            "Prix": req.body.Prix,
            "Description": req.body.Description,
        };

        await requeteKnex.modifierVoiture(produits, produits.Identifiant);

        return reponse.status(200).json(
            {
                "success": true
            });

    } catch (error) {
        return reponse.status(500).json(
            {
                "success": false,
                "error": error
            });
    }
})



app.listen(PORT, () => {
    console.log(`Mon application roule sur le port ${PORT}`);
})