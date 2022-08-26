function fibonacci(number) {
    if (number === 1) return [1]
    if (number === 2) return [1, 1]
    
    let list = [1, 1]
    for (let i = 2; i < number; i++) {
        list.push(list[i - 1] + list[i - 2])
    }
    return list
}

console.log(fibonacci(6))