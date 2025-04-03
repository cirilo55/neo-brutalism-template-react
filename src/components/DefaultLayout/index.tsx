import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { LayoutWrapper, Sidebar, Header, Content, SidebarItem, HeaderTitle, IconBox, StageWrapper } from './styles';
import { FiClock, FiUsers, FiCalendar, FiAlertCircle } from 'react-icons/fi';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const router = useRouter(); // Hook para obter a rota atual

  return (
    <LayoutWrapper>
      <Sidebar>
        <IconBox>RH</IconBox>
        <SidebarItem className={router.pathname === '/batidas' ? 'active' : ''}>
          <Link href="/batidas">   
              <FiClock />
              <span>Batidas</span>      
          </Link>
        </SidebarItem>
        <SidebarItem className={router.pathname === '/ocorrencias' ? 'active' : ''}>
          <Link href="/ocorrencias">
              <FiAlertCircle />
              <span>Ocorrências</span>
          </Link>
        </SidebarItem>
        <SidebarItem className={router.pathname === '/funcionarios' ? 'active' : ''}>
          <Link href="/funcionarios">
              <FiUsers />
              <span>Funcionários</span>
          </Link>
        </SidebarItem>
        <SidebarItem className={router.pathname === '/jornadas' ? 'active' : ''}>
          <Link href="/jornadas">
              <FiCalendar />
              <span>Jornadas</span>
            
          </Link>
        </SidebarItem>
      </Sidebar>
      <StageWrapper>
        <Header>
          <HeaderTitle>Dashboard</HeaderTitle>
        </Header>
        <Content>{children}</Content>
      </StageWrapper>
    </LayoutWrapper>
  );
}