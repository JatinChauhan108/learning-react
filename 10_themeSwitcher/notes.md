# Dark Mode in webpages
- The light or dark mode is specified in the html tag as one of the values of class attribute.
- Rest of the text formatting that should be done based on the light or dark mode is carried out automatically if we have specified the classes in various tags in such a way that they change upon detecting dark in html tag.
- While using tailwind, if we wish to follow this kind of system, we have to edit tailwind configs and specify that the darkMode should be referred from the classes. 
- This is done by adding this line in tailwind configs - darkMode : "class"  