const express = require('express');
// const humidController = require('../controllers/humidController');
const testControllers = require('../testControllers/controllers');
const router = express.Router();

// router.post('/logHumid/:deviceID/:humidity', humidController.logHumid);
// router.get('/getLogs/:deviceID', humidController.getLogs);

router.post('/logHumid/:deviceID/:humidity', testControllers.logHumid);
router.get('/getLogsHumid/:deviceID', testControllers.getLogsHumid);

router.post('/logAce/:deviceID/:acceleration', testControllers.logAce);
router.get('/getLogsAce/:deviceID', testControllers.getLogsAce);

router.post('/logGas/:deviceID/:gas', testControllers.logGas);
router.get('/getLogsGas/:deviceID', testControllers.getLogsGas);

router.post('/logTouch/:deviceID/:touch', testControllers.logTouch);
router.get('/getLogsTouch/:deviceID', testControllers.getLogsTouch);

router.post('/logFire/:deviceID/:fire', testControllers.logFire);
router.get('/getLogsFire/:deviceID', testControllers.getLogsFire);

module.exports = router;
