const route = require('express').Router()
const Table = require('./database').Code
const path = require('path')

route.get('/add_entry', (req, res) => {
  res.sendFile(path.join(__dirname, './add_holiday.html'))
})
route.get('/manage_entry',  (req, res) => {
  res.sendFile(path.join(__dirname, './manage_holiday.html'))
})
route.get('/edit_entry',  (req, res) => {
  res.sendFile(path.join(__dirname, './edit_holiday.html'))
})
route.get('/css', (req, res) => {
  res.sendFile(path.join(__dirname, './holiday.css'))
})
route.get('/css2', (req, res) => {
  res.sendFile(path.join(__dirname, './abc.css'))
})
route.get('/css2', (req, res) => {
  res.sendFile(path.join(__dirname, './main.css'))
})
route.get('/api/holiday',  (req, res) => {
  console.log(req.query.id)
  
  if (req.query.id > 0) {
    Table.findOne({ where: { id: req.query.id } })
      .then((emps) => {
        
        res.status(200).send(emps)
      })
      .catch((err) => {
        console.log(err)
        return res.send({
          message: "Could not retrive users"
        })
      })
  } else {
    Table.findAll()
      .then((emps) => {
        
        res.status(200).send(emps)
      })
      .catch((err) => {
        console.log(err)
        return res.send({
          message: "Could not retrive users"
        })
      })
  }



})
route.post('/add_holpost',  (req, res) => {
  console.log("Hey")
  Table.create({
    name: req.body.name,
    des: req.body.des,
    source: req.body.source,
    date: req.body.date,
    topic: req.body.topic,
    code: req.body.code,
    
  }).then((hol) => {
    console.log("Entry Created Successfully !")
    return res.send({ message: 'true' })

  }).catch((err) => {
    console.log(err)
    return res.send({
      message: "Some Error Occured in our Database ! "
    })
  })
})
route.post('/edit_holpost',  (req, res) => {
  console.log(req.query.id + " IN EDIT")
  var password = passwordi
  Table.update({
    name: req.body.name,
    des: req.body.des,
    source: req.body.source,
    date: req.body.date,
    topic: req.body.topic,
    code: req.body.code,
  }, { where: { id: req.query.id } }).then((user) => {
    console.log("Entry Edited Successfully !")
    return res.send({ message: 'true' })

  }).catch((err) => {
    console.log(err)
    return res.send({
      message: "Could not retrive data"
    })
  })
})
route.post('/delete',  (req, res) => {
  console.log(req.query.id + " IN Delete")
  Table.destroy({
    where: {
      id: req.query.id
    }
  }).then((user) => {
    console.log("Enry Deleted Successfully !")
    return res.send({ message: 'true' })

  }).catch((err) => {
    console.log(err)
    return res.send({
      message: "Could not retrive data !"
    })
  })
})

module.exports = route