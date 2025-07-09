import { Link } from "react-router-dom";

const TopPage = () => {
  return (
    <>
      <Link to={"/signup"}>サインアップ</Link>
      <Link to={"/login"}>ログイン</Link>
    </>
  );
};

export default TopPage;
