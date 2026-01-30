let map = new Map()

map.set('1','str1')
map.set(1,'num1')
map.set(true , 'boolean1')

alert(map.get(1));
alert(map.get('1'));

alert(map.size) // return element count

map.has(1) // retrun true if key exist
map.delete('1') // delete key
map.clear() 

// Sets - stores unique entries allowed only without keys 
let set = new Set()

let dhruv = {name : "dhruv"};
let john = {name : "john"}
let doe = {name : "doe"}

set.add(dhruv)
set.add(john)
set.add(dhruv)
set.add(doe)
set.add(john)

set.size // returns 3

//iteration over set using for..of
for (let user of set){
    console.log(user.name)
}

//iteration using forEach
set.forEach((value,valueAgain,set) => {
    console.log(value)
})