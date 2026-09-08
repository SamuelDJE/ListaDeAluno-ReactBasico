import './AlunoCard.css';

export default function AlunoCard({ nome, curso, presenca, alterarPresenca}) {
    return(
        <article className={`aluno-card ${presenca ? 'card-presente' : 'card-ausente'}`}>
            <div>
                <h2>{nome}</h2>
                <p>{curso}</p>
            </div>
            <div className='status'>
                <p>
                    Status:{''}
                    <strong>
                        {presenca ? 'Presente' : 'Ausente'}
                    </strong>
                </p>

                <button onClick={alterarPresenca}>
                    {presenca ? 'Marcar ausência' : 'Marcar presença'}
                </button>

            </div>
        </article>
    )
}