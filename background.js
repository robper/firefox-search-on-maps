// Create the context menu item
browser.contextMenus.create({
  id: "search-on-maps",
  title: "Search on Maps",
  contexts: ["selection"]
});

// Handle context menu clicks
browser.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "search-on-maps") {
    // Get the selected text
    const selectedText = info.selectionText;
    
    // Create the Google Maps search URL
    const searchUrl = `https://www.google.com/maps/search/${encodeURIComponent(selectedText)}`;
    
    // Open the search in a new tab
    browser.tabs.create({
      url: searchUrl
    });
  }
}); 