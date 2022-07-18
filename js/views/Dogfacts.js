//This needs to be exported to create the view??

export default function DogFactsView(props) {
        return `
<div class="container">
    <h1>Dog Facts</h1>
    <div class="card">
        <div class="card-body">
            <p class="dog-fact" style="visibility: hidden">${props}</p>
        </div>
    </div>
    <button class="form-control" id="show-fact-btn">Show Fact</button>
</div>
`;}

// export event listeners on the Dog facts view
export function DogFactsEvents() {
    const btn = document.querySelector("#show-fact-btn");
    btn.addEventListener("click", function (event) {
        const facts = document.querySelectorAll(".dog-fact");
        for (let i = 0; i < facts.length; i++) {
            facts[i].style.visibility = "";
        }
    });
}
