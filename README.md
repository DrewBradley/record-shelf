# My Record Shelf

I love collecting records! My family and friends know this. As a result I receive a lot of LPs as gifts. How do I stop my family from buying albums I already own? MY RECORD SHELF!

### [CHECKOUT THE SITE HERE!](https://drewbradley.github.io/record-shelf/)

## Images

![First iteration](https://media.giphy.com/media/zYCeIeRxJZdc7u55WP/giphy.gif)
<br />
![Third iteration](https://media.giphy.com/media/PK51cN7UKWkJ9CMiJX/giphy.gif)
![Iteration 4](https://media.giphy.com/media/XfaOnpl2BNCH4EQaV7/giphy.gif)
![Error handling](https://media.giphy.com/media/3RozDEplrlIyuClmPn/giphy.gif)

## Technologies

  * This app was created with ```create-react-app```.
  * This app utilizes the [Discog API](https://www.discogs.com/developers#page:home) to retrieve all pertenant information that deals with my record collection.
  
## Architecture
  
  * My Record Shelf is built using three main components, ```App.js```, ```Record.js```, and ```Header.js```.
  * ```Header.js``` contains the ```NavBar``` that allows users to navigate between pages.
  * ```App.js``` builds a grid, that holds the ```Record.js``` components.
  * ```Record.js``` components are instantiated in the ```App.js``` folder, and contain an albums cover image, name, and ```resource url```.
  
## Future iterations

  * Future iterations will bring the ability for users to select and album and navigate to it's corresponding page on ```Spotify```.
  
## Wins/Challenges
  - WINS
  * Learning to fetch data from an existing API.
  * Populating and displaying an album's cover art.
  * Using verification with an API.
  * Linking the album to a related YouTube video.
  * Displaying an albums tracklist.
  - CHALLENGES
  * Building concise components that only carry out a single purpose.
  * Navigating the large object retrieved from the Discog API.
  * Error handling for dead links.

