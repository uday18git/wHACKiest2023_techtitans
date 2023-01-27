
export const sendMessage = (setConversations, conversations, setSending, newMsg) => {
    if (!newMsg.who) {
        setSending(true)
    }
    setTimeout(() => {
        setConversations([...conversations, newMsg])
        setSending(false)
    }, 1000);
}