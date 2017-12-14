let allp = d3.select('#chart') //d3 的选择器， 返回一个selection 对象,里面包含被选中的元素
    .selectAll('p')
    .text('hi d3') //修改selection中的元素的modifyiing函数
    .style('color', 'red') //修改selection中的元素的modifyiing函数
    .style('font-size', '24px') //修改selection中的元素的modifyiing函数

let newp = allp.data([{
        num: 1
    }, {
        num: 6
    }, {
        num: 4
    }]) // data join 连续给元素放入数据集 datum without joining
    .text((d, i) => `第${i}个元素，数据是${d.num}`)
    .attr('s', 'd')
    .property('scrollTop', 2) //这是设置的是dom元素作为dom对象的属性 比如scrollTop 等
    .append('p')
    .remove()

allp.sort((a, b) => {
    console.log(b)
    return a.num > b.num
})
allp.order() //重置初始化排序
allp.raise() //重新排序每个元素会到最后一个
allp.lower() //重新排序每个元素会到父级的第一个子元素之前