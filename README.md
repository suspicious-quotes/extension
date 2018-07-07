# Suspicious Quotes

Inspired by [/r/suspiciousquotes](https://www.reddit.com/r/suspiciousquotes/), this "browser extension"
randomly adds quotation marks to your web pages for "comedic" effect.

["Donate" here](https://www.buymeacoffee.com/jesse).

# Install

* [Firefox](https://addons.mozilla.org/en-US/firefox/addon/suspicious-quotes/)
* [Chrome](https://chrome.google.com/webstore/detail/suspicious-quotes/cgjjhgfhndpecjgfeadmkkfcblclfjpi)

# Screenshots

## Main UI
![ui](screenshots/ui.png)

-----

## Hacker News
![hacker news](screenshots/hn.png)

-----

## Harvard
![harvard](screenshots/harvard.png)

-----

## The Wall Street Journal
![wall street journal](screenshots/wsj.png)

-----

## The New York Times
![nyt](screenshots/nyt.png)

# Development + Contributing

Please help with this project! I'll very likely merge your pull requests if they're any good. File an issue first or comment on an existing issue you'd like to solve.

You can also contribute by submitting bugs and feature requests as an [issue](https://github.com/suspicious-quotes/extension/issues).

Sufficiently funny screenshots are also welcome. Make sure they are 1280x800 or 640x400 resolution.

## Getting started

There are no special compilation steps, so just clone the repo and load up `suspicious-quotes/` in your favorite browser, as long as your favorite browser is either [Firefox](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/Temporary_Installation_in_Firefox) or [Chrome](https://stackoverflow.com/questions/24577024/install-chrome-extension-not-in-the-store).

If you use Firefox, you can install [web-ext](https://github.com/mozilla/web-ext) and run `web-ext run` inside the `suspicious-quotes/` directory to get handy features like auto-reloading. You'll need it anyway for building a release--see below.

Please test any changes you make in both browsers before submitting a PR.

## Building a release

To build a release, install `web-ext` and then run `./build.sh` to generate a zip. It'll drop a .zip inside of a folder called `web-ext-artifacts/`.

## Versioning

Semver is kind of complicated, so I just add 0.1 to the current version whenever I want to roll out a change. This works well enough for what's essentially a meme project hacked together in two days. Please don't touch the version number.

## Give me money

[Give me money](https://www.buymeacoffee.com/jesse).
