// Create the HTML for the floating UI editor
export const createEditorHtml = (entries: string, uiKey: string) => {
  return `
    <div id="${uiKey}" style="margin: 1rem">
      <h3 style="font-weight: bold; margin-bottom: 0.5rem;">UPDATE LOGBOOK DATA</h3>
      <div>
        <textarea id="clock-entries-data" style="width: 400px; height: 200px; margin-bottom: 0.5em; padding: 0.5em; border: 1px solid #ccc; border-radius: 5px;">
          ${entries}
        </textarea>
      </div>
      <button data-on-click="save" style="margin-right: 10px; padding: 0.5em 1em; background: #4CAF50; color: #fff; border: none; border-radius: 5px;">Save</button>
      <button data-on-click="cancel" style="padding: 0.5em 1em; background: #f44336; color: #fff; border: none; border-radius: 5px;">Cancel</button>
    </div>
  `;
};
    