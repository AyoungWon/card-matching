var wrapper = document.querySelector('.wrapper');
var ver = 3;
var hor = 4
var card1,card2;
var count=1;
var flipedCard = 0;
var state;


init();

function init(){
    var colors = ['red','yellow','green','blue','navy','yellowgreen','red','yellow','green','blue','navy','yellowgreen'];
    var colorNum = colors.length;
    var shuffleColor = [];
    wrapper.innerHTML = '';
    


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

//색깔 랜덤으로 섞기
for(i=0; i<colorNum; i++){
    var select = colors.splice(Math.floor(Math.random() * colors.length )-i,1);
    shuffleColor.push(select);
    }
 
    //랜덤으로 섞은 색깔 부여하기
var cards = document.querySelectorAll('.card');
for(i=0; i<cards.length; i++){
    cards[i].querySelector('.back').style.backgroundColor = shuffleColor[i];
}
}

function check(){
    if(flipedCard === ver * hor){
        console.log("victory");
        setTimeout(init,1000)
        

    }
}

function cardClick(e){
    if(state === 'ing'){
        return;
    }
e.currentTarget.classList.toggle('fliped');
    if(count === 1){
        card1 = e.currentTarget;

        count++
        return;
    }
    if(count === 2){
        state='ing';
        card2=e.currentTarget;
        if(card1.querySelector('.back').style.backgroundColor !== card2.querySelector('.back').style.backgroundColor){
            setTimeout(function(){
                card1.classList.remove('fliped');
                card2.classList.remove('fliped');
                count = 1;
                
            },1000)
            setTimeout(function(){
                state='';
                console.log(state);
            },1100)
            
        }else{
            count=1;
            state='';
            flipedCard += 2;
            check();
        } 

        
    }




}
