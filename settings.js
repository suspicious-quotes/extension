const storage = browser.storage.local;

function loadSettings() {
  return storage.get({
    'paused': false,
    'intensity': 2.0,
  });
}

function saveSettings(settings) {
  return storage.set(settings);
}
