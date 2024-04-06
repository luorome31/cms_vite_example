class ServerRequest {
    static async sendRequest(url, method) {
        try {
            const response = await fetch(url, {
                method: method,
                headers: {
                    'Content-Type': 'application/json'
                },
            });

            if (!response.ok) {
                throw new Error('Request failed');
            }

            const responseData = await response.json();
            return responseData;
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }
    }
}

export default ServerRequest;