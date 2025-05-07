function getSuggestion() {
    const select = document.getElementById("issueSelect").value.toLowerCase();
    const text = document.getElementById("suggestionText");
    const box = document.getElementById("suggestionBox");
    const formCard = document.getElementById("formCard");
  
    if (!select) return;
  
    formCard.style.display = "none";
    box.style.display = "block";
    void box.offsetWidth; // trigger reflow
    box.classList.add("show");
  
    const remedies = {
      "headache": "Apply a cold compress and stay hydrated.",
      "stomach pain": "Drink ginger tea and rest your stomach.",
      "fever": "Stay cool and drink fluids like lemon water.",
      "joint pain": "Use warm compress and gentle movement.",
      "skin rash": "Apply aloe vera or coconut oil.",
      "diabetes": "Control diet and drink cinnamon tea.",
      "hypertension": "Reduce salt and practice deep breathing.",
      "chest pain": "Take rest and seek medical attention if needed.",
      "fatigue": "Drink water, walk outside, rest properly.",
      "anxiety": "Deep breathing, chamomile tea, talk to someone.",
      "insomnia": "Warm milk, avoid screens before sleep.",
      "eye strain": "20-20-20 rule and eye exercises.",
      "back pain": "Stretch and use heat pad.",
      "depression": "Talk to someone, fresh air, healthy food.",
      "cold/flu": "Honey-lemon tea and rest.",
      "asthma": "Steam inhalation and avoid dust.",
      "sinus infection": "Warm compress and steam.",
      "acid reflux": "Avoid spicy food, eat small meals.",
      "arthritis": "Warm compress, gentle exercise.",
      "allergies": "Avoid allergens and rinse nose with saline."
    };
  
    text.textContent = remedies[select] || "Sorry, no remedy found.";
  }
  
  document.addEventListener('keydown', function () {
    const box = document.getElementById("suggestionBox");
    const formCard = document.getElementById("formCard");
  
    box.classList.remove("show");
    setTimeout(() => {
      box.style.display = "none";
      formCard.style.display = "block";
    }, 600);
  });
  