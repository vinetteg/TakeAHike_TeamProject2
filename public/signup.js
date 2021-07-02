async function signupFormHandler(event) {
    event.preventDefault();

    const first_name = document.querySelector("#firstName-signup").value.trim();
    const last_name = document.querySelector("#lastName-signup").value.trim();
    const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const season = document.querySelector('#season-signup').value();
    const view = document.querySelector('view-signup').value()
    const password = document.querySelector('#password-signup').value.trim();


    if (username && email && password) {
      const response = await fetch('/api/users', {
        method: 'post',
        body: JSON.stringify({
          username,
          email,
          password
        }),
        headers: { 'Content-Type': 'application/json' }
      });

      // check the response status
      if (response.ok) {
        console.log('success');
        document.location.replace('/dashboard');
      } else {
        alert(response.statusText);
      }
    }
}

document.querySelector('#signup-form').addEventListener('submit', signupFormHandler);
