const express = require('express')
const router = express.Router()
// 引入home
const home = require('./modules/home')
// 引入todos 模組
const todos = require('./modules/todos')

router.use('/', home)
router.use('/todos', todos)
module.exports = router 