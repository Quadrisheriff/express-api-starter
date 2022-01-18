var express = require('express');
var router = express.Router();
var axios = require('axios');

router.get('/', (req, res, next) => {
    axios.get('https://s3.amazonaws.com/data-production-walltime-info/production/dynamic/walltime-info.json?now=1528962473468.679.0000000000873')
        .then(response =>
            res.json(response.data),
        )
        .catch(error =>
            next(error)
        );

})

module.exports = router;