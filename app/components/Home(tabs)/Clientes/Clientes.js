import React, { useState, useEffect } from 'react';
import * as C from './styles';
import Sidebar from '../Sidebar/Sidebar';

const ClientGrid = () => {
  const [clients, setClients] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [newClient, setNewClient] = useState({
    nome: '',
    telefone: '',
    endereco: '',
    apartamento: '',
    numero: '',
    data_cadastro: ''
  });
  const [searchTerm, setSearchTerm] = useState('');
  const [searchType, setSearchType] = useState('');
  const [isModalEdit, setModalEdit] = useState(false);
  const [temporaryPasteValue, setTemporaryPasteValue] = useState('');
  const [filteredClients, setFilteredClients] = useState([]);
  const [selectedClient, setSelectedClient] = useState({
    nome: '',
    telefone: '',
    endereco: '',
    apartamento: '',
    numero: '',
    data_cadastro: ''
  });

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModalEdit = () => setModalEdit(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewClient({ ...newClient, [name]: value });
  };

  const handleInputEdit = (e) => {
    const { name, value } = e.target;
    setSelectedClient({ ...selectedClient, [name]: value });
  };

  const formatDateTime = (dateTime) => {
    const date = new Date(dateTime);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return `${day}/${month}/${year} ${hours}:${minutes}`;
  };

  const handleAddClient = async () => {
    const now = new Date();
    const formattedDate = formatDateTime(now);

    try {
      const response = await fetch('http://localhost:3000/clientes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...newClient, data_cadastro: formattedDate }),
      });

      if (response.ok) {
        alert('Cliente adicionado com sucesso!');
        fetchClients(); // Recarrega a lista de clientes após adicionar
        setNewClient({
          nome: '',
          telefone: '',
          endereco: '',
          apartamento: '',
          numero: '',
          data_cadastro: ''
        });
        handleCloseModal();
        setTemporaryPasteValue('');
      } else {
        alert('Erro ao adicionar cliente');
      }
    } catch (error) {
      console.error('Erro ao adicionar cliente:', error);
      alert('Erro ao adicionar cliente');
    }
  };

  const handleUpdateClient = async () => {
    try {
      const response = await fetch(`http://localhost:3000/clientes/${selectedClient.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(selectedClient),
      });

      if (response.ok) {
        alert('Cliente atualizado com sucesso!');
        fetchClients();
        handleCloseModalEdit();
      } else {
        alert('Erro ao atualizar cliente');
      }
    } catch (error) {
      console.error('Erro ao atualizar cliente:', error);
      alert('Erro ao atualizar cliente');
    }
  };

  const fetchClients = async () => {
    try {
      const response = await fetch('http://localhost:3000/clientes');
      if (response.ok) {
        const data = await response.json();
        setClients(data);
        setFilteredClients(data);
      } else {
        console.error('Erro ao buscar clientes');
      }
    } catch (error) {
      console.error('Erro ao buscar clientes:', error);
    }
  };

  useEffect(() => {
    fetchClients();
  }, []);

  useEffect(() => {
    if (searchTerm && searchType) {
      const filtered = clients.filter((client) => {
        const value = client[searchType];
        if (typeof value === 'number') {
          return value.toString().includes(searchTerm);
        } else if (typeof value === 'string') {
          return value.toLowerCase().includes(searchTerm.toLowerCase());
        }
        return false;
      });
      setFilteredClients(filtered);
    } else {
      setFilteredClients(clients);
    }
  }, [searchTerm, searchType, clients]);

  const handleSearchTypeChange = (e) => {
    setSearchType(e.target.value);
  };

  const handleClientClick = (client) => {
    setSelectedClient(client);
    setModalEdit(true);
  };

  const handleSearchTermChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleCopy = (value) => {
    navigator.clipboard.writeText(value);
    alert('Texto copiado!');
  };

  const handlePaste = (field) => {
    navigator.clipboard.readText().then((text) => {
      setSelectedClient((prevClient) => ({ ...prevClient, [field]: text }));
    });
  };

  const handlePasteNew = (field) => {
    navigator.clipboard.readText().then((text) => {
      setTemporaryPasteValue(text);
      setNewClient((prevClient) => ({ ...prevClient, [field]: text }));
    });
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setTemporaryPasteValue('');
    setNewClient({
      nome: '',
      telefone: '',
      endereco: '',
      apartamento: '',
      numero: '',
      data_cadastro: ''
    });
  };

  return (
    <C.Container>
      <Sidebar />
      <C.GridContainer>
        <C.StyledDivSearch>
          <C.ModalButton onClick={handleOpenModal}>Novo</C.ModalButton>
          <C.Dropdown value={searchType} onChange={handleSearchTypeChange}>
            <option value="" disabled hidden>Filtrar Por:</option>
            <option value="Nome">Nome</option>
            <option value="Telefone">Telefone</option>
          </C.Dropdown>
          <C.StyledSearch
            type="text"
            name="Search"
            placeholder={`Filtrar por: ${searchType ? searchType : ''}`}
            value={searchTerm}
            onChange={handleSearchTermChange}
            disabled={!searchType}
          />
        </C.StyledDivSearch>
        <C.Grid>
          <C.GridHeader>
            <tr>
              <th>Nome</th>
              <th>Telefone</th>
              <th>Endereço</th>
              <th>Apartamento</th>
              <th>Número</th>
              <th>Data de Cadastro</th>
            </tr>
          </C.GridHeader>
          <C.GridBody>
            {filteredClients.map((client, index) => (
              <tr key={index} onClick={() => handleClientClick(client)}>
                <td>{client.Nome}</td>
                <td>{client.Telefone}</td>
                <td>{client.Endereço}</td>
                <td>{client.Apartamento}</td>
                <td>{client.Numero}</td>
                <td>{formatDateTime(client.data_cadastro)}</td>
              </tr>
            ))}
          </C.GridBody>
        </C.Grid>
      </C.GridContainer>
      {isModalEdit && (
        <C.ModalOverlay>
          <C.ModalContent>
            <C.StyledH2>Editar Cliente</C.StyledH2>
            <C.ModalField>
              <C.ModalLabel>Nome</C.ModalLabel>
              <C.ModalGroup>
                <C.ModalInput
                  type="text"
                  name="Nome"
                  value={selectedClient?.Nome || ''}
                  onChange={handleInputEdit}
                />
                <C.StyledCopy onClick={() => handleCopy(selectedClient?.Nome || '')} />
                <C.StyledPaste onClick={() => handlePaste('Nome')} />
              </C.ModalGroup>
            </C.ModalField>
            <C.ModalField>
              <C.ModalLabel>Telefone</C.ModalLabel>
              <C.ModalGroup>
                <C.ModalInput
                  type="text"
                  name="Telefone"
                  value={selectedClient?.Telefone || ''}
                  onChange={handleInputEdit}
                />
                <C.StyledCopy onClick={() => handleCopy(selectedClient?.Telefone || '')} />
                <C.StyledPaste onClick={() => handlePaste('Telefone')} />
              </C.ModalGroup>
            </C.ModalField>
            <C.ModalField>
              <C.ModalLabel>Endereço</C.ModalLabel>
              <C.ModalGroup>
                <C.ModalInput
                  type="text"
                  name="Endereço"
                  value={selectedClient?.Endereço || ''}
                  onChange={handleInputEdit}
                />
                <C.StyledCopy onClick={() => handleCopy(selectedClient?.Endereço || '')} />
                <C.StyledPaste onClick={() => handlePaste('Endereço')} />
              </C.ModalGroup>
            </C.ModalField>
            <C.ModalField>
              <C.ModalLabel>Numero</C.ModalLabel>
              <C.ModalGroup>
                <C.ModalInput
                  type="text"
                  name="Numero"
                  value={selectedClient?.Numero || ''}
                  onChange={handleInputEdit}
                />
                <C.StyledCopy onClick={() => handleCopy(selectedClient?.Numero || '')} />
                <C.StyledPaste onClick={() => handlePaste('Numero')} />
              </C.ModalGroup>
            </C.ModalField>
            <C.ModalField>
              <C.ModalLabel>Apartamento</C.ModalLabel>
              <C.ModalGroup>
                <C.ModalInput
                  type="text"
                  name="Apartamento"
                  value={selectedClient?.Apartamento || ''}
                  onChange={handleInputEdit}
                />
                <C.StyledCopy onClick={() => handleCopy(selectedClient?.Apartamento || '')} />
                <C.StyledPaste onClick={() => handlePaste('Apartamento')} />
              </C.ModalGroup>
            </C.ModalField>
            <C.StyledDiv>
              <C.ModalButton onClick={handleUpdateClient}>Atualizar</C.ModalButton>
              <C.ModalButton onClick={handleCloseModalEdit}>Cancelar</C.ModalButton>
            </C.StyledDiv>
          </C.ModalContent>
        </C.ModalOverlay>
      )}
      {isModalOpen && (
        <C.ModalOverlay>
          <C.ModalContent>
            <C.StyledH2>Adicionar Cliente</C.StyledH2>
            <C.ModalField>
              <C.ModalLabel>Nome</C.ModalLabel>
              <C.ModalGroup>
                <C.ModalInput
                  type="text"
                  name="nome"
                  value={newClient.nome}
                  onChange={handleInputChange}
                />
                <C.StyledPaste onClick={() => handlePasteNew('nome')} />
              </C.ModalGroup>
            </C.ModalField>
            <C.ModalField>
              <C.ModalLabel>Telefone</C.ModalLabel>
              <C.ModalGroup>
                <C.ModalInput
                  type="text"
                  name="telefone"
                  value={newClient.telefone}
                  onChange={handleInputChange}
                />
                <C.StyledPaste onClick={() => handlePasteNew('telefone')} />
              </C.ModalGroup>
            </C.ModalField>
            <C.ModalField>
              <C.ModalLabel>Endereço</C.ModalLabel>
              <C.ModalGroup>
                <C.ModalInput
                  type="text"
                  name="endereco"
                  value={newClient.endereco}
                  onChange={handleInputChange}
                />
                <C.StyledPaste onClick={() => handlePasteNew('endereco')} />
              </C.ModalGroup>
            </C.ModalField>
            <C.ModalField>
              <C.ModalLabel>Numero</C.ModalLabel>
              <C.ModalGroup>
                <C.ModalInput
                  type="text"
                  name="numero"
                  value={newClient.numero}
                  onChange={handleInputChange}
                />
                <C.StyledPaste onClick={() => handlePasteNew('numero')} />
              </C.ModalGroup>
            </C.ModalField>
            <C.ModalField>
              <C.ModalLabel>Apartamento</C.ModalLabel>
              <C.ModalGroup>
                <C.ModalInput
                  type="text"
                  name="apartamento"
                  value={newClient.apartamento}
                  onChange={handleInputChange}
                />
                <C.StyledPaste onClick={() => handlePasteNew('apartamento')} />
              </C.ModalGroup>
            </C.ModalField>
            <C.StyledDiv>
              <C.ModalButton onClick={handleAddClient}>Adicionar</C.ModalButton>
              <C.ModalButton onClick={handleCloseModal}>Cancelar</C.ModalButton>
            </C.StyledDiv>
          </C.ModalContent>
        </C.ModalOverlay>
      )}
    </C.Container>
  );
};

export default ClientGrid;
