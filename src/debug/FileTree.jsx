import { useEffect } from "react";

const FileTree = () => {
  useEffect(() => {
    console.log("✅ FileTree mounted successfully.");
  }, []);

  return <div>FileTree Component Active</div>;
};

export default FileTree;
