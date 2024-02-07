#include <ESP8266WiFi.h>
#include <ESP8266WebServer.h>
#include <WiFiManager.h>
#include <ESP8266mDNS.h> 

#include <dht11.h>
#include <SoftwareSerial.h>
#include <ModbusMaster.h>
#include <tuple>

ESP8266WebServer server(80);  // Create a server instance

#define DHT11PIN D8  // Replace D2 with the actual pin connected to the DHT11 sensor
const int buzzerPin = D7; // GPIO14 on NodeMCU for the buzzer

dht11 DHT11;

struct SoilData {
  String rawValueString;
  String moistureValueString;
  String message;
};

int sensor_pin = A0; // Soil moisture sensor pin

const int RO_PIN = D3; // GPIO12 on NodeMCU
const int RE_PIN = D4; // GPIO2 on NodeMCU
const int DE_PIN = D5; // GPIO0 on NodeMCU
const int DI_PIN = D6; // GPIO13 on NodeMCU

SoftwareSerial swSerial(RO_PIN, DI_PIN); // Receive (data in) pin, Transmit (data out) pin


ModbusMaster node;

void preTransmission() {
  digitalWrite(RE_PIN, 1);
  digitalWrite(DE_PIN, 1);
}

void postTransmission() {
  digitalWrite(RE_PIN, 0);
  digitalWrite(DE_PIN, 0);
}

void printModbusError(uint8_t errNum) {
  switch (errNum) {
    case node.ku8MBSuccess:
      Serial.println(F("Success"));
      break;
    case node.ku8MBIllegalFunction:
      Serial.println(F("Illegal Function Exception"));
      break;
    case node.ku8MBIllegalDataAddress:
      Serial.println(F("Illegal Data Address Exception"));
      break;
    case node.ku8MBIllegalDataValue:
      Serial.println(F("Illegal Data Value Exception"));
      break;
    case node.ku8MBSlaveDeviceFailure:
      Serial.println(F("Slave Device Failure"));
      break;
    case node.ku8MBInvalidSlaveID:
      Serial.println(F("Invalid Slave ID"));
      break;
    case node.ku8MBInvalidFunction:
      Serial.println(F("Invalid Function"));
      break;
    case node.ku8MBResponseTimedOut:
      Serial.println(F("Response Timed Out"));
      break;
    case node.ku8MBInvalidCRC:
      Serial.println(F("Invalid CRC"));
      break;
    default:
      Serial.println(F("Unknown Error"));
      break;
  }
}




void handle_OnConnect() {
  // Trigger the buzzer when a client connects
  tone(buzzerPin, 2000); // Send 1KHz sound signal...
  delay(1000);          // ...for 1 sec
  noTone(buzzerPin);    // Stop sound...
  delay(1000);          // ...for 1 sec

  String message = "Hello World!";
  server.send(200, "text/plain", message);
}

SoilData calculateSoilMoisture() {
  int raw_value = analogRead(sensor_pin);
  int moisture_percentage = 100 - ((raw_value / 1023.00) * 100.00);

  String message;
  if (moisture_percentage < 30) {
    message = "Soil is Dry";
  } else if (moisture_percentage < 70) {
    message = "Soil is Moist";
  } else {
    message = "Soil is Wet";
  }

  String rawValueString = String(raw_value);
  String moistureValueString = String(moisture_percentage);

  SoilData data;
  data.rawValueString = rawValueString;
  data.moistureValueString = moistureValueString;
  data.message = message;

  return data;
}

std::tuple<float, float> dht11() {
  int chk = DHT11.read(DHT11PIN);

  float humidity = (float)DHT11.humidity;
  float temperature = (float)DHT11.temperature;

  return std::make_tuple(temperature, humidity);
}

std::tuple<float, float, float> npk() {
  uint8_t result;
  float N, P, K;

  result = node.readHoldingRegisters(0x0000, 3);

  if (result == node.ku8MBSuccess) {
    N = node.getResponseBuffer(0) * 10;
    P = node.getResponseBuffer(1) * 10;
    K = node.getResponseBuffer(2) * 10;
  } else {
    printModbusError(result);
  }

  Serial.println(String(N));
  Serial.println(String(P));
  Serial.println(String(K));

  return std::make_tuple(N, P, K);
}

float calculatePh() {
  return 6.502985292000001; // level
}

SoilData getSoilData() {
  tone(buzzerPin, 2000); // Send 1KHz sound signal...
  delay(1000);          // ...for 1 sec
  noTone(buzzerPin);    // Stop sound...
  delay(1000); 

  SoilData moistureData = calculateSoilMoisture();
  // std::tuple<float, float, float> npkValues = npk();

  float temperature, humidity;
  std::tie(temperature, humidity) = dht11();

  float ph = calculatePh();

  float N, P, K;
  std::tie(N, P, K) = npk();


  String json_response = "{\"moisture\":{\"analog\": " + moistureData.rawValueString +
                    ", \"moisture\": " + moistureData.moistureValueString +
                    ", \"message\": \"" + moistureData.message + "\"}" +
                    ", \"N\":{\"level\": " + String(N) + "}" +
                    ", \"P\":{\"level\": " + String(P) + "}" +
                    ", \"K\":{\"level\": " + String(K) + "}" +
                    ", \"temperature\": " + String(temperature) +
                    ", \"humidity\": " + String(humidity) +
                    ", \"ph\": " + String(ph) + "}";

  server.sendHeader("Access-Control-Allow-Origin", "*");
  server.sendHeader("Access-Control-Allow-Methods", "GET");
  server.sendHeader("Access-Control-Max-Age", "10000");
  server.sendHeader("Access-Control-Allow-Headers", "Content-Type");

  server.send(200, "application/json", json_response);

  // Trigger the buzzer after sending data
  tone(buzzerPin, 2000); // Send 1KHz sound signal...
  delay(1000);          // ...for 1 sec
  noTone(buzzerPin);    // Stop sound...
  delay(1000); 

  return moistureData;
}
void handle_NotFound() {
  String message = "404 Not Found";
  server.send(404, "text/plain", message);
}

void setup() {
  Serial.begin(9600);
  WiFiManager wifiManager;

  if (!wifiManager.autoConnect("ESP8266-AP")) {
    Serial.println("Failed to connect and hit timeout. Rebooting...");
    delay(1000);
    ESP.restart();
  }


  IPAddress staticIP(192, 168, 137, 53);
  IPAddress gateway(192, 168, 1, 1);
  IPAddress subnet(255, 255, 255, 0);

  WiFi.config(staticIP, gateway, subnet);
  WiFi.hostname("MyESPDevice");

  Serial.println("Connected to Wi-Fi!");

  // configure the MAX485 RE & DE control signals and enable receive mode

  server.on("/", HTTP_GET, handle_OnConnect);
  server.on("/soildata", HTTP_GET, getSoilData);
  server.onNotFound(handle_NotFound);

  pinMode(RE_PIN, OUTPUT);
  pinMode(DE_PIN, OUTPUT);
  digitalWrite(DE_PIN, 0);
  digitalWrite(RE_PIN, 0);

  swSerial.begin(9600);
  // Modbus slave ID of NPK sensor is 1
  Serial.println("Modbus initialization...");
  node.begin(1, swSerial);
  Serial.println("Modbus initialization complete.");

  // Callbacks to allow us to set the RS485 Tx/Rx direction
  node.preTransmission(preTransmission);
  node.postTransmission(postTransmission);

  server.begin();
  Serial.println("HTTP server Started");
  MDNS.begin("agroapi");
}

void loop() {
  server.handleClient();
  MDNS.update();

  if (WiFi.status() != WL_CONNECTED) {
    Serial.println("Disconnected from Wi-Fi. Rebooting for reconfiguration...");
    delay(1000);
    ESP.restart();
  }
}