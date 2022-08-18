let cars = ['Tesla', 'BMW', 'Audi', 'Bugati']

document.querySelector('#array').innerHTML = cars

let btnJoin = () => {
    document.querySelector('#array').innerHTML = cars.join(' ')
}

let btnPush = () => {
    cars.push('Ravon')
    document.querySelector('#array').innerHTML = cars.join(' ')
}

let btnPop = () => {
    cars.pop('')
    document.querySelector('#array').innerHTML = cars.join(' ')
}

let btnShift = () => {
    cars.shift('')
    document.querySelector('#array').innerHTML = cars.join(' ')
}

let btnUnshift = () => {
    cars.unshift('Nexia')
    document.querySelector('#array').innerHTML = cars.join(' ')
}

let btnSlice = () => {
    let newCars = cars.slice(0,cars.length - 1)
    document.querySelector('#array').innerHTML = newCars.join(' ')
}