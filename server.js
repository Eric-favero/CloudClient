// server.js
const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express(); // Corrigir a ordem, app deve ser inicializado antes de usá-lo
app.use(cors()); // Corrigir a sintaxe de app.use()
app.use(express.json());

const con = mysql.createConnection({
  host: 'localhost', 
  user: 'root',
  password: '0801eca02',
  database: 'mysql'
});

// Conectar ao banco de dados MySQL
con.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err.stack);
    return;
  }
  console.log('Conectado ao banco de dados como id', con.threadId);
  
});

app.put('/clientes/:id', (req, res) => {
  const { id } = req.params;
  const { Nome, Telefone, Endereço, Apartamento, Numero } = req.body;

  if (!Nome) {
    return res.status(400).send('Campo Nome é obrigatório!');
  }

  const sql = `
    UPDATE clientes
    SET Nome = ?, Telefone = ?, Endereço = ?, Apartamento = ?, Numero = ?
    WHERE id = ?
  `;
  
  con.query(sql, [Nome, Telefone, Endereço, Apartamento, Numero, id], (err, result) => {
    if (err) {
      console.error('Erro ao atualizar cliente:', err);
      return res.status(500).send('Erro ao atualizar cliente');
    }

    if (result.affectedRows === 0) {
      return res.status(404).send('Cliente não encontrado');
    }

    res.send('Cliente atualizado com sucesso!');
  });
});

app.get('/clientes', (req, res) => {
  const query = `
    SELECT id, Nome, Telefone, Endereço, Apartamento, Numero, data_cadastro
    FROM clientes ORDER BY id DESC
  `;

  con.query(query, (err, result) => {
    if (err) {
      console.error('Erro ao consultar clientes:', err);
      res.status(500).send('Erro ao consultar clientes');
    } else {
      res.json(result); // Retorna os dados em formato JSON
    }
  });
});

// Rota POST para adicionar um novo cliente
app.post('/clientes', (req, res) => {
  const { nome, telefone, endereco, numero, apartamento } = req.body;

  if (!nome) {
    return res.status(400).send('Campo Nome é obrigatório!');
  }


  const telefoneValue = telefone.trim() === '' ? null : telefone;
  const numeroValue = numero.trim() === '' ? null : numero;
  const apartamentoValue = apartamento.trim() === '' ? null : apartamento;

  const sql = 'INSERT INTO clientes (Nome, Telefone, Endereço, Apartamento, Numero) VALUES (?, ?, ?, ?, ?)';
  
  con.query(sql, [nome, telefoneValue, endereco, apartamentoValue, numeroValue], (err, result) => {
    if (err) {
      console.error('Erro ao inserir cliente:', err);
      return res.status(500).send('Erro ao inserir cliente');
    }

    res.status(201).send('Cliente adicionado com sucesso!');
  });
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
