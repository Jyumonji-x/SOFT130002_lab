const works = [
    { author: "Micheal Jackson",lifetime:"1022-1055",tips: "Human", photos: ["human1.jpg","human2.jpg","human3.jpg"] },
    { author: "Maria JK",lifetime:"1920-2001", tips: "Classical", photos: ["classical1.jpg","classical2.jpg"] },
    { author: "John Herry UY", lifetime:"1894-1928",tips: "Abstract", photos: ["abstract1.jpg","abstract2.jpg","abstract3.jpg","abstract4.jpg","abstract5.jpg"] },
    { author: "Coco",lifetime:"1777-1799", tips: "Beauty",  photos: ["beauty1.jpg","beauty2.jpg"] }
];
let container = document.getElementsByClassName("flex-container");
for(let i =0;i<works.length;i++){
    let item = document.createElement("div");
    item.classList.add("item");

    let genre = document.createElement("h4");
    genre.innerHTML="Genre:"+works[i].tips;


    let authorInnerBox = document.createElement("div");
    authorInnerBox.classList.add("inner-box");

    let author = document.createElement("h3");
    author.style.display="inline";
    author.innerHTML = works[i].author;

    let lifetime = document.createElement("h5");
    lifetime.style.display="inline";
    lifetime.innerHTML = "&nbsp;&nbsp;lifetime:"+ works[i].lifetime;
    authorInnerBox.append(author,lifetime);




    let photoInnerBox = document.createElement("div");
    photoInnerBox.classList.add("inner-box");

    let popularPhotos = document.createElement("h3");
    popularPhotos.innerHTML = "Popular Photos";
    photoInnerBox.append(popularPhotos);

    for(let j=0;j<works[i].photos.length;j++){
        let photo = document.createElement("img");
        photo.classList.add("photo");
        photo.src = works[i].photos[j];
        photoInnerBox.append(photo);
    }




    let button = document.createElement("button");
    button.innerHTML="Visit";

    item.append(genre,authorInnerBox,photoInnerBox,button);
    container[0].append(item);
}


