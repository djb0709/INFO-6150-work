
# Edu's World

## Key Feature

### 1.Homepage:

```
A carousel showcasing promotional images.
A section displaying the top-rated courses.
A "View All" button that navigates to the "Courses" page.
```
### 2.Courses Page:
#### Filtering and Sorting
```
Users can filter courses by:
Categories: AI, Data Analytics, Machine Learning, Web Development, etc.
Levels: Beginner, Intermediate, Advanced.
Users can sort courses by various criteria such as ratings or duration.
Dynamic updates without reloading the page.
```
#### Course Cards

```
Each course is displayed as a card containing:
Title, description, category, rating, level, and duration.
Subscribe or unsubscribe directly from the course card.
```
### 3.Subscription Dialog:

```
Accessible via the "Subscribe" or "Unsubscribe" button on each course card.
Contains a form with the following required fields:
Name
Email
Preference (Weekly Updates, Monthly Updates, and Unsubscribe options).
Dynamic error validation for each field with user-friendly error messages.
For unsubscribing, dynamic show data different from subscribe and users must confirm via a checkbox.
```
### 4.Navigation:

```
Seamless navigation between Home, Courses, and About pages without refreshing.
Uses window.history.pushState and listens to popstate for back/forward browser navigation.
Hamburger and dropdown menu for mobile navigation
```

##### Switch between a light or a dark theme that then applies to all "pages" in the SPA.(control on the

##### nav).

### 5.About Page

#### User Reviews

```
A visually appealing section displaying testimonials from learners.
Each review includes:
User's avatar
Name and title/role
Country
Review content
The layout is responsive, with three columns for larger screens and stacking on smaller screens.
```
#### Frequently Asked Questions (Accordion)

```
A collapsible FAQ section using an accordion design.
Each question can be expanded to reveal the answer, while collapsing the others.
Accessibility features include:
aria-expanded for tracking state.
aria-controls for linking questions to their answers.
Fully keyboard navigable.
```
### 6.Theme switch
Switch between a light or a dark theme that then applies to all "pages" in the SPA.(control on the nav).

## File Structure

```
1 src/
2 │
3 ├── About/
4 │ ├── Accordion/
5 │ │ ├── Accordion.jsx
6 │ │ └── accordion.css
7 │ ├── Review/
8 │ │ ├── Review.jsx
9 │ │ └── review.css
10 │ ├── About.jsx
11 │ └── about.css
12 │
13 ├── assets/
14 ├── Button/
15 │ ├── Button.jsx
16 │ └── button.css
17 │
18 ├── CourseCard/
19 │ ├── CourseCard.jsx
20 │ └── courseCard.css
21 │
22 ├── Courses/
23 │ ├── Courses.jsx
24 │ └── courses.css
25 │
26 ├── Footer/
27 │ ├── Footer.jsx
28 │ └── footer.css
29 │
30 ├── Header/
31 │ ├── Header.jsx
32 │ ├── Nav/
33 │ │ ├── Nav.jsx
34 │ │ └── nav.css
35 │ └── header.css
36 │
37 ├── SubscribeDialog/
38 │ ├── SubscribeDialog.jsx
39 │ └── subscribe.css
41 ├── App.jsx
42 ├── App.css
43 ├── main.jsx
44 └── index.css
```
### The file structure of this website is organized by functionality and mainly includes three pages (main,courses, about) and several components, among which SubscribeDialog, Header, Footer, and Button are functional across multiple pages.





## Accessibility

### LightHouse
Performance 88, Accessibility 100, Best Practices 100, SEO 92
### Wave
##### All images and icons are sourced under appropriate licenses. See license.txt for detailed attribution.

### Features

```
Use Semantic HTML
All controls and form fields must be accessible via keyboard and mouse
Use Skiplink
Meet AAA-Level WCAG Contrast Requirements
All controls must have accessible text descriptions
Animations or transitions follow prefers-reduced-motion
General responsive behavior
```
## License

All images and icons are sourced under appropriate licenses. See license.txt for detailed attribution.


