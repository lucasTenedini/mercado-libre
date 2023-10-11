import axios, { AxiosResponse } from 'axios';
import { ItemResponse, SearchResponse } from '../store/item/types';

const api = axios.create({
	baseURL: 'http://localhost:3001'
});

export const searchItems = async (query: string): Promise<SearchResponse> => {
	const response: AxiosResponse = await api.get(`/items?q=${query}`);
	return response.data;
};

export const findItem = async (itemId: string): Promise<ItemResponse> => {
	const response: AxiosResponse = await api.get(`/items/${itemId}`);

	return response.data;
};
