const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('./casaCriativa.sqlite')

db.serialize(function() {
  db.run(`
    CREATE TABLE IF NOT EXISTS ideas(
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      image TEXT,
      title TEXT,
      category TEXT,
      description TEXT,
      link TEXT
    );
  `)
/*
  const query = `
  INSERT INTO ideas(
    image,
    title,
    category,
    description,
    link
  ) VALUES (?,?,?,?,?);
  `

  const values = [
    "https://image.flaticon.com/icons/svg/2729/2729048.svg",
    "Recortes",
    "Criatividade",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex et consequuntur est doloribus illum fugit voluptatem ab repellat veniam adipisci atque fuga.",
    "https://google.com"
  ]

  db.run(query, values, function(err) {
    if (err) return console.log(err)

    // console.log(this)
  })
/*
  // DELETE ON DATABASE
  db.run(`DELETE FROM ideas WHERE id = ?`, [3], function(err) {
    if(err) return console.log(err)
    console.log("REGISTRO APAGADO COM SUCESSO!", this)
  })

  // SELECT ON DATABASE
  db.all(`SELECT * FROM ideas`, function(err, rows) {
    if (err) return console.log(err)

    console.log(rows)
  })
*/
})

module.exports = db