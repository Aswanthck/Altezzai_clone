import { apiClient } from "../lib/apiClient";

const getTeams = async () => {
    const response = await apiClient.get("teams");
    return response.data;
};

export { getTeams };
