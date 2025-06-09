chrome.storage.session
  .get({ solvedProblem: false })
  .then(({ solvedProblem }) => {
    document.getElementById("yesOrNo").innerText = solvedProblem
      ? "Great job. You may browse the internet."
      : "No? Get back to work.";
  });
