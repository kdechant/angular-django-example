# Angular 6 / Django Rest Framework / JSON Web Token demo app

This is a demo app showing how to make API calls with Angular 6 and Django Rest Framework, including how to send authentication headers so API calls will function when logged in.

## What this repo contains

The following files are interesting:

* angular_django_cors - The Django project and main settings file
* microblog - An app within the project, containing the Django Rest Framework views and URL routing
* static/ng-demo - The Angular app source code lives here
* static/dist - The compiled Angular app is here

## Requirements

You need the following to run this app:

* Python 3.5 or higher (Python 2.x is not supported by Django 2.x)
* [Pipenv](https://pipenv.readthedocs.io/)
* Node v8.x or higher
* NPM v5.x or higher

## Setup

Open a terminal at the repo root, and run the following:

```bash
pipenv install
pipenv shell
cd microblog/front-end
npm install
ng build
cd ../..
python manage.py runserver
```

Your app will be available at http://127.0.0.1:8000.

## Database

This project uses a SQLite database, which lives in the file `db.sqlite3`. SQLite3 support should be available out of the box on most modern operating systems. 

## Logging into the app

The database included in this repository contains two users. The following are their usernames and passwords, which you may use for testing:

- admin / admin123
- user1 / example123

## Questions?

If you spot an error when trying to run the demo app, please file a bug in the GitHub issue tracker.

Please do not create issues or email me asking for support for your own projects. I cannot provide support for your custom applications.
