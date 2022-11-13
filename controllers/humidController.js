const mysql = require('../database/db')

class MainController {

    async logHumid(req , res){
        console.log(req.params.humidity)
        console.log(req.params.deviceId)
        if(req.params.deviceID != null && req.params.humidity != null) {
            let deviceID = req.params.deviceID
            let humidity = req.params.humidity;
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
    
    async getLogs(req,res){
        console.log("Get Logs")
        console.log(req.params.deviceID)
        if(req.params.deviceID!=null){
            let deviceID = req.params.deviceID;
            var sql = `SELECT * FROM log_humid where device_id='${deviceID}'`
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

const humidController = new MainController()
module.exports = humidController;