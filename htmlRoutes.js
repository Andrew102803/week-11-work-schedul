const path = require('path');
//checks path i wrote
const router = require('express').Router();

//works with the html file
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'))
})

//sends erorr messaes if somthing is wrong EQHFKeqajfhkjEQBAFHewghjfe
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
})

module.exports = router; //tired