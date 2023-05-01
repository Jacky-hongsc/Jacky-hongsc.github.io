const opennessQuestions = [
  "<strong>예술에 대해 관심이 있어요.</strong>",
  "<strong>새로운 아이디어에 열려 있어요.</strong>",
  "<strong>복잡한 문제를 해결하는 것이 재미있어요.</strong>",
  "<strong>새로운 경험을 하는 것을 좋아해요.</strong>",
  "<strong>광범위한 주제에 대해 관심을 가지고 있어요.</strong>",
  "<strong>남들과는 조금 다른 관점을 가지고 생각해 봐요.</strong>",
  "<strong>철학적인 문제에 대해 고민해 봤어요.</strong>",
  "<strong>책을 읽는 것을 즐겨요.</strong>",
  "<strong>예술 작품이나 음악에서 감정을 느낄 때가 있어요.</strong>",
  "<strong>새로운 기술을 배우는 것을 좋아해요.</strong>",
  // ... more questions for Openness
];

const conscientiousnessQuestions = [
  "<strong>제가 계획을 세우고 그대로 실행하는 것을 좋아해요.</strong>",
  "<strong>내가 해야 하는 일에 대해서는 항상 철저하게 준비해요.</strong>",
  "<strong>제가 해야 할 일은 빨리 처리해버리는 편이에요.</strong>",
  "<strong>제가 미루지 않고 책임감 있게 업무를 수행해요.</strong>",
  "<strong>제가 시작한 일은 끝까지 해내려고 노력해요.</strong>",
  "<strong>물건을 정리정돈해서 깔끔하게 보관하는 것을 좋아해요.</strong>",
  "<strong>일을 할 때, 더 좋은 방법을 찾기 위해 노력해요.</strong>",
  "<strong>새로운 일을 시작할 때, 계획을 먼저 세우는 편이에요.</strong>",
  "<strong>책임 있는 일을 맡게 되면, 꼭 해내려고 노력해요.</strong>",
  "<strong>제가 하는 일에 대해 완벽주의적인 성향이 있어요.</strong>",
  // ... more questions for Conscientiousness
];

const extraversionQuestions = [
  "<strong>파티에서 사람들과 잘 어울립니다.</strong>",
  "<strong>일반적으로 말수가 많습니다.</strong>",
  "<strong>다른 사람들과 함께 있는 것을 좋아합니다.</strong>",
  "<strong>소규모 모임에서는 적극적으로 참여하지만 대규모 모임에서는 잘 못 느낍니다.</strong>",
  "<strong>새로운 사람들과 만날 때 흥분합니다.</strong>",
  "<strong>주목받는 것이 좋은편입니다.</strong>",
  "<strong>사람들과 함께 있을 때 에너지를 얻습니다.</strong>",
  "<strong>쉽게 말 걸고 다른 사람들을 쉽게 만듭니다.</strong>",
  "<strong>상상이 아닌 활동적인 일들을 좋아합니다.</strong>",
  "<strong>일반적으로 사교적인 성격을 가지고 있습니다.</strong>",
   // ... more questions for Extraversion
];

const agreeablenessQuestions = [
  "<strong>다른 사람의 감정에 민감한 편이에요.</strong>",
  "<strong>대부분의 사람들과 잘 지내고 좋은 관계를 유지해요.</strong>",
  "<strong>다른 사람의 의견을 존중하는 편이에요.</strong>",
  "<strong>다른 사람들을 불쾌하게 하거나 모욕시키는 것을 피해요.</strong>",
  "<strong>대체로 남들이 좋아하는 것을 좋아하고, 싫어하는 것을 싫어해요.</strong>",
  "<strong>다른 사람들에게 친절하고 배려하는 편이에요.</strong>",
  "<strong>대부분의 사람들과 의견 차이를 논의하고 해결하는 것을 좋아해요.</strong>",
  "<strong>다른 사람들과 함께 일하는 것을 즐겨요.</strong>",
  "<strong>타인의 입장에서 생각해보는 것을 좋아해요.</strong>",
  "<strong>대부분의 상황에서 갈등을 피하려고 노력해요.</strong>",
  // ... more questions for Agreeableness
];

const neuroticismQuestions = [
  "<strong>어려운 상황에서도 차분하게 대처할 수 있습니다.</strong>",
  "<strong>쉽게 우울해지는 편입니다.</strong>",
  "<strong>긴장감을 잘 느끼지 않습니다.</strong>",
  "<strong>사소한 일에도 예민하게 반응합니다.</strong>",
  "<strong>쉽게 혼란스러워집니다.</strong>",
  "<strong>어려움에 대처할 때 강한 내면의 힘이 있습니다.</strong>",
  "<strong>자신의 감정을 잘 통제할 수 있습니다.</strong>",
  "<strong>스트레스에 잘 대처할 수 있습니다.</strong>",
  "<strong>쉽게 초조해지는 편입니다.</strong>",
  "<strong>고민이나 걱정이 많습니다.</strong>",
  // ... more questions for Neuroticism
];

function highlightSelectedOption(event) {
  const radioWrapper = event.target.closest(".radio-wrapper");

  // Remove highlight from all other options
  const allOptions = radioWrapper.parentElement.querySelectorAll(".radio-wrapper");
  allOptions.forEach((option) => {
    option.classList.remove("selected-option");
  });

  // Highlight the selected option
  radioWrapper.classList.add("selected-option");
}


let globalQuestionNumber = 1;

const generateQuestions = (questionsArray, startingId) => {
  const result = [];
  for (let i = 0; i < questionsArray[0].length; i++) {
    for (let j = 0; j < questionsArray.length; j++) {
      const question = {
        number: globalQuestionNumber,
        id: `q${startingId + j * 10 + i}`,
        text: questionsArray[j][i],
      };
      globalQuestionNumber += 1;
      result.push(question);
    }
  }
  return result;
};

const questions = generateQuestions(
  [
    opennessQuestions,
    conscientiousnessQuestions,
    extraversionQuestions,
    agreeablenessQuestions,
    neuroticismQuestions,
  ],
  1
);

function highlightSelectedOption(event) {
  const radioWrapper = event.target.closest(".radio-wrapper");

  // Remove highlight from all other options
  const allOptions = radioWrapper.parentElement.querySelectorAll(".radio-wrapper");
  allOptions.forEach((option) => {
    option.classList.remove("selected-option");
  });

  // Highlight the selected option
  radioWrapper.classList.add("selected-option");
}

let currentBatch = 0;

function renderQuestionsBatch(batch) {
  const questionsContainer = document.getElementById("questions-container");
  questionsContainer.innerHTML = ""; // Clear previous questions

  const startIndex = batch * 5;
  const endIndex = startIndex + 5;

  questions.slice(startIndex, endIndex).forEach((question) => {
    const questionDiv = document.createElement("div");
    questionDiv.className = "question";

    const questionText = document.createElement("p");
    questionText.innerHTML = `<strong>${question.text}</strong>`;
    questionDiv.appendChild(questionText);

    const labelTextArray = [
      "동의하지 않는다",
      "약간 동의하지 않음",
      "중립적",
      "약간 동의함",
      "동의하다"
    ];

    for (let i = 1; i <= 5; i++) {
      const radioWrapper = document.createElement("div");
      radioWrapper.className = "radio-wrapper";
    
      const radioInput = document.createElement("input");
      radioInput.type = "radio";
      radioInput.name = question.id;
      radioInput.value = i;
      radioInput.onchange = function (event) {
        updateProgressBar();
        highlightSelectedOption(event);
      };
    
      const radioLabel = document.createElement("label");
      radioLabel.textContent = labelTextArray[i - 1];
      radioLabel.onclick = function () {
        radioInput.click();
      };
    
      radioWrapper.appendChild(radioInput);
      radioWrapper.appendChild(radioLabel);
      questionDiv.appendChild(radioWrapper);
    }

    questionsContainer.appendChild(questionDiv);
    
    // 여기에 공백 2행 추가
    const break1 = document.createElement("br");
   // const break2 = document.createElement("br");
    questionsContainer.appendChild(break1);
   // questionsContainer.appendChild(break2);
  });
  // Insert the ad
  questionsContainer.innerHTML += insertAd();
  
  // Add a "Next" button to load the next batch of questions
  const nextButton = document.getElementById("nextButton");
  if (!nextButton) {
    const nextButtonWrapper = document.createElement("div");
    nextButtonWrapper.className = "d-grid gap-2 mt-5";
    questionsContainer.appendChild(nextButtonWrapper);
  
    const newNextButton = document.createElement("button");
    newNextButton.id = "nextButton";
    newNextButton.textContent = "Next";
    newNextButton.className = "btn btn-primary";
    newNextButton.style.width = "100%";
    newNextButton.onclick = showNextBatch;
    nextButtonWrapper.appendChild(newNextButton);
  } else if (currentBatch === questions.length / 5 - 1) { // 마지막 페이지에 도달한 경우
    nextButton.textContent = "Submit"; // 버튼 텍스트를 "Submit"으로 변경
    nextButton.onclick = calculateResults; // 버튼의 클릭 이벤트를 calculateResults 함수로 변경
  } else {
    nextButton.textContent = "Next";
    nextButton.onclick = showNextBatch;
  }
   
}


function startTest() {
  const startPage = document.getElementById("start-page");
  const container = document.getElementsByClassName("container")[1]; // 두 번째 .container 요소를 참조하도록 변경

  startPage.style.display = "none";
  container.style.display = "block";

  // 첫 번째 페이지 로딩 후 프로그레스바 업데이트
  renderQuestionsBatch(currentBatch);
  updateProgressBar();
}

function insertAd() {
  const adHTML = `
    <div class="silkworld-ad mt-3">
      <a href="https://smartstore.naver.com/silkworld" target="_blank">
        <img src="silkworld-ad.png" alt="Silkworld - 네이버 스마트스토어">
      </a>
    </div>`;
  return adHTML;
}


function showNextBatch() {
  // Check if all the questions in the current batch have been answered
  const startIndex = currentBatch * 5;
  const endIndex = startIndex + 5;
  const currentQuestions = questions.slice(startIndex, endIndex);

  for (let question of currentQuestions) {
    if (!document.querySelector(`input[name="${question.id}"]:checked`)) {
      alert("모든 질문에 답변해 주세요."); // alert 추가
      return;
    }
  }

  // Calculate current scores before moving to the next batch
  const form = document.getElementById("bigFiveForm");
  const formData = new FormData(form);
  const previousScores = currentBatch > 0 ? cumulativeScores : null; // 이전 점수 누적 (추가된 부분)
  const scores = calculateScores(formData, previousScores);
  cumulativeScores = scores; // 누적 점수 업데이트 (추가된 부분)

  if (currentBatch < questions.length / 5 - 1) {
    currentBatch++;
    renderQuestionsBatch(currentBatch);

    // Update progress bar after moving to the next batch
    setTimeout(updateProgressBar, 0);

    // Show alert with current scores after moving to the next batch
//    alert(`Current Scores:
//      Openness(개방성): ${scores.openness}
//      Conscientiousness(성실성): ${scores.conscientiousness}
//      Extraversion(외향성): ${scores.extraversion}
//      Agreeableness(친화성): ${scores.agreeableness}
//      Neuroticism(안정성): ${scores.neuroticism}`);
  } else {
    // Display the submit button after the last question batch is answered
    document.getElementById("nextButton").textContent = "Submit"; // 버튼 텍스트를 "Submit"으로 변경
    document.getElementById("nextButton").onclick = calculateResults; // 버튼의 클릭 이벤트를 calculateResults 함수로 변경
  }

  // Update progress bar after answering each question
  updateProgressBar();
}


// Call the renderQuestionsBatch function to populate the first batch of questions
renderQuestionsBatch(currentBatch);

function submitForm(event) {
  event.preventDefault();
  const form = document.getElementById("bigFiveForm");
  const formData = new FormData(form);
  const scores = calculateScores(formData);
  const queryParams = new URLSearchParams(scores).toString();
  window.location.href = `result.html?${queryParams}`;
}

// 1. calculateScores 함수 수정
function calculateScores(formData, previousScores = null) {
  let openness = 0;
  let conscientiousness = 0;
  let extraversion = 0;
  let agreeableness = 0;
  let neuroticism = 0;

  if (previousScores) { // 이전 점수 누적 (추가된 부분)
    ({ openness, conscientiousness, extraversion, agreeableness, neuroticism } = previousScores);
  }

  for (const [key, value] of formData.entries()) {
    const questionId = parseInt(key.substring(1));
    let score = parseInt(value); // Subtract 1 from the score

    if (questionId >= 1 && questionId <= 10) {
      openness += score;
    } else if (questionId >= 11 && questionId <= 20) {
      conscientiousness += score;
    } else if (questionId >= 21 && questionId <= 30) {
      extraversion += score;
    } else if (questionId >= 31 && questionId <= 40) {
      agreeableness += score;
    } else if (questionId >= 41 && questionId <= 50) {
      neuroticism += score;
    }
  }

  return {
    openness,
    conscientiousness,
    extraversion,
    agreeableness,
    neuroticism,
  };
}

function redirectToResultPage() {
  const form = document.getElementById("bigFiveForm");
  const formData = new FormData(form);
  
  // 누적 점수(cumulativeScores)를 사용하도록 수정
  const scores = cumulativeScores;

  // 결과 페이지로 이동하면서 데이터를 전달합니다.
  window.location.href = `result.html?openness=${parseInt(scores.openness)}&conscientiousness=${parseInt(scores.conscientiousness)}&extraversion=${parseInt(scores.extraversion)}&agreeableness=${parseInt(scores.agreeableness)}&neuroticism=${parseInt(scores.neuroticism)}`;
}


function calculateResults() {
  // 마지막 페이지에 도달한 경우 결과 페이지로 이동하도록 변경
  redirectToResultPage();
}

function navigateToResultPage() {
  const form = document.getElementById("bigFiveForm");
  const formData = new FormData(form);
  const scores = calculateScores(formData);

  // Create query string
  const queryString = new URLSearchParams(scores).toString();

  // Navigate to the result page
  window.location.href = `result.html?${queryString}`;
}


function updateProgressBar() {
  const form = document.getElementById("bigFiveForm");
  const formData = new FormData(form);
  const totalQuestions = 50;
  let answeredQuestions = 0;

  formData.forEach((value, key) => {
    if (value !== "") {
      const questionId = parseInt(key.substring(1));
      const currentQuestion = questions.find((question) => question.id === key);
      if (currentQuestion) {
        answeredQuestions = Math.max(answeredQuestions, currentQuestion.number);
      }
    }
  });
  
  // Ensure the progress bar is not stuck at 0% for the second page
  if (answeredQuestions === 0 && currentBatch > 0) {
    answeredQuestions = currentBatch * 5;
  }

  const progressBar = document.getElementById("progress-bar");
  const progressPercentage = (answeredQuestions / totalQuestions) * 100;
  progressBar.style.width = `${progressPercentage}%`;

}

function drawChart(scores) {
  const ctx = document.getElementById("bigFiveChart").getContext("2d");
  const labels = [
    "Openness",
    "Conscientiousness",
    "Extraversion",
    "Agreeableness",
    "Neuroticism",
  ];
  const colors = [
    "rgba(255, 99, 132, 0.2)", // 빨간색
    "rgba(75, 192, 192, 0.2)", // 녹색
    "rgba(54, 162, 235, 0.2)", // 파란색
    "rgba(255, 206, 86, 0.2)", // 노란색
    "rgba(153, 102, 255, 0.2)", // 보라색
  ];
  const borderColors = [
    "rgba(255, 99, 132, 1)", // 빨간색
    "rgba(75, 192, 192, 1)", // 녹색
    "rgba(54, 162, 235, 1)", // 파란색
    "rgba(255, 206, 86, 1)", // 노란색
    "rgba(153, 102, 255, 1)", // 보라색
  ];

  const datasets = labels.map((label, i) => ({
    label,
    data: [scores.openness, scores.conscientiousness, scores.extraversion, scores.agreeableness, scores.neuroticism].map((score, j) => (i === j ? score : 0)),
    backgroundColor: colors[i],
    borderColor: borderColors[i],
    borderWidth: 2,
    stack: 1,
  }));

  const data = {
    labels,
    datasets,
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        max: 40,
        ticks: {
          stepSize: 10,
        },
      },
    },
  };

  new Chart(ctx, {
    type: "bar",
    data: data,
    options: options,
  });
}


function showResults() {
  const scores = getQueryParams();

  // Draw the chart
  drawChart(scores);

  // ...the rest of the code
}