//access API key from the unsplash and mention here 
const accessKey  = "uDvjOJodsO_QX0ermQ7IhI8qEuLCIN8gpq0ccg9a0QM"

//import all HTML emement from index.html 
const formElement = document.querySelector("form")
const inputElement = document.getElementById("search-input")
const searchReasults = document.querySelector(".search-results")
const showMore = document.getElementById("show-more-button")

let inputData = "";
let pageNumber = 1;

async function searchImages(){
    inputData = inputElement.value;
    // This url fetch all the data from unsplash API
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`;

// for visualizing data in json format our website we user resposse and fetch 
    const response = await fetch(url)
    const data = await response.json()

//Now convert json format into image format
const results = data.results;
if(page === 1){
    searchReasults.innerHTML="";
}

//for dynamically changes of front page
    results.map((result)=>{
        //for creating a dupplicate container templet
        const imageWrapper = document.createElement('div')
        imageWrapper.classList.add("search-result")

        //for image
        const image = document.createElement('img')
        image.src=result.urls.small
        image.alt = result.alt_description

        //for anchor tag or link
        const imageLink = document.createElement('a')
        imageLink.href = result.links.html
        imageLink.target = "_blank"
        //for text about an image
        imageLink.textContent = result.alt_description

        //append those elements in our html page
        imageWrapper.appendChild(image)
        imageWrapper.appendChild(imageLink)
        searchReasults.appendChild(imageWrapper)

    })
    //After the first phrase of images we need to increase the page number and display the show more btn
    page++

    if(page > 1){
        showMore.style.display = "block"
    }
}

//call the function
formElement.addEventListener("submit", (event) =>{
    event.preventDefault()
    page = 1;
    searchImages()
});

//images  show after click on the show more button
showMore.addEventListener("click", () =>{
    searchImages()
});