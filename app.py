from flask import Flask, request, jsonify, render_template

app = Flask(__name__)

# A simple function to simulate AI response
def ai_response(user_input):
    # This part can be replaced with a real AI model
    if "hello" in user_input.lower():
        return "Hello How can I assist you today?"
    elif "how are you" in user_input.lower():
        return "I'm fine, thank you for asking!"
    else:
        return "I'm sorry, I didn't understand your question. Can you clarify?"

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/chat', methods=['POST'])
def chat():
    user_input = request.json['user_input']
    response = ai_response(user_input)
    return jsonify({'response': response})

if __name__ == '__main__':
    app.run(debug=True, port=5001)  # Use a different port