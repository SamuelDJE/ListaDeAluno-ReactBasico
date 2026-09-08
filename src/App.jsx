import { useState } from 'react';
import AlunoCard from './components/AlunoCard';
import './App.css';

export default function App() {
  const [alunos, setAlunos] = useState([
    { id: 1, nome: 'Ana Silva', curso: 'React Básico', presenca: false },
    { id: 2, nome: 'Pedro Santos', curso: 'React Básico', presenca: true },
    { id: 3, nome: 'Carlos Souza', curso: 'React Básico', presenca: false },
    { id: 4, nome: 'Fernanda Lima', curso: 'React Básico', presenca: true },
  ]);

  function alterarPresenca(id) {
    const alunosAtualizados = alunos.map((aluno) => {
      if (aluno.id === id) {
        return { ...aluno, presenca: !aluno.presenca };
      }
      return aluno;
    });

    setAlunos(alunosAtualizados);
  }

  const totalPresentes = alunos.filter((aluno) => aluno.presenca).length;
  const totalAusentes = alunos.filter((aluno) => !aluno.presenca).length;

  return (
    <main className='container'>
      <header className='cabecalho'>
        <h1>Chamada Fácil Biolab</h1>
        <p>Controle de presença - React Básico</p>
      </header>

      <section className='resumo'>
        <div className='resumo-card'>
          <span>Total</span>
          <strong>{alunos.length}</strong>
        </div>
        <div className='resumo-card-presente'>
          <span>Presentes</span>
          <strong>{totalPresentes}</strong>
        </div>
        <div className='resumo-card-ausente'>
          <span>Ausentes</span>
          <strong>{totalAusentes}</strong>
        </div>
      </section>

      <section className='lista-alunos'>
        {alunos.map((aluno) => (
          <AlunoCard
            key={aluno.id}
            nome={aluno.nome}
            curso={aluno.curso}
            presenca={aluno.presenca}
            alterarPresenca={() => alterarPresenca(aluno.id)}
          />
        ))}
      </section>
    </main>
  );
}