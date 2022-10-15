const express = require('express')
const app = express()
const port = 8080
const fs=require('fs')
const path='./src/info.txt'



const getByRandomIndex =()=>{
  fs.promises.readFile(path).then((response)=>{
      const datos = JSON.parse(response)
      const total=datos.length
      let x = Math.random() * total;
      console.log(x)
      console.log("se Leyo el archivo")
      return(datos[x])
      }).catch((error)=>{
      console.log(error)
  })

}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

//devuelve todos los productos
app.get('/productos', (req, res) => {
  fs.promises.readFile(path).then((response)=>{
    const datos = JSON.parse(response)
    console.log("se Leyo el archivo")
    res.send(datos)
  })
})

//devuelve un producto aleatoriamente
app.get('/productoRandom', (req, res) => {
  fs.promises.readFile(path).then((response)=>{
    const datos = JSON.parse(response)
    const total=datos.length
    const x=Math.floor(Math.random() * total)
     res.send(datos[x])
})
})



const server= app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

server.on('error', error => console.log(`Error en el servidor ${error}`))

