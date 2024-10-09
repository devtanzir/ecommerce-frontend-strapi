import axios from "axios";

interface urlProps {
  url: string;
  updateData: any;
}

export const putData = async ({ url, updateData }: urlProps) => {
  try {
    // Send a PUT request to the specified URL with the updated data
    const res = await axios.put(url, { data: { ...updateData } });

    if (res.status !== 200) {
      throw new Error(`Failed to update data, received status ${res.status}`);
    }

    // Return the response data if the request was successful
    return res.data;
  } catch (error: any) {
    console.error("Error in putData function:", error.message);
    throw new Error(`Error updating data: ${error.message}`);
  }
};
