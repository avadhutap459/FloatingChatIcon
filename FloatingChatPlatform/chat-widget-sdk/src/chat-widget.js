(function () {

    "use strict";

    // Prevent duplicate initialization
    if (window.__FLOATING_CHAT_INITIALIZED__) {
        return;
    }

    window.__FLOATING_CHAT_INITIALIZED__ = true;

    const script = document.currentScript;

    if (!script) {
        console.error("Floating Chat SDK: Script not found.");
        return;
    }

    const position =
        script.getAttribute("data-position") || "right";

    const primaryColor =
        script.getAttribute("data-primary-color") || "#2563eb";

    if (!["left", "right"].includes(position)) {
        console.error(
            "Floating Chat SDK: position must be left or right."
        );

        window.__FLOATING_CHAT_INITIALIZED__ = false;
        return;
    }

    // Create container
    const container = document.createElement("div");

    container.id = "floating-chat-container";

    container.style.cssText = `
        position: fixed !important;
        bottom: 20px !important;
        ${position}: 20px !important;
        z-index: 2147483647 !important;
        margin: 0 !important;
        padding: 0 !important;
    `;

    document.body.appendChild(container);

    // Shadow DOM to isolate widget styles
    const shadow = container.attachShadow({
        mode: "closed"
    });

    // Widget CSS
    const style = document.createElement("style");

    style.textContent = `
        * {
            box-sizing: border-box;
        }

        .chat-button {
            width: 60px;
            height: 60px;
            border-radius: 50%;
            border: none;
            background: ${primaryColor};
            color: #ffffff;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 28px;
            box-shadow: 0 4px 20px rgba(0,0,0,.25);
            transition: transform 0.2s ease;
        }

        .chat-button:hover {
            transform: scale(1.08);
        }

        .chat-button:focus-visible {
            outline: 3px solid #111827;
            outline-offset: 3px;
        }

        @media (max-width: 600px) {
            .chat-button {
                width: 56px;
                height: 56px;
            }
        }
    `;

    shadow.appendChild(style);

    // Create floating button
    const button = document.createElement("button");

    button.type = "button";
    button.className = "chat-button";

    button.setAttribute(
        "aria-label",
        "Open customer support"
    );

    button.title = "Chat with us";

    button.innerHTML = "&#128172;";

    shadow.appendChild(button);

    // Click event
    button.addEventListener("click", function () {

        window.alert(
            "Hello! Welcome to Customer Support. How can we help you?"
        );

    });

})();