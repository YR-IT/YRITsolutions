import express from 'express';
import Blog from '../models/Blog.js';

const router = express.Router();

// GET all blogs
router.get('/', async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    res.status(200).json(blogs);
  } catch (err) {
    console.error('❌ Error fetching blogs:', err);
    res.status(500).json({ error: 'Failed to fetch blog posts' });
  }
});

// GET single blog by ID
router.get('/:id', async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ error: 'Blog not found' });
    res.status(200).json(blog);
  } catch (err) {
    console.error('❌ Error fetching blog:', err);
    res.status(500).json({ error: 'Failed to fetch blog post' });
  }
});

// CREATE a new blog
router.post('/', async (req, res) => {
  try {
    const {
      title,
      content,
      excerpt,
      author,
      image,
      category,
      readTime,
      date
    } = req.body;

    if (!title || !content || !image) {
      return res.status(400).json({ error: 'Title, content, and image are required' });
    }

    const newBlog = new Blog({
      title,
      content,
      excerpt: excerpt || content.slice(0, 150) + '...',
      author: author || 'Admin',
      image,
      category: category || 'General',
      readTime: readTime || `${Math.ceil(content.split(' ').length / 200)} min read`,
      views: 0,
      comments: 0,
      date: date || new Date()
    });

    await newBlog.save();

    res.status(201).json({ message: '✅ Blog created successfully', blog: newBlog });
  } catch (err) {
    console.error('❌ Error creating blog:', err);
    res.status(500).json({ error: 'Failed to create blog post' });
  }
});

// UPDATE blog by ID
router.put('/:id', async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ error: 'Blog not found' });

    const fields = ['title', 'content', 'excerpt', 'author', 'image', 'category', 'readTime', 'date'];
    fields.forEach(field => {
      if (req.body[field] !== undefined) blog[field] = req.body[field];
    });

    const updatedBlog = await blog.save();
    res.status(200).json({ message: '✅ Blog updated successfully', blog: updatedBlog });
  } catch (err) {
    console.error('❌ Error updating blog:', err);
    res.status(500).json({ error: 'Failed to update blog post' });
  }
});

// DELETE blog by ID
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Blog.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: 'Blog not found' });

    res.status(200).json({ message: '🗑️ Blog deleted successfully' });
  } catch (err) {
    console.error('❌ Error deleting blog:', err);
    res.status(500).json({ error: 'Failed to delete blog post' });
  }
});

export default router;
