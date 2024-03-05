window.addEventListener('DOMContentLoaded', (event) => {
    getVisitCount();
});

const functionApi = 'https://site-visitor-counter.azurewebsites.net/api/HttpTrigger1?code=4UWaIY8LabfBSNK8gTjMHjHLCvxOibLifvMAanM4P9KVAzFuBLqBCg==';

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
