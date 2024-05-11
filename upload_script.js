//selecting all required elements
const uploadContainer = document.querySelector("#upload-container"),
  dragText = uploadContainer.querySelector("header"),
  button = uploadContainer.querySelector("button"),
  input = uploadContainer.querySelector("input"),
  body = document.querySelector("div.page");
let file_list; //this is a global variable that will hold FileList of all files uploaded

//this div will hold all the files uploaded
let file_list_div = document.createElement("div");
file_list_div.classList.add("file-list");
file_list_div.classList.add("scrollbar-style");
//I want to make this div file_list_div scrollable once it has more that 4 childs

button.onclick = () => {
  input.click(); //if user click on the button then the input also clicked
};

input.addEventListener("change", function () {
  //assign all selected files to file variable
  file_list = this.files;
  uploadContainer.classList.add("active");
  show_file_list();
});

//If user Drag File Over uploadContainer
uploadContainer.addEventListener("dragover", (event) => {
  event.preventDefault(); //preventing from default behaviour
  uploadContainer.classList.add("active");
  dragText.textContent = "Release to Upload File";
});

//If user leave dragged File from uploadContainer
uploadContainer.addEventListener("dragleave", () => {
  uploadContainer.classList.remove("active");
  dragText.textContent = "Drag & Drop to Upload File";
});

//If user drop File on uploadContainer
uploadContainer.addEventListener("drop", (event) => {
  event.preventDefault();
  //assign all selected files to file variable
  file_list = event.dataTransfer.files;
  show_file_list();
  //TODO
  //This is debugging code that checks if a file has been uploaded and if yes displayes success
  if (file_list.length > 0) {
    uploadContainer.classList.add("active");
    console.log(file_list);
  }
});

function show_file_list() {
  for (let i = 0; i < file_list.length; i++) {
    let file_div = document.createElement("div");
    file_div.classList.add("file_item");

    //create a new div to hold the file name
    let file_name_div = document.createElement("div");
    file_name_div.textContent = file_list[i].name;
    file_name_div.classList.add("file_name");

    //create a new div to hold the file size
    let file_size_div = document.createElement("div");
    file_size_div.textContent = `${file_list[i].size} bytes`;
    file_size_div.classList.add("file_size");

    //create a new span to add corresponding google icon to file type
    let file_type_span = document.createElement("span");
    file_type_span.classList.add("material-symbols-outlined");
    file_type_span.classList.add("file_type");

    //check the file type and add the corresponding text in the span element if (txt -> description, pdf -> picture_as_pdf)
    let file_type = file_list[i].name.split(".")[1];
    if (file_type === "txt") {
      file_type_span.textContent = "description";
    } else if (file_type === "pdf") {
      file_type_span.textContent = "picture_as_pdf";
    } else {
      file_type_span.textContent = "unknown_document";
    }

    //append the file icon, name and size divs to the file div
    file_div.appendChild(file_type_span);
    file_div.appendChild(file_name_div);
    file_div.appendChild(file_size_div);

    //append the file div to the file_list_div
    file_list_div.appendChild(file_div);
  }

  //append file_list_div to uploadContainer only if it does not exist (meaning it is the first element uploaded)
  if (!body.querySelector(".file-list")) {
    body.appendChild(file_list_div);
  }
  //creat button called go to training if not already created
  if (!body.querySelector(".go-to-training")) {
    let go_to_training_button = document.createElement("button");
    go_to_training_button.textContent = "Continue";
    go_to_training_button.classList.add("go-to-training");


    go_to_training_button.onclick = () => {
      //check if the user has uploaded any files
      if (file_list.length > 0) {
        //redirect to the training page
        window.location.href = "select_base_model.html";
      } else {
        //display an alert to the user
        alert("Please upload a file to continue");
      }
    };


    body.appendChild(go_to_training_button);
  }

  //set uploadContainer class to half-window
  uploadContainer.classList.add("half-window");
}
