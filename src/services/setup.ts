import axios from 'axios';

const httpClient = axios.create ({
    baseURL : 'https://api-v2-sg-staging.42race.com/api/v1',
    headers: {'Accept': 'application/json', 'Content-Type': 'application/json'}
  });

export default httpClient;