import { NextResponse, type NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  const token = request.cookies.get('admin-auth-token')?.value;
  if (!token) {
    return NextResponse.json({ error: 'Unauthorized: Missing authentication token.' }, { status: 401 });
  }

  return NextResponse.json({ applications: [] });
}
