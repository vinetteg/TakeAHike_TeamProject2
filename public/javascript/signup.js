async function signupFormHandler(event) {
    event.preventDefault();

    const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    const name = document.querySelector('#name-signup').value.trim();

    if (username && email && password && name) {
      const response = await fetch('/api/users', {
        method: 'post',
        body: JSON.stringify({
          username,
          email,
          name,
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

document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);
