// Skicka ett play-event till den lokala servern. / Send a play event to the local server.
window.dataLayer = window.dataLayer || [];
document.querySelector("#send").addEventListener("click", async () => {
  let visitorId = localStorage.getItem("backstage-visitor");
  if (!visitorId) {
    visitorId = crypto.randomUUID();
    localStorage.setItem("backstage-visitor", visitorId)
  }
  //const visitorId = null; // TODO: Ge besökaren ett giltigt ID / Give the visitor a valid ID.
  const event = { type: "play", trackId: "night-drive", visitorId };
  window.dataLayer.push(event);
  const response = await fetch("/api/events", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(event),
  });
  const receipt = await response.json();
  document.querySelector("#status").textContent =
    response.status + " " + JSON.stringify(receipt);
});
