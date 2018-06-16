const getId = (id) => document.getElementById(id);

const slider = getId('slider');
const percent = getId('percent');
const pauseBtn = getId('pause');
const refreshBtn = getId('refresh');

loadSettings(function(settings) {
  slider.value = settings.intensity.toFixed(1);
  slider.dispatchEvent(new Event('input'));
  updatePauseButton(settings.paused);
});

slider.addEventListener('input', function() {
  percent.innerText = parseFloat(slider.value).toFixed(1);
});

slider.addEventListener('change', function() {
  refreshBtn.dispatchEvent(new Event('activate-button'));
  const intensity = parseFloat(slider.value);
  saveSettings({ intensity, });
});

pauseBtn.addEventListener('click', async function() {
  refreshBtn.dispatchEvent(new Event('activate-button'));
  loadSettings(function(settings) {
    saveSettings({
      paused: !settings.paused,
    });
    updatePauseButton(!settings.paused);
  });
});

refreshBtn.addEventListener('activate-button', function() {
  if (!refreshBtn.classList.contains('activated')) {
    refreshBtn.classList.add('activated');
    refreshBtn.getBoundingClientRect(); // force a reflow
    refreshBtn.classList.add('pop-in');
  }
});

refreshBtn.addEventListener('click', function() {
  chrome.tabs.reload();
});

function updatePauseButton(pause) {
  if (pause) {
    pauseBtn.classList.add('paused');
  } else {
    pauseBtn.classList.remove('paused');
  }
}
