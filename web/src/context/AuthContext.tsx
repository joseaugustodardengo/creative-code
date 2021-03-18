import React, { createContext, useCallback, useState } from 'react';
import { UsuarioProps } from '../components/Sidebar'
import api from '../services/api';
interface AuthState {
  token: string;
  usuario: UsuarioProps;
}
interface LogarCredenciais {
  email: string;
  senha: string;
}
interface AuthContextData {
  usuario: UsuarioProps;
  logar(credenciais: LogarCredenciais): Promise<void>;
  deslogar(): void;
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@CreativeCode:token')
    const usuario = localStorage.getItem('@CreativeCode:usuario')

    if (token && usuario) {
      return { token, usuario: JSON.parse(usuario) }
    }

    return {} as AuthState;
  });

  const logar = useCallback(async ({ email, senha }) => {
    const response = await api.post('sessao', {
      email,
      senha
    })

    const { token, usuario } = response.data;

    localStorage.setItem('@CreativeCode:token', token)
    localStorage.setItem('@CreativeCode:usuario', JSON.stringify(usuario))

    setData({ token, usuario })
  }, [])

  const deslogar = useCallback(() => {
    localStorage.removeItem('@CreativeCode:token')
    localStorage.removeItem('@CreativeCode:usuario')

    setData({} as AuthState)
  }, [])

  return (
    <AuthContext.Provider value={{ usuario: data.usuario, logar, deslogar }}>
      {children}
    </AuthContext.Provider>
  )
}
