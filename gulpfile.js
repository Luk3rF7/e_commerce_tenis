const { series,parallel } = require('gulp')
const gulp =require('gulp')

/*  destruction para pega task */
const {  appHTML,appCSS,appJS,appIMG } = require('./src/gulpTasks/app')
const {  server,monitorarArquivos} = require('./src/gulpTasks/servidor')
const {  depsCSS,depsFonts} = require('./src/gulpTasks/deps')

      // * vamos definir como vai ser nosso workflow
module.exports.default = series(
  //vamos utilizar parallel
  parallel(
    //vamos jogar na series  os primeiro a ser executados
    series(appHTML,appCSS,appJS,appIMG),
   series(depsCSS,depsFonts)
  ),
  // depois que serem executado do parallel 
  //iniciamos o servidor com monitoramento
 server,
  monitorarArquivos)