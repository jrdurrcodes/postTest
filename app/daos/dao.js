const con = require('../config/dbconfig')

const dao = {
    table: 'user',

    findAll: (res, table)=> {
        con.execute(
            `SELECT * FROM ${table};`,
            (error, rows)=> {
                if (!error) {
                    if (rows.length === 1) {
                        res.json(...rows)
                    } else {
                        res.json(rows)                      
                    }
                } else {
                    console.log('Dao Error: ',error)
                }
            }
        )
    },

    findById: (res, table, id)=> {
        con.execute(
            `SELECT * FROM ${TABLE} WHERE ${table}_id $ {id};`,
            (error, rows)=> {
                if (!error) {
                    if (rows.length === 1) {
                        res.json(...rows)
                    } else {
                        res.json(rows)                      
                    }
                } else {
                    console.log('Dao Error: ',error)
                }
        })
    },

    create: (req, res, table)=> {
        console.log(req.body)
    }
    
}
    



module.exports = dao