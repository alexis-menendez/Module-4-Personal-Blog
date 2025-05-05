// Module-4-Personal-Blog/js/blog.js

// Select main element and back button element
const mainElement = document.querySelector('main');
const backButton = document.getElementById('back');

// Build and append elements to the DOM
function createElement(tag, className, textContent = '') {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (textContent) element.textContent = textContent;
  return element;
}

// "No blog posts" message
function displayNoPostsMessage() {
  const message = createElement('p', 'no-posts', 'No Blog posts yet...');
  mainElement.appendChild(message);
}

// Render the list of blog posts
function renderBlogList() {
    let blogPosts = localStorage.getItem('blogPosts');
    blogPosts = blogPosts ? JSON.parse(blogPosts) : [];
  
    // Clear previous content
    mainElement.innerHTML = '';
  
    // Handle empty array or undefined
    if (!Array.isArray(blogPosts) || blogPosts.length === 0) {
      displayNoPostsMessage();
      return;
    }
  
    const ul = createElement('ul', 'blog-list');
  
    blogPosts.forEach((post) => {
      const li = createElement('li', 'blog-post');
      const article = createElement('article', 'card');
      const title = createElement('h2', '', post.title);
      const content = createElement('blockquote', '', post.content);
      const author = createElement('p', '', `By: ${post.username}`);
  
      article.appendChild(title);
      article.appendChild(content);
      article.appendChild(author);
      li.appendChild(article);
      ul.appendChild(li);
    });
  
    mainElement.appendChild(ul);
  }

// Event listener to back button
backButton.addEventListener('click', () => {
  redirectPage('index.html');
});

// Render the blog posts on page load
renderBlogList();
