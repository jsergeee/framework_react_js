import React, { useState } from "react";
import { TextField, Box, Typography } from "@mui/material";

const TemperatureConverter = () => {
  const [celsius, setCelsius] = useState("");
  const [fahrenheit, setFahrenheit] = useState("");

  // Функция для обработки изменений в поле Цельсий
  const handleCelsiusChange = (event) => {
    const value = event.target.value;
    setCelsius(value);
    setFahrenheit(value ? (value * 9) / 5 + 32 : ""); // Конвертация в Фаренгейт
  };

  // Функция для обработки изменений в поле Фаренгейт
  const handleFahrenheitChange = (event) => {
    const value = event.target.value;
    setFahrenheit(value);
    setCelsius(value ? ((value - 32) * 5) / 9 : ""); // Конвертация в Цельсий
  };

  return (
    <Box sx={{ marginBottom: 4 }}>
      <Typography variant="h4" gutterBottom>
        Температурный конвертер
      </Typography>
      <TextField
        label="Цельсий"
        value={celsius}
        onChange={handleCelsiusChange}
        type="number"
        variant="outlined"
        sx={{ marginRight: 2 }}
      />
      <TextField
        label="Фаренгейт"
        value={fahrenheit}
        onChange={handleFahrenheitChange}
        type="number"
        variant="outlined"
      />
    </Box>
  );
};

export default TemperatureConverter;
