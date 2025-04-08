import React, { useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { LayoutWrapper, Sidebar, Header, Content, SidebarItem, HeaderTitle, IconBox, StageWrapper } from './styles';
import { FiClock, FiUsers, FiCalendar, FiAlertCircle, FiLogOut } from 'react-icons/fi';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
}

export default function Layout({ children, title }: LayoutProps) {
  const router = useRouter(); // Hook para obter a rota atual

  useEffect(() => {
    const token = document.cookie
      .split('; ')
      .find((row) => row.startsWith('authToken='))
      ?.split('=')[1];

    if (!token) {
      router.push('/login');
    }
  }, [router]);

  const handleLogout = () => {
    // Remove o token dos cookies
    document.cookie = 'authToken=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT';

    // Redireciona para a página de login
    router.push('/login');
  };

  return (
    <LayoutWrapper>
      <Sidebar>
        <IconBox></IconBox>
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

        <SidebarItem onClick={handleLogout} style={{ cursor: 'pointer', marginTop: 'auto' }}>
          <FiLogOut />
          <span>Logout</span>
        </SidebarItem>

      </Sidebar>
      <StageWrapper>
        <Header>
          <HeaderTitle>{title}</HeaderTitle>
        </Header>
        <Content>{children}</Content>
      </StageWrapper>
    </LayoutWrapper>
  );
}