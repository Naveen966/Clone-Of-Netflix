const api = "449596c7b76c35648b4769676372a5b9";

const baseURL = "https://api.themoviedb.org/3";

const imageUrl = "https://image.tmdb.org/t/p/original/";

const requests = [
  `/discover/tv?api_key=${api}&with_networks=213`,
  `/trending/all/week?api_key=${api}&language=en-US`,
  `/movie/top_rated?api_key=${api}&language=en-US`,
  `/discover/movie?api_key=${api}&with_genres=28`,
  `/discover/movie?api_key=${api}&with_genres=35`,
  `/discover/movie?api_key=${api}&with_genres=27`,
  `/discover/movie?api_key=${api}&with_genres=10749`,
  `/discover/movie?api_key=${api}&with_genres=99`,
];
let mainDisplayPageOfData = document.querySelector(".mainOfShowsDetail");
function youtube(videoLinks) {
  const youtubeLink = `https://www.youtube.com/watch?v=${videoLinks}`;
  const youtubeLinkOriginal = `<iframe style="display:none; width="560" height="315" src="${youtubeLink}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
}

// Banner functions below

let posterCover = document.getElementById("mainPartOfPoster");
let title = document.getElementById("titleOfSomething");
let description = document.getElementById("descriptionOfSomething");

//  All Rows are here below
let BoxOfTrending = document.querySelector(".innerMainDiv");
let BoxOfTrending1 = document.querySelector(".innerMainDiv1");
let BoxOfTrending2 = document.querySelector(".innerMainDiv2");
let BoxOfTrending3 = document.querySelector(".innerMainDiv3");
let BoxOfTrending4 = document.querySelector(".innerMainDiv4");
let BoxOfTrending5 = document.querySelector(".innerMainDiv5");
let BoxOfTrending6 = document.querySelector(".innerMainDiv6");
let BoxOfTrending7 = document.querySelector(".innerMainDiv7");

async function apiData() {
  const response = await fetch(`${baseURL}${requests[0]}`);
  const bannerData = await response.json();
  let banner = bannerData.results;
  // console.log(banner);
  const random = Math.floor(Math.random() * 20);
  posterCover.style.backgroundImage = `url(${imageUrl}${banner[random].backdrop_path})`;
  title.innerHTML = `${banner[random].name}`;
  description.innerHTML = `${banner[random].overview.slice(0, 200)}...`;

  // END of banner function

  //start of NetflixOriginal page function below
  const trending = await fetch(`${baseURL}${requests[0]}`);
  const DataToSet = await trending.json();
  let trendingData = DataToSet.results;
  // console.log(trendingData);

  function allData(nameOfShows) {
    let widthOfPoster = 20;

    if (window.innerWidth <= 800) {
      widthOfPoster = 8;
    }

    if (window.innerHeight == 1600 && window.innerWidth == 720) {
      widthOfPoster = 19;
    }

    return (htmlData = `<div class="content" style=" margin:3px;display: flex; justify-content: center; align-items: center;">
    <img id="BGImg" style="width:${widthOfPoster}rem;" src="${imageUrl}${
      window.innerWidth <= 800
        ? nameOfShows.poster_path
        : nameOfShows.backdrop_path
    }"> 
            <div class="tittleOfMovie">
              <h3 id="movieTittle" class="allH3" style="color: #ffffff00; display:none;">${
                nameOfShows.title || nameOfShows.name
              }</h3>
            </div>
            <div>
                <h3 id="movieTittle" style="display:none;" >${
                  nameOfShows.title || nameOfShows.name
                }</h3>
                <span class="ratting" style="color: #ffd700;font-weight: bolder;display:none;">${
                  nameOfShows.vote_average
                }</span>
            </div>
            <div class="descriptionsOfAllShows" style="display:none;">${
              nameOfShows.overview
            }</div>
          </div>
          <div class="content1" style="display:none;">${imageUrl}${
      window.innerWidth <= 800
        ? nameOfShows.poster_path
        : nameOfShows.backdrop_path
    }</div>
    <h1 class="idOfShows" style="display:none;">${nameOfShows.id}</h1>`);

    // BoxOfTrending1.innerHTML += htmlData;
  }

  function allData1(nameOfShows) {
    let widthOfPoster = 12;

    if (window.innerWidth <= 800) {
      widthOfPoster = 8;
    }

    if (window.innerHeight == 1600 && window.innerWidth == 720) {
      widthOfPoster = 19;
    }

    return (htmlData = `<div class="content" style=" margin:3px;display: flex; justify-content: center; align-items: center;">
    <img id="BGImg" style="width:${widthOfPoster}rem;" src="${imageUrl}${
      nameOfShows.poster_path
    }"> 
            <div class="tittleOfMovie">
              <h3 id="movieTittle" class="allH3" style="color: #ffffff00; display:none;">${
                nameOfShows.title || nameOfShows.name
              }</h3>
            </div>
            <div>
                <h3 id="movieTittle" style="display:none;" >${
                  nameOfShows.title || nameOfShows.name
                }</h3>
                <span class="ratting" style="color: #ffd700;font-weight: bolder;display:none;">${
                  nameOfShows.vote_average
                }</span>
            </div>
            <div class="descriptionsOfAllShows" style="display:none;">${
              nameOfShows.overview
            }</div>
          </div>
          <div class="content1" style="display:none;">${imageUrl}${
      window.innerWidth <= 800
        ? nameOfShows.poster_path
        : nameOfShows.backdrop_path
    }</div>
    <h1 class="idOfShows" style="display:none;">${nameOfShows.id}</h1>`);

    // BoxOfTrending1.innerHTML += htmlData;
  }

  trendingData.forEach((nameOfShows) => {
    // console.log(nameOfShows);
    let name = allData1(nameOfShows);
    BoxOfTrending.innerHTML += name;
  });

  // End Of NetflixOriginal Page Row

  // Stars Of trending Page row
  const trendingOriginal = await fetch(`${baseURL}${requests[1]}`);
  const DataToSet1 = await trendingOriginal.json();
  let trendingData1 = DataToSet1.results;
  // console.log(trendingData);

  trendingData1.forEach((nameOfShows) => {
    // console.log(nameOfShows);
    let name = allData(nameOfShows);
    BoxOfTrending1.innerHTML += name;
  });
  // End Of Netflix Trending Page Row

  // Start Of Netflix Top Rated Movies

  const topRated = await fetch(`${baseURL}${requests[2]}`);
  const DataToSet2 = await topRated.json();
  let trendingData2 = DataToSet2.results;
  // console.log(trendingData);

  trendingData2.forEach((nameOfShows) => {
    // console.log(nameOfShows);
    let name = allData(nameOfShows);
    BoxOfTrending2.innerHTML += name;
  });

  // End Of Top Rated row

  // Start Of Action Movies Row

  const actionMovies = await fetch(`${baseURL}${requests[3]}`);
  const DataToSet3 = await actionMovies.json();
  let trendingData3 = DataToSet3.results;
  // console.log(trendingData);

  trendingData3.forEach((nameOfShows) => {
    // console.log(nameOfShows);
    let name = allData(nameOfShows);
    BoxOfTrending3.innerHTML += name;
  });

  // End OF Action Movies Row

  // If Something will happen bad so probably this below code in this line. line number 124 to 138. i have taken these line from line number 154 😒😒
  // Start Of Horror Movies

  const comedyMovies = await fetch(`${baseURL}${requests[4]}`);
  const DataToSet4 = await comedyMovies.json();
  let trendingData4 = DataToSet4.results;
  // console.log(trendingData);

  trendingData4.forEach((nameOfShows) => {
    // console.log(nameOfShows);
    let name = allData(nameOfShows);
    BoxOfTrending4.innerHTML += name;
  });

  // End Of Horror Movies

  // Start Of Comedy Movies Row

  const horrorMovies = await fetch(`${baseURL}${requests[5]}`);
  const DataToSet5 = await horrorMovies.json();
  let trendingData5 = DataToSet5.results;
  // console.log(trendingData);

  trendingData5.forEach((nameOfShows) => {
    // console.log(nameOfShows);
    let name = allData(nameOfShows);
    BoxOfTrending5.innerHTML += name;
  });

  // End Of Comedy Movies Row

  // Start Of Romance Movies

  const romanceMovies = await fetch(`${baseURL}${requests[6]}`);
  const DataToSet6 = await romanceMovies.json();
  let trendingData6 = DataToSet6.results;
  // console.log(trendingData);

  trendingData6.forEach((nameOfShows) => {
    // console.log(nameOfShows);
    let name = allData(nameOfShows);
    BoxOfTrending6.innerHTML += name;
  });

  // End Of Romance Movies

  // Start Of Documentaries Movies
  const documentariesMovies = await fetch(`${baseURL}${requests[7]}`);
  const DataToSet7 = await documentariesMovies.json();
  let trendingData7 = DataToSet7.results;
  // console.log(trendingData);

  trendingData7.forEach((nameOfShows) => {
    // console.log(nameOfShows);
    let name = allData(nameOfShows);
    BoxOfTrending7.innerHTML += name;
  });

  // End Of Documentaries Movies
  details(); // function line number is 278

  const searchMachine = document.getElementById("searchEngine");
  searchMachine.addEventListener("keydown", () => {
    searchEngine(); // function line number is 425
  });
}

apiData();

// Scroll Function Of Netflix Row Below
function rightSideNetflix() {
  // if (BoxOfTrending.scrollLeft == 0) {
  BoxOfTrending.scrollBy(500, 0);
  // }
}
function leftSideNetflix() {
  BoxOfTrending.scrollBy(-500, 0);
}

// Scroll Function Of Trending Row Below
function rightSideTrending() {
  BoxOfTrending1.scrollBy(500, 0);
}
function leftSideTrending() {
  BoxOfTrending1.scrollBy(-500, 0);
}

// Scroll Function Of Top Rated Row Below
function rightSideTopRated() {
  BoxOfTrending2.scrollBy(500, 0);
}
function leftSideTopRated() {
  BoxOfTrending2.scrollBy(-500, 0);
}

// Scroll Function Of Action Movies Row Below
function rightSideAction() {
  BoxOfTrending3.scrollBy(500, 0);
}
function leftSideAction() {
  BoxOfTrending3.scrollBy(-500, 0);
}

// Scroll Function Of Comedy Movies Row Below
function rightSideComedy() {
  BoxOfTrending4.scrollBy(500, 0);
}
function leftSideComedy() {
  BoxOfTrending4.scrollBy(-500, 0);
}

// Scroll Function Of Horror Movies Row Below
function rightSideHorror() {
  BoxOfTrending5.scrollBy(500, 0);
}
function leftSideHorror() {
  BoxOfTrending5.scrollBy(-500, 0);
}

// Scroll Function Of Romance Movies Row Below
function rightSideRomance() {
  BoxOfTrending6.scrollBy(500, 0);
}
function leftSideRomance() {
  BoxOfTrending6.scrollBy(-500, 0);
}

// Scroll Function Of Documentaries Movies Row Below
function rightSideDocumentaries() {
  BoxOfTrending7.scrollBy(500, 0);
}
function leftSideDocumentaries() {
  BoxOfTrending7.scrollBy(-500, 0);
}

// Navigation Bar Code Below

const menu = document.getElementById("navMenu");
const LisBoss = document.querySelector(".LisBoss");

menu.onclick = () => {
  menu.style.transform = "rotate(0deg)";
  setTimeout(() => {
    LisBoss.classList.toggle("LisBoss1");
    if (LisBoss.className == "LisBoss LisBoss1") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
    menu.style.transform = "rotate(360deg)";
  }, 600);
};

// start of details page

let posterCoverInner = document.getElementById("mainPartOfPosterInner");
let titleInner = document.getElementById("titleOfSomethingInner");
let descriptionInner = document.getElementById("descriptionOfSomethingInner");
let showsRatting = document.getElementById("showsRatting");
let trailer1 = document.getElementById("trailer");
// End all elements details

function details() {
  //id of shows
  let idOfAllShows = document.querySelectorAll(".idOfShows");
  // poster elements
  let allContentElements = document.querySelectorAll(".content");
  let allContentElements1 = document.querySelectorAll(".content1");
  // Description elements
  let allDescriptionsElements = document.querySelectorAll(
    ".descriptionsOfAllShows"
  );
  // Title elements
  let allTitleElements = document.querySelectorAll(".allH3");
  // Ratting elements
  let allRattingElements = document.querySelectorAll(".ratting");
  allContentElements.forEach((name, index) => {
    name.onclick = () => {
      titleInner.innerHTML = allTitleElements[index].innerHTML;
      descriptionInner.innerHTML = `${allDescriptionsElements[
        index
      ].innerHTML.slice(0, 200)}...`;
      allRattingElements[index].innerHTML;
      let allBK = allContentElements1[index].innerHTML;
      // console.log(allBK);
      posterCoverInner.style.background = `radial-gradient(rgba(255, 255, 255, 0), rgb(3 3 3)) ,url(${allBK})`;
      posterCoverInner.style.backgroundSize = "cover";

      showsRatting.innerHTML = allRattingElements[index].innerHTML;
      document.body.style.overflow = "hidden";
      mainDisplayPageOfData.style.display = "block";

      // Trailer function below
      let ids = idOfAllShows[index].innerHTML;
      // console.log(ids);
      // console.log("key is" + idOfAllShows);
      function trailer(ok) {
        document.querySelector(".overBodyOfButton1").onclick = () => {
          fetch(`${baseURL}/movie/${ids}/videos?api_key=${api}`)
            .then((nameOfVideo) => nameOfVideo.json())
            .then((nameOfVideo2nd) => {
              // console.log(nameOfVideo2nd);
              const mixtureOfResults =
                nameOfVideo2nd.results[0 || 1 || 2 || 3].key;
              const youtubeLink = `https://www.youtube.com/embed/${mixtureOfResults}`;
              // console.log(youtubeLink);

              trailer1.setAttribute("src", youtubeLink);
              ok();
            })
            .catch(() => console.log("sorry it's a technical problem"));
          // console.log(trailer);
        };
      }

      trailer(() => {
        trailer1.style.display = "block";
      });
    };
  });
}

// Detail Page Cut Button
let cut = document.getElementById("cut");

cut.onclick = () => {
  cut.style.transform = "rotate(0deg)";
  trailer1.style.display = "none";
  trailer1.setAttribute("src", null);
  document.body.style.overflow = "visible";
  setTimeout(() => {
    mainDisplayPageOfData.style.display = "none";
    cut.style.transform = "rotate(359deg)";
  }, 500);
};

// Search Input function below
let searchInput = document.querySelector(".search");
let searchingBox = document.querySelector(".searchInput");

searchInput.onclick = () => {
  searchingBox.classList.toggle("searchInput1");
};

// const searchMachine = document.getElementById("searchEngine");
// function searchEngine() {
//   // console.log(searchMachine.value);
//   let allTitleElements = document.querySelectorAll(".allH3");
//   // console.log(allTitleElements);

//   for (let a = 0; a < allTitleElements.length; a++) {
//     let Texts = allTitleElements[a].innerHTML;
//     let searchingText = Texts.toUpperCase();
//     console.log(Texts);
//     if (searchingText == searchMachine.value.toUpperCase()) {

//     }
//   }
// }
