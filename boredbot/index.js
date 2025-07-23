// Purpose: Fetch a random activity from the Bored API and display it on the page
document.getElementById("get-activity").addEventListener("click", function() {
  fetch("https://apis.scrimba.com/bored/api/activity")
    .then(response => response.json())
    .then(data => {
      document.getElementById("activity").textContent = data.activity
      document.getElementById("title").textContent = "HappyBot"
      document.querySelector("main").classList.add("fun")
      const utterance = new SpeechSynthesisUtterance(data.activity);
      speechSynthesis.speak(utterance);
    })
})
