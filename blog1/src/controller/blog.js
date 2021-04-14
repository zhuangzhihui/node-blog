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

const newBlog = (blogData = {}) => {
    // blogData 是一个博客对象，包含title content 属性

    return {
        id: 3 // 表示新建博客，插入到博客列表的ID
    }
}

const updateBlog = (id, blogData = {}) => {
    // id 为要更新的博客ID
    // blogData 是一个博客对象，包含title content 属性
    return true
}

module.exports = {
    getList,
    getDetail,
    newBlog,
    updateBlog
}