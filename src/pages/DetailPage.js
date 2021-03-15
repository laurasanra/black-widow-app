import React, { useState, useEffect } from "react";
import Loading from "../components/Loading";
import { useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import { getComicInfo } from "../services/getComicInfo";
import ComicDetailCard from "../components/ComicDetailCard";

const DetailPage = () => {
  const [loading, setLoading] = useState(true);
  const [info, setInfo] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getComicInfo(id).then((value) => {
      setInfo(value);
      setLoading(false);
    });
  }, [id]);

  if (loading) return <Loading />;
  return (
    <div>
      <BackButton />
      <ComicDetailCard comic={info} />
    </div>
  );
};
export default DetailPage;
