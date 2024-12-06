import React from 'react';
import { Menu, User, LogOut } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <button className="lg:hidden">
            <Menu size={24} />
          </button>
          <h1 className="text-xl font-bold">CryptoGames</h1>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="bg-gray-700 rounded-lg px-4 py-2">
            <span className="text-green-400 font-semibold">R$ 1.000,00</span>
          </div>
          
          <div className="flex items-center space-x-2">
            <User size={20} />
            <span className="hidden md:inline">Minha Conta</span>
          </div>
          
          <button className="flex items-center space-x-2 text-red-400 hover:text-red-300">
            <LogOut size={20} />
            <span className="hidden md:inline">Sair</span>
          </button>
        </div>
      </div>
    </nav>
  );
}