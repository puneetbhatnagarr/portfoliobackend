const express = require('express')
const router = express.Router();
const contactinsert = require('../Controller/contactinsert');


router.post('/contactinsert',contactinsert.insertcontact);
router.get('/contactall',contactinsert.getcontact);





module.exports = router;

