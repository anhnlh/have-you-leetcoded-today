// Display a lock screen overlay
const overlay = document.createElement("div");
overlay.style.position = "fixed";
overlay.style.top = "0";
overlay.style.left = "0";
overlay.style.width = "100%";
overlay.style.height = "100%";
overlay.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
overlay.style.color = "white";
overlay.style.display = "flex";
overlay.style.justifyContent = "center";
overlay.style.alignItems = "center";
overlay.style.zIndex = "9999";
overlay.innerText = "Solve a Leetcode problem to unlock this page!";

let userHasSolvedProblem;
chrome.storage.session
  .get({ solvedProblem: false })
  .then(({ solvedProblem }) => {
    userHasSolvedProblem = solvedProblem;
    if (userHasSolvedProblem && overlay.parentNode) {
      overlay.parentNode.removeChild(overlay);
    }
  });

chrome.storage.session.onChanged.addListener(({ solvedProblem }, areaName) => {
  if (solvedProblem && solvedProblem.newValue && overlay.parentNode) {
    overlay.parentNode.removeChild(overlay);
  }
});

if (!userHasSolvedProblem && !window.location.href.includes("leetcode.com")) {
  document.body.appendChild(overlay);
}
