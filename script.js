document.getElementById('bookingForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    var form = this;
    var formData = new FormData(form);
    
    fetch(form.action, {
        method: 'POST',
        body: formData
    })
    .then(response => {
        alert('ჯავშანი წარმატებით გაიგზავნა!');
        form.reset();
    })
    .catch(error => {
        alert('ჯავშანი გაიგზავნა!');
        form.reset();
    });
});