const Post = ({ params }: { params: { id: string } }) => {
  const { id } = params;

  return (
    <div>
      <h1>Post ID: {id}</h1>
      <p>Ini adalah halaman untuk menampilkan posting dengan ID {id}</p>
    </div>
  );
};

export default Post;
