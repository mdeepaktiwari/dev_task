# How to Use the Application
1. Start by navigating to the home page, where you will see a list of users. This list simulates user data that is stored in a database.

2. To add more users to the list, click on the "Add User" button and fill out the form that appears.

3. If you want to find a specific person in the list, type their name into the search bar. If that person is in the list, their details will appear below the search bar.


## Approach

1. The first step in developing the application was to use Postman to check if data was being received from the API.

2. Once the data was being received, it was fetched and stored in the state. To make the data persistent, it was also stored in local storage. When a user returns to the page, the application checks if there is data in local storage, as the user may have added more data.

3. If a user wants to add more users to the list, the existing data is retrieved from local storage, and new data is added while validating it first.

4. If a user wants to search for someone in the list, the application filters the users based on name and then renders the filtered results.


## Styling
1. Bootstrap was the main styling tool used in the application.

2. The application also demonstrates how external and internal CSS can be incorporated.

## Challenges during development
1. One of the main challenges faced during development was a hydration error that occurred when using the antd modal component.

2. Another challenge was that there was no post API available to save user data. As a workaround, local storage was used for persistence.

3. There were also some issues related to the version of Next.js during the initial setup.