async function newFormHandler(event) {
    event.preventDefault();

    const name = document.querySelector(".post-name").value;
    const location = document.querySelector(".post-title").value
    const zip = document.querySelector(".post-zip").value
    const data_been_there = document.querySelector(".post-date").value
    const category = document.querySelector(".post-category").value
    const difficulty = document.querySelector(".post-difficulty").value
    const season = document.querySelector(".post-season").value


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


  function rex() {
    const name = document.querySelector("#post-title").value;
    const location = document.querySelector("#post-location").value
    const zip = document.querySelector("#post-zip").value
    const data_been_there = document.querySelector("#post-date").value
    let season = document.querySelector(".post-season").value;
    let difficulty = document.querySelector(".post-difficulty").value

     //Create an Array.
     var selected = new Array();

     //Reference the Table.
     var tblFruits = document.getElementById("tblFruits");

     //Reference all the CheckBoxes in Table.
     var chks = tblFruits.getElementsByTagName("INPUT");

     // Loop and push the checked CheckBox value in Array.
     for (var i = 0; i < chks.length; i++) {
         if (chks[i].checked) {
             selected.push(chks[i].value);
         }
     }

     //Display the selected CheckBox values.
     if (selected.length > 0) {
         alert("Selected values: " + selected.join(","));
     }

    console.log(name);
    console.log(location);
    console.log(zip);
    console.log(data_been_there);
    console.log(season);
    console.log(difficulty);
  }
