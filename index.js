function appendImageElem(keyword, index){
    const imgElem = document.createElement('img');
    imgElem.src = `https://source.unsplash.com/400x225/?${keyword}&sig=${index}`;

    const galleryElem = document.querySelector('.gallery');
    galleryElem.appendChild(imgElem);
}

function removePhotos(){
    const galleryElem =document.querySelector('.gallery')
    galleryElem.innerHTML = '';
}

function searchPhotos(event){
    const keyword =event.target.value;
    console.log(keyword);
    if (event.key === 'Enter' && keyword){
        removePhotos();

        for(let a =1; a <=9; a++){
            appendImageElem('keyword', a);
        }        
    }
}

function run(){
    const inputElem = document.querySelector('input');
    inputElem.addEventListener('keydown', searchPhotos)
}

run();