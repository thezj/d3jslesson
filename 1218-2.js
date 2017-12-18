let svg = d3.select('#chart')
    .append('svg')
    .attr('width', 500)
    .attr('height', 500)

let circle1 = svg.append('circle')
    .attr('cx', 100)
    .attr('cy', 100)
    .attr('r', 50)
    .style('fill', 'red')

//在1秒（1000毫秒）内将圆心坐标由100变为300

circle1.transition()
    .duration(1000)
    .attr('cx', 300)

let circle2 = svg.append('circle')
    .attr('cx', 100)
    .attr('cy', 200)
    .attr('r', 50)
    .style('fill', 'red')

//在1秒（1000毫秒）内将圆心坐标由100变为300

circle2.transition()
    .duration(1000)
    .attr('cx', 300)
    .style('fill', 'steelblue')

let circle3 = svg.append('circle')
    .attr('cx', 100)
    .attr('cy', 300)
    .attr('r', 50)
    .style('fill', 'red')

//在1秒（1000毫秒）内将圆心坐标由100变为300

circle3.transition()
    .duration(1000)
    .attr('cx', 300)
    .attr('r', 25)
    .ease(d3.easeBounceOut)
    .style('fill', 'steelblue')