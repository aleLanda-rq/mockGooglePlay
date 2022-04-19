const baseUrl=('http://localhost:3000')
fetch(baseUrl + '/movies')
.then((res=>res.json()))
.then((data=>imageList(data)))

function imageList(movie){
const cards=document.querySelector('.cards');
const ummaImg=document.querySelector('#umma_image');
ummaImg.src=movie.image;
const outfitImg=document.createElement('img');
outfitImg.setAttribute('id', 'outfitImage');
outfitImg.src=movie.image;
const contractorImg=document.createElement('img');
contractorImg.setAttribute('id', 'contractorImage');
contractorImg.src=movie.image;
const nileImg=document.createElement('img');
nileImg.setAttribute('id', 'nileImage');
nileImg.src=movie.image;
const moonfallImg=document.createElement('img');
moonfallImg.setAttribute('id', 'moonfallImage');
moonfallImg.src=movie.image;
const infiniteImg=document.createElement('img');
infiniteImg.setAttribute('id', 'infiniteImage');
infiniteImg.src=movie.image;
const aliceImg=document.createElement('img');
aliceImg.setAttribute('id', 'aliceImage');
aliceImg.src=movie.image
cards.append(ummaImg, outfitImg,contractorImg, nileImg, moonfallImg, infiniteImg, aliceImg)
}

fetch(baseUrl + '/movies')
.then((res=>res.json()))
.then((data=>audiobooks(data)))

function audiobooks(audio){


}
