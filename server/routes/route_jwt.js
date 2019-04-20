const express =require('express');
const router = express.Router();
const passport = require('passport');

router.get('/me', passport.authenticate('jwt', { session: false }), (req, res) => {
    return res.json({
        id: req.user.id,
        name: req.user.name,
        email: req.user.email
    });
});
module.exports = router;