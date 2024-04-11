from flask import Flask, request, jsonify
import joblib
from flask_cors import CORS
from collections import Counter

import pickle
import pandas as pd

app = Flask(__name__)
CORS(app)
# Load the Random Forest model
model = joblib.load('model.pkl')

# Load the fertilizer prediction model
with open("ferti_random_forest_model.pkl", "rb") as f:
    model_fertilizer = pickle.load(f)


# Fertilizer encoding dictionary (replace with your actual encodings)
fertilizer_encodings = {0: "10-26-26", 1: "14-35-14", 2: "17-17-17", 3: "20-20", 4: "28-28", 5: "DAP", 6: "Urea"}


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

@app.route('/')
def hello_world():
    return 'Hello, World!'
    
@app.route('/predict-crop', methods=['POST'])
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
        crop_name = unique_crop_list[idx]# Retrieve nutrient requirements for each crop from your data source
        probability_percentage = f'{probability * 100:.2f}%'
        predicted_crops.append({
            'crop': crop_name,
            'probability': probability_percentage # Provide appropriate nutrient requirements for each crop
        })
    
    # Convert response to JSON and send it back
    return jsonify(predicted_crops)

@app.route('/predict-fertilizer', methods=['POST'])  # New route for fertilizer prediction
def predict_fertilizer():
    data = request.get_json(force=True)
    print(data)

    # Extract features from JSON data
    features = [
        data['Temparature'],
        data['Humidity'],
        data['Moisture'],
        data['Soil_Type'],  
        data['Crop_Type'],  
        data['Nitrogen'],
        data['Potassium'],
        data['Phosphorous']
    ]

    # Prepare data as a DataFrame for fertilizer prediction
    data_fertilizer = pd.DataFrame({
        "Temparature": [features[0]],  
        "Humidity": [features[1]],  
        "Moisture": [features[2]],  
        "Soil_Type": [features[3]],  
        "Crop_Type": [features[4]],  
        "Nitrogen": [features[5]],
        "Potassium": [features[6]],  
        "Phosphorous": [features[7]],  
    })

    # Preprocess data if needed based on your fertilizer model's requirements
    # ... (e.g., scaling features)

    # Make prediction using the fertilizer model
    prediction = model_fertilizer.predict(data_fertilizer)[0]
    print(prediction)
    
    # Decode the prediction using the fertilizer encoding dictionary
    predicted_fertilizer = fertilizer_encodings[prediction]  # Handle potential missing keys

    return jsonify({'predicted_fertilizer': predicted_fertilizer})


if __name__ == '__main__':
    app.run(port=5000)
