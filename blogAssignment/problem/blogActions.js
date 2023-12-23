// Write your code here

import fs from 'fs';

const writeBlog = (filePath, userBlog) => {
  try {
    fs.writeFileSync(filePath, userBlog);
    // console.log('Blog has been successfully saved to', filePath);
  } catch (error) {
    console.error('Error saving the blog:', error.message);
  }
};

const publishBlog = (filePath) => {
  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    console.log( content);
    return content;
  } catch (error) {
    console.error('Error publishing the blog:', error.message);
    return null;
  }
};

export { writeBlog, publishBlog };