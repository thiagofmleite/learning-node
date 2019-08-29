module.exports = app => {
  app.get('/', function(req, res, next) {
    res.send(`
        <html>
        <head>
        <meta charset="utf-8">
        </head>
        <body>
        <h1> Casa do Código </h1>
        </body>
        </html>
        `)
  })

  app.get('/livros', function(req, res, next) {
    res.marko(require('../views/livros/lista/lista.marko'), {
      livros: [
        {
          id: 1,
          title: 'Node Fundamentals'
        },
        {
          id: 2,
          title: 'Node Advanced'
        }
      ]
    })
  })
}
