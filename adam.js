class PlayerManager {
  constructor() {
    this.muteMap = new Map();
  }

  join(nick) {
    const muted = this.muteMap.get(nick) || false;
    return { nick, muted };
  }

  mute(nick) {
    this.muteMap.set(nick, true);
  }

  unmute(nick) {
    this.muteMap.set(nick, false);
  }

  leave(nick) {
    // state persists, nothing needed
  }
}

module.exports = PlayerManager;
