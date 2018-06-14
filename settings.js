const storage = browser.storage.local;

function loadSettings() {
  return storage.get({
    'paused': false,
    'intensity': 0.02,
  });
}

function saveSettings(settings) {
  return storage.set(settings);
}
