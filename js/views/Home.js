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
                <img id="jalopy-img" src = "jalopy/assets/jalopy1.jpg" />
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

    //getting the img tag so we can check what jalopy it's showing
    let jalopyImg = document.getElementById("jalopy-img");
    // button to add event listener. on click, change to next image.
    let imgButton = document.getElementById("img-button");

    imgButton.addEventListener("click", ()=>{
        console.log(jalopyImg.src)
        let imgSrc = jalopyImg.getAttribute("src");

        if(imgSrc === "jalopy/assets/jalopy1.jpg"){
            jalopyImg.setAttribute("src", "jalopy/assets/jalopy2.jpg" )
        }

        if(imgSrc === "jalopy/assets/jalopy2.jpg"){
            jalopyImg.setAttribute("src", "jalopy/assets/jalopy3.jpg" )
        }

        if(imgSrc === "jalopy/assets/jalopy3.jpg") {
            jalopyImg.setAttribute("src", "jalopy/assets/jalopy1.jpg" )

        }
    })




}