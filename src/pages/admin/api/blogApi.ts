import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000'; // match backend port

export interface Blog {
  _id: string;
  title: string;
  content: string;
  image: string; // Cloudinary or base64 string
  author: string;
  createdAt: string;
  updatedAt: string;
}

// ✅ Create Blog Post
export const createBlogPost = async (data: Omit<Blog, "_id" | "createdAt" | "updatedAt">) => {
  try {
    const res = await axios.post(`${API_BASE_URL}/api/blogs`, data);
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
    return res.data;
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
