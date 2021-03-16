import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';
import AppError from '../errors/AppError';
import authConfig from '../config/auth';

interface TokenPayload {
  iat: number;
  exp: number;
  sub: string;
}

export default function garantirAutenticado(request: Request, response: Response, next: NextFunction): void {

  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppError('JWT token ausente.', 401)
  }

  const [, token] = authHeader.split(' ');

  try {
    const decodificado = verify(token, authConfig.jwt.secret);

    const { sub } = decodificado as TokenPayload;

    request.usuario = {
      id: sub
    }

    return next();
  } catch {
    throw new AppError('JWT token inválido.', 401)
  }


}