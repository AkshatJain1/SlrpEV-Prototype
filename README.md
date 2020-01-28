# SlrpEV Web Portal Prototype V1

SlrpEV Prototype which is a web portal that handles communication between the user and the electrical charge controller. This allows for the user to edit their vehicle settings, choose their charging settings, start a new charge session and view the status of their session.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

 - [Angular CLI](https://cli.angular.io/)
 - [Node.js](https://nodejs.org/en/download/)

### Installing

To get the development environment running

1. Run npm install in the root folder

	```
	npm install
	```
2. Run npm install in the client folder
	```
	cd client
	npm install
	```
3. Run the server instance [root folder]
	```
	node server
	```
4. Run the client instance [client folder]
	```
	cd client
	ng serve
	```



## Deployment
This prototype is already deployed on [https://agile-reaches-29694.herokuapp.com/](https://agile-reaches-29694.herokuapp.com/)

Regardless you may follow these steps to deploy on your own instance: 

 1. Build the client folder with  ``` ng build ``` 
 2. See Heroku deployment steps here: [Heroku Node.js Deployment](https://devcenter.heroku.com/articles/deploying-nodejs)

## Built With

* [Express](https://expressjs.com/) - The web framework used for the server, api
* [Heroku](https://heroku.com/) - Deployment
* [Angular](https://angular.io/docs) - Frontend web framework (TypeScript)
* [Moment.js](https://momentjs.com/docs/) - Library used in backend for date/time management
* [Angular Material](https://material.angular.io/) - Frontend styling library

## Versioning

Version 1.00 - Initial Release

## Authors

* **Akshat Jain** - *Initial work* - [AkshatJain1](https://akshatjain1.github.io)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* ECal Labs
* SlrpEV Team
	* Specifically for providing design and UI input: 
		* Scott Moura
		* Carl Lenox
		* Jonathan Kestelman
		* Pedro Errazuriz
