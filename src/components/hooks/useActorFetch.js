import { useState, useEffect, useCallback } from 'react';
import { API_URL, API_KEY } from '../../config';
import axios from 'axios';

export const useActorFetch = (actorId) => {
	
	const [state, setState] = useState({ })
	const [loading, setLoading] = useState(true); 
	const [error, setError] = useState(false); 
	
	const fetchActorData = useCallback(async () => {
		setError(false);
		setLoading(true);

		try {
			const endpoint = `${API_URL}person/${actorId}?api_key=${API_KEY}`
			const { data } = await axios.get(endpoint);
			console.log(data)

			const creditsEndpoint = `${API_URL}person/${actorId}/movie_credits?api_key=${API_KEY}`
			const creditsResults =  await axios.get(creditsEndpoint);
			console.log(creditsResults.data)

			// const directors = creditsResults.data.crew.filter(
			// 	(member) => member.job === 'Director'
			// )

			setState({
				...data,
				credits: creditsResults.data.cast
			})
			
		} catch (error) {
			setError(true);
			
		}
		setLoading(false);

	}, [actorId]) 

	useEffect(() => {
		fetchActorData()
	}, [fetchActorData])

	return [ state, loading, error ]
}
