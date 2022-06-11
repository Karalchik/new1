document.querySelector("#btn").addEventListener("click", function()
{
    let request = new XMLHttpRequest()// create request
    //request setup
    request.open('GET',"data.json",false)
    request.send()
    if(request.status==200)
    {
        console.log(request.responseText)
        console.log(JSON.parse(request.responseText))
        document.querySelector("#res").innerHTML=(JSON.parse(request.responseText)).name
        
    }
})