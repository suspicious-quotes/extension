const slider = document.getElementById('slider');
const percent = document.getElementById('percent');

(async function() {
  const settings = await loadSettings();
  slider.value = settings.intensity * 100;
  slider.dispatchEvent(new Event('input'));
})();

slider.addEventListener('input', function() {
  percent.innerText = slider.value;
});

slider.addEventListener('change', function() {
  const intensity = slider.value / 100;
  saveSettings({ intensity });
});
