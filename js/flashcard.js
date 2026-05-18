(function () {
  function cleanText(value) {
    return value.replace(/\s+/g, " ").replace(/^[^\w]+/, "").trim();
  }

  function buildCardsFromQuestions() {
    return Array.from(document.querySelectorAll(".question")).map((question) => {
      const questionText = question.querySelector("p")?.textContent || "";
      const answerText = question.querySelector(".correct")?.textContent || "";
      const detailText = question.querySelector(".note")?.textContent || "";

      return {
        q: cleanText(questionText),
        a: cleanText(answerText),
        detail: cleanText(detailText)
      };
    }).filter((card) => card.q && card.a);
  }

  function createFlashcardDeck(cards) {
    let deck = [...cards];
    let index = 0;
    let flipped = false;

    const section = document.createElement("section");
    section.className = "flashcard-review";
    section.setAttribute("aria-labelledby", "flashcard-review-title");

    section.innerHTML = `
      <h2 id="flashcard-review-title">Flashcards</h2>
      <p class="flashcard-counter" aria-live="polite"></p>
      <button class="flashcard-card" type="button" aria-live="polite">
        <span class="flashcard-label"></span>
        <span class="flashcard-text"></span>
        <span class="flashcard-detail"></span>
      </button>
      <div class="flashcard-controls">
        <button type="button" data-flashcard-action="prev">Previous</button>
        <button type="button" data-flashcard-action="flip">Flip</button>
        <button type="button" data-flashcard-action="next">Next</button>
        <button type="button" data-flashcard-action="shuffle">Shuffle</button>
      </div>
    `;

    const counter = section.querySelector(".flashcard-counter");
    const cardButton = section.querySelector(".flashcard-card");
    const label = section.querySelector(".flashcard-label");
    const text = section.querySelector(".flashcard-text");
    const detail = section.querySelector(".flashcard-detail");

    function render() {
      const card = deck[index];
      counter.textContent = `Card ${index + 1} of ${deck.length}`;
      label.textContent = flipped ? "Answer" : "Question";
      text.textContent = flipped ? card.a : card.q;
      detail.textContent = flipped ? card.detail : "Click the card or press Flip to show the answer.";
      cardButton.classList.toggle("is-flipped", flipped);
    }

    function shuffleDeck() {
      for (let i = deck.length - 1; i > 0; i -= 1) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
      }
      index = 0;
      flipped = false;
      render();
    }

    section.addEventListener("click", (event) => {
      const action = event.target.closest("[data-flashcard-action]")?.dataset.flashcardAction;

      if (event.target === cardButton || event.target.closest(".flashcard-card")) {
        flipped = !flipped;
        render();
        return;
      }

      if (action === "prev") {
        index = (index - 1 + deck.length) % deck.length;
        flipped = false;
        render();
      } else if (action === "flip") {
        flipped = !flipped;
        render();
      } else if (action === "next") {
        index = (index + 1) % deck.length;
        flipped = false;
        render();
      } else if (action === "shuffle") {
        shuffleDeck();
      }
    });

    render();
    return section;
  }

  document.addEventListener("DOMContentLoaded", () => {
    const cards = buildCardsFromQuestions();

    if (!cards.length || document.querySelector(".flashcard-review")) {
      return;
    }

    const target = document.querySelector(".lesson-review-content") || document.querySelector(".page-content") || document.body;
    const footer = target.querySelector(".site-footer");
    target.insertBefore(createFlashcardDeck(cards), footer);
  });
}());
