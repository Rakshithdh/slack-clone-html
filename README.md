# Slack Redesign Messaging System Documentation

## Overview

This project implements a basic messaging system for different channels in a Slack redesign. The JavaScript code handles message persistence for channels such as 'design-crit', 'design-team', and 'hubspot'. Users can switch between channels, send messages, and view the message history for each channel.

## Structure

### `index.html`

- The HTML structure defines the layout of the Slack redesign.
- Channels and messages are displayed in the sidebar and main content area.

### `style.css`

- Contains styles for the Slack redesign, defining the layout, colors, and visual elements.

### `script.js`

- Manages the dynamic behavior of the Slack redesign.
- Defines functions for updating messages, sending messages, and handling channel switches.
- Uses a simple data structure (`channelMessages`) to store messages for different channels.

## Functionality

### Message Persistence

- Messages for each channel are stored in the `channelMessages` object.
- When switching between channels, the messages for the selected channel are displayed.
- New messages are added to the respective channel's message list.

### Sending Messages

- Users can send messages through the message input area.
- Messages are added to the current channel's message list.
- The message input area is cleared after sending.

### Channel Switching

- Channels are listed in the sidebar, and users can click on a channel to switch.
- When switching channels, the message history for the selected channel is displayed.

## Usage

1. Open `index.html` in a web browser.
2. Use the sidebar to navigate between channels.
3. Enter messages in the message input area and click the send button.

## Notes

- This is a basic implementation and can be extended for more features.
- The data structure (`channelMessages`) is simplistic and might need enhancements for real-world scenarios.

Feel free to customize and extend this codebase based on your specific requirements.
