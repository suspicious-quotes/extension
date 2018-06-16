const getId = (id) => document.getElementById(id);

const slider = getId('slider');
const percent = getId('percent');
const pauseBtn = getId('pause');
const refreshBtn = getId('refresh');

loadSettings((settings) => {
  slider.value = settings.intensity.toFixed(1);
  slider.dispatchEvent(new Event('input'));
  updatePauseState(settings.paused);
});


/* Slider */
slider.addEventListener('input', () => {
  // oninput fires every time the slider moves
  percent.innerText = parseFloat(slider.value).toFixed(1);
});

slider.addEventListener('change', () => {
  // onchange fires once after the slider is let go
  activateRefreshBtn();
  const intensity = parseFloat(slider.value);
  saveSettings({ intensity, });
});


/* Pause button */
pauseBtn.addEventListener('click', () => {
  activateRefreshBtn();
  loadSettings(settings => updatePauseState(!settings.paused));
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
    refreshBtn.classList.add('appear');
  }
}

refreshBtn.addEventListener('click', () => chrome.tabs.reload());
