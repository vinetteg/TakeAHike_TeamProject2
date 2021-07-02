async function newFormHandler(event) {
    event.preventDefault();

    const name = document.querySelector(".post-name").value;
    const location = document.querySelector(".post-title").value
    const zip = document.querySelector(".post-zip").value
    const data_been_there = document.querySelector(".post-date").value
    const category = document.querySelector(".post-category").value
    const difficulty = document.querySelector(".post-difficulty").value
    var season;
    if (document.getElementById("#summer").checked = true) {
      season = "summer"
    } else if (document.getElementById("#spring").checked = true){
      season = "spring"
    } else if (document.getElementById("#winter").checked = true){
      season = "winter"
    } else { season = "autumn"}



    const response = await fetch(`/api/trail`, {
      method: 'POST',
      body: JSON.stringify({
        name,
        location,
        zip,
        data_been_there,
        category,
        season,
        difficulty
      }),
      headers: {
        'Content-Type': 'application/json'
      }// return json file
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }

  document.querySelector('.add-hike-form').addEventListener('submit', newFormHandler);
