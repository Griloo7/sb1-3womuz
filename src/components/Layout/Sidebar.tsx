import React from 'react';
import { Home, GamepadIcon, History, Settings, Users } from 'lucide-react';

export function Sidebar() {
  return (
    <aside className="bg-gray-900 text-gray-100 w-64 min-h-screen hidden lg:block">
      <div className="p-4">
        <nav className="space-y-2">
          <MenuItem icon={<Home size={20} />} text="Início" active />
          <MenuItem icon={<GamepadIcon size={20} />} text="Jogos" />
          <MenuItem icon={<History size={20} />} text="Histórico" />
          <MenuItem icon={<Users size={20} />} text="Ranking" />
          <MenuItem icon={<Settings size={20} />} text="Configurações" />
        </nav>
      </div>
    </aside>
  );
}

function MenuItem({ icon, text, active = false }) {
  return (
    <a
      href="#"
      className={`flex items-center space-x-3 p-3 rounded-lg transition-colors ${
        active
          ? 'bg-gray-800 text-white'
          : 'text-gray-400 hover:bg-gray-800 hover:text-white'
      }`}
    >
      {icon}
      <span className="font-medium">{text}</span>
    </a>
  );
}