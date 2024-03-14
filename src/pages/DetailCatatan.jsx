import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { showFormattedDate } from "../utils";
import DetailButton from "../components/Molecul/DetailButton";
import {
  archiveNote,
  deleteNote,
  getNote,
  unarchiveNote,
} from "../utils/network-data";
import LoadingProvider, { LoadingContext } from "../context/LoadingContext";
import Loader from "../components/atom/Loader";
import { LanguageContext } from "../context/LanguageContext";

export default function DetailCatatan() {
  const [detailItem, setDetailItem] = useState({});
  const { isLoading, isLoadingPost, setIsLoading, setIsLoadingPost } =
    useContext(LoadingContext);
  const { language } = useContext(LanguageContext);

  const { id } = useParams();
  const navigate = useNavigate();

  const onClickDeleteHandler = async () => {
    setIsLoadingPost(true);
    const result = await deleteNote(id);
    if (!result.error) {
      alert("catatan berhasil dihapus");
      navigate("/");
    }
    setIsLoadingPost(false);
  };
  const onClickArchiveHandler = async () => {
    setIsLoadingPost(true);

    if (detailItem.archived) {
      const result = await unarchiveNote(id);
      if (!result.error) {
        alert("catatan dikeluarkan dari arsip");
        fetchDetailData();
        navigate("/");
      }
    } else {
      const result = await archiveNote(id);
      if (!result.error) {
        alert("catatan berhasil diarsipkan");
        fetchDetailData();
        navigate("/");
      }
    }
    setIsLoadingPost(false);
  };

  const fetchDetailData = async () => {
    setIsLoading(true);
    const result = await getNote(id);
    if (!result.error) {
      setDetailItem(result.data);
    }
    setIsLoading(false);
  };
  useEffect(() => {
    fetchDetailData();
  }, []);

  return (
    <div className="detail-page flex flex-col">
      {isLoading ? (
        <div className="h-100 flex-1 flex justify-center items-center">
          <Loader />
        </div>
      ) : (
        <>
          <h2 className="detail-page__title">{detailItem?.title}</h2>
          <p className="detail-page__createdAt">
            {showFormattedDate(
              detailItem?.createdAt,
              language == "id" ? "id-ID" : "en-EN"
            )}
          </p>
          <p className="detail-page__body mt-5">{detailItem?.body}</p>
          <DetailButton
            isArchived={detailItem?.archived ?? false}
            onClickDelete={onClickDeleteHandler}
            onClickArchive={onClickArchiveHandler}
          />
        </>
      )}
    </div>
  );
}
