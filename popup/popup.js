const slider = document.getElementById('slider');
const percent = document.getElementById('percent');
const pauseBtn = document.getElementById('pause');
const settings = {};

loadSettings(function(settings) {
  slider.value = settings.intensity.toFixed(1);
  slider.dispatchEvent(new Event('input'));
  updatePauseButton(settings.paused);
});

slider.addEventListener('input', function() {
  percent.innerText = parseFloat(slider.value).toFixed(1);
});

slider.addEventListener('change', function() {
  const intensity = parseFloat(slider.value);
  saveSettings({ intensity, });
});

pauseBtn.addEventListener('click', async function() {
  loadSettings(function(settings) {
    saveSettings({
      paused: !settings.paused,
    });
    updatePauseButton(!settings.paused);
  });
});

function updatePauseButton(pause) {
  if (pause) {
    pauseBtn.classList.add('paused');
    pauseBtn.innerText = 'resume';
  } else {
    pauseBtn.classList.remove('paused');
    pauseBtn.innerText = 'pause';
  }
}