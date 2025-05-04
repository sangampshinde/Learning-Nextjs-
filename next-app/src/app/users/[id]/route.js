import { NextResponse } from 'next/server'
import { users } from '@/app/utils/db';

export async function GET(request,{ params }){
    

    const id = parseInt(params.id);

    if (isNaN(id) || id < 0 || id >= users.length){
        return NextResponse.json({ error: 'User not found' }, { status: 404 })
    }

    const user = users[id];
    return NextResponse.json(user, { status: 200 })

}