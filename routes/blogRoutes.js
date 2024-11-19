const express = require('express')
const router = express.Router();
const Blog = require('../models/blog.js')
const blogController = require('../controllers/blogController.js')

//--------------blog routes using mongoDB--------------
/*router.get('/', (req, res) => {
  Blog.find().sort({ createdAt: -1 })
    .then((result) => {
      res.render('index', {title: 'All blogs', blogs: result})
    })
    .catch((err) => {
      console.log(err)
    })
});*/

//using controller for router.get
router.get('/', blogController.blog_index);

//uploading new blog (POST)
router.post('/', (req, res) => {
  const blog = new Blog(req.body);

  blog.save()
    .then((result) => {
      res.redirect('/blogs');
    })
    .catch((err) => {
      console.log(err);
    })
}); 

router.get('/create', (req, res) => {
  res.render('create', { title: 'create' });
});

//routing into specific id
router.get('/:id', (req, res) => {
  const id = req.params.id;
  Blog.findById(id)
    .then(result => {
      res.render('details', {blog: result, title: 'Blog Details'});
    })
    .catch((err) => {
      console.log(err);
    })
})

//deleting specific blogpost using id
router.delete('/:id', (req, res) => {
  const id = req.params.id;

  Blog.findByIdAndDelete(id)
    .then(result => {
      //re cannot redirect because the request is done through frontend
      res.json({ redirect: '/blogs' });
    })
    .catch(err => {
      console.log(err);
    })
});


module.exports = router;