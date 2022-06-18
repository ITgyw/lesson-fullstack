const city = {
    name: '鄱阳县',
    population: '100万'
}
const location = {
    longitude: '115.937726',
    latitude: '28.55722'
}
// es6   Object.assgin()
const hometown = {
    ...city,
    ...location
}
console.log(hometown)