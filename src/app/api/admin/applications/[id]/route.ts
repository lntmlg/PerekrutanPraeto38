import { NextResponse, type NextRequest } from 'next/server';

export async function PUT(request: NextRequest) {
  const token = request.cookies.get('admin-auth-token')?.value;
  if (!token) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  return NextResponse.json({ message: 'Application updates are disabled for this deployment.' });
}

export async function DELETE(request: NextRequest) {
  const token = request.cookies.get('admin-auth-token')?.value;
  if (!token) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  return NextResponse.json({ message: 'Application deletion is disabled for this deployment.' });
}
