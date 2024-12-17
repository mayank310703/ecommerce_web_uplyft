import random

def get_chat_response(query):
    query = query.lower()

    responses = {
        'laptop': ["We have laptops starting at $300!"],
        'smartphone': ["Our smartphones start from $200!"],
        'headphone': ["Headphones are available starting at $100."],
        'hello': ["Hi there! How can I help you today?"],
        'hi': ["Hello! What can I assist you with?"],
        'thanks': ["You're welcome! Let me know if you need more help."],
    }

    for keyword, replies in responses.items():
        if keyword in query:
            return random.choice(replies)

    return "I'm sorry, I didn't understand that. Could you try again?"
