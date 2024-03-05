# azure-resume
My [Azure resume](https://brandons.co.za) for the Cloud Resume Challenge



## Outline
    - Frontend folder contains the website files (css, html, and js)
    - Main.js contains javascript code for calling the visitor counter api
    - .github contains the workflow necessary for CI/CD to Azure
    - api contains the Node.js code that I used to build the visitor counter

## Workflows
There are two workflows setup currently: 

    - A workflow to automatically upload any changes I make to the frontend to my Azure static web storage
    - A workflow to build and deploy my Node.js application whenever I make changes to the code. This gets built and deployed to Azure Functions
    
