const express = require("express");


const router = express.Router()

// Import the model (burger.js) to use its database functions.
const burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
    burger.all(data => {
        let burger = {
            burgers: data
        };
        console.log(burger);
        res.render("index", burger)
    });
});

router.post("/api/burger", function (req, res) {
    burger.create(req.body.burgerName, () => {
        res.end();
    });
});

router.put("/api/burger/:id", function (req, res) {
    burger.update(req.params.id, () => {
        res.end();
    });
})

router.delete("/api/burger/:id", function (req, res) {
    burger.delete(req.params.id, () => {
        res.end();

    });
});

// Export routes for server.js to use.
module.exports = router;
