import { useState, useEffect, useCallback } from 'react';
import { API_URL, API_KEY } from '../../config';
import axios from 'axios';

export const useMovieFetch = (movieId) => {
	
	const [state, setState] = useState({ })
	const [loading, setLoading] = useState(true); 
	const [error, setError] = useState(false); 
	
	const fetchData = useCallback(async () => {
		setError(false);
		setLoading(true);

		try {
			const endpoint = `${API_URL}movie/${movieId}?api_key=${API_KEY}`
			const { data } = await axios.get(endpoint);
			console.log(data)
			const creditsEndpoint = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`
			const creditsResults =  await axios.get(creditsEndpoint);
			console.log(creditsResults.data)

			const directors = creditsResults.data.crew.filter(
				(member) => member.job === 'Director'
			)

			setState({
				...data,
				actors:creditsResults.data.cast,
				directors,

			})
			
		} catch (error) {
			setError(true);
			
		}
		setLoading(false);

	}, [movieId]) 

	useEffect(() => {
		fetchData()
	}, [fetchData])

	return [ state, loading, error ]
}
