import { NextResponse } from 'next/server';

export async function POST() {
  return NextResponse.json({
    message: 'Recruitment registration is handled through the Google Form link on the page.',
  });
}
