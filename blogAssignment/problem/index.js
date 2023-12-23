// Write your code here

import { writeBlog, publishBlog } from './blogActions.js';
import readlineSync from 'readline-sync';

const blogFilePath = 'myblog.txt';
const userBlog = readlineSync.question('Enter your blog: ');

writeBlog(blogFilePath, userBlog);

publishBlog(blogFilePath);