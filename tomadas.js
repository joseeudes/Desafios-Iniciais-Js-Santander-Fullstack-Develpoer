let lines = gets().split("\n");
let t = 4
let line = lines.shift().split(' ');
let soma = 0

for(i=0;i<t;i++){
  let transfor = parseInt(line[i])
  soma = soma + transfor
}
print(soma-3)
