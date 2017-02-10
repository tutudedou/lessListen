console.log("helloworld");

var fs=require("fs");
var path=require("path");
var less=require("less");
//监视文件
fs.watchFile(path.join(__dirname,"./less/style.less"),{interval:500},function(curr,prev){
    fs.readFile(path.join(__dirname,"./less/style.less"),"utf-8",function (err,data) {
        if(err){
            throw err;
        }
        less.render(data,function(err,data){
            if(err){
                throw err;
            }
            console.log(data);
            fs.writeFile(path.join(__dirname,"./less/style.css"),data.css,function(err){
                if(err){
                    throw err;
                }
                console.log("文件编译成功");
            })
        })
    })
});


