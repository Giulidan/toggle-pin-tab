chrome.commands.onCommand.addListener(function (action) {
  if (action == "toggle-pin-tab") {
    chrome.tabs.query({ currentWindow: true, highlighted: true }, function (selectedTabs) {
      selectedTabs.forEach(function (tab) {
        const toggledValue = !tab.pinned;
        chrome.tabs.update(tab.id, { pinned: toggledValue });
      });
    });
  }
});
