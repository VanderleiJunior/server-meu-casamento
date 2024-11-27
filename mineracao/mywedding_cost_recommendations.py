# -*- coding: utf-8 -*-
"""MyWedding - Cost Recommendations with User Input"""

import pandas as pd
from sklearn.ensemble import RandomForestClassifier
from sklearn.preprocessing import LabelEncoder, StandardScaler
from sklearn.metrics import accuracy_score, confusion_matrix
import matplotlib.pyplot as plt
import seaborn as sns

# Load datasets
train_df = pd.read_csv('datasets/train_wedding_data.csv')
val_df = pd.read_csv('datasets/val_wedding_data.csv')
test_df = pd.read_csv('datasets/test_wedding_data.csv')

# Fill missing values
train_df.fillna(0, inplace=True)
val_df.fillna(0, inplace=True)
test_df.fillna(0, inplace=True)

# Map 'Sim'/'Não' to binary in specific columns
binary_columns = ['Terá religioso?', 'Terá festa?']
for col in binary_columns:
    for df in [train_df, val_df, test_df]:
        df[col] = df[col].map({'Sim': 1, 'Não': 0}).fillna(0)

# Split services into binary columns
services = ["Fotógrafo/Videomaker", "Buffet", "Cerimonialista", "Entretenimento (DJ/Banda)",
            "Flores/Decoração", "Convites/Material gráfico", "Som e Iluminação",
            "Doces e Bolo", "Bartender", "Salão", "Cabelereira", "Celebrante"]

def preprocess_services(df):
    for service in services:
        df[service] = df['Quais serviços você pretende contratar?'].apply(lambda x: 1 if service in str(x) else 0)
    df.drop(columns=['Quais serviços você pretende contratar?'], inplace=True)
    return df

train_df = preprocess_services(train_df)
val_df = preprocess_services(val_df)
test_df = preprocess_services(test_df)

# Encode categorical columns
categorical_columns = ['Qual será a cidade?', 'Em que época do ano vocês se casarão?',
                       'Como você imagina o estilo do seu casamento?',
                       'Em qual período do dia será a cerimônia?',
                       'Qual o tipo de local você deseja para o casamento?',
                       'Vocês estão planejando uma lua de mel? Se sim, qual o destino?']

le = LabelEncoder()
for col in categorical_columns:
    for df in [train_df, val_df, test_df]:
        df[col] = le.fit_transform(df[col].astype(str))

# Normalize numerical columns
numerical_columns = ['Quantos convidados?', 'Qual é o orçamento planejado para o casamento?']
scaler = StandardScaler()
for df in [train_df, val_df, test_df]:
    df[numerical_columns] = scaler.fit_transform(df[numerical_columns])

# Categorize wedding size
def categorize_wedding_size(guests, budget):
    if guests < 100 or budget < 20000:
        return 0  # Small wedding
    elif 100 <= guests <= 300 or (20000 <= budget <= 50000):
        return 1  # Medium wedding
    else:
        return 2  # Big wedding

for df in [train_df, val_df, test_df]:
    df['wedding_size'] = df.apply(lambda row: categorize_wedding_size(row['Quantos convidados?'], row['Qual é o orçamento planejado para o casamento?']), axis=1)

# Prepare features (X) and target (y)
X_train = train_df.drop(columns=['wedding_size'])
y_train = train_df['wedding_size']

X_val = val_df.drop(columns=['wedding_size'])
y_val = val_df['wedding_size']

X_test = test_df.drop(columns=['wedding_size'])
y_test = test_df['wedding_size']

# Train Random Forest Classifier
rf_model = RandomForestClassifier(n_estimators=100, random_state=42)
rf_model.fit(X_train, y_train)

# Validate the model
val_predictions = rf_model.predict(X_val)
val_accuracy = accuracy_score(y_val, val_predictions)
print(f"Validation Accuracy: {val_accuracy * 100:.2f}%")

# Test the model
test_predictions = rf_model.predict(X_test)
test_accuracy = accuracy_score(y_test, test_predictions)
print(f"Test Accuracy: {test_accuracy * 100:.2f}%")

# Confusion Matrix
cm = confusion_matrix(y_test, test_predictions)
plt.figure(figsize=(8, 6))
sns.heatmap(cm, annot=True, fmt="d", cmap="Blues", xticklabels=["Small", "Medium", "Big"], yticklabels=["Small", "Medium", "Big"])
plt.ylabel('True Label')
plt.xlabel('Predicted Label')
plt.title('Confusion Matrix for Wedding Size Classification')
plt.show()

# --- User Input for New Prediction ---
# Gather user data
user_data = {
    "Quantos convidados?": float(input("Enter the number of guests: ")),
    "Qual é o orçamento planejado para o casamento?": float(input("Enter the planned budget: ")),
    "Terá religioso?": int(input("Will it have a religious ceremony? (1 for Yes, 0 for No): ")),
    "Terá festa?": int(input("Will it have a party? (1 for Yes, 0 for No): ")),
}

# Add services as binary inputs
for service in services:
    user_data[service] = int(input(f"Will you hire {service}? (1 for Yes, 0 for No): "))

# Encode categorical features
for col in categorical_columns:
    user_data[col] = le.transform([input(f"{col}: ")])

# Normalize numerical columns
for col in numerical_columns:
    user_data[col] = scaler.transform([[user_data[col]]])[0][0]

# Convert user input to DataFrame
user_df = pd.DataFrame([user_data])

# Predict the class
prediction = rf_model.predict(user_df)
classes = {0: "Small Wedding", 1: "Medium Wedding", 2: "Big Wedding"}
print(f"Predicted Wedding Size: {classes[prediction[0]]}")
