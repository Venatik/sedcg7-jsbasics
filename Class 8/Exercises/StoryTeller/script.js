let btn = document.getElementById("tell");

function tellStory() {
    let who = document.getElementById("who").value;
    let what = document.getElementById("what").value;
    let where = document.getElementById("where").value;
    let story = (`Once upon a time there was ${who}, the greatest ${what} in all of ${where}.`)
    document.getElementById("storyTime").innerText = story;

    document.getElementById("who").value = "";
    document.getElementById("what").value = "";
    document.getElementById("where").value = "";
}

btn.addEventListener("click", tellStory);