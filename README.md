// gitHub repo :   "https://github.com/amandeep-saxena/books.git"



//CURD opretion =>

     get: Get all books list of data from DB.
     post: Insert new Book records into Database.
     put: used to perform update operation.
    delete: delete book record by using book id.


 // endpoint =>

    1. /books  : this endpoint is use to Insert record.
    2. /book : this endpoint is user to find allrecord.
    3. /books/:id :  record find by id 
    4. /books/:id :  record find by id and delete record
    5. /books/:id : updates the  records






 // How to Deploy Your Node.js Application for free with Render: A Step-By-Step guide// 

 click on link  "https://www.freecodecamp.org/news/how-to-deploy-nodejs-application-with-render/"

 deploy and live link api :  https://book-7eio.onrender.com/books


<!-- OR -->

deployment steps =>


1. Preparing the app 
2. Creating an account : Head over to render.com and click on the GET STARTED FOR FREE button.
3. Choose your preferred sign-up option.
4. Complete the sign-up process and log in. You should see your Render dashboard.
5. Connecting Render to our Repositories :
       a. On your dashboard, click on the New Web Services button under the Web Services option or the new button.
       b. You will see the following page 👇🏾.
               Then click on the Connect GitHub button (or Connect GitLab if your repository is on GitLab).  
       c. You will see the following screen
               Click on Authorize render

       d. Next, Click on your account.
    
       e. On the next page, you can permit Render to access all your GitHub repositories or only selected repositories. Select either of the options and click on Install


       f. You'll be redirected back to your dashboard and there You will see the repositories you selected.
            (click on web services again if you couldn't see them)



6. Deploying the app
   
    a. Click on the connect button next to the repository you want to deploy.
    b. It will take you to a page where You will be required to fill in the following details.

         Name: Enter a name to identify your website. make it short and meaningful because it will be part of the URL.


    c. Region: Select one of the options. Selecting the region where your users are can improve load times when it counts.

    d. Branch: This is the name of the branch that'll get deployed, usually the main or master branch

    e. Root Directory: Usually the root directory ./ of your repo or ./src depending on how you structure the directory.
 
    f. Runtime: Select Node

    g. Build command: npm install or yarn install

    h. Start command: This is the command to run your app it can be node index.js or npm start

    i. Environment Variables: Scroll down to the bottom of the page and Click on the Advance button to add Environment        Variables if needed.

    j. Finally, click the create web service button this will initiate the deployment process.

    k. Next, you will see the page below, wait for the process to finish.
           The green live button indicates a successful deployment.
      A red one indicates an error.

      Click the link to your deployed application which will be displayed at the top-left of the page.

       If you see an error when you visit the page, wait for a while. And then refresh the page.

    L. Updating Environment variables .You can add or Edit your environment variables in the environment tab.

    k. Handling Errors .If for whatever reason your deployment fails, or you want to deploy a particular commit, make the necessary changes and you can click on Manual Deploy to initiate the deployment process again.






Conclusion :
Well done! you now know how to deploy your Node applications for free on Render.
If you have any questions you can ask in the comment section.
Thank you for taking the time to read.


 