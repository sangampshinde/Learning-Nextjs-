import { NextResponse } from 'next/server'
import { users } from '../utils/db'

export async function GET(){
    const data= users;
    return NextResponse.json(data,{ status:200 });
    
}

export async function POST(){
    return NextResponse.json({
        result:'hello'
    })
    
}
