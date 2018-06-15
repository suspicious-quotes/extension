const slider = document.getElementById('slider');
const percent = document.getElementById('percent');
const pauseBtn = document.getElementById('pause');
const settings = {};

(async function() {
  const settings = await loadSettings();
  slider.value = (settings.intensity * 100).toFixed(1);
  slider.dispatchEvent(new Event('input'));
  updatePauseButton(settings.paused);
})();

slider.addEventListener('input', function() {
  percent.innerText = parseFloat(slider.value).toFixed(1);
});

slider.addEventListener('change', function() {
  const intensity = slider.value / 100;
  saveSettings({ intensity, });
});

pauseBtn.addEventListener('click', async function() {
  const settings = await loadSettings();
  saveSettings({
    paused: !settings.paused,
  });
  updatePauseButton(!settings.paused);
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