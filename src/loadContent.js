export const loadContent = (data) => {

    const content = document.querySelector('#content');
    let card;
    let img;

    data.forEach(item => {
    
        card = document.createElement('a');
        card.type = "image";
        card.classList.add('card');
        card.href = item.link;

        img = document.createElement('img');
        img.src = item.img;
    
        card.append(img);
    
        content.append(card);
        
    })

};






