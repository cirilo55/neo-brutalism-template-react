import styled from 'styled-components';

export const LayoutWrapper = styled.div`
  display: flex;
  height: 100vh;
`;

export const Sidebar = styled.div`
  width: 250px;
  background-color: black;
  color: white;
  display: flex;
  flex-direction: column;
  padding: 20px;
  box-shadow: 4px 0 0 #c585e0; /* Efeito de borda brutalista */
`;

export const SidebarItem = styled.div`
  margin-bottom: 20px;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translateX(4px); /* Leve movimento ao passar o mouse */
  }
`;

export const Header = styled.div`
  height: 60px;
  background-color: #f5f5f5;
  display: flex;
  align-items: center;
  padding: 0 20px;
  box-shadow: 0 4px 0 #c585e0; /* Efeito de borda brutalista */
`;

export const HeaderTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
`;

export const Content = styled.div`
  padding: 20px;
  background-color: #fff;
  height: calc(100vh - 60px); /* Altura total menos o cabeçalho */
  overflow-y: auto;
  box-shadow: 4px 4px 0 #c585e0; /* Efeito de borda brutalista */
`;