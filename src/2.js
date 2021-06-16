let babel = require('@babel/core'); //用来生成语法树并且遍历转换语法树
let types = require('babel-types'); //用来生成新的节点，或者判断某个节点

let sourceCode = `const sum = (a,b)=>{return a+b}`;
let ArrowPlugin = {
  visitor: {

  }
}

babel.transform(sourceCode,{
  plugins:[
    ArrowPlugin
  ]
})