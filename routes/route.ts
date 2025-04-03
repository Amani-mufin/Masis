import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

export async function POST(request: Request) {
  try {
    const { email, timestamp } = await request.json();
    
    const csvFilePath = path.join(process.cwd(), 'public', 'emails', 'emails.csv');

    // Ensure the directory exists
    await fs.mkdir(path.join(process.cwd(), 'public', 'emails'), { recursive: true });

    // Prepare CSV content
    const csvEntry = `${email},${timestamp}\n`;

    // Append to the CSV file
    await fs.appendFile(csvFilePath, csvEntry);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error saving email:', error);
    return NextResponse.json({ success: false, error: 'Failed to save email' }, { status: 500 });
  }
}