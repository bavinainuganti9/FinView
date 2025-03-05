import pandas as pd
from sklearn.preprocessing import StandardScaler
from sklearn.ensemble import RandomForestRegressor

def preprocess_data(file_path):
    df = pd.read_csv(file_path)
    df.fillna(df.mean(), inplace=True)
    scaler = StandardScaler()
    df_scaled = scaler.fit_transform(df.drop(columns=['target']))
    return df_scaled, df['target']

def train_predictive_model(file_path):
    X, y = preprocess_data(file_path)
    model = RandomForestRegressor(n_estimators=100, random_state=42)
    model.fit(X, y)
    return model

if __name__ == "__main__":
    model = train_predictive_model("financial_data.csv")
    print("Model trained successfully")
