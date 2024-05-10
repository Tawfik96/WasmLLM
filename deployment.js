function showPreview() {
  document.getElementById("previewBtn").disabled = true;
  document.getElementById("deploymentBtn").disabled = false;
  document.getElementById("previewContent").style.display = "block";
  document.getElementById("deploymentContent").style.display = "none";
}

function showDeployment() {
  document.getElementById("previewBtn").disabled = false;
  document.getElementById("deploymentBtn").disabled = true;
  document.getElementById("previewContent").style.display = "none";
  document.getElementById("deploymentContent").style.display = "block";
}
