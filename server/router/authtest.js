const express = require('express')
const router = express.Router(); // 라우터 분리
const checker= require('../jwt/tokenAuth')

router.get('/',checker.isAuthenticatedUser)

module.exports = router;