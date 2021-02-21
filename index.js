
var currentStatus = false;

    document.getElementById("menu-icon").addEventListener("click",function(){
        dropMenu(currentStatus);
      });
     
     

      function dropMenu(status){
        if(status){
            currentStatus = false;
            document.getElementById("menu").removeAttribute("class");  
              document.getElementById("menu").setAttribute("class", "fa fa-bars");
            document.getElementById("nav-links").style.display = "none";

        }
        else{
            currentStatus = true;
            removeCurrentStatus =true;
            document.getElementById("menu").removeAttribute("class");
            document.getElementById("menu").setAttribute("class", "fa fa-close");
            document.getElementById("nav-links").style.display = "block";
            

        }
      }
     
      window.addEventListener("resize", function(){
          if( window.innerWidth <= 600){  
            document.getElementById("menu").removeAttribute("class");  
              document.getElementById("menu").setAttribute("class", "fa fa-bars");
              document.getElementById("nav-links").style.display = "none";
          }
          else{
            document.getElementById("menu").removeAttribute("class");
            document.getElementById("nav-links").style.display = "block";
            
            
          }
      });

 window.addEventListener("reload", function(){
        if(window.innerWidth <= 600){
            document.getElementById("menu").setAttribute("class", "fa fa-bars");
        }

      });

     
