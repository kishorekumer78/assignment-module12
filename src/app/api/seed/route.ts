import { headers } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
	//const reqHeaders = new Headers(request.headers); this works both in middle ware and route
	const headerList = headers(); // works only in route & server component
	const token = headerList.get('Authorization');
	if (token) {
		const response = NextResponse.json({
			message: 'Welcome to our API!',
			version: '1.0',
			success: true
		});
		response.headers.set('Authorization', `Bearer ${token}`);
		return response;
	} else {
		return NextResponse.json({ success: false });
	}
}
