const scriptURL = 'https://script.google.com/macros/s/AKfycbwHKhSnbQLTyqqJbnghsciY2dcFW1YW7RACbhztYHRnhyrVdUvnI6hbGEDRzrcQqNQDlg/exec'

const form = document.forms['contactform']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})