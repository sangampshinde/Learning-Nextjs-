"use client";
import { useParams } from "next/navigation";

const College = () => {
  const params = useParams();
  const slug = params?.slug || [];

  return (
    <div>
      <h1>College Page</h1>
    </div>
  );
};

export default College;
