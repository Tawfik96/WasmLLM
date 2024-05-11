const colorThemes = document.querySelectorAll('[name="theme"]');

window.onload = async () => {
  load_models_list();
};

const models = [
  {
    name: "Phi-2",
    base_url:
    "https://huggingface.co/lmz/candle-quantized-phi/resolve/main/",
    model: "model-q4k.gguf",
    tokenizer: "tokenizer.json",
    config: "phi-1_5.json",
    quantized: true,
    seq_len: 2048,
    size: "2.4GB",
    knowledge_cutoff: "Feb 2024",
    description: "Phi-2 is a Transformer with 2.7 billion parameters. It was trained using the same data sources as Phi-1.5, augmented with a new data source that consists of various NLP synthetic texts. When assessed against benchmarks testing common sense, language understanding, and logical reasoning, Phi-2 showcased a nearly state-of-the-art performance among models with less than 13 billion parameters.",
    system_prompt: "You are the copilot for a doctor in his clinic. The doctor is seeing a patient with a medical condition. The doctor is asking you for advice on the best treatment plan for the patient.",
  },
  {
    name: "Llama-3",
    base_url:
    "https://huggingface.co/radames/phi-2-quantized/resolve/main/",
    model: "model-v2-q4k.gguf",
    tokenizer: "tokenizer.json",
    config: "config.json",
    quantized: true,
    seq_len: 2048,
    size: "4.3GB",
    knowledge_cutoff: "June 2023",
    description: "Meta developed and released the Meta Llama 3 family of large language models (LLMs), a collection of pretrained and instruction tuned generative text models in 8 and 70B sizes. The Llama 3 instruction tuned models are optimized for dialogue use cases and outperform many of the available open source chat models on common industry benchmarks. Further, in developing these models, we took great care to optimize helpfulness and safety.",
    system_prompt: "You are the financial advisor for a client. The client is asking you for advice on what to invest in.",
  },
  {
    name: "Gemma-7B",
    base_url:
    "https://huggingface.co/lmz/candle-quantized-phi/resolve/main/",
    model: "model-puffin-phi-v2-q4k.gguf",
    tokenizer: "tokenizer-puffin-phi-v2.json",
    config: "puffin-phi-v2.json",
    quantized: true,
    seq_len: 2048,
    size: "3.9GB",
    knowledge_cutoff: "March 2024",
    description: "Gemma is a family of lightweight, state-of-the-art open models from Google, built from the same research and technology used to create the Gemini models. Gemma models are well-suited for a variety of text generation tasks, including question answering, summarization, and reasoning. Their relatively small size makes it possible to deploy them in environments with limited resources such as a laptop, desktop or your own cloud infrastructure, democratizing access to state of the art AI models and helping foster innovation for everyone.",
    system_prompt: "You are the tutor for a student in a computer science class. The student is asking you for help with a programming problem.",
  },
  {
    name: "StableLM-2",
    base_url:
    "https://huggingface.co/lmz/candle-quantized-phi/resolve/main/",
    model: "model-puffin-phi-v2-q80.gguf",
    tokenizer: "tokenizer-puffin-phi-v2.json",
    config: "puffin-phi-v2.json",
    quantized: true,
    seq_len: 2048,
    size: "1.50 GB",
    knowledge_cutoff: "Jan 2024",
    description: "Stable LM 2 Chat 1.6B is a 1.6 billion parameter instruction tuned language model inspired by HugginFaceH4's Zephyr 7B training pipeline. The model is trained on a mix of publicly available datasets and synthetic datasets, utilizing Direct Preference Optimization (DPO).",
    system_prompt: "You are the research assistant for a scientist. The scientist is asking you for advice on how to conduct an experiment.",
  },
];

const load_models_list = async () => {
  // TODO: fetch models from Hub
  // const response = await fetch(`/backend-api/v2/models`);
  // const models = await response.json();


  const models_list = document.getElementById(`models`);
  models.map((model) => {
    const option = document.createElement(`div`);
    option.value = model.id;
    option.innerHTML = `

        <div class="model" onclick="set_selected_model('${model.name}')" id="${model.name}">
            <div class="model-image">
                <img src="gpt.png" alt="model" />
            </div>

            <div class="model-info">
                <div class="model-name">${model.name}</div>
                <div class="model-size">${model.size}</div>
                <div class="model-description">${model.description}</div>
                <div class="model-quantized">${model.quantized ? "Quantized" : "Not Quantized"}</div>
                <div class="model-seq-len">Max Sequence Length: ${model.seq_len}</div>
                <div class="model-cutoff">Knowledge Cutoff: ${model.knowledge_cutoff}</div>
            <div/>

        </div>

    `;

    models_list.appendChild(option);
  });
};

let selected_model = null;

const set_selected_model = async (model) => {
  selected_model = model;

  const models = document.querySelectorAll(`.model`);
  models.forEach((model) => {
    model.classList.remove(`model-selected`);
  });

  document.getElementById(model).classList.add(`model-selected`);

  console.log(`selected model: ${selected_model}`);

  const load_button = document.getElementById(`start_training_button`);
  load_button.disabled = false;
  load_button.classList.add(`load-model-selected`);
}

const start_training = async () => {
  window.location.href = "training_in_progress.html";
}
