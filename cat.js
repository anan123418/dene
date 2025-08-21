class CatManager {
  constructor() {
    this.jailed = new Set();
    this.spammers = new Set();
    this.votes = new Map(); // voteId -> Map(nick -> 'yes'|'no')
  }

  join(nick) {
    return {
      nick,
      jailed: this.jailed.has(nick),
      spammer: this.spammers.has(nick)
    };
  }

  vote(voteId, nick, choice) {
    if (!this.votes.has(voteId)) {
      this.votes.set(voteId, new Map());
    }
    const voteMap = this.votes.get(voteId);
    if (voteMap.has(nick)) {
      return false; // already voted
    }
    voteMap.set(nick, choice);
    return true;
  }

  jail(nick) {
    this.jailed.add(nick);
  }

  release(nick) {
    this.jailed.delete(nick);
  }

  markSpammer(nick) {
    this.spammers.add(nick);
  }

  unmarkSpammer(nick) {
    this.spammers.delete(nick);
  }
}

module.exports = CatManager;
