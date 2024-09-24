import axios from "axios";

interface urlProps {
    url: string;
  }
export const getData = async ({url}:urlProps) => {
    try {
        const res = await axios.get(url);

        if (res.status !== 200) {
            throw new Error('Failed to fetch data');
        }

        return res.data;
    } catch (error) {
        console.error(error);
        throw new Error('Error fetching data');
    }
  }
  