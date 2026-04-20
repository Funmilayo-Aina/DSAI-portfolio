from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/")
def home():
    return "SABI-AI API is running"

@app.route("/analyze", methods=["POST"])
def analyze():
    data = request.json
    
    time = data.get("time_spent", 0)
    clicks = data.get("clicks", 0)

    # 🔥 Simple AI logic (replace with model later)
    if time > 10 and clicks > 5:
        result = "Highly Engaged"
    elif time > 5:
        result = "Moderately Engaged"
    else:
        result = "Low Engagement"

    return jsonify({
        "engagement": result,
        "recommendation": "Increase interactive content" if result == "Low Engagement" else "Keep current strategy"
    })

if __name__ == "__main__":
    app.run(debug=True)