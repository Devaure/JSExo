document.addEventListener('load', function(){

    var container = document.querySelector('#container');
    /**
     * function qui permet delister les personnages
     */
    function createPersonnage(){
    
        var tabName = ["Twilight Sparkle","Spike","Applejack","Fluttershy","Rarity"];

        var ul = document.createElement('ul');

        ul.setAttribute('style', 'padding: 0; margin: 0;');
        ul.setAttribute('id', 'theList');

        for (i = 0; i <= tabName.lenght - 1; i++) {
            var li = document.createElement('li');     
            li.innerHTML = tabName[i];     
            li.setAttribute('style', 'display: block;'); 

            ul.appendChild(li);
        }
        container.appendChild(ul);    
    }
})



  