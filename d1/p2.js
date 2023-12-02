let numstrs ={
    one:1,two:2,three:3,four:4,five:5,six:6,seven:7,eight:8,nine:9
}

function solve(input) {
    return input
    .split('\n').map(line => {
        let fm = line.match(new RegExp('[0-9]|'+Object.keys(numstrs).join('|')))[0]
        let lm = line.split``.reverse().join``.match(new RegExp('[0-9]|'+(Object.keys(numstrs).map(s=>s.split``.reverse().join``).join('|'))))[0].split``.reverse().join``;
        if (fm in numstrs)fm=numstrs[fm].toString();
        if(lm in numstrs)lm=numstrs[lm].toString();
        return +(fm+lm);
    }).reduce((a,b)=>a+b,0)
}

console.log(solve('INPUT'))