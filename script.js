function navigateToFirstFloor() {
  const ownerName = document.getElementById("ownerName").value;
  if (ownerName !== "") {
    localStorage.setItem("ownerName", ownerName);
    window.location.href = "first_floor.html";
  }
}

function setOwnerName() {
  const ownerNameElement = document.getElementById("ownerName");
  const ownerName = localStorage.getItem("ownerName");
  if (ownerName) {
    ownerNameElement.textContent = ownerName;
  }
}

setOwnerName();

const rooms = document.querySelectorAll(".room");
rooms.forEach(room => {
  room.addEventListener("click", () => {
    room.classList.toggle("room-on");
  });
});

function navigateToSecondFloor() {
  const ownerName = document.getElementById("ownerName").value;
  if (ownerName !== "") {
    localStorage.setItem("ownerName", ownerName);
    window.location.href = "second_floor.html";
  }
}

function toggleLight(roomId) {
  const room = document.getElementById(roomId);
  room.classList.toggle("room-on");
}

function updateControls() {
  const rooms = document.querySelectorAll(".room");
  rooms.forEach(room => {
    const button = document.querySelector(`[onclick="toggleLight('${room.id}')"]`);
    if (room.classList.contains("room-on")) {
      button.classList.add("on");
    } else {
      button.classList.remove("on");
    }
  });
}