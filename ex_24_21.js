var funcs = [];

for (var i = 0; i < 3; i++){
    funcs[i] = (function (id) { // 1
        return function(){
            return id; 
        };
    }(i));

}


for (var j = 0; j < funcs.length; j++){
    console.log(funcs[j]());
}