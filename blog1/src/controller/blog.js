const getList = (author, keyword) => {
    // 先返回假数据（格式是正确的）
    return [
        {
            id: 1,
            title: '标题A',
            content: '内容A',
            createTime: 1617884333034,
            author: '张三'
        },
        {
            id: 2,
            title: '标题B',
            content: '内容B',
            createTime: 1617884333044,
            author: '李四'
        }
    ]
}

const getDetail = (id) => {
    // 先返回假数据（格式是正确的）
    return {
        id: 1,
        title: '标题A',
        content: '内容A',
        createTime: 1617884333034,
        author: '张三'
    }
}

module.exports = {
    getList,
    getDetail
}