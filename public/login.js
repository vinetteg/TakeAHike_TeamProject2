async function loginFormHandler(event) {
  event.preventDefault();

  const username = document.querySelector('#login_username').value.trim();
  const password = document.querySelector('#login_password').value.trim();

  if (username && password) {
    const response = await fetch('/api/users/login', {
      method: 'post',
      body: JSON.stringify({
        username,
        password
      }),
      headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
}

document.querySelector('#btn_login').addEventListener('click', loginFormHandler);
