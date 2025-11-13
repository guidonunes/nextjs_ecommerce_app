import { NextResponse } from "next/server";


export async function GET() {
  try {
    const response = await fetch(`${ process.env.NEXT_PUBLIC_API_URL}/api/produtos`);
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Erro ao buscar produtos:', error);
    return NextResponse.json({ message: 'Erro ao buscar produtos' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const response = await fetch(`${ process.env.NEXT_PUBLIC_API_URL}/api/produtos`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Erro ao criar produto:', error);
    return NextResponse.json({ message: 'Erro ao criar produto' }, { status: 500 });
  }
}
