const fs = require('fs')
const path = require('path')

// callback 方式获取一个文件的内容
function getFileContent(fileName, callback) {
    const fullFileName = path.resolve(__dirname, 'files', fileName)
    fs.readFile(fullFileName, (err, data) => {
        if (err) {
            console.error(err)
            return
        }
        callback(
            JSON.parse(data.toString())
        )
    })
}

// 测试 callback-hell 此时文件结构只有三层，但如果有很多层，那么将陷入 callback回调地狱
getFileContent('a.json', aData => {
    console.log('a data', aData)
    getFileContent(aData.next, bData =>{
        console.log('b Data', bData)
        getFileContent(bData.next, cData => {
            console.log('c Data', cData)
        })
    })
})