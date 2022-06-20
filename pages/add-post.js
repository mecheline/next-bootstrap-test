import AddPost from "../components/addPost/AddPost";

export default function addPost() {
  const addRecordHandler = async (record) => {
    console.log(record);
    try {
      const response = await fetch("/api/addpost", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(record),
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return <AddPost addData={addRecordHandler} />;
}
