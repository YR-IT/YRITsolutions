import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

export interface BlogPostData {
  title: string;
  content: string;
  imageUrl: string; // Cloudinary image URL
  author?: string;
}

export interface Blog extends BlogPostData {
  _id: string;
  excerpt: string;
  image: string;
  category: string;
  readTime: string;
  views: number;
  comments: number;
  date: string;
}

// ✅ Create Blog Post
export const createBlogPost = async (data: BlogPostData) => {
  try {
    const payload = {
      title: data.title,
      content: data.content,
      image: data.imageUrl,
      author: data.author || 'Admin',
      category: 'business',
      date: new Date(),
      views: 0,
      comments: 0,
      excerpt: data.content.slice(0, 150) + '...',
      readTime: `${Math.ceil(data.content.split(' ').length / 200)} min read`,
    };

    console.log('➡️ Submitting blog to:', `${API_BASE_URL}/api/blogs`);
    const res = await axios.post(`${API_BASE_URL}/api/blogs`, payload);
    return res.data;
  } catch (error: any) {
    console.error('❌ Error submitting blog post:', error.response?.data || error.message);
    throw new Error(error.response?.data?.error || 'Failed to submit blog post');
  }
};

// ✅ Get All Blogs
export const getAllBlogs = async (): Promise<Blog[]> => {
  try {
    const res = await axios.get(`${API_BASE_URL}/api/blogs`);
    return res.data;
  } catch (error: any) {
    console.error('❌ Error fetching blogs:', error.response?.data || error.message);
    throw new Error('Failed to fetch blogs');
  }
};

// ✅ Get Blog By ID
export const getBlogById = async (id: string): Promise<Blog> => {
  try {
    const res = await axios.get(`${API_BASE_URL}/api/blogs/${id}`);
    return res.data;
  } catch (error: any) {
    console.error(`❌ Error fetching blog with ID ${id}:`, error.response?.data || error.message);
    throw new Error('Failed to fetch blog');
  }
};

// ✅ Update Blog
export const updateBlogPost = async (id: string, updatedData: Partial<Blog>): Promise<Blog> => {
  try {
    const res = await axios.put(`${API_BASE_URL}/api/blogs/${id}`, updatedData);
    return res.data.blog;
  } catch (error: any) {
    console.error(`❌ Error updating blog with ID ${id}:`, error.response?.data || error.message);
    throw new Error('Failed to update blog');
  }
};

// ✅ Delete Blog
export const deleteBlogPost = async (id: string): Promise<void> => {
  try {
    await axios.delete(`${API_BASE_URL}/api/blogs/${id}`);
  } catch (error: any) {
    console.error(`❌ Error deleting blog with ID ${id}:`, error.response?.data || error.message);
    throw new Error('Failed to delete blog');
  }
};
