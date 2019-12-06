"use strict";

module.exports = Franz => class GoogleVoice extends Franz {
  overrideUserAgent() {
    return window.navigator.userAgent.replace(/(Franz|Electron|Chrome|AppleWebKit|Safari)([^\s]+(\s|$))/g, '');
  }
}
