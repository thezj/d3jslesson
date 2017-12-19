let p = d3.select('body').selectAll('p')
let dataset = [3, 6]


let updata = p.data(dataset)
let enter = updata.enter()
let exit = updata.exit()

updata.text(d => 'updata' + d)
    .on('click', function (d, i) {
        //D3 会把当前的事件存到 d3.event 对象
        console.log(d, d3.event.target, d3.select(this))
    })

exit.text(d => 'exit' + d)
setTimeout(_ => {
    exit.remove(d => 'exit' + d)
}, 1000)