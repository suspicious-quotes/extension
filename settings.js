const storage = chrome.storage.local;

function loadSettings(callback) {
  storage.get({
    'paused': false,
    'intensity': 2.0,
  }, callback);
}

function saveSettings(settings) {
  return storage.set(settings);
}
