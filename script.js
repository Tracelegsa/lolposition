document.querySelector("#assignButton").addEventListener("click", function () {
  const players = [
    document.querySelector("#player1").value,
    document.querySelector("#player2").value,
    document.querySelector("#player3").value,
    document.querySelector("#player4").value,
    document.querySelector("#player5").value,
  ];

  const positions = ["탑", "미드", "정글", "원딜", "서풋"];
  const resultList = document.querySelector("#result");
  resultList.innerHTML = ""; // 결과 초기화

  //포지션을 무작위로 섞음
  positions.sort(() => Math.random() - 0.5);

  //각 플레이어에게 포지션 할당
  players.forEach((player, index) => {
    const li = document.createElement("li");
    li.textContent = `${player} - ${positions[index]}`;
    resultList.appendChild(li);
  });
});
