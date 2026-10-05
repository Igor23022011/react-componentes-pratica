import './App.css'
import Titulo from './components/Titulo'
import Aluno from './components/Aluno'
import Nota from './components/Nota'
import Produtos from './components/Produtos' 


function App() {

  return (
    <>
      <Titulo/>

      <Aluno nome = "Carlos" turma = "DESI"/>
      <Aluno nome = "Bruno" turma = "DESI"/>
      <Aluno nome = "Gustavo" turma = "DESI"/>

      <Nota disciplina = "React" nota = "8.5"/>
      <Nota disciplina = "React" nota = "5.5"/>
      <Nota disciplina = "React" nota = "8.0"/>

      <Produtos nome = "LightStick" descricao = "Objeto colecionável usado em shows." preco = "R$150.00" disponivel = "false"/>
      <Produtos nome = "ActionFigure" descricao = "Objeto colecionável para decoração." preco = "R$150.00" disponivel = "true"/>
      <Produtos nome = "Estante" descricao = "Objeto usado para colocar decoração ou itens importantes" preco = "R$150.00" disponivel = "true"/>
      <Produtos nome = "Prendedor de cabelo" descricao = "Objeto usado para amarrar o cabelo" preco = "R$10.00" disponivel= "true"/>
      </>
  )
}

export default App
