import { NextRequest, NextResponse } from 'next/server';
import axiosInstance from '@/utils/axios';
import { Plant } from '@/types/plant';

const TREFLE_API_URL = process.env.TREFLE_ENDPOINT + '/plants?page=1';
const TREFLE_API_TOKEN = process.env.TREFLE_TOKEN;

export async function GET(req: NextRequest) {
  try {
    const response = await axiosInstance.get(`${TREFLE_API_URL}&token=${TREFLE_API_TOKEN}`);
    const data = response.data;

    if (data && data.data) {
      const plants: Plant[] = data.data;
      return NextResponse.json(plants);
    } else {
      return NextResponse.json({ error: 'Invalid data format' }, { status: 500 });
    }
  } catch (error) {
    console.error('Error fetching plants from Trefle.io:', error);
    return NextResponse.json({ error: 'Error fetching plants' }, { status: 500 });
  }
}