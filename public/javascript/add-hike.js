async function newFormHandler(event) {
    event.preventDefault();

    const name = document.querySelector("#post-title").value;
    const location = document.querySelector("#post-location").value
    const zip = document.querySelector("#post-zip").value
    const data_been_there = document.querySelector("#post-date").value
    let season = document.querySelector(".post-season").value;
    let difficulty = document.querySelector(".post-difficulty").value
     var category = new Array();
     var tblFruits = document.getElementById("tblFruits");
     var chks = tblFruits.getElementsByTagName("INPUT");
     for (var i = 0; i < chks.length; i++) {
         if (chks[i].checked) {
             category.push(chks[i].value);
         }
     }
     var createYourOwn = document.getElementById("chkYourOwn").value
      if (createYourOwn !== null) {
        category.push(createYourOwn)
      }

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


(function() {
            'use strict';
            window.addEventListener('load', function() {
              // Fetch all the forms we want to apply custom Bootstrap validation styles to
              var forms = document.getElementsByClassName('needs-validation');
              // Loop over them and prevent submission
              var validation = Array.prototype.filter.call(forms, function(form) {
                form.addEventListener('submit', function(event) {
                  if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                  }
                  form.classList.add('was-validated');
                  //rex();
                  newFormHandler(event)
                }, false);
              });
            }, false);
  })();




















//// testing code /////
  function rex() {
    const name = document.querySelector("#post-title").value;
    const location = document.querySelector("#post-location").value
    const zip = document.querySelector("#post-zip").value
    const data_been_there = document.querySelector("#post-date").value
    let season = document.querySelector(".post-season").value;
    let difficulty = document.querySelector(".post-difficulty").value
     var category = new Array();
     var tblFruits = document.getElementById("tblFruits");
     var chks = tblFruits.getElementsByTagName("INPUT");
     for (var i = 0; i < chks.length; i++) {
         if (chks[i].checked) {
             category.push(chks[i].value);
         }
     }
     var createYourOwn = document.getElementById("chkYourOwn").value
      if (createYourOwn !== null) {
        category.push(createYourOwn)
      }

      if (name && location && zip && data_been_there && season && difficulty) {
        console.log(name);
        console.log(location);
        console.log(zip);
        console.log(data_been_there);
        console.log(season);
        console.log(difficulty);
        console.log(category);
      }


  }
