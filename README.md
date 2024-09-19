# Yet Another React App

This app is designed as a frontend for my spring boot app and it's goal is to function as a car dealership managment system.
Repository of the backend app: [Yet Another Spring App](https://github.com/KuszmarJacek/Yet-Another-Spring-App)

## Features

The app is built on top of vite with Typescript. It uses MUI for styling it's elements for a consistent and functional look.
Axios alongside Tanstack Query are used for REST operations.
Right now authentication is not useful for any production enviroment since storing the JWT in a sessionStorage is not a good idea, see: [OWASP Token Storage on Client Side](https://cheatsheetseries.owasp.org/cheatsheets/JSON_Web_Token_for_Java_Cheat_Sheet.html#token-storage-on-client-side). Authentication will be refactored in acoordance with the backend in the future and right not HttpOnly cookie is considered as an easier option and working with a full Oauth2 in the backend as the harder option.

## Future ideas

- [ ] Consider using zustand, jotai or redux toolkit for managing state when the app grows in size
- [ ] Rewrite authentication to use HttpOnly cookie with attribute SameSite=strict for storing the JWT [HttpOnly Cookie](https://cheatsheetseries.owasp.org/cheatsheets/Session_Management_Cheat_Sheet.html#httponly-attribute) [XSS Prvenention] (https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html)
- [ ] Add signup screen when it's implemented on the backend
