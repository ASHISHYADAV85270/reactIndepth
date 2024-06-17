# Namaste React 🚀


# Parcel
- Dev Build
- Local Server
- HMR = Hot Module Replacement
- File Watching Algorithm - written in C++
- Caching - Faster Builds
- Image Optimization
- Minification
- Bundling
- Compress
- Consistent Hashing
- Code Splitting
- Differential Bundling - support older browsers
- Diagnostic
- Error Handling
- HTTPs
- Tree Shaking - remove unused code
- Different dev and prod bundles


# Types of Testing 
- Unit Testing  -> isolated testing of components 
- Integrated Testing -> connection fucntionality for two d/f components
- End to End Testing -> e2e testing -> user land krnai sai leave krnai tak 


# Setting Up Testing In Our App
- Install React Testing Library
- Install Jest 
- Install Additional Babel Dependency-> from jest website
- Configure Babel -> babel.config.js
- Configure Parcel Config file -> to disable default babel transpilation
- Jest Configration -> npx jest --init
- npx means exicuting
- Install Jsdom Library
- Install @babel/preset-react - to make JSX work in test cases
- Install @babel/preset-react inside my babel config
 
    module.exports = {
    presets: [
        ["@babel/preset-env", { targets: { node: "current" } }],
        ["@babel/preset-react", { runtime: "automatic" }],
    ],
    };
    @babel/preset-react -> to convert jsx to normal html code

- Install npm i -D @testing-library/jest-dom  :: toBeInTheDocument comes from here
 it provides kind of enviroment which have features of browsers 
 
 - install jest-environment-jsdom if u are using jest > 28 


Parcel also use babel soo there will be conflict between parcel babel configration and configure babel for testing 