# Mock Mock Interview

For this task, please explain what the existing code is doing, then add the following features:

1. The TV shows fetched from the API should be displayed on the screen.
  a. Each TV show should display its title and the medium-sized image.
  b. The title should be in an h3 with a class of `title`.
  c. The TV show should also have a button that says "Show alternate names"
2. When the user clicks on the title of a show, its type and status should also be displayed.
3. When the user clicks on "Show alternate names", a request should be made to https://api.tvmaze.com/shows/:id/akas to get the alternate names of the show, and those alternate names should be displayed.