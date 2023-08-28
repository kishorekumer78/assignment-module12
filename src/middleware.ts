import { NextRequest, NextResponse } from 'next/server';

export default function middleware(request: NextRequest) {
	const reqHeaders = new Headers(request.headers);
	if (request.nextUrl.pathname.startsWith('/api/seed')) {
		// const token = reqHeaders.get('Authorization');
		// console.log(token);
		// reqHeaders.set('Authorization', `Bearer ${token}`);
		console.log('--middleware', reqHeaders.get('Authorization'));
	}
	const response = NextResponse.next({
		request: { headers: reqHeaders }
	});
	response.headers.append('Access-Control-Allow-Origin', '*');

	return response;
}

// export const config = {
// 	matcher: '/api/seed'
// };
