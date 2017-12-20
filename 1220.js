let width = 400
let height = 400
let svg = d3.select('#chart')
    .append('svg')
    .attr("width", width)
    .attr("height", height)
let dataset = [30, 10, 43, 55, 13]
let pie = d3.pie()
let piedata = pie(dataset)

let outerRadius = 150
let innerRadius = 0

let arc = d3.arc()
    .innerRadius(innerRadius)
    .outerRadius(outerRadius)

let arcs = svg.selectAll('g')
    .data(piedata)
    .enter()
    .append('g')
    .attr('transform', 'translate(200,200)')

let colors = d3.scaleOrdinal(d3.schemeCategory10)

arcs.append('path')
    .attr('fill', (d, i) => colors(i))
    .attr('d', (d, i) => arc(d))
arcs.append('text')
    .attr('transform', d => `translate(${arc.centroid(d)})`)
    .attr('text-anchor', 'middle')
    .text(d => d.data)