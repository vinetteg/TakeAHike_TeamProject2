async function commentFormHandler(event) {
    event.preventDefault();

    const trailComment = document.querySelector(".comment-textarea").value.trim();

    const trails_id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];

    if (trailComment) {
        const response = await fetch('/api/comments', {
          method: 'POST',
          body: JSON.stringify({
            trails_id,
            trailComment
          }),
          headers: {
            'Content-Type': 'application/json'
          }
        });
          console.log(trailComment);
        if (response.ok) {
          document.location.reload();//***** */
        } else {
          alert(response.statusText);
        }
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
          event.preventDefault();
          commentFormHandler(event)
        }, false);
      });
    }, false);
  })();
