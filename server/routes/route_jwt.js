const express =require('express');
const router = express.Router();
const passport = require('passport');

router.get('/me', passport.authenticate('jwt', { session: false }), (req, res) => {
    return res.json({
        _id: req.user.id,
        email: req.user.email
    });
});

module.exports = router;