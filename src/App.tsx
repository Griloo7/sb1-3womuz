import React from 'react';
import { Navbar } from './components/Layout/Navbar';
import { Sidebar } from './components/Layout/Sidebar';
import { JogoCard } from './components/Dashboard/JogoCard';

function App() {
  const jogos = [
    {
      titulo: 'Aviator',
      descricao: 'Aposte e observe o multiplicador subir! Retire seus ganhos antes que o avião decole.',
      jogadoresOnline: 142,
      maiorGanho: 5420.50,
      imagem: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80',
    },
    {
      titulo: 'Mines',
      descricao: 'Encontre as gemas e evite as minas. Quanto mais longe você for, maior será seu prêmio!',
      jogadoresOnline: 89,
      maiorGanho: 3150.75,
      imagem: 'https://images.unsplash.com/photo-1605870445919-838d190e8e1b?auto=format&fit=crop&q=80',
    },
    {
      titulo: 'Crash',
      descricao: 'Observe o multiplicador subir e retire seus ganhos antes que tudo desabe!',
      jogadoresOnline: 234,
      maiorGanho: 8750.25,
      imagem: 'https://images.unsplash.com/photo-1579547621113-e4bb2a19bdd6?auto=format&fit=crop&q=80',
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-8">
          <h2 className="text-2xl font-bold mb-6">Jogos Disponíveis</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jogos.map((jogo) => (
              <JogoCard key={jogo.titulo} {...jogo} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;