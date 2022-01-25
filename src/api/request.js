var express = require('express');
var router = express.Router();
var axios = require('axios');
var FormData = require('form-data');
var fs = require('fs');
const multer = require("multer");
const getStream = require('get-stream')
const storage = multer.memoryStorage()
const upload = multer({ storage: storage })

router.post('/upload', upload.single("file"), async function (req, res) {

    const form = new FormData();
    const file = req.file;
    form.append('file', file.buffer, file.originalname);
    
    await axios.post('https://store1.gofile.io/uploadFile', form, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
        .then(response =>
            res.json(response.data)
        )
        .catch(error =>
            res.json(error.message)
        );

})

module.exports = router;