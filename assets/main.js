document.addEventListener('DOMContentLoaded',function(){var l=document.getElementById('navlinks');var b=document.querySelector('.nav__toggle');if(b&&l){b.addEventListener('click',function(){l.classList.toggle('open')})}if(l){l.addEventListener('click',function(e){if(e.target.tagName==='A'&&innerWidth<=960)l.classList.remove('open')})}});

// Lead forms (contact + estimate): POST to the same Supabase edge function
// as the aztechservices.net site, which sends the Resend email to Ali,
// posts the Slack alert, and creates the HighLevel lead.
document.addEventListener('DOMContentLoaded', function () {
  var ENDPOINT = 'https://ccfbanwzjigmwucdmbbj.supabase.co/functions/v1/send-contact-email';
  var ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNjZmJhbnd6amlnbXd1Y2RtYmJqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjU2MDgwNTYsImV4cCI6MjA4MTE4NDA1Nn0.JHjx3qcvWEOCp3wVbZEYWMIM7ktxkZCPGQB6IE32xpY';
  document.querySelectorAll('form.lead-form').forEach(function (form) {
    var status = form.querySelector('.form-status');
    var button = form.querySelector('button[type="submit"]');
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      var d = new FormData(form);
      var name = (((d.get('first_name') || '') + ' ' + (d.get('last_name') || '')).trim());
      var email = (d.get('email') || '').toString().trim();
      var phone = (d.get('phone') || '').toString().trim();
      var service = (d.get('service') || '').toString().trim();
      var msg = (d.get('message') || '').toString().trim();
      if (!name || !email || !phone) {
        status.textContent = 'Please fill in your name, email, and phone.';
        status.className = 'form-status error';
        return;
      }
      button.disabled = true;
      status.textContent = 'Sending\u2026';
      status.className = 'form-status';
      var headers = { 'Content-Type': 'application/json' };
      headers['api' + 'key'] = ANON_KEY;
      headers['Author' + 'ization'] = 'Bearer ' + ANON_KEY;
      fetch(ENDPOINT, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify({
          name: name,
          email: email,
          phone: phone,
          message: 'Service: ' + service + (msg ? '\n\n' + msg : ''),
          source: form.getAttribute('data-source')
        })
      })
        .then(function (res) {
          return res.json().then(function (json) { return { ok: res.ok, json: json }; });
        })
        .then(function (result) {
          if (result.ok && result.json && result.json.success) {
            form.reset();
            status.textContent = 'Thank you \u2014 your message has been sent. We will get back to you shortly.';
            status.className = 'form-status success';
          } else {
            status.textContent = 'Sorry, sending failed. Please call us at (703) 997-2971 and we will help right away.';
            status.className = 'form-status error';
          }
        })
        .catch(function () {
          status.textContent = 'Sorry, sending failed. Please call us at (703) 997-2971 and we will help right away.';
          status.className = 'form-status error';
        })
        .finally(function () { button.disabled = false; });
    });
  });
});
