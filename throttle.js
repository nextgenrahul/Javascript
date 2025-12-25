function throttle(fn, delay) {
    let lastcall = 0;

    return function (...args) {
        const now = Date.now();
        if (now - lastcall < delay) {
            return;
        }
        lastcall = now
        return fn(...args)
    }
}

function sendChatMessage(message) {
    console.log("Sending Message ", message)
}

const sendChatMessageWithSlowMode = throttle(sendChatMessage, 2 * 1000);

sendChatMessageWithSlowMode("Hello With me")
sendChatMessageWithSlowMode("Hello With me Ok ")
sendChatMessageWithSlowMode("Hello With me Ok But ")
sendChatMessageWithSlowMode("Hello With me Ok But Over")