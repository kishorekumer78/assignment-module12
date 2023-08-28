import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
	const response = NextResponse.redirect(new URL('/about', request.url));

	response.cookies.set({
		name: 'theme',
		value: 'dark',
		expires: new Date(2023, new Date().getMonth(), new Date().getDate(), new Date().getHours() + 3, 0, 0),
		path: '/',
		secure: true,
		httpOnly: true,
		sameSite: 'strict'
	});

	return response;
}
