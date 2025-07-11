// pages/index.tsx
import React, { useState, useEffect } from 'react';
import { FaExchangeAlt } from 'react-icons/fa';
import Chart from 'chart.js/auto';

const TOKEN_ICON = 'https://assets-cdn.trustwallet.com/blockchains/binance/assets/USDT/logo.png';
const TOKEN_SYMBOL = 'USDT';
const FIXED_RATE = 1;

export default function Home() {
  const [usd, setUsd] = useState(100);
  const [token, setToken] = useState(100);

  useEffect(() => {
    const ctx = document.getElementById('chart') as HTMLCanvasElement;
    if (!ctx) return;
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['5m', '4m', '3m', '2m', 'Now'],
        datasets: [{
          label: 'Simulated USDZ Price',
          data: [1.01, 0.99, 1.00, 1.02, 1.00],
          borderColor: 'lime',
          tension: 0.3
        }]
      }
    });
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-6">
      <h1 className="text-2xl font-bold mb-4">USDT.z DEX Simulator</h1>
      <div className="bg-gray-800 p-6 rounded-lg w-full max-w-md shadow-md">
        <div className="flex items-center mb-4">
          <img src={TOKEN_ICON} alt="icon" className="w-8 h-8 mr-2" />
          <span className="text-lg font-semibold">{TOKEN_SYMBOL} / USD</span>
        </div>

        <label className="text-sm">Enter USD</label>
        <input
          type="number"
          value={usd}
          o
