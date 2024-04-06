import  ServerRequest  from '../utils/server_request.js';

async function getItemSummary() {
    try {
        const data = await ServerRequest.sendRequest('http://localhost:8090/items/get',"GET");
        // Process the retrieved data here
        console.log(data);
        return data;
    } catch (error) {
        console.error('Error retrieving item summary:', error);
        throw error;
    }
}

export default getItemSummary;