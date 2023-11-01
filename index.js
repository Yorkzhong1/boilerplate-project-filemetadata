var express = require('express');
var app = express();
var cors = require('cors');
require('dotenv').config()
let bodyParser = require('body-parser')
const multer = require('multer')


const upload = multer({ dest: 'uploads/'});



app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

app.post('/api/fileanalyse',upload.single('upfile'),(req,res)=>{
  console.log('uploading file...')
  res.json({
    name:req.file.originalname,
    type:req.file.mimetype,
    size:req.file.size
  })
  // res.json({filename:req.file.filename})
})



const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});
