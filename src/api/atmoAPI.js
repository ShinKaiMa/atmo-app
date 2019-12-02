import axios from 'axios';
import {envConfig} from '../config/env'

const atmoRequest = axios.create({
    baseURL: envConfig.env === 'develop' ? envConfig.atmoDevAPIBaseURL : envConfig.atmoProAPIBaseURL
});

export const fetchAreas = request => atmoRequest.post('/api/modelView/area', request);
export const fetchModelViewSchema = request => atmoRequest.post('/api/modelView/schema', request);
export const fetchWeathermaps = request => atmoRequest.post('/api/modelView/weathermap', request);