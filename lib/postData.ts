import axios from "axios";

interface urlProps {
  url: string;
  postData: any;
}

export const postData = async ({ url, postData }: urlProps) => {
  try {
    const res = await axios.post(url, { data: { ...postData } });

    if (res.status !== 200) {
      throw new Error(`Failed to fetch data, received status ${res.status}`);
    }
    return res.data;
  } catch (error: any) {
    console.error("Error in postData function:", error.message);
    throw new Error(`Error fetching data: ${error.message}`);
  }
};
