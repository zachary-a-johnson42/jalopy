import {showNotification} from "../messaging.js";
import {getUser} from "../auth.js";

const BASE_URI = `${BACKEND_HOST}/api/s3/download`;



export default function Home(props) {
    //img is not going. path looks good, intellij is reading. set to variable, still not going though..
    return `
        <header>
            <h1>Hello Jalopy</h1>
        </header>
        <main>
            <div>
                <img id="jalopy-img" src = "https://c8.alamy.com/comp/G3K7YD/jalopy-car-cars-race-racing-banger-stock-vintage-old-nostalgia-broken-G3K7YD.jpg" />
                <p>
                    Welcome to my Jalopy application
                </p>    
                <button id="img-button" type="button">Switch Jalopies</button>
            </div>
        </main>
    `;
}

export function HomeEvents() {
    // TODO: use an enum for message type
    // const authority = getUserRole();

    //add button event listener to change images
    let jalopyImg = document.getElementById("jalopy-img");
    let imgButton = document.getElementById("img-button");

    imgButton.addEventListener("click", (e)=>{
        if (jalopyImg.src === "https://c8.alamy.com/comp/G3K7YD/jalopy-car-cars-race-racing-banger-stock-vintage-old-nostalgia-broken-G3K7YD.jpg") {
            jalopyImg.src === "https://www.google.com/imgres?imgurl=https%3A%2F%2Fthumbs.dreamstime.com%2Fb%2Fold-truck-rusted-abandoned-grunge-51371059.jpg&imgrefurl=https%3A%2F%2Fwww.dreamstime.com%2Fphotos-images%2Fjalopy-car-truck.html&tbnid=vV3bIcKNQQ7k_M&vet=12ahUKEwiQht3RkYP5AhUakWoFHaHoC80QMygnegUIARClAg..i&docid=GFmRajewB3G48M&w=800&h=533&q=jalopy%20image%20free&ved=2ahUKEwiQht3RkYP5AhUakWoFHaHoC80QMygnegUIARClAg"
        }

        if(jalopyImg.src === "https://www.google.com/imgres?imgurl=https%3A%2F%2Fthumbs.dreamstime.com%2Fb%2Fold-truck-rusted-abandoned-grunge-51371059.jpg&imgrefurl=https%3A%2F%2Fwww.dreamstime.com%2Fphotos-images%2Fjalopy-car-truck.html&tbnid=vV3bIcKNQQ7k_M&vet=12ahUKEwiQht3RkYP5AhUakWoFHaHoC80QMygnegUIARClAg..i&docid=GFmRajewB3G48M&w=800&h=533&q=jalopy%20image%20free&ved=2ahUKEwiQht3RkYP5AhUakWoFHaHoC80QMygnegUIARClAg") {
            jalopyImg.src = "https://www.google.com/imgres?imgurl=https%3A%2F%2Fthumbs.dreamstime.com%2Ft%2Fjalopy-19897465.jpg&imgrefurl=https%3A%2F%2Fwww.stockfreeimages.com%2Fp1%2Fjalopy.html&tbnid=py9Nk3y6iPwf-M&vet=12ahUKEwiQht3RkYP5AhUakWoFHaHoC80QMyhbegUIARCsAQ..i&docid=3jli4EbIAoT5lM&w=246&h=160&q=jalopy%20image%20free&ved=2ahUKEwiQht3RkYP5AhUakWoFHaHoC80QMyhbegUIARCsAQ"
        }

        if(jalopyImg.src === "https://www.google.com/imgres?imgurl=https%3A%2F%2Fthumbs.dreamstime.com%2Ft%2Fjalopy-19897465.jpg&imgrefurl=https%3A%2F%2Fwww.stockfreeimages.com%2Fp1%2Fjalopy.html&tbnid=py9Nk3y6iPwf-M&vet=12ahUKEwiQht3RkYP5AhUakWoFHaHoC80QMyhbegUIARCsAQ..i&docid=3jli4EbIAoT5lM&w=246&h=160&q=jalopy%20image%20free&ved=2ahUKEwiQht3RkYP5AhUakWoFHaHoC80QMyhbegUIARCsAQ"){
            jalopyImg.src = "https://c8.alamy.com/comp/G3K7YD/jalopy-car-cars-race-racing-banger-stock-vintage-old-nostalgia-broken-G3K7YD.jpg"
        }
    })



}