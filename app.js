const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes.js')

//express app
const app = express();

//connect to mangodb
const dbURI = 'mongodb+srv://test-user1:1234@cluster0.aza85.mongodb.net/nodeTest?retryWrites=true&w=majority&appName=Cluster0'
mongoose.connect(dbURI)
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));

//register view engine
app.set('view engine', 'ejs');
//in case where our views are not in views file
//app.set('views', 'myviews');
//-----------------------------------------------------------------------------


//mongoose and mongo sandbox routes
/*app.get('/add-blog', (req, res) => {
  const blog = new Blog({
    title: 'new blog',
    snippet: 'about my new blog',
    body: 'more about my new blog'
  });

  blog.save()
    .then((result) => {
      res.send(result)
    })
    .catch((err) => {
      console.log(err);
    });
});

//mongoose get all the data from mongodb
app.get('/all-blogs', (req, res) => {
  Blog.find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    })
});

app.get('/single-blog', (req, res) => {
  Blog.findById('673bf256759c673d326f0392')
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    })
})*/

//------------- start of middleware -----------------

//static files
app.use(express.static('public'));

//encoding middleware
app.use(express.urlencoded({ extended: true }));

//3rd party middleware
app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.redirect('/blogs')
});

//---------------end of middleware---------------------

app.get('/about', (req, res) => {
  res.render('about', { title: 'about' });
});

//blog routes
app.use('/blogs',blogRoutes);

//404 page
app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});