<div align="center">

<img src=".github/logo.svg" width="120" height="120" alt="Logo"/>

<h1 align="center">Rusty Roads Web</h1>

</div>

## About

This project is part of our college coursework, aiming to develop a simple route manager application.

## Features

- **Vehicle Management**: Keep track of all vehicles, including their status and details.
- **Driver Management**: Manage driver information and credentials.
- **Driver Assignment**: Assign drivers to specific vehicles efficiently.
- **Route Control**: Monitor and manage vehicle routes for optimal performance.
- **Route Optimization**: Automatically suggest the most efficient routes based on traffic and distance.
- **Scheduling**: Create and manage schedules for drivers and vehicles.
- **Notifications**: Send alerts and notifications to drivers about route changes, vehicle maintenance, and other important updates.
- **Reporting**: Generate reports on vehicle usage, driver performance, and route efficiency.
- **GPS Integration**: Integrate with GPS systems for real-time tracking of vehicles.
- **Fuel Management**: Track fuel usage and optimize refueling schedules.
- **Maintenance Tracking**: Schedule and record vehicle maintenance and repairs.
- **User Roles and Permissions**: Define roles and permissions for different users of the application.
- **Data Import/Export**: Import and export data to and from the application in various formats (e.g., CSV, Excel).
- **Mobile Access**: Access the application from mobile devices for on-the-go management.
- **Historical Data**: Maintain a history of routes, driver assignments, and vehicle usage for analysis and reference.

## Installation

Work in progress.

## Build from source

### Install Node

Ensure you have Node installed on your machine. If not, download and install it from [nodejs.org](https://nodejs.org/en).

### Install Docker

Ensure you have Docker installed on your machine. If not, download and install it from [docker.com](https://www.docker.com/).

### Install Dependencies

Install the project dependencies by running:

```shell
npm install
```

This will install all the required dependencies to run the application.

## Environment Variables

You'll need the Rusty Roads backend URL.

Once you have it, you can copy or rename the `.env.example` file to `.env` and put it on `BASE_URL`.

## Running

Once everything is set up, you can run the following command to start the application:

```shell
npm run dev
```

This will start the Rust Roads Web application at the port 3000.

## License

This project is licensed under the [MIT License](https://github.com/StPfeffer/rusty-roads/blob/main/LICENSE).
