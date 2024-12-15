import '@logseq/libs'

export const hookupEditorEventHandlers = (uiKey: string, blockUuid: string,  enteriesUpdater: Function) => {
    // Define the model for Save and Cancel actions
    const model = {
        save: async () => {
          const elm = parent.document.getElementById("clock-entries-data");
          await enteriesUpdater(blockUuid, elm?.value);
            
          logseq.UI.showMsg('CLOCK entries saved!', 'success', { timeout: 1500 });
          removeUI(uiKey);
        },
        cancel: async () => {
          removeUI(uiKey);
        },
      };
  
      logseq.provideModel(model);
}

const removeUI = (uiKey: string) => {
    // Clear the UI. Not sure if there is a better way.
    logseq.provideUI({ key: uiKey, template: '' });
}