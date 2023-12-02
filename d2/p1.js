// @ts-nocheck

/* parsing */
function common(input) {
    return input
        .split('\n')
        .map(game => {
            let [id, showings] = game.split(': ');
            id = +(id.replace("Game ", ""));

            showings = showings.split('; ').map(showing => {
                showing = showing.split(', ');

                let red, green, blue;

                for (const c of showing) {
                    let [n, ident]=c.split(' ');
                    eval(`${ident}=${n}`);
                }

                red ??=0; green??=0; blue??=0;

                return [red, green, blue];
            });

            return [id,showings]
        })
}

function solvep1(input) {
    const [rmax,gmax,bmax] = [12,13,14];
    return common(input)
        .filter(([_id, showings]) => !showings.some(([r,g,b])=>r>rmax||g>gmax||b>bmax))
        .map(([id,_])=>id).reduce((a,b)=>a+b,0);
}

const IN = `Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue
Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red
Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red
Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green`;

console.log(solvep1(IN));