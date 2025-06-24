
function openForm(productName) {
  document.getElementById('leadModal').style.display = 'block';
  document.getElementById('productTitle').innerText = productName;
}

function closeForm() {
  document.getElementById('leadModal').style.display = 'none';
}
