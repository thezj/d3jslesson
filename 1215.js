let svg = d3.select('#chart')
    .append('svg')
    .attr('width', 500)
    .attr('height', 500)

let dataset = [10, 20, 30, 40, 33, 24, 12, 5]

let xScale = d3.scaleBand()
    .domain(d3.range(dataset.length))
    .range([0, 360])

console.log(xScale.step())

let yScale = d3.scaleLinear()
    .domain([0, d3.max(dataset)])
    .range([360, 0])

console.log(yScale(39))
console.log(yScale(2))

let xAxis = d3.axisBottom(xScale),
    yAxis = d3.axisLeft(yScale)
svg.append('g')
    .attr('class', 'axis')
    .attr('transform', 'translate(30,380)')
    .call(xAxis)

svg.append('g')
    .attr('class', 'axis')
    .attr('transform', 'translate(30,20)')
    .call(yAxis)

let rectpadding = 10

let rects = svg.selectAll('.MyRect')
    .data(dataset)
    .enter()
    .append('rect')
    .attr('class', 'MyRect')
    .attr('transform', `translate(30,20)`)
    .attr('x', (d, i) => xScale(i) + rectpadding / 2)
    .attr('width', xScale.step() - rectpadding)
    .attr('height', 0)
    .attr('y', (d, i) => {
        let min = yScale.domain()[0]
        return yScale(min)
    })
    .attr('fill', 'steelblue')
    .on('mouseover', function (d, i) {
        d3.select(this)
            .transition()
            .duration(100)
            .attr('fill', 'yellow')
    })
    .on('mouseout', function (d, i) {
        d3.select(this)
            .transition()
            .duration(500)
            .attr('fill', 'steelblue')
    })
    .transition()
    .delay((d, i) => i * 200)
    .duration(1000)
    .ease(d3.easeBounceOut)
    .attr('y', (d, i) => yScale(d))
    .attr('height', d => 400 - yScale(d) - 40)




let texts = svg.selectAll('.MyText')
    .data(dataset)
    .enter()
    .append('text')
    .attr('class', 'MyText')
    .attr('transform', `translate(30,20)`)
    .attr('x', (d, i) => xScale(i) + rectpadding / 2)
    .attr('dx', _ => (xScale.step() - rectpadding) / 2)
    .attr('dy', _ => 20)
    .text(d => d)
    .attr('y', (d, i) => yScale(0))
    .transition()
    .delay((d, i) => i * 200)
    .duration(1000)
    .ease(d3.easeBounceOut)
    .attr('y', (d, i) => yScale(d))