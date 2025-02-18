const Post = async ({ params }) => {
  const { id } = await params;

  return (
    <div>
      <h1>Post: {id}</h1>
      <p>Conteúdo do post com o ID: {id}</p>
    </div>
  );
};

export default Post;
