const dragArea = document.querySelector(".app-imagedrop"),
dragText = dragArea.querySelector("h3"),
button = dragArea.querySelector("button"),
input = dragArea.querySelector("input");
let myFile ;


button.onclick = ()=>{
     input.click();
}

input.addEventListener("change", function() {
    myFile = this.files[0];
    dragArea.classList.add("active");
    showMe();

})

dragArea.addEventListener("dragover", (event)=> {
    event.preventDefault();
    dragArea.classList.add("active");
    dragText.innerHTML = "Release to upload success";
})

dragArea.addEventListener("dragleave", () => {
    dragArea.classList.remove("active");
    dragText.innerHTML = "Drag and Drop";

})

dragArea.addEventListener("drop", (event)=>{
    event.preventDefault();
    myFile = event.dataTransfer.files[0];
    showMe();
})

function showMe() {
    let fileType = myFile.type;
    let valEx  = ["image/jpeg", "image/jpg", "image/png"];

    if(valEx.includes(fileType)) {
        let filereader = new FileReader();
        filereader.onload = ()=>{
            let imgUrl = filereader.result;
            let img = `<img src="${imgUrl}" alt=""></img>`;
            dragArea.innerHTML = img;

        }
        filereader.readAsDataURL(myFile);

    } else {
        alert("It is not valid file");
        dragArea.classList.remove("active");
        dragText.innerHTML = "Drag and Drop";
    }
}