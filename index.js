const baseUrl=('http://localhost:3000')
fetch(baseUrl + '/movies')
.then((res)=>res.json())
.then((data)=>imageList(data))

function imageList(movies){
const cards=document.querySelector('.cards');
movies.forEach((movie)=>{
    const image=document.createElement('img')
    image.src=movie.image
    image.setAttribute('class', 'image')
    cards.append(image)
})}

