from flask import Flask, request, jsonify
import joblib
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
# Load the Random Forest model
model = joblib.load('model.pkl')

# Define the unique_crop_list mapping numerical labels to crop names
unique_crop_list = {
    0: 'rice',
    1: 'maize',
    2: 'chickpea',
    3: 'kidneybeans',
    4: 'pigeonpeas',
    5: 'mothbeans',
    6: 'mungbean',
    7: 'blackgram',
    8: 'lentil',
    9: 'pomegranate',
    10: 'banana',
    11: 'mango',
    12: 'grapes',
    13: 'watermelon',
    14: 'muskmelon',
    15: 'apple',
    16: 'orange',
    17: 'papaya',
    18: 'coconut',
    19: 'cotton',
    20: 'jute',
    21: 'coffee'
}

@app.route('/predict', methods=['POST'])
def predict():
    # Get data from JSON request
    data = request.get_json(force=True)
    
    # Extract features from JSON data
    features = [
        data['N'], 
        data['P'], 
        data['K'], 
        data['temperature'], 
        data['humidity'], 
        data['ph'], 
        data['rainfall']
    ]
    
    # Convert int64 prediction result to int for JSON serialization
    prediction = int(model.predict([features])[0])
    
    # Prepare JSON response with predicted crop name
    response = {
        'prediction': prediction,
        'predicted_crop': unique_crop_list[prediction]
    }
    
    # Convert response to JSON and send it back
    return jsonify(response)

if __name__ == '__main__':
    app.run(port=5000)
