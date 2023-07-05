
//CommonJs--every file is module bu default
//Modules--encapsulated code(only share minimum)

const Names=require('./4-names')
const {shree}=require('./4-names')
const sayhi=require('./5-utils')
const data=require('./6-alternative-flavor')
console.log(data)
require('./7-mind-geranade')

sayhi('susan')
sayhi(Names.john)
sayhi(shree)