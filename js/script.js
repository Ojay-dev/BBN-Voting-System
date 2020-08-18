document.getElementById("viewBtn").onclick = () => {
  location.href = "/leader-board.html";
};

(() => {
  const btnVote = document.querySelectorAll(".btn-group");
  const totalVotesLeftView = document.getElementById("total-votes");
  const meter = document.querySelector(".meter").children[0];
  let initialVote = 50;
  let totalVotesLeft = 50;
  let totalCounter = 0;
  
  for (let i = 0; i < btnVote.length; i++) {
    let counter = 0;

    btnVote[i].children[0].onclick = () => {
      if (totalCounter < initialVote) {
        counter += 1;
        totalCounter += 1;
        totalVotesLeft -= 1;
      }
      btnVote[i].children[1].innerHTML = counter;
      totalVotesLeftView.innerHTML = numberWithCommas(totalVotesLeft);
      meter.setAttribute(
        "style",
        `width: ${(totalVotesLeft / initialVote) * 100}%;`
      );
      console.log(counter, totalCounter);
    };

    btnVote[i].children[2].onclick = () => {
      if (counter > 0) {
        counter -= 1;
        totalCounter -= 1;
        totalVotesLeft += 1;
      }
      btnVote[i].children[1].innerHTML = counter;
      totalVotesLeftView.innerHTML = numberWithCommas(totalVotesLeft);
      meter.setAttribute(
        "style",
        `width: ${(totalVotesLeft / initialVote) * 100}%;`
      );
      console.log(totalCounter);
    };
  }

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
})();
