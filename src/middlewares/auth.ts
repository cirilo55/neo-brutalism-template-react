import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Verifica se o usuário está autenticado (exemplo: verifica um token nos cookies)
  const token = request.cookies.get('authToken');

  // Se o token não existir e a rota não for a de login, redirecione para a página de login
  if (!token && request.nextUrl.pathname !== '/login') {
    const loginUrl = new URL('/login', request.url);
    return NextResponse.redirect(loginUrl);
  }

  // Permite o acesso à rota
  return NextResponse.next();
}

// Configura as rotas onde o middleware será aplicado
export const config = {
  matcher: ['/((?!_next|static|favicon.ico).*)'], // Aplica o middleware a todas as rotas, exceto as estáticas
};