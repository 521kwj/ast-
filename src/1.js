let esprima = require('esprima'); //将js代码转成抽象语法树
let estraverse = require('estraverse'); //遍历语法树
let escodegen = require('escodegen'); //将ast语法树转成js代码
let sourceCode = `function ast(a,b){return a+ b}`;
let ast = esprima.parseScript(sourceCode)
//修改函数名字或者变量名字其实就是在修改抽象语法树
estraverse.traverse(ast,{
  enter(path){
    
    console.log('enter',path.type)
    if(path.type == 'Identifier' && path.name == 'ast') path.name = 'runCode';

    if(path.type == 'Identifier' && path.name == 'a') path.name = 'aa';
    if(path.type == 'Identifier' && path.name == 'b') path.name = 'bb';
    
  }, 
  leave(path){
    console.log('leave',path.type)
  }
})
const r = escodegen.generate(ast)
console.log(r)