let pets = ['cat', 'dog', 'rat']

for (let i = 0; i < pets.length;){
    pets[i] = pets[i] + 's'
    i++
}
console.log(pets)