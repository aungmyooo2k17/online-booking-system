# How to Run the Application

This project uses Docker and Docker Compose for easy setup and management.

## Prerequisites

Before you begin, ensure you have Docker and Docker Compose installed on your system. You can download and install them from the following links:

- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/install/)

## Running the Application

Once Docker and Docker Compose are installed, you can start both the frontend and backend projects with a single command.

### Steps:

1. Clone the repository:
    ```sh
    git clone git@github.com:aungmyooo2k17/online-booking-system.git
    ```

2. Navigate to the project's root folder:
    ```sh
    cd online-booking-system
    ```

3. Start the application using Docker Compose:
    ```sh
    docker-compose up -d
    ```

This command will build and start the containers in the background.

### Verifying the Application

To verify that the application is running, you can use the following command:
```sh
docker ps
```
This will list the running containers, and you should see two projects running:

- Frontend: Accessible on port 3000
- Backend: Accessible on port 8000

You can now open your browser and navigate to http://localhost:3000 to view the frontend and http://localhost:8000/admin to access the backend API.

### Admin Dashboard Credentials
Please note that the username and password for the admin dashboard are:

Username: admin
Password: admin


# Frontend Project Structure

The project is divided into several main directories to organize the components, services, and routing logic effectively.

- **Common**: Contains general components used throughout the application.
- **Admin**: Contains components specific to the admin dashboard.
- **User**: Contains components for the end user's interface.

### Common

Contains general components used throughout the application, such as headers, footers, buttons, etc.

### Admin

Contains components specific to the admin dashboard, such as user management, car management, booking management, etc.

### User

Contains components for the end user's interface, such as car listings, booking forms, user profiles, etc.

### Modules

Modules aim to organize the page-specific data and logic related to their respective modules.

### Services

The `services` folder contains API calls and global state management (slices) using Redux Toolkit. Each service is responsible for handling a specific endpoint.

- **userService.js**: Handles API calls related to user data.
- **carService.js**: Handles API calls related to car data.
- **bookingService.js**: Handles API calls related to booking data.
- **store.js**: Configures the Redux store and combines slices for global state management.

### Routing

Place the appropriate routing data in `App.js`.


### List of Libraries Used

- `react-hook-form`
- `react-redux`
- `@reduxjs/toolkit`
- `react-router-dom`
- `axios`
- `tailwindcss`
- `@fortawesome/react-fontawesome`

# Backend Project Structure

The backend system uses Django and the Django REST framework to create a RESTful API. The system employs token-based authentication for secure access. The Django backend is organized into several apps, each with specific responsibilities:

- **Authentication App**: Manages user authentication and authorization.
- **Inventory App**: Handles car inventory management.
- **Bookings App**: Manages booking-related functionalities.

## Project Structure

### Apps and Migrations

Each app contains its own migration files to manage database schema changes. The apps follow a structured approach using models, serializers, views, and URLs to create APIs.

### Database

The backend service uses an SQLite3 database to store data. This is a lightweight, file-based database that is suitable for development and small-scale production environments.

### Static and Media Files

The project uses a `media` folder to serve static files, such as car images uploaded to the system when new cars are created.

# Potential Improvements for Frontend Website

## Admin Dashboard

### Improvements to Current Features

- **User Management**
  - Enhance the UI/UX for user management.
  - Improve error handling and validation for user forms.

- **Car Management**
  - Optimize the car management interface for better usability.
  - Add bulk upload functionality for car data.

- **Booking Management**
  - Streamline the booking process with better form validations.
  - Implement detailed booking reports for admins.

### New Features

- **Statistics**
  - Display statistics of the most rented cars.
  - Add real-time analytics for admin insights.

- **Staff Account Management**
  - Create staff accounts and assign roles.
  - Implement role-based access control for better security.

- **Additional Features**
  - Implement data visualization for admin insights.
  - Improve the UI/UX for better admin navigation.

## End User Site

### Improvements to Current Features

- **Car Display**
  - Enhance car filter options for better user experience.
  - Optimize loading times for car listings.

- **User Engagement**
  - Improve the presentation of positive reviews.
  - Enhance notifications for users.

### New Features

- **Car Display**
  - Show customer preference cars.
  - Implement infinite scroll.

- **User Engagement**
  - Show best deal alerts.
  - Integrate a customer support chatbot.

- **Additional Features**
  - Add user profile management.
  - Implement a wishlist feature for users.
  - Optimize loading times and performance.

# Potential Improvements for Backend Service

### Improvements to Current Features

- **Data Management**
  - Implement pagination for better data handling.
  - Enhance filtering options.

- **Authentication**
  - Convert Django token authentication to JWT.

### New Features

- **Access Control**
  - Implement role-based access control for staff accounts.

- **Automation**
  - Set up cron jobs for sending emails.

- **Additional Features**
  - Improve error handling and logging.
  - Optimize database queries for performance.
  - Implement caching for frequently accessed data.
  - Set up automated testing for APIs.

