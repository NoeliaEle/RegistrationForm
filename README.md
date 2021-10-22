# Frontend Technical Challenge

This repo contains a registration form which consists of two inputs (E-Mail & Password) with labels, a password strength indicator, and a submit button.

![Preview formats](./public/preview-formats.png "Preview formats" )

## Instructions to run the app
To run this project, install it locally using npm:

* Clone this repository
* Run `npm install` in the directory to install dependencies
* Run `npm start` to start the application on [port 3000](http://localhost:3000) (default)

## Technologies
This project could have been developed using multiple frameworks/libraries. I chose __React.js__ because is the library that would allow me to do it fast, and create a flexible and scalable solution. And why not, because it's __fun__ and that was part of the instructions ;)


## Libraries
Given the requirements of the challenge, I've decided to include a library to handle the password validation.
Some aspects I was looking into when choosing a library:

* Covers all the requested cases.
* Allows to adjust the parameters.
* It was updated not long ago and has a considerable number of downloads.
* Less critical, but also important, allows certain UI and content customizations.

I chose and installed [React password checklist](https://www.npmjs.com/package/react-password-checklist).

I added it in `PasswordValidation`, as it will perform its action only on that component.
After adjusting the parameters, I added a callback to the parent element when the password is valid. This call is captured by the form, activating the Submit button, and storing the password to later be submited for authorization.

Cons: React password checklist makes tests to fail.

Another added library is [React-router-dom](https://www.npmjs.com/package/react-router-dom), it wasn't part of the assignment, but it helped to close the loop from a UX perspective when submitting email and password succesfully. 

## Code quality
The issue `JSX props should not use arrow functions` keeps popping up when testing the code. I have decided to keep the inline arrow functions for now even knowing that in the future with more components, performance can be affected.

A sign-up page is most likely to not contain many elements to allow the user to focus on one task.
Given the size of the current project and its purpose, I consider more important to make the code as easy to read as possible, knowing that the damages to performance in this case are minimum.

### Disclaimer
I have spent time on trying to develop meaninful tests with no clear success. This project covers the basics to ensure the components are displayed on the screen, but I would like to explore how to add tests that cover the business logic and ensure the form is ready to be integrated further. Any feedback is welcome!