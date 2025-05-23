# Personal Blog
This week's Challenge requires you to modify starter code to complete a personal blog. It includes building a content form, dynamically rendering blog posts, and implementing a light/dark mode toggle. As you code, you'll gain practical JavaScript experience, explore the Document Object Model's power, and set the stage for more advanced tasks.

# User Story
AS A marketing student
I WANT a personal blog
SO THAT I can showcase my thoughts and experiences.

# Acceptance Criteria
GIVEN a personal blog
WHEN I load the app
THEN I am presented with the landing page containing a form with labels and inputs for username, blog title, and blog content
WHEN I try to submit a form without a username, title, or content
THEN I am presented with a message that prompts me to complete the form.
WHEN I submit the form
THEN blog post data is stored to local storage
WHEN the form submits
THEN I am redirected to the posts page
WHEN I view the posts page
THEN I am presented with a header, a light mode/dark mode toggle, and a "Back" button
WHEN I click the light mode/dark mode toggle
THEN the page content's styles update to reflect the selection
WHEN I click the "Back" button
THEN I am redirected back to the landing page where I can input more blog entries
WHEN I view the main content
THEN I am presented with a list of blog posts that are pulled from local storage
WHEN I view local storage
THEN I am presented with a JSON array of blog post objects, each including the post author's username, title of the post, and post's content
WHEN I take a closer look at a single blog entry in the list
THEN I can see the title, the content, and the author of the post

# Grading Requirements
This Challenge is graded based on the following criteria:

# Landing Page 35%
The landing page should contain the following HTML (5 pts):
A form element that contains the following:
An input element whose label and id are username.
An input element whose label and id are title.
A textarea element whose label and id are content.
A p element whose id is error.
The form must use the following logic:
Display the error message "Please complete the form." when the form is submitted with empty fields. (10 pts)
Store form data in local storage when submitted with valid data. (10 pts)
Blog post objects in local storage must contain username, title, and content properties. (5 pts)
Redirect to the blog page when valid data is submitted. (5 pts)

# Blog Page HTML 10%
The blog page must contain the following HTML:
A header element that contains (5 pts):
A light mode/dark mode toggle. The toggle element can be anything you like, but the id must be toggle.
A "Back" button with an id of back.
A main element. (5 pts)

# Toggle Logic 20%
When the light mode/dark mode toggle is clicked:
The styles of the page change to match the mode. (10 pts)
The --circle-color attribute changes to match the mode. (10 pts)

# Blog Post Logic 35%
The Blog Post page must perform the following:
Render blog posts to the page with data pulled from localStorage. (10 pts)
Rendered blog posts must include the author's username, and the post's title and content. (10 pts)
If no blog posts are found in localStorage, display a message that states: "No Blog posts yet...". (10 pts)
Redirect the user to the landing page when the "Back" button is clicked. (5 pts)

# How to Submit the Challenge
Follow the link below to open this auto-graded assignment in a new tab. Once you have completed the assignment on the Ed platform, submit it, and you will return to Bootcamp Spot.

# note
You are allowed to miss up to two Challenge assignments and still earn your certificate. If you complete all Challenge assignments, your lowest two grades will be dropped. If you wish to skip this assignment, click Next, and move on to the next Module.

# important
No matter how difficult the course becomes, you must always turn in original work. Plagiarism is not tolerated. If your instructional or support staff determine that you have plagiarized work, your Student Success Advisor will determine the appropriate course of action based on university policy. Such actions may include, but are not limited to, a documented plagiarism discussion, an incomplete or failing grade assignment, or ineligibility for graduation.

---

## Contact

### [**Alex Menendez**](https://alex-menendez.onrender.com/) – Junior Developer, Junior Project Manager, and Junior UI/UX Designer

- **Website**: [Crafted-By-Alex](https://alex-menendez.onrender.com/)
- **LinkedIn**: [in/alex-d-menendez](https://www.linkedin.com/in/alex-d-menendez/)
- **GitHub**: [alexis-menendez](https://github.com/alexis-menendez)
- **Email**: [alexis.menendez@austincc.edu](https://alex-menendez.onrender.com/contact)

