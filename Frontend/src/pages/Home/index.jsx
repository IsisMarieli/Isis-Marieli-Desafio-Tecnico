import { useEffect, useState, useRef } from 'react'
import './style.css'
import Delete from '../../assets/Delete.svg'
import Pencil from '../../assets/Pencil.svg'
import Footer from '../../components/Footer.jsx'
import Header from '../../components/Header.jsx'
import api from '../../services/api'

function Home() {
  const [users, setUsers] = useState([]) // estado dos users
  const [editingUsers, setEditingUsers] = useState(null) // estado de editar users
  const [isEditUsers, setIsEditUsers] = useState(false) // estado de form de edição 

  const formRef = useRef() // direcionar ao form quando for editar

  // armazenar valor de entrada do form
  const inputNome = useRef()
  const inputSobrenome = useRef()
  const inputEmail = useRef()
  const inputSenha = useRef()
  const selectSetor = useRef()

  //função get aprensentar users 
  async function getUsers() {
    const usersFromAPI = await api.get('/usuarios')

    setUsers(usersFromAPI.data)
  }

  // função para criar users com (post)
  async function createUsers() {
    await api.post('/usuarios', {
      nome: inputNome.current.value,
      sobrenome: inputSobrenome.current.value,
      email: inputEmail.current.value,
      setor: selectSetor.current.value,
    })

    getUsers()
    clearForm()
  }

  // função para editar users com (put)
  async function editUsers() {
    await api.put(`/usuarios/${editingUsers.id}`, {
      nome: inputNome.current.value,
      sobrenome: inputSobrenome.current.value,
      email: inputEmail.current.value,
      setor: selectSetor.current.value,
    })

    getUsers()
    clearForm()

    setEditingUsers(null)
    setIsEditUsers(false)
  }

  async function startEditUsers(user) {
    setEditingUsers(user)
    setIsEditUsers(true)

    updateData(user)

    formRef.current.scrollIntoView()
  }


  // função para excluir users com (delete)
  async function deleteUsers(id) {
    await api.delete(`/usuarios/${id}`)

    getUsers()
  }

  // função para limpar os inputs
  function clearForm() {
    inputNome.current.value = ''
    inputSobrenome.current.value = ''
    inputEmail.current.value = ''
    inputSenha.current.value = ''
    selectSetor.current.value = 'Setor'
  }

  function updateData(user) {
    inputNome.current.value = user.nome
    inputSobrenome.current.value = user.sobrenome
    inputEmail.current.value = user.email
    selectSetor.current.value = user.setor
  }

  useEffect(() => {
    getUsers()
  }, [])

  return (
    <>
      <Header />
      <div className='container'>
        <form className='form-container' ref={formRef}>
          <h1>{isEditUsers ? 'Editar Usuário' : 'Cadastro de Usuários'}</h1>
          <input name='nome' type='text' placeholder='Nome' ref={inputNome} />
          <input name='sobrenome' type='text' placeholder='Sobrenome' ref={inputSobrenome} />
          <input name='email' type='email' placeholder='Email' ref={inputEmail} />
          <input name='senha' type='password' placeholder='Senha' ref={inputSenha} />
          <select ref={selectSetor}>
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
          {isEditUsers ? (
            <button className='buttonUpdate' type='button' onClick={editUsers}>Atualizar</button>
          ) : (
            <button className='buttonCreate' type='button' onClick={createUsers}>Cadastrar</button>
          )}

        </form>
      </div>

      {users.length > 0 ? (
        <div className='cards-title'>
          <h2>Usuários Recentes</h2>
        </div>
      ) : null}
      <div className='cards-container'>
        {users.map((user) => (
          <div key={user.id} className='card'>
            <div>
              <p>Nome: <span>{user.nome} {user.sobrenome} </span></p>
              <p>Email: <span>{user.email}</span></p>
              <p>Setor:<span>{user.setor}</span></p>
            </div>
            <button type='button' className='button-delete' onClick={() => deleteUsers(user.id)}>
              <img src={Delete} alt="delete" />
            </button>
            <button type='button' className='button-edit' onClick={() => startEditUsers(user)}>
              <img src={Pencil} alt="Pencil" />
            </button>
          </div>
        ))}
      </div>

      <Footer />
    </>
  )
}

export default Home
