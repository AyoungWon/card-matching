var wrapper = document.querySelector('.wrapper');
var ver = 3;
var hor = 4



function cardClick(e){

e.currentTarget.classList.toggle('fliped');
}



//card setting
for(i = 0; i < ver; i++){
    
    var line = document.createElement('div');
    line.className = 'line';
    for(j=0; j<hor; j++){
        var card = document.createElement('div');
        card.className = 'card';
        card.addEventListener('click',cardClick);
        var cardWrap = document.createElement('div');
        cardWrap.className = 'card-wrap';
        var front = document.createElement('div');
        front.className = 'card-face front';
        cardWrap.appendChild(front);
        var back = document.createElement('div');
        back.className = 'card-face back';
        cardWrap.appendChild(back);
        card.appendChild(cardWrap);
        line.appendChild(card);
    }
    
wrapper.appendChild(line);
}
