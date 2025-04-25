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
        //console.log(req.body)
        if (Object.keys(req.body).length === 0) {
            res.json({
                "error": true,
                "message": "NO fields to create"
            })
        } else {
            const fields = Object.keys(req.body)
            const values = Object.values(req.body)

            con.execute(
                `INSERT INTO ${table}  SET ${fields.join(' = ?, ')} = ?;`,
                values,
                (error, dbres)=> {
                    if(!error) { 
                        res.json({
                            Last_id: dbres.insertId,
                        
                        })
                    } else {
                        console.log('DAO Error (error posting): ', error)
                    }
                }
            )
        }
    }  
}

    



module.exports = dao