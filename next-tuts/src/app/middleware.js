// i dont know how it working

import { NextRequest, NextResponse } from 'next/server';

export function middleware() {
  console.log('Middleware executed');

  return NextResponse.next(); 
}