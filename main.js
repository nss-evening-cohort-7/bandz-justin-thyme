function printToDom (stringToPrint, divId){
    var thingToPrint = document.getElementById(divId);
    if(thingToPrint){
        thingToPrint.innerHTML += stringToPrint;
    }
};

/********************* News Array of Objects******************************/

var newsArticle = [
 {
     "title": " Kids Choice Awards 2018!!!",
        "imgUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZFh4Cc2TXr-Z4yKGfHh6jqmj2PG8HWIfkwM9_Hx3nF3GRDKw6",
    "description": 'Huge shoutout to all of the kids who recognized Justin-Thymes, ‘Can’t stop the feeling’, in the movies Trolls as 2017’s song of the year! Although we  know that the song was really Justin Timberlakes, we are grateful that you guys aren’t going to judge us as we accept this award as our own on March 24th! Trolls was also released in 2016, so we were shocked to receive this nomination two years later… Nevertheless we are grateful to Nickelodeon Productions and every kid who voted for us!! Check us out on Nickelodeon on the 24th at 8pm. Don’t click on the link below because It may or may not take you to a page of nominees that does not have our name on it.',
    "link": "http://deadline.com/2018/02/2018-kids-choice-awards-nominations-nickelodeon-stranger-things-dwayne-johnson-john-cena-1202303369/"
 },
 {
     "title": "Fan Meet Up",
     "imgUrl": "https://i.ytimg.com/vi/x8557mvp0Ec/maxresdefault.jpg",
     "description": "Once a month we host a fan meet up!! This month’s meet up will be hosted at  our city’s hottest spot, Harley’s Pub! Come out on March 26th and enjoy some booze and a few of your favorite hits!! Come early or risk the chance of not getting in! See ya there!",
     "link": "https://www.facebook.com/harleyspubandpool/"
 },
 {
     "title": "Facebook Live Announcement",
     "imgUrl": "http://marketingland.com/wp-content/ml-loads/2016/04/facebook-live-logo2-1920.jpg",
     "description": "You guys asked for it, so we’ve decided to make our Facebook Live a weekly thing. Join us on Wednesdays at 7pm to hear us jam out, talk about our random favorite things, and answer any questions you may have! Leave comments on our page and let us know if you would like for us to talk about anything in particular! See ya Wednesday!",
     "link": "https://www.facebook.com/justinthymeband/"
 }
];

function newsCrap (newsArray) {
    for (var i = 0; i < newsArray.length; i++) {
        var newsTitle = newsArray[i].title;
        var newsImg = newsArray[i].imgUrl;
        var newsDescription = newsArray[i].description;
        var newsLink = newsArray[i].link;
        var newsString = '';
        newsString += `<div class="newsBox">`;
        newsString +=   '<h1 class= "jr-title">'+ newsTitle + '</h1>';
        newsString +=   `<img class="jr-newsImg" src= "${newsImg}">`;
        newsString +=     `<div class="jr-newsTextBox">`;
        newsString +=       '<p class= "jr-newsP">' + newsDescription + '</p>';
        newsString +=       `<a href= "${newsLink}">` + newsLink + `</a>`;
        newsString +=     '</div>';
        newsString += `</div>`;
        printToDom(newsString, "news-container");
        
    }
};

newsCrap(newsArticle);


// Home Page Photo Carousel----Stretch Goal------
var jsSlides = document.querySelectorAll('#photoSlides .slide');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,5000);

function nextSlide() {
    jsSlides[currentSlide].className = 'slide';
    currentSlide = (currentSlide+1)%jsSlides.length;
    jsSlides[currentSlide].className = 'slide first';
}

// Band Members

var bandMembers = [
    {
        memberName: "Adam",
        position: "Lead Vocalist",
        memberPhoto: "../img/adam.jpg",
        favList:  "Favorite Artist",
        listOne:  "Mariah Care", 
        listTwo:  "Brittney Spears",
        listThree:  "Jessica Simpson",
        paraMember: "Music is like a dream. One that I cannot hear. ―  Ludwig van Beethoven"
    },
    {
        memberName: "Stix",
        position: "Guitarist",
        memberPhoto: "../img/stix.jpg",
        favList:  "Favorite Artist",
        listOne:  "The Sonics",
        listTwo:  "The White Stripes",
        listThree: "The Stoogies",
        paraMember: "I can chase you, and I can catch you, but there is nothing I can do to make you mine. ― Morrissey"
    },
    {
        memberName: "Leo",
        position: "Drummer",
        memberPhoto: "../img/leo.jpg",
        favList:  "Favorite Artist",
        listOne:  "BackStreet Boys",
        listTwo:  "5ive",
        listThree: "LFO", 
        paraMember: "One good thing about music, when it hits you, you feel no pain. ― Bob Marley"
    },
    {
        memberName: "Colin",
        position: "Bassist",
        memberPhoto: "../img/colin.jpg",
        favList:  "Favorite Artist",
        listOne:  "Savage Garden", 
        listTwo:  "B2K",
        listThree: "Hanson",
        paraMember: "Without music, life would be a blank to me.― Jane Austen"     
    },
    {
        memberName: "Lola",
        position: "Keytarist",
        memberPhoto: "../img/lola.jpg",
        favList:  "Favorite Artist",
        listOne:  "Radiohead",
        listTwo: "Pa-Rappa-Da-Rappa",
        listThree: "AC/DC",
        paraMember: "Music touches us emotionally, where words alone can’t. ― Johnny Depp" 
    }

];


function memberBand(membersArray){
        var memName;
        var memPosition;
        var memPhoto;
        var memFavs;
        var memOne;
        var memTwo;
        var memThree;
        var memInfo;
        var memberString;
        for (var i = 0; i < membersArray.length; i++) {
             memName = membersArray[i].memberName;
             memPosition = membersArray[i].position;
             memPhoto = membersArray[i].memberPhoto;
             memFavs = membersArray [i].favList.toUpperCase();
             memOne = membersArray[i].listOne;
             memTwo = membersArray[i].listTwo;
             memThree = membersArray[i].listThree;
             memInfo = membersArray[i].paraMember.toUpperCase();
             memberString = "";
        memberString += '<div class="member">';
        memberString += '<h2>' + memName + '</h2>';
        memberString += '<h3>' + memPosition + '</h3>';
        memberString += `<img class="memberPhoto" src= "${memPhoto}">`;
        memberString += '<ul id="m' + [i] + '" class="memberList">';
        memberString += '<h3>' + memFavs + '<h3>';
        memberString += '</ul>';
        memberString += '<p class="paraMember">' + memInfo + '<p>';
        memberString += '</div>';

            printToDom(memberString, "member-main-container")
    };
}

memberBand(bandMembers);

var favoriteArtists = [
    "Brittney Spears",
    "The Sonics",
    "The White Stripes",
    "Jessica Simpson",
    "BackStreet Boys",
    "The Stoogies",
    "AC/DC",
    "5ive",
    "LFO",
    "Hanson",
    "Mariah Care",
    "Savage Garden",
    "B2K",
    "Radiohead",
];

var membersOfBand = [
    {
        name: "Adam",
        favArtists: [1, 5, 11],
    },
    {
        name: "Stix",
        favArtists: [3, 2, 13],
    },
    {
        name: "Leo",
        favArtists: [4, 7, 12],
    },
    {
        name: "Colin",
        favArtists: [6, 8, 11],
    },
    {
        name: "Lola",
        favArtists: [10, 9, 0],
    },
];

function favoriteArtistsPrinter(members) {
    var currentObject;
    var favArtistIndex;
    for (var i = 0; i < membersOfBand.length; i++) {
        var stringToPrint = "";
        currentObject = membersOfBand[i];
        for (var j = 0; j < currentObject.favArtists.length; j++) {
            favArtistIndex = currentObject.favArtists[j];
            stringToPrint += "<li>" + favoriteArtists[favArtistIndex] + "</li>";
        }
        var printToDiv = "m" + [i];
        printToDom(stringToPrint, printToDiv);
    }
}

favoriteArtistsPrinter(membersOfBand);

// AJW Media Albums

var arrayOfAlbums = [
    {
        img: "../img/album-in-times.jpg",
        title: "In Times of Trouble  1983",
    },
    {
        img: "../img/album-t-rex.jpg",
        title: "My people were fair and had sky in their hair.." + "<br>" + "But now they're content to wear stars on their brows  1968",
    },
    {
        img: "../img/album-robin.jpg",
        title: "Sandcastles In The Sand  1985",
    }
];

function albumsToDom (objectArray, divID){
    var stringToPrint = "";
    var currentObject;
    for(var i = 0; i < objectArray.length; i++){
        currentObject = objectArray[i];
        stringToPrint += "<div class='ajw-album'>";
        stringToPrint += "<img src=" + currentObject.img + ">";
        stringToPrint += "<h3>" + currentObject.title + "</div>";
        stringToPrint += "</div>"; 
    }
    printToDom(stringToPrint, divID);
}

albumsToDom(arrayOfAlbums, "ajw-albums-id");

/********************* Tour Array of Objects******************************/

var tourSchedule = [
    {
      month: "MARCH",
      day: "18",
      venue: "SOUTH BY SOUTHWEST (SXSW)",
      location: "AUSTIN, TX",
      ticketLink: "TICKETS"
    },
    {
      month: "APRIL",
      day: "20",
      venue: "COACHELLA VALLEY MUSIC & ARTS FESTIVAL",
      location:"INDIO, CA",
      ticketLink: "TICKETS"
    },
    {
      month: "MAY",
      day: "5",
      venue: "BEALE STREET MUSIC FESTIVAL",
      location: "MEMPHIS, TN",
      ticketLink: "TICKETS"
    },
    {
      month: "MAY",
      day: "19",
      venue: "HANGOUT MUSIC FESTIVAL",
      location: "GULF SHORES, AL",
      ticketLink: "TICKETS"
    },
    {
      month: "JUNE",
      day: "2",
      venue: "GOVERNORS BALL",
      location: "RANDALL’S ISLAND, NYC", 
      ticketLink: "TICKETS"
    },
    {
      month: "JUNE",
      day: "9",
      venue: "BONNAROO",
      location: "MANCHESTER, TN", 
      ticketLink: "TICKETS"
    },
    {
      month: "AUGUST",
      day: "4",
      venue: "LOLLAPALOOZA",
      location: "CHICAGO, IL", 
      ticketLink: "TICKETS"
    }
  ];

  function createTourSchedule(tourArray){
      for (var i = 0; i < tourArray.length; i++){
          var tourString = ""; 
        if (tourArray[i]){
            tourString += '<div class="cw-tourSchedule">';
            tourString += "<h1>" + tourArray[i].month + " " + tourArray[i].day + "</h1>";
            tourString += "<h1>" + tourArray[i].venue + "</h1>";
            tourString += "<h1>" + tourArray[i].location + "</h1>";
            tourString += "<a href='https://www1.ticketmaster.com/jayz-and-beyonce-otr-ii-nashville-tennessee-08-23-2018/event/1B00546BB10E2680?artistid=781009&majorcatid=10001&minorcatid=3&f_PPL=true&ab=efeat5787v1' target='_blank'><button class='cw-button'>" + tourArray[i].ticketLink + "</button>";
            tourString += '</div>';  
            printToDom(tourString, "tour-schedule");
        }
     
      }
  }

  //function printToDom (stringToPrint, divId){
     //var thingToPrint = document.getElementById(divId);
     //thingToPrint.innerHTML += stringToPrint;
 //}

 createTourSchedule(tourSchedule);

 /********************* Ending of Tour Array of Objects******************************/

// ********************** Home Page Tour print first 3 *******************

function topThreeDates(topThree){
    for (var l = 0; l < 4; l++){
        var sampleString = "";
        if (topThree[l]){
            sampleString += '<div class="lt-jsTourContainer">';
            sampleString += "<div class='lt-tour'>" + topThree[l].month + " " + topThree[l].day + " " + "<span class='lt-venue'>"+topThree[l].venue+"</span>" + " " + "<button class='homeTourButton'>" + topThree[l].ticketLink + "</button>" + "</div>";
            sampleString += "<div class='lt-tourRowTwo'>" + topThree[l].location + "</div>";
            sampleString += '</div>';  
            printToDom(sampleString, "homeTourContainer");
        }
        
    }
}
topThreeDates(tourSchedule);

