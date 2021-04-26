
- build page routing: home, signup, login, profile (no logout yet since it's not actually a route)

- set up dotenv instead of hardcoding localhost

- wire up signup & login forms

- logout: just a span that clears localStorage onClick; don't worry about page transition just yet

- conditionally hiding links: set up user state in App, pass it into NavBar, conditionally render links based on user state
- pass setUser into signup&login, setUser after successful form submissions

- page transitions:
  - in the route that renders Signup, render signup if !user.id, render Redirect to profile if user.id
  - same in route that renders Login
  - opposite in route that renders profile
  - in logout link, setUser to {}; this requires passing setUser into NavBar

- get logged in, then reload the page, note that localStorage has a userId but App state does not. useEffect in app to load the user on page load
  - GET /users/verify, headers: Authorization: localStorage.getItem('userId'), then setUser