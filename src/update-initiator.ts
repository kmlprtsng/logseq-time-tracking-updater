import '@logseq/libs'
import { hookupEditorEventHandlers } from './UI/editor-event-handler';
import { launchEditor } from './UI/editor-launcher';
import { extractTimeEntries, updateTimeEntries } from './block-reader-updater';

export const initiateTimeTrackingUpdate = async (blockUuid: string) => {
    const timeEntries = await fetchTimeEntriesDataFromBlock(blockUuid);

    if(!timeEntries) {
        return;
    }

    const uiKey = `clock-editor`;
    hookupEditorEventHandlers(uiKey, blockUuid, updateTimeEntries);
    launchEditor(uiKey, timeEntries);
};

const fetchTimeEntriesDataFromBlock = async (blockUuid: string) : Promise<string | null>  => {
    const block =  await logseq.Editor.getBlock(blockUuid);

    if (!block) {
        logseq.UI.showMsg('No block selected', 'error', { timeout: 1500 });

        return null;
    }

    const timeEntries = extractTimeEntries(block.content);
    
    if (!timeEntries) {
        logseq.UI.showMsg('No Time Tracking data found in the selected block. Ensure Time tracking is enabled and the block has been toggled into the NOW or DOING state', 'error', { timeout: 3000 });
        
        return null;
    }

    return timeEntries;
}