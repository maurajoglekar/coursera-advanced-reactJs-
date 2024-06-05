import { useUser } from "./UserContext";

const Blog = () => {
  const { user } = useUser();
  return (
    <div>
      <h2> Blog App </h2>
      <h3> What is blah blah blah</h3>
      <p>
        It is blah blah blah blah blah blah blah blah blah blah blah blah blah
        blah blah blah blah blah blah blah blah blah blah blah blah blah blah{" "}
      </p>
      <p>Written by {user.name}</p>
    </div>
  );
};

export default Blog;
