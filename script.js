function openForm(productName) {
  document.getElementById('leadModal').style.display = 'block';
  document.getElementById('productTitle').innerText = productName + " Inquiry";
  document.getElementById('productSubject').value = "New Inquiry - " + productName;
}
function closeForm() {
  document.getElementById('leadModal').style.display = 'none';
}
