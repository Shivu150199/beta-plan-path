Project Documentation
---------------------

### Introduction

**Project Name:** [planpath]

### Getting Started

#### Cloning the Repository

1.  **Open a terminal or command prompt.**
2.  **Navigate to the desired directory where you want to clone the project.**
3.  **Execute the following command, replacing `[your-repository-url](https://github.com/Shivu150199/plan_path.git)` with the actual URL of your project's Git repository:**

    Bash

    ```
    git clone your-repository-url

    ```

  

4.  **Once the cloning is complete, navigate into the project directory:**

    Bash

    ```
    cd your-project-name

    ```

 

### Installation

1.  **Install the necessary dependencies:**

    Bash

    ```
    npm install

    ```

   

### Running the Project

1.  **Start the development server:**

    Bash

    ```
    npm run dev

    ```

3.  **Open your web browser and navigate to `http://localhost:5173` to view the application.**

   

### Project Structure

**[Project Root]**

-   `public`: Contains static assets like images, favicons, etc.
-   `src`: Contains the main source code files.
    -   `components`: Reusable components.
    -   `assets`: Contain all images
    -   `pages`: Individual pages or routes.
    -  
    -   `utils`: Helper functions or utilities.

    -   `index.js`
-   `[Other files]:` Configuration files, scripts, etc.

### Technologies and Libraries

-   **React:** The JavaScript library used for building user interfaces.
-   **Vite:** A build tool for modern web applications.
-   **Tailwind CSS:** A utility-first CSS framework.
## Tailwind CSS Configuration

This project uses Tailwind CSS for styling, configured with additional custom colors and integrated with DaisyUI for component styling and themes. Below is the configuration for Tailwind CSS in the `tailwind.config.js` file.

### Tailwind Configuration

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#603AC8',       // Custom primary color
        dark_gray: '#494747',     // Custom dark gray color
        light_gray: '#8A8A8A',    // Custom light gray color
        dark_violet: '#31225C'    // Custom dark violet color
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
};
```

  ## Tailwind CSS Color Configuration

In the `tailwind.config.js` file, you can extend the default color palette to include custom colors. This allows you to use these colors throughout your project while maintaining consistency and taking advantage of Tailwind CSS's utility-first approach.

### Custom Color Configuration

Here’s an example of how to extend the color palette in your Tailwind CSS configuration:

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#603AC8',
        dark_gray:'#494747',
        light_gray:'#8A8A8A',
        dark_violet:'#31225C',
        light_violet:'#ECE4FF',
        placeholder:'#8A8A8A', // Example of a custom primary color
        success:'#2FAF47',
        failure:'#EF0000',
        creambg:'#f5f5f5',
        disable_btn:'#BDBDBD',
        paraColor:'#525252'
      },
      screens: {
        'xs': {'max': '300px'},  // Custom screen size for up to 300px
        'xm': {'min': '500px'},  // Custom screen size for up to 300px
      },
    },
  },
  plugins: [require('daisyui'),],
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
}
 ```
-   **DaisyUI:** A component library built on top of Tailwind CSS.
  ## DaisyUI Configuration

**DaisyUI** is a component library for Tailwind CSS that provides pre-designed UI components and themes. To integrate DaisyUI into your Tailwind CSS setup, you need to configure it in the `tailwind.config.js` file.

### Adding DaisyUI as a Plugin

First, include DaisyUI in the `plugins` section of your Tailwind CSS configuration:

```javascript
// tailwind.config.js
module.exports = {
  plugins: [require('daisyui')],
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
};
```
-   **Ant Design:** A design system for React.
-   **React Router Dom:** A library for handling routing in React applications.
   ``` js
     <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/course" element={<Course />} />
                <Route path="/course/:id" element={<Courseinfo />} />
                {/* <Route path="/course/:id" element={<AboutCourse/>}/> */}
                <Route path="/edit-course/:id" element={<EditSingleCourse />} />
                <Route path="/edit-course" element={<EditCourse />} />
                <Route path="/create-course" element={<CreateCourse />} />
                <Route path="/login" element={<Signin />} />
                <Route path="/register" element={<Signup />} />
                <Route path="/signup-organisation" element={<SignupOrg />} />
                <Route path="/signin-organisation" element={<SigninOrg />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/reset-password" element={<ResetPassword />} />
                <Route path="/success" element={<EmailSuccess />} />
                {/*  */}
                <Route path="/contactus" element={<Contactus />} />
                <Route path="/aboutus" element={<Aboutus />} />
                <Route path="/policy" element={<Policy />} />
                <Route path="/terms" element={<Terms />} />
                {/*  */}

                <Route path="/myprofile" element={<MyProfile />} />
                {/*  */}
                <Route
                    path="/cart"
                    element={
                        <CartProvider>
                            <Cart />
                        </CartProvider>
                    }
                />
                {/* <Route path="/my-path" element={<Path />} /> */}
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/payment" element={<Payment />} />
                <Route path="/subscribed" element={<SuccessfulSubscribe />} />
                <Route path="/not-subscribed" element={<FailSubscribe />} />
                {/*  */}
                <Route path="/wishlist" element={<Wishlist />} />
                {/*  */}
                <Route
                    path="/dashboard"
                    element={
                        <DashboardProvider>
                            <Home />
                        </DashboardProvider>
                    }
                />
                <Route
                    path="/dashboard/added/:id"
                    element={
                        <DashboardProvider>
                            <AddedCourseSingle />
                        </DashboardProvider>
                    }
                />

                <Route
                    path="/my-path"
                    element={
                        <PathProvider>
                            <Path />
                        </PathProvider>
                    }
                />

                <Route
                    path="/add-to-school"
                    element={
                        <AddSchoolProvider>
                            <AddToSchool />
                        </AddSchoolProvider>
                    }
                />
                <Route path="/email-verification" element={<Emailer />} />
                <Route path="/followup" element={<FollowupMail />} />

                <Route path='/compare' element={<CourseProvider>
                    <CourseCompare/>
                </CourseProvider>}/>

                <Route path="*" element={<PageNotFound />} />
            </Routes>

 ```
 **Toastify:** A notification library for React.
    in app.jsx
 ```js 
      <ToastContainer
position="top-center"
autoClose={2000}
hideProgressBar
newestOnTop={false}
closeOnClick
rtl={false}
theme="light"

/>
  ```
-   **Normalize.css:** A CSS library that helps normalize cross-browser styling differences.
-   
```js   "dependencies": {
    "antd": "^5.20.2",
    "draft-js": "^0.11.7",
    "html2canvas": "^1.4.1",
    "jspdf": "^2.5.1",
    "nanoid": "^5.0.7",
    "normalize.css": "^8.0.1",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-icons": "^5.3.0",
    "react-lazy-load-image-component": "^1.6.2",
    "react-quill": "^2.0.0",
    "react-router-dom": "^6.26.1",
    "react-toastify": "^10.0.5"
  },
 ```

### Authorization and Authentication

-   **Authorization Folder:** The `authorization` folder contains components and logic related to user authentication and authorization.
    -   **Signin Component:** Handles user login.
    -   **Forgot password:** handle forgot password.
    -   **Signin Org:** handle organisation sign in .
    -   **Signup org:** handle organisation sign up.
    -   **Signup Component:** Handles user registration.


  
