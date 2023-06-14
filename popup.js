document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("sendNotificationBtn").addEventListener("click", sendNotification);
});

function sendNotification() {
  var message = document.getElementById("notificationMessage").value;
  chrome.runtime.sendMessage({ action: "sendNotification", message: message });
}
