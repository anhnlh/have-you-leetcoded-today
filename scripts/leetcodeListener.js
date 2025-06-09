// Listener script for LeetCode pages
if (window.location.href.startsWith("https://leetcode.com/")) {
  chrome.storage.session.set({ solvedProblem: true });
}
