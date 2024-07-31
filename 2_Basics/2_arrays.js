const marvel_hero=["ironman","thor","hawkaye"]
const dc_hero=["superman","flash","batman"]

const combine_hero= marvel_hero.concat(dc_hero)
console.log(combine_hero);

const all_hero=[...dc_hero,...marvel_hero]
console.log(all_hero);

const another_array=[1,2,3,4,[8,8,[12,34,56,[78,67,45]]]]
const real_another_array=another_array.flat(Infinity)
console.log(real_another_array);
console.log(Array.isArray("faisal"));
console.log(Array.from("Faisal"));

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3));