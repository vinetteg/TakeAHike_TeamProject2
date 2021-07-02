async function newFormHandler(event) {
    event.preventDefault();

    const title = document.querySelector("#post-title").value;
    const post_content = document.querySelector("#post-content").value;
    const private_post = document.querySelector(".privateCheckBox").value;
    const public_post = document.querySelector(".publicCheckBox").value;
    const date_of_hike = document.querySelector("#date_of_hike").value;
    const zip_of_hike = document.querySelector("#zip_of_hike").value;
    const tags = [];

    const response = await fetch(`/api/posts`, {
      method: 'POST',
      body: JSON.stringify({
        title,
        post_content
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }

  document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);
