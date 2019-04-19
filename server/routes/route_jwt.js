const express =require('express');
const router = express.Router();
const passport = require('passport');

router.get('/me', passport.authenticate('jwt', { session: false }), (req, res) => {
    return res.json({
        user_id: req.user.user_id,
        // user_password: req.user.user_password,
        user_name : req.user.user_name
    });
});

module.exports = router;