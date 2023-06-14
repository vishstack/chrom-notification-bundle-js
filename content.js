chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === "receiveNotification") {
    displayNotification(request.message);
  }
});

function displayNotification(message) {
  if (Notification.permission === "granted") {
    new Notification("Notification Title", { body: message });
  } else {
    console.error("Notification permission is not granted.");
  }
}
