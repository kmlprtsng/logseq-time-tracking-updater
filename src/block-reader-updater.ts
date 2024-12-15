import '@logseq/libs'

// Extract content between :LOGBOOK: and :END:
export const extractTimeEntries = (blockContent: string) : string | null => {
    const match = blockContent.match(/:LOGBOOK:\s*([\s\S]*?)\s*:END:/);
    return match ? match[1].trim() : null;
}
  
export const updateTimeEntries = async (blockUuid: string, updatedTimeEntries: string) => {
    // console.log('Save logic to be implemented', blockUuid, updatedTimeEntries);

    const block =  await logseq.Editor.getBlock(blockUuid);

    if (!block) {
        logseq.UI.showMsg('Block has gone missing!!', 'error', { timeout: 1500 });
    }

    var updatedContent = replaceLogbookDataWithIndentation(block.content, updatedTimeEntries);
    // console.log("new content that would be updated", updatedContent);
    await logseq.Editor.updateBlock(blockUuid, updatedContent);
}

function replaceLogbookDataWithIndentation(input: string, updatedTimeEntries: string): string {
    return input.replace(
      /(^\s*):LOGBOOK:(\s*[\s\S]*?\s*):END:/m,
      (match, indent) => {
        const indentedLogbook = updatedTimeEntries
          .trim()
          .split('\n')
          .map(line => `${indent}${line.trim()}`)
          .join('\n');
        return `${indent}:LOGBOOK:\n${indentedLogbook}\n${indent}:END:`;
      }
    );
}