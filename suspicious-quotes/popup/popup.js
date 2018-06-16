const getId = (id) => document.getElementById(id);

const slider = getId('slider');
const percent = getId('percent');
const pauseBtn = getId('pause');
const refreshBtn = getId('refresh');

loadSettings(function(settings) {
  slider.value = settings.intensity.toFixed(1);
  slider.dispatchEvent(new Event('input'));
  updatePauseState(settings.paused);
});


/* Slider */
slider.addEventListener('input', function() {
  // oninput fires every time the slider moves
  percent.innerText = parseFloat(slider.value).toFixed(1);
});

slider.addEventListener('change', function() {
  // onchange fires once after the slider is let go
  activateRefreshBtn();
  loadSettings(function(settings) {
    if (settings.paused) {
      unpause();
      popButton(pauseBtn);
    }
  });
  const intensity = parseFloat(slider.value);
  saveSettings({ intensity, });
});


/* Pause button */
pauseBtn.addEventListener('click', function() {
  activateRefreshBtn();
  loadSettings(function(settings) {
    updatePauseState(!settings.paused);
  });
});

function updatePauseState(paused) {
  paused ? pause() : unpause();
}

function pause() {
  saveSettings({ paused: true, });
  pauseBtn.classList.add('paused');
}

function unpause() {
  saveSettings({ paused: false, });
  pauseBtn.classList.remove('paused');
}


/* Refresh button */
function activateRefreshBtn() {
  if (!refreshBtn.classList.contains('activated')) {
    refreshBtn.classList.add('activated');
    refreshBtn.getBoundingClientRect(); // force a reflow
    refreshBtn.classList.add('pop-in');
  }
}

refreshBtn.addEventListener('click', function() {
  chrome.tabs.reload();
});

/* Animations */
function popButton(button) {
  button.classList.add('pop-button');
  button.addEventListener('animationend', function() {
    button.classList.remove('pop-button');
    button.removeEventListener('animationend', this);
  });
}
