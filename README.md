# Trading Risk Management System
## Table of Contents
- [Trading Risk Management System](#trading-risk-management-system)
  - [Table of Contents](#table-of-contents)
  - [Purpose](#purpose)
  - [Significant Requirements](#significant-requirements)
  - [System Architecture](#system-architecture)
  - [Database and Schema](#database-and-schema)
  - [Design](#design)
  - [Get Started](#get-started)

## Purpose
The system to be developed is a trading risk management system for swing trading built with the MEAN-stack. The system will include functionality for tracking and journaling trades and visualizing performance and risk metrics to gain insights about your trading. 

The target group of the application are swing traders and many of the concepts of what metrics to track and how to structure a trade database comes from the book *Trading Risk* by Kenneth L. Grant.

## Significant Requirements
- R001: The application shall have a button to import trade data from CSV files exported from Nordnet / Avanza.
- R002: The application shall have a form for manually entering trade data.
- R003: The application shall have a view for displaying trades (both transactions and executions) in a table.
- R004: The application shall have a dashboard view displaying performance and risk metrics.
- R005: Users shall be able to sign up for user accounts.
- R006: Users shall be able to save trade data to their user account.
- R007: Users shall be able to add or delete portfolios from their user account.
- R008: Users shall be able to view risk and performance metrics for individual portfolios or multiple portfolios aggregated.
- R009: Users shall be able to edit and remove existing trades.

## System Architecture
The application will be based on my boilerplate setup of the MEAN-stack which can be found here: [mean-docker-boilerplate](https://github.com/JacobKarlen/mean-docker-boilerplate).

* **Front-end:** Angular
  * Structured, stable, complete, many good component libraries
* **Back-end:** Node.js + Express
  * Robust, Scalable, Fast
* **Database:** MongoDB
  * Flexible, Scalable, Great combination with Node.js using mongoose for object modeling
  
Angular, Node and MongoDB will run in three seperate docker containers orchestrated by docker-compose, and in the production version of the docker-compose script, the static Angular front-end is served with Nginx. 

## Database and Schema

## Design
Even though the design of the user interface isn't the focus of the project, I will still put in some effort into the application design and provide the initial [figma prototype](https://www.figma.com/file/eyBkCmY4e2W199XKPZ5h4L/Trading-Risk-Management-System) for the main views of the application that can be found here: [figma prototype](https://www.figma.com/file/eyBkCmY4e2W199XKPZ5h4L/Trading-Risk-Management-System).

The application will be based on **material design** and I will make use of Angular Material components where suitable.

## Get Started
Clone the repository and run the command below to run the development environment in docker containers.
```
docker-compose -f docker-compose.dev.yml up --build
```
