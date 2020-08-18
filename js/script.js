(() => {
  const btnVote = document.querySelectorAll(".btn-group");
  const totalVotesLeftView = document.getElementById("total-votes");
  const meter = document.querySelector(".meter").children[0];
  const voteLeftWarning = document.getElementById("finish-notice");
  let initialVote = 50;
  let totalVotesLeft = 50;
  let totalCounter = 0;
  let candidate = [0, 0, 0, 0, 0, 0];

  for (let i = 0; i < btnVote.length; i++) {
    let counter = 0;

    btnVote[i].children[0].onclick = () => {
      if (totalCounter < initialVote) {
        counter += 1;
        totalCounter += 1;
        candidate[i] += 1;
        totalVotesLeft -= 1;
        setLocalStorage(candidate);
      }
      btnVote[i].children[1].innerHTML = counter;
      totalVotesLeftView.innerHTML = numberWithCommas(totalVotesLeft);
      meter.setAttribute(
        "style",
        `width: ${(totalVotesLeft / initialVote) * 100}%;`
      );
    };

    btnVote[i].children[2].onclick = () => {
      if (counter > 0) {
        counter -= 1;
        totalCounter -= 1;
        candidate[i] -= 1;
        totalVotesLeft += 1;
        setLocalStorage(candidate);
      }
      btnVote[i].children[1].innerHTML = counter;
      totalVotesLeftView.innerHTML = numberWithCommas(totalVotesLeft);
      meter.setAttribute(
        "style",
        `width: ${(totalVotesLeft / initialVote) * 100}%;`
      );
    };
  }

  document.getElementById("viewBtn").onclick = () => {
    if (totalVotesLeft > 0) {
      voteLeftWarning.setAttribute("style", "display: block;");
      setTimeout(() => {
        voteLeftWarning.setAttribute("style", "display: none;");
      }, 3000);
    } else {
      location.href = "/leader-board.html";
    }
  };

  function setLocalStorage(candidate) {
    localStorage.setItem("candidate", JSON.stringify(candidate));
  }

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
})();
