function getq() {
    document.getElementById("pa").innerHTML=" ";
    var queri=document.getElementById("query").value;
    var url="https://api.nasa.gov/planetary/apod?api_key=4iWhuYckFgwjufu2vCPzb3OB5B5gdqUeXw2PJvF3&date=";
    var finale=url+queri;
    
    
    
    fetch(finale).
    then(resp => resp.json())
    .then(data => {
        dat=data['explanation'];
     dat1=data['url'];
     ayo=document.getElementById('im');





     ayo.style.cssText="width:80%;height:50%;margin:10%;margin-top:3%;";
        
       ayo.setAttribute("src",dat1);
      
        var exp=document.createElement("p");
        pa.style.cssText="text-align:center;";
       var xc=document.createTextNode(dat);
       document.getElementById("pa").appendChild(xc);



    });





}
