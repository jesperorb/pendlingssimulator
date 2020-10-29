var App = (function() {
  return {
    ui: {
      destination: document.getElementById('destination'),
      error: document.getElementById('error'),
      time: document.getElementById('time')
    },
    responses: [
      "Försenat p.g.a. systemkollaps",
      "Försenat p.g.a. tågbrist",
      "Försenat p.g.a. incident",
      "Förseningar i trafiken p.g.a. befarat elfel",
      "Förseningar i trafiken p.g.a. växelfel",
      "Infrastrukturen har gått sönder",
      "Försenat p.g.a. vinster i välfärden"
      "Det hände en grej",
      "Gå till skogs",
    ],
    init(){
      this.bindEvents();
      this.ui.error.innerText = this.getRandomResponse();
    },
    bindEvents(){
      this.ui.destination.addEventListener('change', function(){
        this.ui.error.innerText = this.getRandomResponse();
        // Just switch the time displaying randomly
        if(this.getRandomNumber() === 3){
          this.ui.time.innerText = "∞";
        } else {
          this.ui.time.innerText = "-";
        }
        this.ui.error.classList.remove('scrolling-text');
        // Force rerender of element because toggling classname does not rerender
        window.getComputedStyle(this.ui.error).opacity;
        this.ui.error.classList.add('scrolling-text');
      }.bind(this));
    },
    getRandomResponse(){
      return this.responses[this.getRandomNumber()];
    },
    getRandomNumber(){
      return Math.floor(
        Math.random() *
        (((this.responses.length - 1) - 0 + 1) + 0)
      )
    }
  }
})().init();
