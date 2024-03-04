window.addEventListener('DOMContentLoaded', (event) => {
    getVisitCount();
});

const functionApi = 'https://apivisitorcounter.azurewebsites.net/api/HttpTrigger1?code=xRaU7xGJCivldRzTE4i9tiPTXy00ZYXriZJowgXUQxsSAzFuTOdy3g==';

const getVisitCount = () => {
    let count = 5;
    fetch(functionApi).then(response => {
        return response.json();
    }).then(response =>{
        console.log("Website called function API.");
        count = response.count;
        document.getElementById("counter").innerText = count;
    }).catch(function(error){
        console.log(error);
    })
}