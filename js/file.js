document.addEventListener('load', main());

    function main(){
        const container = document.querySelector('#containerList');
        container.appendChild(createPersonnage());
    }
  
    /**
     * function qui permet delister les personnages
     */
    function createPersonnage(){
    
        var tabName = ["Twilight Sparkle","Spike","Applejack","Fluttershy","Rarity"];

        var ul = document.createElement('ul');

        ul.setAttribute('style', 'padding: 0; margin: 0;');
        ul.setAttribute('id', 'theList');

        for (let i = 0; i <= tabName.length - 1; i++) {
            let li = document.createElement('li');     
            li.innerText = "list"+ tabName[i];     
            li.setAttribute('style', 'display: block;'); 
            li.setAttribute("class", "styleList");
            ul.appendChild(li);
        }
        return ul;    
    }



  