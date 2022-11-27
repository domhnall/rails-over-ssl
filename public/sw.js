self.addEventListener("install", (event) => {
  event.waitUntil(() => {
    console.log("Installing our service worker.");
  });
});

 // Allow sw to control of current page
self.addEventListener("activate", (event) => {
  console.log("Claiming clients for current page");
  event.waitUntil(self.clients.claim());
});
