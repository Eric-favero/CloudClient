// src/components/Sidebar.js
import React from 'react';
import * as C from './styles';
import { useUser } from '../../../User.contex';

const Sidebar = () => {
    const { user } = useUser();

  return (
    <C.SidebarContainer>
        <C.SidebarHeader></C.SidebarHeader>
      <C.SidebarItem to="/Clientes">Clientes</C.SidebarItem>
      <C.SidebarItem to="/financeiro">Financeiro</C.SidebarItem>
      <C.SidebarItem to="/agendamentos">Agendamentos</C.SidebarItem>
    </C.SidebarContainer>
  );
};

export default Sidebar;
