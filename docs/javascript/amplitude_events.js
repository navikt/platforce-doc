isLive = false

document.addEventListener('DOMContentLoaded', function() {
  /* Log initial page load */
  if (!isLive) console.log("DOMContentLoaded");
  //amplitudeLogEvent("sidevisning");

  /* Set up search tracking */
  if (document.forms.search) {
    var query = document.forms.search.query
    query.addEventListener('blur', function() {
      if (this.value) {
        //amplitudeLogEvent("søk", { søkeord: this.value });
      }
    })
  }

  /* Set up feedback, i.e. "Was this page helpful?" */
  document$.subscribe(function() {
    var feedback = document.forms.feedback
    if (typeof feedback === "undefined")
      return

    /* Send feedback to Amplitude */
    for (var button of feedback.querySelectorAll("[type=submit]")) {
      button.addEventListener("click", function(ev) {
        ev.preventDefault()

        /* Retrieve page and feedback value */
        var page = document.location.pathname
        var data = this.getAttribute("data-md-value")

        /* Send feedback value */
        if (!isLive) console.log('feedback.submit', page, data)
        //amplitudeLogEvent("tilbakemelding", { score: data });

        /* Disable form and show note, if given */
        feedback.firstElementChild.disabled = true
        var note = feedback.querySelector(
          ".md-feedback__note [data-md-value='" + data + "']"
        )
        if (note)
          note.hidden = false
      })
    }

    /* Show feedback */
    feedback.hidden = false
  });

  /* Send page view on location change */
  location$.subscribe(function(url) {
    if (!isLive) console.log("location.changed", window.location.pathname);
    //amplitudeLogEvent("sidevisning");
  })
});