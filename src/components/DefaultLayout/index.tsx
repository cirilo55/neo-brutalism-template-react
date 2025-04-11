import React, { useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { LayoutWrapper, Sidebar, Header, Content, SidebarItem, HeaderTitle, IconBox, StageWrapper, BackIcon } from './styles';
import { FiClock, FiUsers, FiCalendar, FiAlertCircle, FiLogOut, FiFileText, FiAlertTriangle, FiArrowLeft } from 'react-icons/fi';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  onBack?: () => void;
  
}

export default function Layout({ onBack, children, title }: LayoutProps) {
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
    document.cookie = 'authToken=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT';
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
        <SidebarItem className={router.pathname === '/atestados' ? 'active' : ''}>
          <Link href="/atestados">
              <FiFileText />
              <span>Atestados</span>
            
          </Link>
        </SidebarItem>
        <SidebarItem className={router.pathname === '/advertencias' ? 'active' : ''}>
          <Link href="/advertencias">
              <FiAlertTriangle />
              <span>Advertencias</span>
            
          </Link>
        </SidebarItem>

        <SidebarItem onClick={handleLogout} style={{ cursor: 'pointer', marginTop: 'auto' }}>
          <FiLogOut />
          <span>Logout</span>
        </SidebarItem>

      </Sidebar>
      <StageWrapper>
        <Header>
        {onBack && (
            <BackIcon onClick={onBack}>
              <FiArrowLeft />
            </BackIcon>
          )}

          <HeaderTitle>{title}</HeaderTitle>
        </Header>
        <Content>{children}</Content>
      </StageWrapper>
    </LayoutWrapper>
  );
}