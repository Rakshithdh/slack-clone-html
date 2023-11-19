const editControls = document.querySelector(".input-toolbar-icons");

editControls.addEventListener("click", function (event) {
  const command =
    event.target !== undefined &&
    event.target.getAttribute("data-command") !== null
      ? event.target.getAttribute("data-command")
      : null;
  if (command === null) return;
  console.log("Selected command: " + command);

  if (document.getSelection().toString().length === 0) {
    alert("Please select some text before editing the content.");
    return;
  }

  let range = window.getSelection().getRangeAt(0);
  const oldConent = document.createTextNode(range.toString());
  const newElement = document.createElement(command);
  newElement.append(oldConent);
  range.deleteContents();
  range.insertNode(newElement);
});

const closeSideBar = document.getElementById("close");
const sideBarWrapper = document.getElementById("sidebar-wrapper");
const sideBar = document.getElementById("user-sidebar");
const user = document.getElementById("user");

const info = document.getElementById("info");
const rightSidebarWrapper = document.getElementById("right-sidebar-wrapper");
const channelRightSidebar = document.getElementById("channel-right-sidebar");
const closeRightSidebar = document.getElementById("close-right-sidebar");

// sidebar
if (user) {
  user.addEventListener("click", () => {
    if (sideBarWrapper) {
      sideBarWrapper.classList.add("sidebar-wrapper-display");
    }
    if (sideBar) {
      sideBar.classList.add("user-sidebar-display");
    }
  });
}
if (closeSideBar) {
  closeSideBar.addEventListener("click", () => {
    sideBar.classList.remove("sidebar-display");
    sideBarWrapper.classList.remove("sidebar-wrapper-display");
  });
}

// Right sidebar displaying channel info

const enableInfoButton = (breaker) => {
  if (breaker.matches) {
    info.disabled = false;
    info.classList.remove("disabled");
  } else {
    info.disabled = true;
    info.classList.add("disabled");
  }
};

if (matchMedia) {
  const sidebarBreak = window.matchMedia("(max-width: 1250px)");
  sidebarBreak.addEventListener("change", enableInfoButton);
  enableInfoButton(sidebarBreak);
}

if (info) {
  info.addEventListener("click", () => {
    if (rightSidebarWrapper) {
      rightSidebarWrapper.classList.add("sidebar-wrapper-display");
    }
    if (channelRightSidebar) {
      channelRightSidebar.classList.add("channel-sidebar-display");
    }
  });
}

if (closeRightSidebar) {
  closeRightSidebar.addEventListener("click", () => {
    channelRightSidebar.classList.remove("channel-sidebar-display");
    rightSidebarWrapper.classList.remove("sidebar-wrapper-display");
  });
}

// click anywhere in the browser to close modals
window.onclick = (e) => {
  if (e.target == sideBarWrapper) {
    sideBar.classList.remove("sidebar-display");
    sideBarWrapper.classList.remove("sidebar-wrapper-display");
  } else if (e.target == rightSidebarWrapper) {
    channelRightSidebar.classList.remove("channel-sidebar-display");
    rightSidebarWrapper.classList.remove("sidebar-wrapper-display");
  }
};


function createNewChannel() {
  // Get the input value
  var newChannelName = document.getElementById('newChannelInput').value;

  // Create a new list item for the channel
  var newChannelListItem = document.createElement('li');
  newChannelListItem.innerHTML = '<a href="#"><i class="fas fa-hashtag"></i>' + newChannelName + '</a>';

  // Append the new list item to the Channels section
  document.querySelector('.channels ul').appendChild(newChannelListItem);

  // Clear the input field
  document.getElementById('newChannelInput').value = '';
}


function sendMessage(event) {
  event.preventDefault(); // Prevent the form from submitting and reloading the page

  // Get the message from the input field
  var messageBox = document.getElementById('textBox');
  var message = messageBox.innerText.trim(); // Trim any leading or trailing whitespace

  // Check if the message is not empty
  if (message !== '') {
    // Get the current timestamp
    var timestamp = getCurrentTimestamp();

    // Create a new message element with timestamp
    var newMessageElement = document.createElement('article');
    newMessageElement.className = 'feed';
    newMessageElement.innerHTML = `
      <section class="feeds-user-avatar">
        <img src="images/rakshith.jpg" alt="User 1" width="40" />
      </section>
      <section class="feed-content">
        <section class="feed-user-info">
          <h4>Rakshith <span class="time-stamp">${timestamp}</span></h4>
        </section>
        <div>
          <p class="feed-text">${message}</p>
        </div>
      </section>
    `;

    // Append the new message to the feeds section
    var feedsSection = document.querySelector('.feeds');
    feedsSection.appendChild(newMessageElement);

    // Clear the input field
    messageBox.innerText = '';
  }
}

// Function to get the current timestamp
function getCurrentTimestamp() {
  var now = new Date();
  var hours = now.getHours();
  var minutes = now.getMinutes();
  var ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; // Handle midnight
  minutes = minutes < 10 ? '0' + minutes : minutes;
  var timestamp = hours + ':' + minutes + ' ' + ampm;
  return timestamp;
}


document.addEventListener('DOMContentLoaded', function () {
  // Find the form element
  const form = document.querySelector('.create-form');

  // Add a submit event listener to the form
  form.addEventListener('submit', function (event) {
    // Prevent the default form submission
    event.preventDefault();

    // Get the value of the channel name input
    const channelNameInput = document.getElementById('channel-name');
    const channelName = channelNameInput.value;

    // Create a new list item for the user-created channel
    const newChannelListItem = document.createElement('li');
    newChannelListItem.innerHTML = `<a href="#"><i class="fas fa-hashtag"></i>${channelName}</a>`;

    // Find the existing channel list and append the new channel item
    const channelList = document.getElementById('channelList');
    channelList.appendChild(newChannelListItem);

    // Clear the channel name input
    channelNameInput.value = '';
  });
});


function createChannel() {
  // Get the channel name from the input field
  var newChannelName = document.getElementById("newChannelName").value;

  // Validate the channel name (add more validation if needed)
  if (newChannelName.trim() === "") {
    alert("Please enter a valid channel name.");
    return;
  }

  // Create a new list item for the channel
  var newChannelListItem = document.createElement("li");
  newChannelListItem.innerHTML = `<a href="#"><i class="fas fa-hashtag"></i>${newChannelName}</a>`;

  // Append the new channel to the channel list
  var channelList = document.getElementById("channelList");
  channelList.appendChild(newChannelListItem);

  // Clear the input field after creating the channel
  document.getElementById("newChannelName").value = "";
}
