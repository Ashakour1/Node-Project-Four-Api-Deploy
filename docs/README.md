# Bookstores API

Bookstores API is a Api that simplifies the signup and login process for bookstores and book-related applications. 

## API DOCUMENTATION

### Authentication

Do we need authentication, do we need token.


## Api Link : [bookstoresApi](https://bookstores-25aw.onrender.com/)
# User Authentication API Documentation

This documentation outlines the endpoints and functionality of a user authentication API. The API allows users to sign up and log in as owners.

## Table of Contents

1. ``[Sign Up]``(#sign-up)
2. ``[Log In]``(#log-in)

---

## Sign Up

### Endpoint  ``POST : /api/author/signup``

### Description

The api/author/signup endpoint allows a user to sign up as an author by providing their name, email, and password. This endpoint performs necessary checks to ensure the uniqueness of the email, hashes the password for security, and creates a new author in the system if all checks pass.

### Request Body

| Parameter   | Type    | Description                    |
| --------    | ------- | --------                       |
| ``name``    | String  | The name of the author.        |
| ``email``   | String  | The email address of the author|
| ``password``| String  | The password for the author    |


### Success Response

- **HTTP Status Code:** 200 Created

- **Response Body:**

  ```json
  {
    "message": "Author created successfully",
    "author": {
      // author object containing details
    }
  }
  ```

### Error Responses

- **HTTP Status Code:** 400 Conflict

  ```json
  {
    "message": "Author already exists"
  }
  ```

- **HTTP Status Code:** 500 Internal Server Error

  ```json
  {
    "message": "Something went wrong",
    "error": "Error message details"
  }
  ```

---

## Log In

### Endpoint ``POST : /api/author/login``

### Description

This endpoint allows a user to log in as an author by providing their email and password. It verifies the email's existence, checks if the provided password matches the stored hashed password, and issues a JWT token for authenticated access.

### Request Body

| Parameter   | Type    | Description                    |
| --------    | ------- | --------                       |
| ``email``   | String  | The email address of the author|
| ``password``| String  | The password for the author    |


### Success Response

- **HTTP Status Code:** 200 OK
- **Response Body:**

  ```json
  {
    "message": "logged in successfully",
    "token": "JWT Token"
  }
  ```

### Error Responses

- **HTTP Status Code:** 404 Not Found

  ```json
  {
    "message": "Author not found"
  }
  ```

- **HTTP Status Code:** 401 Unauthorized

  ```json
  {
    "message": "Incorrect Password"
  }
  ```

- **HTTP Status Code:** 500 Internal Server Error

  ```json
  {
    "message": "Something went wrong",
    "error": "Error message details"
  }
  ```
