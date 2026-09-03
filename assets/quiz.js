(() => {
  "use strict";

  const PREFIX = "comp2711-logic:";

  function readState(id) {
    try {
      return JSON.parse(localStorage.getItem(PREFIX + id) || "null");
    } catch {
      return null;
    }
  }

  function writeState(id, state) {
    try {
      localStorage.setItem(PREFIX + id, JSON.stringify(state));
    } catch {
      // The course remains usable when storage is unavailable.
    }
  }

  function removeState(id) {
    try {
      localStorage.removeItem(PREFIX + id);
    } catch {
      // The visual reset still works when storage is unavailable.
    }
  }

  function updateScoreboards() {
    document.querySelectorAll("[data-scoreboard]").forEach((board) => {
      const items = [...board.querySelectorAll("[data-quiz], [data-manual-score]")];
      const total = Number(board.dataset.total || items.reduce((sum, item) => sum + Number(item.dataset.points || 0), 0));
      const threshold = Number(board.dataset.threshold || 0);
      const earned = items.reduce((sum, item) => sum + Number(item.dataset.earned || 0), 0);
      const answered = items.filter((item) => item.dataset.answered === "true").length;
      const score = board.querySelector("[data-score]");
      if (!score) return;

      let message = `${earned}/${total} points · ${answered}/${items.length} scored`;
      if (answered === items.length && items.length > 0) {
        message += earned >= threshold
          ? ` · Target reached (${threshold}/${total})`
          : ` · Review needed (${threshold}/${total} target)`;
      }
      score.textContent = message;
      score.dataset.passed = String(answered === items.length && earned >= threshold);

      const weakest = board.querySelector("[data-weakest]");
      if (weakest && answered === items.length && items.length > 0) {
        const domains = new Map();
        items.forEach((item) => {
          const domain = item.dataset.domain || "unclassified";
          const record = domains.get(domain) || { earned: 0, total: 0 };
          record.earned += Number(item.dataset.earned || 0);
          record.total += Number(item.dataset.points || 0);
          domains.set(domain, record);
        });
        const [name, record] = [...domains.entries()].sort((a, b) => (a[1].earned / a[1].total) - (b[1].earned / b[1].total))[0];
        weakest.textContent = `Weakest domain: ${name} (${record.earned}/${record.total}). Open its remediation panel below.`;
      }
    });
  }

  function renderQuiz(quiz, state) {
    const selected = state?.selected || "";
    const correct = Boolean(state?.correct);
    const answered = Boolean(state?.answered);
    const points = Number(quiz.dataset.points || 0);
    const feedback = quiz.querySelector("[data-feedback]");

    quiz.querySelectorAll('input[type="radio"]').forEach((input) => {
      input.checked = input.value === selected;
    });
    quiz.classList.toggle("is-correct", answered && correct);
    quiz.classList.toggle("is-incorrect", answered && !correct);
    quiz.dataset.answered = String(answered);
    quiz.dataset.earned = String(answered && correct ? points : 0);

    if (feedback) {
      feedback.textContent = answered
        ? (correct ? quiz.dataset.feedbackCorrect : quiz.dataset.feedbackIncorrect) || (correct ? "Correct." : "Not yet. Try the hint, then reset.")
        : "";
    }
  }

  function initializeQuiz(quiz) {
    const id = quiz.dataset.quizId;
    if (!id) return;
    renderQuiz(quiz, readState(id));

    quiz.querySelector("[data-check-answer]")?.addEventListener("click", () => {
      const selected = quiz.querySelector('input[type="radio"]:checked');
      const feedback = quiz.querySelector("[data-feedback]");
      if (!selected) {
        if (feedback) feedback.textContent = "Choose one answer before checking.";
        return;
      }
      const prior = readState(id);
      const state = {
        selected: selected.value,
        correct: selected.value === quiz.dataset.correct,
        answered: true,
        attempts: Number(prior?.attempts || 0) + 1
      };
      writeState(id, state);
      renderQuiz(quiz, state);
      updateScoreboards();
    });

    quiz.querySelector("[data-reset-answer]")?.addEventListener("click", () => {
      removeState(id);
      renderQuiz(quiz, null);
      updateScoreboards();
    });
  }

  async function copyResponse(button) {
    const target = document.getElementById(button.dataset.target || "");
    const prompt = document.getElementById(button.dataset.prompt || "");
    const status = button.parentElement?.querySelector("[data-copy-status]");
    if (!target) return;
    const text = `${prompt?.textContent?.trim() || "My answer:"}\n\n${target.value.trim()}`;
    try {
      await navigator.clipboard.writeText(text);
      if (status) status.textContent = "Copied. Paste this into the chat for feedback.";
    } catch {
      target.select();
      if (status) status.textContent = "Clipboard access was blocked. Your response is selected; copy it manually.";
    }
  }

  function initializeCopyButtons() {
    document.querySelectorAll("[data-copy-response]").forEach((button) => {
      button.addEventListener("click", () => copyResponse(button));
    });
  }

  function initializeManualScores() {
    document.querySelectorAll("[data-manual-score]").forEach((item) => {
      const id = item.dataset.scoreId;
      const input = item.querySelector("[data-score-input]");
      const max = Number(item.dataset.points || input?.max || 0);
      if (!id || !input) return;

      const stored = readState(`score:${id}`);
      if (stored && Number.isFinite(stored.earned)) input.value = String(stored.earned);

      const sync = () => {
        if (input.value === "") {
          item.dataset.earned = "0";
          item.dataset.answered = "false";
          removeState(`score:${id}`);
        } else {
          const earned = Math.max(0, Math.min(max, Number(input.value) || 0));
          input.value = String(earned);
          item.dataset.earned = String(earned);
          item.dataset.answered = "true";
          writeState(`score:${id}`, { earned });
        }
        updateScoreboards();
      };
      input.addEventListener("input", sync);
      sync();
    });
  }

  function initializeDetailsControls() {
    document.querySelectorAll("[data-open-details]").forEach((button) => {
      button.addEventListener("click", () => {
        document.querySelectorAll("details").forEach((details) => { details.open = true; });
      });
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("[data-quiz]").forEach(initializeQuiz);
    initializeManualScores();
    initializeCopyButtons();
    initializeDetailsControls();
    updateScoreboards();
  });
})();
