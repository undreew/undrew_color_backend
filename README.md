# Universal Color Translator (Kulay) - Backend

## Introduction

The backend of **Kulay** is built using **Node.js** with **Express**. It provides an API that translates color names into hexadecimal values. The server handles incoming requests, communicates with the external **Serialif API**, and returns color information.

## Table of Contents

- [Features](#features)
- [Technologies](#tech-stack)
- [Misc Packages](#misc-packages)
- [Installation](#installation)
- [Design Decisions](#design-decisions)

### Features

- Accepts POST requests with color names and returns their corresponding hex values.
- Custom error handling with a unified error response.
- Modular architecture with loaders for scalability.

### Technologies

- **Node.js**: Backend JavaScript runtime.
- **Express**: Fast and minimalist web framework.
- **Axios**: Promise-based HTTP client for communicating with external APIs.
- **TypeScript**: Type safety throughout the application.

### Misc Packages

- **axios**: Handles HTTP requests to external APIs like Serialif.
- **express-validator**: Provides request validation middleware.
- **express-async-errors**: Automatically catches errors in async route handlers.
- **lodash**: Used for utility functions, such as checking equality between values.

## Installation

To set up the project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/undreew/undrew_color_backend.git
   ```
2. Use Node Version
   ```bash
   nvm use
   ```
3. Install modules
   ```bash
   npm i
   ```
4. Create a .env and add the following
   ```bash
   PORT=8001
   COLOR_SERIALIF_API='https://color.serialif.com/keyword='
   ```
5. Run the application
   ```bash
   npm run dev
   ```

## Design Decisions

### File and Folder Structure

The structure used for the backend application ensures that it is readable and familiar for fellow developers with an experience with an MVC approach. The server is build using express and Typescript. It has prettier and linting support for file and code readbility.

### Infrastracture

The infrastracture I went with is quite and future proof. This allows room for further features to be developed in the future with having the need to modify or even remove existing ones. It has loaders, flexible routes, controllers and middlewares.

### API Routes

I went with just one api route because that is the MVP for the backend functionality, but as mentioned its scalable.

### Error Handling

I created a generic error handler for all my errors that has a base error class called CustomError which extends from the error and has abstract properties to ensure proper usage when creating sub classes of the same type. With that being said I added quite a bit of custom errors such as NotFoundError and BadRequest that are used for non existent api routes and controller errors respectively. All these errors are also being catched and process with the help express-async-errors that improves readbility of syntaxes and also the errorHandler middleware that checks the types of error being thrown it order to generalize the error response for the frontend. Errors from SerialifApi are also generalized and format as a result.

### Limitations and Improvements

Perhaps expand the amount of inputs the api route can expect and use. Unit Testing.
