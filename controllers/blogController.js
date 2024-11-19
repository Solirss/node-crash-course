const Blog = require('../models/blog.js')

const blog_index = (req, res) => {
  Blog.find().sort({ createdAt: -1 })
  .then((result) => {
    res.render('index', {title: 'All blogs', blogs: result})
  })
  .catch((err) => {
    console.log(err)
  })
}

module.exports = {
  blog_index
};