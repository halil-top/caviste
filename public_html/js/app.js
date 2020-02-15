function getWine(id, wines) {
    wines.forEach(function(wine) {
        if(wine.id == id) {
            let input = document.getElementById('idWine');
            input.value = wine.id;
            
            input = document.getElementById('name');
            input.value = wine.name;
            
            input = document.getElementById('grapes');
            input.value = wine.grapes;
            
            input = document.getElementById('country');
            input.value = wine.country;
            
            input = document.getElementById('region');
            input.value = wine.region;
            
            input = document.getElementById('year');
            input.value = wine.year;
            
            input = document.getElementById('notes');
            input.innerHTML = wine.notes;
            
            let imgWine = document.getElementById('picture');
            imgWine.src = 'images/'+wine.picture;
        }
    });
}


window.onload = function() {
    const xhr = new XMLHttpRequest();       //console.log(xhr);
    
    xhr.onreadystatechange = function() {
        if(xhr.readyState==4 && xhr.status==200) {
            let data = xhr.responseText;        //console.log(data);
            
            let wines = JSON.parse(data);       console.log(wines);
                        
            //Sélectionner la liste des vins
            let listeUL = document.getElementById('liste');
            let strLIs = '';
            
            //Pour chaque vin, créer un LI
            wines.forEach(function(wine) {
                let idWine = wine.id;
                
                strLIs += '<li data-id="'+idWine+'" class="list-group-item">'+wine.name+'</li>';
            });
            
            //Insérer tous les LIs dans la liste UL des vins
            listeUL.innerHTML = strLIs;
            
            //Récupérer tous les LIs
            let nodeLIs = listeUL.getElementsByTagName('li');
            
            //Ajouter un gestionnaire d'événement sur chaque LI
            for(let li of nodeLIs) {
                li.addEventListener('click',function() { 
                    getWine(this.dataset.id, wines);
                    
                   // console.log(wine);
                });
            }
        }
    };
            
    xhr.open('GET','js/wines.json',true);
    xhr.send();
};

