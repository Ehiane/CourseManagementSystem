const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./database/cmsdb.sqlite');


// open the database
let sql = `SELECT * FROM USER WHERE username=? and password=?`;

function getRow(sql, values) {
    return new Promise((resolve, reject) => {
        // username=? == subu, password=> == 1234
        db.get(sql, values, (err, row) => {
            if (err) {
                reject(err);
            }
            else{
                resolve(row)
            }
        });
    })
}

async function getRowTest(){
    // getRow(sql, ["subu", "1234"]).then((row) => console.log(row))
    const row = await getRow(sql, ["subu", "1234"])
    console.log(row)
}

getRowTest().then(() => console.log("Query Completed"))

module.exports = {getRow}