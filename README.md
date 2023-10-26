[Live Site] (https://house-marketplace-amber-alpha.vercel.app/)

## Setting up Firebase

### Initialising Firebase

- create Firebase project
- create web app in project
- src folder: create firebase.config.js file
- terminal: npm install firebase
- firebase.config.js: copy and paste Firebase SDK initialisation code
- firebase.config.js: import {getFirestore} from "firebase/firestore"
- firebase.config.js: export const db = getFirestore()

### Setting up Firebase Authentication

- select native Email/Password provider
- select Google provider
- select settings and add deployed website to authorized domains

### Setting up Firebase Firestore

- select server location and test mode
- add firestore rules from firebase-rules.txt
- create sample data
- create composite indexes
  - indexes are pre-sorted data to improve retrieval performance
  - in Firebase, all queries require an index

### Setting up Firebase Storage

- select server location and test mode
- add storage rules from firebase-rules.txt

## Additional Notes

### Navbar Component

- useNavigate, useLocation from react-router-dom
  - useNavigate() is a function that navigates to a specified path
  - e.g. const navigate = useNavigate();
  - useLocation() is a function that retrieves the current path
  - e.g. const location = useLocation();
  - e.g. location.pathname
- .svg file as ReactComponent
  - svg stands for Scalable Vector Graphics
  - treated like a DOM element (i.e. can be styled, animated, etc.)
  - e.g. import {ReactComponent as IconName} from "./assets/IconName.svg"
  - e.g. &lt;IconName /&gt;

### SignIn/SignUp Page

- setting icons in input fields
  - e.g. background: url("./assets/svg/lockIcon.svg") #ffffff 2.5% center no-repeat;
- toggling password visibility
  - e.g. type={showPassword ? "text" : "password" }
  - e.g. onClick={() => setShowPassword((prevState) => !prevState)}
- setting arbitrary object property key with square brackets
  - e.g. { ...prevState, [e.target.id]: e.target.value }
  - repeated properties after ... spread operator will overwrite existing properties IN ORDER
- returning an object from an arrow function with round brackets
  - e.g. setFormData(() => { return { ...prevState, [e.target.id]: e.target.value }})
  - e.g. setFormData(() => ({ ...prevState, [e.target.id]: e.target.value }))
- deleting object property with delete keyword
  - e.g. delete object.property
- documentation for React Toastify
  - https://fkhadra.github.io/react-toastify/introduction
- documentation for Firebase Authentication
  - https://firebase.google.com/docs/auth/web/password-auth
  - https://firebase.google.com/docs/auth/web/google-signin
- documentation for Firebase Firestore
  - https://firebase.google.com/docs/firestore/manage-data/add-data

### Profile Page

- dynamic onClick function
  - correct: onClick={() => {changeDetails && onSubmit()}}
  - wrong: onClick={() => {changeDetails && onSubmit}}
- difference between including and excluding () for event function
  - correct: onClick={onSubmit}
  - onSubmit will be called whenever element clicked
  - wrong: onClick={onSubmit()}
  - onSubmit() will be called whenever component renders
  - for functions with parameters, use arrow function
  - e.g. onClick={() => onSubmit(param1, param2)}
- dynamic element styling using className attribute
  - e.g. className={!changeDetails ? "profileName" : "profileNameActive"}
- dynamic input element editing using disabled attribute
  - e.g. disabled={!changeDetails}

### PrivateRoute Component

- Navigate, Outlet from react-router-dom
  - PrivateRoute.js: &lt;Outlet /&gt; is the INTENDED route component, satisfying some condition (e.g. user logged in)
  - App.js: &lt;Outlet /&gt; is the child route component wrapped in the &lt;PrivateRoute /&gt; route component
- difference between useNavigate and Navigate
  - useNavigate redirects to a specific route programatically
  - e.g. const navigate = useNavigate()
  - e.g. if (true) navigate("/")
  - Navigate redirects from JSX component returns
  - e.g. return loggedIn ? &lt;Outlet /&gt; : &lt;Navigate to="/sign-in" /&gt;
- @TODO: add useAuthStatus process

### CreateListing Page

- form element values are returned as strings
  - e.g. value={true}
  - e.g. if (e.target.value === "true") boolean = true;
- nullish coalescing operator (??)
  - if left-hand-side operand is null or undefined, returns right-hand-side operand, else returns left-hand-side operand
  - e.g. null ?? returnedValue
- setting up Google Geocoding API
  - go to "https://console.cloud.google.com/"
  - select "APIs & Services"
  - select "+ ENABLE APIS AND SERVICES"
  - search and select "Geocoding API"
  - enable "Geocoding API"
- using .env variables
  - .env variables must be prefixed with REACT_APP
  - e.g. REACT_APP_VARIABLE_NAME
  - process.env. prefix required to use .env variable in code
  - e.g. process.env.REACT_APP_VARIABLE_NAME
  - restart server whenever new environment variable created
  - add .env to .gitignore file (e.g. ignore file when pushed to remote respository)
- documentation for Google Geocoding API
  - https://developers.google.com/maps/documentation/geocoding/requests-geocoding
- documentation for Firebase Storage
  - https://firebase.google.com/docs/storage/web/upload-files

### Listing Page

- copy current URL to clipboard
  - e.g. navigator.clipboard.writeText(window.location.href)
- setting up Leaflet and React Leaflet
  - terminal: npm install leaflet react-leaflet
  - copy and paste Leaflet CSS and JS files from Leaflet quick start guide to index.html file
  - import relevant libraries and follow pop-up marker example from React Leaflet guides
- documentation for Leaflet and React Leaflet
  - https://leafletjs.com/examples/quick-start/
  - https://react-leaflet.js.org/docs/start-installation/
  - https://react-leaflet.js.org/docs/example-popup-marker/
- documentation for Swiper
  - https://swiperjs.com/demos#null

### Contact Page

- difference between useParams and useSearchParams
  - App.js: /contact/:landlordId
  - route parameters come after :
  - e.g. const params = useParams();
  - e.g. params.landlordId
  - Listing.js: /contact/${listing.userRef}?listingName=${listing.name}
  - search parameters come after ?
  - e.g. const [searchParams, setSearchParams] = useSearchParams();
  - e.g. searchParams.get("listingName")
- using &lt;a&gt;&lt;/a&gt; to send email with subject and body
  - e.g. mailto:${landlord.email}?subject=${searchParams.get("listingName")}&body=${message}

### Category Page

- using startAfter to load more
  - e.g. const q = query(..., startAfter(lastFetchedListing), limit(10), ...);
