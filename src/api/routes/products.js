const express = require('express');
const router = express.Router();



/* 
For read operations
*/
router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling GET requests to /products'
    });
} );

/* 
For create operations
*/

router.post('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling POST requests to /products'
    });
} );

/* 
For update operations
*/

router.put('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling PUT requests to /products'
    });
} );

/* 
For delete operations
*/
router.delete('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling Delete requests to /products'
    });
} );


/* 
For finding specific id
*/

router.get('/:productId', (req, res, next) =>{
    const id = req.params.productId;
    if (id === 'special') {
        res.status(200).json({
            message: 'You Found a Special ID',
            id: id
        });
    } else {
        res.status(200).json({
            message: 'You passed an ID',
            id: id
        });
    }
});


module.exports = router;

