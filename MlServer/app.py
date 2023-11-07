from flask import Flask, request, jsonify
import joblib
from flask_cors import CORS
from collections import Counter

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
    print(data)
    
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
    
    # Predict probabilities for all classes
    probabilities = model.predict_proba([features])[0]
    
    # Prepare JSON response with predicted crops and their probabilities
    predicted_crops = []
    for idx, probability in enumerate(probabilities):
        crop_name = unique_crop_list[idx]
        nutrient_requirements = {}  # Retrieve nutrient requirements for each crop from your data source
        probability_percentage = f'{probability * 100:.2f}%'
        predicted_crops.append({
            'crop': crop_name,
            'probability': probability_percentage,
            'nutrient_requirements': nutrient_requirements  # Provide appropriate nutrient requirements for each crop
        })
    
    # Convert response to JSON and send it back
    return jsonify(predicted_crops)

if __name__ == '__main__':
    app.run(port=5000)
