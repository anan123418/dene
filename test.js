const PlayerManager = require('./adam.js');
const CatManager = require('./cat.js');
const assert = require('assert');

// Test PlayerManager mute persistence
const pm = new PlayerManager();
pm.mute('alice');
pm.leave('alice');
const state = pm.join('alice');
assert(state.muted === true, 'Mute should persist after rejoin');

// Test CatManager voting
const cm = new CatManager();
assert(cm.vote('vote1', 'bob', 'yes') === true, 'First vote should succeed');
assert(cm.vote('vote1', 'bob', 'no') === false, 'Second vote should fail for same user');

// Test jail and spammer flags persist
cm.jail('bob');
cm.markSpammer('alice');
const bobState = cm.join('bob');
const aliceState = cm.join('alice');
assert(bobState.jailed === true, 'Bob should be jailed');
assert(aliceState.spammer === true, 'Alice should be marked spammer');

console.log('All tests passed');
