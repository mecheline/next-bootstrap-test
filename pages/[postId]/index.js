import { useRouter } from "next/router";
import { MongoClient } from "mongodb";
import { ObjectId } from "mongodb";
import { PostDetails } from "../../components/postdetails/PostDetails";

export default function index({ data }) {
  const router = useRouter();
  const postId = router.query.postId;
  console.log(postId);
  return <PostDetails data={data} />;
}

// export async function getStaticPaths() {
//   const response = await fetch(
//     "https://jsonplaceholder.typicode.com/posts?_limit=10"
//   );
//   const resultss = await response.json();
//   console.log(results);

//   //   const params = results.map((result) => ({ params: { postId: result.id } }));

//   return {
//     fallback: false,
//     paths: results.map((result) => ({
//       params: { postId: result.id.toString() },
//     })),
//   };
// }

export const getStaticPaths = async () => {
  const client = await MongoClient.connect(
    "mongodb+srv://meche:meche.in@cluster0.j9fvny4.mongodb.net/?retryWrites=true&w=majority"
  );
  const db = client.db();
  const record = db.collection("books");
  const results = await record.find({}, { _id: 1 }).toArray();

  return {
    fallback: false,
    paths: results.map((result) => ({
      params: { postId: result._id.toString() },
    })),
  };
};

// export async function getStaticProps(context) {
//   const postId = context.params.postId;
//   const response = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${postId}`
//   );
//   const data = await response.json();
//   console.log(data);

//   return {
//     props: {
//       data,
//     },
//   };
// }

export const getStaticProps = async (context) => {
  const postId = context.params.postId;
  const client = await MongoClient.connect(
    "mongodb+srv://meche:meche.in@cluster0.j9fvny4.mongodb.net/?retryWrites=true&w=majority"
  );
  const db = client.db();
  const record = db.collection("books");
  const results = await record.findOne({ _id: ObjectId(postId) });
  console.log(results);
  client.close();

  return {
    props: {
      data: {
        title: results.title,
        author: results.author,
        date: results.date,
        description: results.description,
        id: results._id.toString(),
      },
    },
  };
};
