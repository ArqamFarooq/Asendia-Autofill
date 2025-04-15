document.addEventListener("DOMContentLoaded", () => {
  const autofillBtn = document.getElementById("autofillBtn");
  if (autofillBtn) {
    autofillBtn.addEventListener("click", () => {
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.scripting.executeScript({
          target: { tabId: tabs[0].id },
          files: ["/scripts/content.js"]
        });
      });
    });
  }
});
