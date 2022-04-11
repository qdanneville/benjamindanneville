import api from './api'
import { useQuery } from 'react-query'

const fetchPages = async () => {
    return await api
        .getEntries({
            content_type: "page" // only fetch blog post entry
        })
        .then(entries => entries);
}

const usePages = () => {
    return useQuery(['Pages'], () => fetchPages(), { keepPreviousData: true })
}

export { usePages, fetchPages }