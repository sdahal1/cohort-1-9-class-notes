# Mock Mock Interview

For this interview, please explain what the existing code is doing, then add the following features:

1. The TV shows fetched from the API should be displayed on the screen.
  a. Each TV show should display its title and the medium-sized image.
  b. The title should be in an h3 with a class of `title`.
2. When the user clicks on the image of a show, its type and status should also be displayed.
3. When the user clicks on the title of a show, a request should be made to `https://api.tvmaze.com/shows/:id/akas` to get the alternate names of the show, and those alternate names and their countries should be displayed.