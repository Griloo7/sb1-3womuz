import React from 'react';
import { Trophy, Users, TrendingUp } from 'lucide-react';

interface JogoCardProps {
  titulo: string;
  descricao: string;
  jogadoresOnline: number;
  maiorGanho: number;
  imagem: string;
}

export function JogoCard({ titulo, descricao, jogadoresOnline, maiorGanho, imagem }: JogoCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-105">
      <div
        className="h-48 bg-cover bg-center"
        style={{ backgroundImage: `url(${imagem})` }}
      />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{titulo}</h3>
        <p className="text-gray-600 mb-4">{descricao}</p>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center space-x-2 text-gray-700">
            <Users size={18} />
            <span>{jogadoresOnline} online</span>
          </div>
          <div className="flex items-center space-x-2 text-green-600">
            <Trophy size={18} />
            <span>R$ {maiorGanho.toFixed(2)}</span>
          </div>
        </div>
        
        <button className="mt-4 w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition-colors flex items-center justify-center space-x-2">
          <TrendingUp size={18} />
          <span>Jogar Agora</span>
        </button>
      </div>
    </div>
  );
}