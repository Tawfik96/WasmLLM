var modal = document.getElementById("myModal1");
var btn = document.getElementById("openModal1");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
  modal.style.display = "block";
};

span.onclick = function () {
  modal.style.display = "none";
};

handleWasmUpload = async (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const model_name = formData.get("model_name");
  const user_email = formData.get("user_email");
  const model_description = formData.get("model_description");

  model = {
    name: model_name,
    base_url:
    "https://huggingface.co/lmz/candle-quantized-phi/resolve/main/",
    model: "model-puffin-phi-v2-q4k.gguf",
    tokenizer: "tokenizer-puffin-phi-v2.json",
    config: "puffin-phi-v2.json",
    quantized: true,
    seq_len: 2048,
    size: "798 MB",
    knowledge_cutoff: "March 2024",
    description: model_description,
    email: user_email,
    system_prompt: "You are new model fine-tuned by WasmLLM on a custom user data by user named " + user_email + ".",
  };

  const modelsRaw = localStorage.getItem('user_models');
  let models = modelsRaw ? JSON.parse(modelsRaw) : [];

  // Add the new model to the array
  models.push(model);

  // Save the updated models back to localStorage
  localStorage.setItem('user_models', JSON.stringify(models));

  modal.style.display = "none";

  alert("Model uploaded to WasmLLM Hub successfully!");
};
