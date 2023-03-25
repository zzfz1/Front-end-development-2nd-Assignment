## My principle of dividing codes

- Split the code into different React components to make it more modular and easier to maintain.
- Each component has a specific purpose and responsibility within the application, works together to create a dynamic and interactive user experience.

### Main

The entry point of my single page application.
Imports the App component from the ./App file.

### App

#### Global States

Component uses the custom hook useStates (provided) to manage its state and useEffect hook to fetch data from Nodehill API when the component mounts.

This state (main) includes information about movies, screenings, sorting orders, categories, selected categories and search text.

#### Routing

Creates a Browser Router with a Routes component including several Route components from the react-router-dom library.

### MovieList

Uses the custom hook useStates to access and modify global states.

Displays a list of movies to the user. Movies are filtered based on the selected category and search text, both are stored as global states.

Each movie is displayed as a card with a title, length, categories, and poster image, and linked to MovieDetails component.

### ScreeningList

Also uses the custom hook useStates to access and modify global states.

Displays a list of screenings to the user. Screenings are filtered based on the selected category and search text.

The filtered screenings are then grouped by date with a separate headline.

Each screening is displayed as a card with a title and time and linked to booking pages.

### MovieDetail

Displays the title, categories, poster image and all available screenings with booking links.

### Welcome

The home page of the entire application.

#### TicketInfo (Integrated)

Displays all 3 types of ticket and their prices.

### DisplaySeats

The booking page of screenings.

Users can choose the seats and ticket types and total price will also be shown there. After hitting checking out button, they will be redirected to Receipt page with a replace Link.

### Page404

The error page, act as a "safe net".

Display error message when user is not accessing existed routes.

### Receipt

Displays the booking number, total price with quantities of each type of tickets, the title of the movie, auditorium, seats numbers with rows, starting time.

### NavigationBar

A navigation bar integrated in all pages. Including a movie icon and "home" item linked to Welcome page, 2 different items respectively linked to movie list and screening list.

### Category

A category filter integrated in both MovieList and ScreeningList.

Including buttons for every category, the current category will be colored with powderblue.

### SearchBar

A search bar integrated in both MovieList and ScreeningList.
Uses useStates to access and modify the searchText state.
