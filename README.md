# teamproject-cmpe_202_team_s19
teamproject-cmpe_202_team_s19 created by GitHub Classroom

Extension of Personal Project to build full end-to-end system for taking Starbucks Orders. 

The team has worked on developing a web application for accepting Starbucks orders. We have used NodeJS for the backend server and have developed the frontend using ReactJS.
We have followed the standard software development practices to ensure smooth progress of the project and to aim timely completion of the tasks.

Below are the steps followed by us in the Scrum-Agile approach that we took in practice during the implementation of this project:

	1. Understanding the requirements.
	2. Listing and ranking the tasks in order of importance and priority (Product backlog)
	3. Dividing the tasks and updating the progress to the other team members during every-day standup meetings.
	4. Ensuring that no other team member is blocked for a long duration, and hence trying to bring to a completion all the interdependent tasks.

Flow of execution:

	1. Designing the MongoDB database models.
	2. Designing the UI wireframes (mockups) to have a clarity about the UI.
	3. Planning the API's and dividing the tasks.
	4. Testing the backend API's using Postman.
	5. Working on developing the Frontend.
	6. Integrating the application o make it working.
	7. Testing the software, fixing bugs and adding enhancements and required validations.
	8. Deploying the Node server to AWS EC2 and the FrontEnd to Heroku.
	9. Testing the software.


5 APIS ARE IMPLEMENTED:

1. AUTHENTICATION - Pranjal Sharma

The default Authentication PIN for this application is "1234". On entering an invalid PIN, the text area will be restored to blank and the user will be notified with an "Invalid PIN" message and will be allowed to re-enter a valid PIN. The user will be navigated to the MYCards page on entering a correct Password.

2. ADD CARD - Rachit Saxena

The user has been provided with a provision of adding more than one cards. The user is asked to input the Card number and its CVV pin to add the card to records. A card number has to be of 9 digit and CVV of 3 digits. A card is loaded with $20 by default on registering.

3. MANAGE ORDERS - Shravani Pande

   On clicking the 'Scan Now' for any of the available cards, an order wil be placed successfully if the available balance of the card is more than $1.5 (default). A transaction would fail if the available balance is less than $1.5. After successfully placing an oder, the balance of that card would be deducted by $1.5. A new order will be listed in the Orders list along with the time of placing the order. A user can Cancel a placed order and this action would credit an amount of $1.5 to the respective card.
   
4. MAKE PAYMENT - Nehal Sharma

The deduction of balance for any order made is taken care of by this API. After successfully placing an oder, the balance of that card would be deducted by $1.5. A user can Cancel a placed order and this action would credit an amount of $1.5 to the respective card.

5. REMOVE CARD - Arkil Thakkar

A User can remove his card from the listing. On doing so, the orders placed using this card would be canceled and cannot be seen in the order listing.

 STACK USED:

FRONT END: REACTJS

BACKEND: NODEJS

DATABASE: MONGODB

AWS EC2 Backend instance: http://ec2-18-204-130-151.compute-1.amazonaws.com:3000/

Heroku Frontend: https://sheltered-dawn-68412.herokuapp.com/

Architecture Diagram:

![Architecture](https://user-images.githubusercontent.com/47123250/57589199-86cdc880-74d5-11e9-921f-26ce81f2894a.PNG)

Task Sheet: https://docs.google.com/document/d/1nsjVULBfD7_Ecwq-
0lNlAuAbNOQ1I0sYm7LMDGHSPig/edit?usp=sharing

To run this application on local:

1. Clone the git repository.
2. Install node.
3. Navigate to the "Backend" folder and open terminal here.
4. Run "npm install" to install all dependencies.
5. Run "node myserver.js" to start the node server.
6. Navigate to the "src" folder and open terminal here.
7. Run the "npm install" command to install all required dependencies.
8. Run "npm start" command to start the application.
