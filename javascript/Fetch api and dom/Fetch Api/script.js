// const response = fetch("https://dummyjson.com/product/1").then((response) => {

// }) .catch (error => {

// })
// // u also use async
// // console.log(response); // its gives promise

// OR

async function fetchData() {
  try {
    const loadingElement = document.querySelector("#loading");
    const phoneBox = document.getElementById("box");

    phoneBox.style.display = "block";
    phoneBox.style.display = "none";

    const response = await fetch("https://dummyjson.com/product/1");
    // console.log(response);

    const JsonData = await response.json();
    // console.log(JsonData);

    phoneBox.style.display = "block";
    loadingElement.style.display = 'none';

    loadData(JsonData);

    // const phoneTextElement = document.getElementById("phone-title");
    // phoneTextElement Q1.innerHTML = JsonData.title;
  } catch (err) {
    console.log(err);
  }
}

fetchData();
// in console we have many prototype of this function i.e --> Response
// in this, we have status: 200 means json will work properly

// api are rapidapi.com, dummyjson, icanahazedadjoke.api u have to ewwrite after the web /slack

// when load  data
function loadData(JsonData) {
  const phoneTextElement = document.getElementById("phone-title");
  const phoneDesc = document.getElementById("phone-desc");
  const phoneImg = document.getElementById("phone-img");

  // using destructing
  const { title, description, thumbnail} = JsonData; 


  phoneTextElement.innerHTML = title;
  phoneDesc.innerHTML = description;
  phoneImg.innerHTML =thumbnail;

  // phoneTextElement.innerHTML = JsonData.title;
  // phoneDesc.innerHTML = JsonData.description;
  // phoneImg.innerHTML = JsonData.thumbnail;
}
