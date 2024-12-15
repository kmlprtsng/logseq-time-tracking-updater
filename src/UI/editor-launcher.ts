import { createEditorHtml } from "./editor-html-provider";

export const launchEditor = (uiKey: string, timeEntries: string) => {
    // Inject the floating UI
    logseq.provideUI({
        key: uiKey, // Sanitized key
        template: createEditorHtml(timeEntries, uiKey),
        style: {
          width: "unset",
          maxWidth: "500px",
          height: "unset",
          maxHeight: "420px",
          backgroundColor: "var(--ls-primary-background-color)",
          color: "var(--ls-primary-text-color)",
          boxShadow: "1px 2px 5px var(--ls-secondary-background-color)",
          overflow: "scroll"
        },
      });
}