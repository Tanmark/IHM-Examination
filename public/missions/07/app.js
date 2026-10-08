/*// Koppla in encore-API:t och hantera fel. / Connect the encore API and handle errors.
document.querySelector("#load").addEventListener("click", async () => {
  try {
    //TODO: fetch('/api/encore'), kontrollera response.ok, läs JSON  check response.ok, read JSON.
    const track = { title: "TODO" };
    document.querySelector("#encore").textContent = track.title;
  } catch (error) {
    document.querySelector("#status").textContent = error.message;
  }
}); */

document.querySelector("#load") .addEventListener("click", async () => {
  const status = document.querySelector("#status");
  try {
    const response = await fetch("/api/encorex);
    if (!response.ok) throw new Error("Servern svarade med fel: HTTP " + response.status);
    const track = await response.json();
    document.querySelector("#encore") .textContent = track.title + "-" + track.artist;
    status.textContent = "";
  } catch(error) {
    if (error instanceof TypeError) {
      status.textContent = "Kunde inte nå servern. Försök igen.";
    } else {
      status.textContent = error.message;
    }
  }
});
