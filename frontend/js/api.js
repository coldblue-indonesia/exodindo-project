const API_BASE_URL = 'http://localhost:5000/api';

async function submitContact(data) {
    try {
        const response = await fetch(`${API_BASE_URL}/contact`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
        return await response.json();
    } catch (error) {
        console.error('Contact error:', error);
        throw error;
    }
}

async function getProjects() {
    try {
        const response = await fetch(`${API_BASE_URL}/projects`);
        return await response.json();
    } catch (error) {
        console.error('Get projects error:', error);
        throw error;
    }
}

async function getPricing(category = null) {
    try {
        const url = category 
            ? `${API_BASE_URL}/pricing/category/${category}`
            : `${API_BASE_URL}/pricing`;
        const response = await fetch(url);
        return await response.json();
    } catch (error) {
        console.error('Get pricing error:', error);
        throw error;
    }
}