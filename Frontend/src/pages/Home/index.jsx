import './style.css'
import Delete from '../../assets/Delete.svg'
import Pencil from '../../assets/Pencil.svg'
import Footer from '../../components/Footer.jsx'
import Header from '../../components/Header.jsx'

function Home() {

  const users = [{
    id: '0',
    nome: 'Isis',
    sobrenome: 'Marieli',
    email: ' Isismarieli1@gmail.com',
    setor: ' TI(Desenvolvimento)'
  },
  {
    id: '1',
    nome: 'Jéssica',
    sobrenome: 'Nicole',
    email: ' Jessicancl@gmail.com',
    setor: ' Administração'
  },
  ]

  return (
    <>
      <Header />
      <div className='container'>
        <form>
          <h1>Cadastro de Usuários</h1>
          <input name='nome' type='text' placeholder='Nome' />
          <input name='sobrenome' type='text' placeholder='Sobrenome' />
          <input name='email' type='email' placeholder='Email' />
          <input name='senha' type='password' placeholder='Senha' />
          <select>
            <option selected value="Setor">Setor</option>
            <option value="TI(IA)">TI (IA)</option>
            <option value="TI(DESENVOLVIMENTO)">TI (Desenvolvimento)</option>
            <option value="ADMINISTRACAO">Administração</option>
            <option value="COMERCIAL">Comercial</option>
            <option value="FINANCEIRO">Financeiro</option>
            <option value="MARKETING">Marketing</option>
            <option value="RECURSOS_HUMANOS">Recursos Humanos</option>
            <option value="OPERACOES">Operações</option>
            <option value="PROJETOS">Projetos</option>
            <option value="SUPORTE_TECNICO">Suporte Técnico</option>
            <option value="SEGURANCA_ELETRONICA">Segurança Eletrônica</option>
            <option value="LOGISTICA">Logística</option>
            <option value="COMPRAS">Compras</option>
            <option value="JURIDICO">Jurídico</option>
            <option value="INFRAESTRUTURA">Infraestrutura</option>
            <option value="INOVACAO">Inovação</option>
            <option value="ENGENHARIA">Engenharia</option>
            <option value="ATENDIMENTO_CLIENTE">Atendimento ao Cliente</option>

          </select>
          <button type='button'>Cadastrar</button>
        </form>

        <div className="cards-container">
          {users.map((user) => (
            <div key={user.id} className='card'>
              <div>
                <p>Nome: <span>{user.nome} {user.sobrenome} </span></p>
                <p>Email: <span>{user.email}</span></p>
                <p>Setor:<span>{user.setor}</span></p>
              </div>
              <button className='button-delete'>
                <img src={Delete} alt="delete" />
              </button>
              <button className='button-edit'>
                <img src={Pencil} alt="Pencil" />
              </button>
            </div>
          ))}
        </div>

        <Footer />
      </div>
    </>
  )
}

export default Home
