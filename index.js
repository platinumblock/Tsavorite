window.addEventListener('scroll', () => {
    var scroll=(-1)*(window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
   
    if(scroll<=1){
        document.getElementById("container").style.opacity=(1.5-scroll);
        document.getElementById("container").style.filter="brightness("+(1-scroll)*100+"%)";
        document.getElementById("container").style.display="block";
        document.getElementById("container").style.top=100*scroll+"%";
        document.getElementById("container2").style.top=(100*scroll)+"%";
        document.getElementById("container2").style.opacity=scroll;
    }else{
        document.getElementById("container").style.filter="brightness(0%)";
        document.getElementById("container").style.opacity=0;
        document.getElementById("container").style.display="none";
        document.getElementById("container2").style.top="100%";
        document.getElementById("container2").style.opacity=1;
    }
  }, false);