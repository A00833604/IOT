const mysql = require('../database/db')

class MainController {
    //Funcion para sensor de Humedad
    async logHumid(req , res){
        console.log(req.params.humidity)
        console.log(req.params.deviceId)
        if(req.params.deviceID != null && req.params.humidity != null) {
            let deviceID = req.params.deviceID
            let humidity = req.params.humidity;
            //Ingresar los valores a la BD
            var sql = `insert into log_humid (log_date, device_id, humid) values (now(), ${deviceID}, ${humidity});`
            mysql.query(sql, (error,data,fields) => {
                if(error) {
                    res.status(500)
                    res.send(error.message)
                } else {
                    console.log(data)
                    res.json({
                        status: 200,
                        message: `Log uploaded successfully: ${req.params.humidity}`,
                        affectedRows: data.affectedRows,
                    })
                }
            })
        } else {
          res.send('Por favor llena todos los datos!')
        }
    }
    async getLogsHumid(req,res){
        console.log("Get Logs")
        console.log(req.params.deviceID)
        if(req.params.deviceID!=null){
            let deviceID = req.params.deviceID;
            //Obtener los valores de la BD
            var sql = `SELECT * FROM log_humid`
            mysql.query(sql, (error, data, fields) => {
                if(error) {
                    res.status(500)
                    res.send(error.message)
                } else {
                    console.log(data)
                    console.log("test");
                    res.json({
                        data
                    })
                    
                }
            })
        }
    }

    //Funciones para sensor de Aceleración
    async logAce(req , res){
        console.log(req.params.acceleration)
        console.log(req.params.deviceId)
        if(req.params.deviceID != null && req.params.acceleration != null) {
            let deviceID = req.params.deviceID
            let acceleration = req.params.acceleration;
            //Ingresar los valores a la BD
            var sql = `insert into log_ace (log_date, device_id, ace) values (now(), ${deviceID}, ${acceleration});`
            mysql.query(sql, (error,data,fields) => {
                if(error) {
                    res.status(500)
                    res.send(error.message)
                } else {
                    console.log(data)
                    res.json({
                        status: 200,
                        message: `Log uploaded successfully: ${req.params.acceleration}`,
                        affectedRows: data.affectedRows,
                    })
                }
            })
        } else {
          res.send('Por favor llena todos los datos!')
        }
    }

    async getLogsAce(req,res){
        console.log("Get Logs")
        console.log(req.params.deviceID)
        if(req.params.deviceID!=null){
            let deviceID = req.params.deviceID;
            //Obtener los valores de la BD
            var sql = `SELECT * FROM log_ace`
            mysql.query(sql, (error, data, fields) => {
                if(error) {
                    res.status(500)
                    res.send(error.message)
                } else {
                    console.log(data)
                    res.json({
                        data
                    })
                }
            })
        }
    }

    //Funciones para sensor Gas
    async logGas(req , res){
        console.log(req.params.gas)
        console.log(req.params.deviceId)
        if(req.params.deviceID != null && req.params.gas != null) {
            let deviceID = req.params.deviceID
            let gas = req.params.gas
            var sql = `insert into log_gas (log_date, device_id, gas) values (now(), ${deviceID}, ${gas});`
            mysql.query(sql, (error,data,fields) => {
                if(error) {
                    res.status(500)
                    res.send(error.message)
                } else {
                    console.log(data)
                    res.json({
                        status: 200,
                        message: "Log uploaded successfully",
                        affectedRows: data.affectedRows
                    })
                }
            })
        } else {
          res.send('Por favor llena todos los datos!')
        }
    }
    
    async getLogsGas(req,res){
        console.log("Get Logs")
        console.log(req.params.deviceID)
        if(req.params.deviceID!=null){
            let deviceID = req.params.deviceID;
            var sql = `SELECT * FROM log_gas`
            mysql.query(sql, (error, data, fields) => {
                if(error) {
                    res.status(500)
                    res.send(error.message)
                } else {
                    console.log(data)
                    res.json({
                        data
                    })
                }
            })
        }
    }
    //Funciones sensor Touch
    async logTouch(req , res){
        console.log(req.params.touch)
        console.log(req.params.deviceId)
        if(req.params.deviceID != null && req.params.touch != null) {
            let deviceID = req.params.deviceID
            let touch = req.params.touch
            var sql = `insert into log_touch (log_date, device_id, touch) values (now(), ${deviceID}, ${touch});`
            mysql.query(sql, (error,data,fields) => {
                if(error) {
                    res.status(500)
                    res.send(error.message)
                } else {
                    console.log(data)
                    res.json({
                        status: 200,
                        message: "Log uploaded successfully",
                        affectedRows: data.affectedRows
                    })
                }
            })
        } else {
          res.send('Por favor llena todos los datos!')
        }
    }
    
    async getLogsTouch(req,res){
        console.log("Get Logs")
        console.log(req.params.deviceID)
        if(req.params.deviceID!=null){
            let deviceID = req.params.deviceID;
            var sql = `SELECT * FROM log_touch`
            mysql.query(sql, (error, data, fields) => {
                if(error) {
                    res.status(500)
                    res.send(error.message)
                } else {
                    console.log(data)
                    res.json({
                        data
                    })
                }
            })
        }
    }
    //Funciones sensore fire
    async logFire(req , res){
        console.log(req.params.fire)
        console.log(req.params.deviceId)
        if(req.params.deviceID != null && req.params.fire != null) {
            let deviceID = req.params.deviceID
            let fire = req.params.fire
            var sql = `insert into log_fire (log_date, device_id, fire) values (now(), ${deviceID}, ${fire});`
            mysql.query(sql, (error,data,fields) => {
                if(error) {
                    res.status(500)
                    res.send(error.message)
                } else {
                    console.log(data)
                    res.json({
                        status: 200,
                        message: "Log uploaded successfully",
                        affectedRows: data.affectedRows
                    })
                }
            })
        } else {
          res.send('Por favor llena todos los datos!')
        }
    }
    
    async getLogsFire(req,res){
        console.log("Get Logs")
        console.log(req.params.deviceID)
        if(req.params.deviceID!=null){
            let deviceID = req.params.deviceID;
            var sql = `SELECT * FROM log_fire`
            mysql.query(sql, (error, data, fields) => {
                if(error) {
                    res.status(500)
                    res.send(error.message)
                } else {
                    console.log(data)
                    res.json({
                        data
                    })
                }
            })
        }
    }
}

const testController = new MainController()
module.exports = testController;