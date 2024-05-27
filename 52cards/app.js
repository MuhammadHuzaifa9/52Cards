cards=[]
path='/images/'
for(let i=1;i<54;i++){
    imagePath=`${path} (${i}).png`
    cards.push(imagePath);
}


var main=document.querySelector('.main');

for(let i=0;i<cards.length;i++){
    main.innerHTML+=`<div class="color">
                        <img src="${cards[i]}" alt="">
                        <div class="colorname"></div>
                    </div>`
    }

