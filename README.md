# Pagination and Content Filter

In this project, you'll enhance the usability of a web page that has too much information. To make it easier to find information and read the page, you'll use progressive enhancement to add pagination.

The page includes a list of 54 students. You need to add programming to display 10 students per page, and add buttons to jump between the lists of 10 students.

Your solution should work for any number of student listings, whether there were 5, 25, 55 or 100 student listings.

Optionally, you can add a search bar to let users search the list of students for a particular student or students.

Feel free to use jQuery for this project, but please avoid using plugins to achieve the pagination and/or search functionality.

### Download the project files. We've supplied several files for you to use:

* 2 style sheets, a reset.css that sets some basic CSS styles for cross-browser support and design.css that contains CSS specific to this project.
* 3 HTML files, index.html, example-meets.html and example-exceeds.html. The index.html file contains the initial HTML page — you'll use JavaScript to modify the markup on this page to meet the goals of this project (as described in the instructions below) The two example files demonstrate what the page should look with the pagination in place and with the optional search box in place.
* A student-list-examples folder which contains two other pages with differing amounts of listings. You don't need to use these file but they can help you test that your programming works no matter how many students listings are on the page.
You will need to create your own external JavaScript file.

### Have a basic understanding of Progressive Enhancement. See the Resources links on this page to find out more about Progressive Enhancement. For this project, there are two important Progressive Enhancement principles to keep in mind:

* Basic content should be accessible to browsers that don't support JavaScript. In other words, the index.html file should display the entire list of students for browsers that don't support JavaScript.
* Unobstrusive JavaScript: this means that any content or functionality related to JavaScript should be added programmatically by JavaScript. For this project, that means, the pagination buttons and the (optional) search shouldn't be added directly to the index.html file. You need to use JavaScript to add them.

# Project Instructions
To complete this project, follow the instructions below. If you get stuck, ask a question in the community.

### Tips for this project
It can be helpful to accomplish the tasks in this project with functions since functions only need to be created once, and can then be called easily to perform some action over and over again.
Try not to create functions that perform operations on a particular DOM element or set of DOM elements. Instead, try to create functions that perform operations on parameters. (Remember, parameters are what go in the parenthesis when we first define a function.) And then when you need to call that function on some DOM element or set of DOM elements, you can pass them in as arguments. (Remember, arguments are what go between the parenthesis when we call a function.)

### Show just the students you want displayed on the page and hide all the rest
* When the page loads, your program should hide all but what will show on the first page, which will be the first 10 students in the list.
* Tip: It can be helpful here to create a function that can take in a list and a page number as arguments. And then based on the length of the list, the max number of items that should show on the page, and the current page that should be displayed, the function could hide all list items but the ones that should be shown.

### Create and append the pagination links
* Look at the HTML in the example-meets.html file on lines 119-137 -- this is an example of the markup you'll need to add dynamically to the index.html page to create pagination links.
* Since only 10 students should be shown at a time, your programming needs to calculate the number of pages needed and add the appropriate number of links to the bottom of the page.
* Your program should work for any number of students. There are 54 students in index.html, but you can test your code by adding your JavaScript file to the other lists of students we’ve provided in the student-list-examples folder.
* Add functionality to pagination links with an event listener.
When a user clicks on “2” in the pagination, students 11 through 20 are shown. When a user clicks “3”, students 21 through 30 are shown. And so on. When “6” is clicked on the index.html file, students 51 through 55 should be shown.
* Since the pagination links are being generated dynamically, it's important to be mindful of when and where you add functionality to the buttons, because if the code that adds the functionality runs before the buttons are created, then the buttons won't have any of the intended functionality.
* If you created a function to show/hide students at the beginning of this project, then you can use that function here in the event listener attached to the buttons to make each each button show/hide the correct sets of students.
