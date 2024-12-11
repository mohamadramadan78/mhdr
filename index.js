// const fs = require('fs');
// const XLSX = require('xlsx');

// // قراءة الملف
// const workbook = XLSX.readFile('path/to/your/file.xlsx');

// // قراءة أول ورقة عمل
// const sheetName = workbook.SheetNames[0];
// const sheet = workbook.Sheets[sheetName];

// // تحويل البيانات إلى JSON
// const jsonData = XLSX.utils.sheet_to_json(sheet);
// console.log(jsonData);
const express = require('express')
const app = express()
const PORT =process.env.PORT ||3030;



app.get('/mouhamad ',  (req, res)=> {
    let data =[
        {id:1,name:'mhd'},
        {id:2,name:'akram'},
        {id:3,name:'wassim'}
    ];
  res.send("mouhamad ramadan")
})

app.listen(PORT ,()=>{
    console.log(`server start on port  ${PORT} `)
})
