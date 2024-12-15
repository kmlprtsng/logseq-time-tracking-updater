import '@logseq/libs'
import { initiateTimeTrackingUpdate } from "./update-initiator";

/**
 * main entry
 */
async function main () {
  console.log('Logseq Plugin: Interactive CLOCK Entry Editor Started.');

  logseq.Editor.registerSlashCommand('Update Time tracking', async(e) => {
    initiateTimeTrackingUpdate(e.uuid);
  });
};

// bootstrap
logseq.ready(main).catch(console.error)
