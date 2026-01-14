const now = new Date()

console.log(now.getDay())

const map = new Map()
map.set('name','dhruv')
map.set('age','21')

console.log(map.get('name'))


//Creating a class
class Rectangle {
    constructor(width,height){
        this.width = width 
        this.height = height
    }
    area(){
        const area = this.width * this.height
        return area
    }
}
const rect = new Rectangle(2,5)
const area = rect.area()
console.log(area)