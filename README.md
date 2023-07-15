#### Goals
Main goal of this repo is improve my skills in automation testing field. To do this I choose Cypress tool. 
I conducted functional test at Etsy website (www.etsy.com).   

Side goal is to learn the POM - Page Object Model. Knowing POM helps to create clearly and understandably tests script. 

#### Target User Scenario: 
1. User should search for an item and get appropriate results: items in result list should have query in the titles
2. User should go to invalid search page in case of invalid query
3. User should be able to filter search results: price, shop location, color
4. User should be able to sort a search results: lowest and highest price
5. User should be able to browse item details: verify price, picture, description, reviews

#### Command to run:
1. Open the console or terminal on your local machine.
2. Clone this repository to your local machine using console:
```sh
git clone https://github.com/maciejleoniak/etsy-automated-testing-with-cypress.git
```
3. Go to the repository directory:
```sh
cd etsy-automated-testing-with-cypress
```
4. Install the server dependencies using the following command:
 ```sh
npm install
```
6. Open Cypress client:
```sh
npx cypress open 
```
7. Run the tests by button in Cypress client:  
 ```sh
"Run all specs"
```
