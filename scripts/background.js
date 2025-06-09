chrome.storage.session.setAccessLevel({
  accessLevel: chrome.storage.AccessLevel.TRUSTED_AND_UNTRUSTED_CONTEXTS,
});

chrome.tabs.onCreated.addListener((details) => {
  console.log("background.js oncreate listener update tab to leetcode.com");
  chrome.storage.session
    .get({ solvedProblem: false })
    .then(({ solvedProblem }) => {
      if (!solvedProblem) {
        // Redirect the user to a random Leetcode problem
        chrome.tabs.update(details.tabId, {
          url: "https://leetcode.com/problemset/",
        });
      }
    });
});
