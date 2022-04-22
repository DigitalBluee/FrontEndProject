function abrir(){


    document.getElementById('overlay').style.display = 'block';
    document.getElementById('modal').style.animationPlayState = 'running'
    
    }
    
    
    function cerrar(){
    
    
        document.getElementById('overlay').style.display = 'none';
        document.getElementById('modal').style.animationPlayState = 'paused'
        
        }