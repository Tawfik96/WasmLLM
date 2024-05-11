var modal1 = document.getElementById("myModal1");
var modal2 = document.getElementById("myModal2");
var modal3 = document.getElementById("myModal3");

var btn1 = document.getElementById("openModal1");
var btn2 = document.getElementById("openModal2");
var btn3 = document.getElementById("openModal3");

var span1 = document.getElementsByClassName("close")[0];
var span2 = document.getElementsByClassName("close")[1];
var span3 = document.getElementsByClassName("close")[2];

btn1.onclick = function () {
  modal1.style.display = "block";
};
btn2.onclick = function () {
  modal2.style.display = "block";
};
btn3.onclick = function () {
  modal3.style.display = "block";
};

span1.onclick = function () {
  modal1.style.display = "none";
};

span2.onclick = function () {
  modal2.style.display = "none";
};
span3.onclick = function () {
  modal3.style.display = "none";
};

handleWasmUpload = async (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const model_name = formData.get("model_name");
  const user_email = formData.get("user_email");
  const model_description = formData.get("model_description");

  model = {
    name: model_name,
    base_url: "https://huggingface.co/lmz/candle-quantized-phi/resolve/main/",
    model: "model-puffin-phi-v2-q4k.gguf",
    tokenizer: "tokenizer-puffin-phi-v2.json",
    config: "puffin-phi-v2.json",
    quantized: true,
    seq_len: 2048,
    size: "798 MB",
    knowledge_cutoff: "March 2024",
    description: model_description,
    email: user_email,
    system_prompt:
      "You are new model fine-tuned by WasmLLM on a custom user data by user named " +
      user_email +
      ".",
  };

  const modelsRaw = localStorage.getItem("user_models");
  let models = modelsRaw ? JSON.parse(modelsRaw) : [];

  // Add the new model to the array
  models.push(model);

  // Save the updated models back to localStorage
  localStorage.setItem("user_models", JSON.stringify(models));

  modal.style.display = "none";

  alert("Model uploaded to WasmLLM Hub successfully!");
};

function copyCode() {
  var code = document.getElementById("codeBlock");
  var textArea = document.createElement("textarea");
  textArea.value = code.innerText;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand("copy");
  document.body.removeChild(textArea);
}
