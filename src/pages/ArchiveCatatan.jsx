import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchBar from "../components/atom/SearchBar";
import ButtonAdd from "../components/atom/ButtonAdd";
import RenderListItem from "../components/Molecul/RenderListItem";
import { LoadingContext } from "../context/LoadingContext";
import { getArchivedNotes } from "../utils/network-data";
import Loader from "../components/atom/Loader";
import { LanguageContext } from "../context/LanguageContext";
export default function ListCatatan() {
  const navigate = useNavigate();
  const [filter, setFilter] = useState("");
  const { isLoading, setIsLoading } = useContext(LoadingContext);
  const { language } = useContext(LanguageContext);

  const [archiveNotes, setArchiveNotes] = useState([]);
  const onClickItem = (itemId) => {
    navigate(`/notes/${itemId}`);
  };
  const onClickAddItem = () => {
    navigate(`/notes/new`);
  };
  const onFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const fetchAllNotes = async () => {
    setIsLoading(true);
    const result = await getArchivedNotes();
    if (!result.error) {
      setArchiveNotes(result.data);
    }
    setIsLoading(false);
  };
  useEffect(() => {
    fetchAllNotes();
  }, []);
  const filteredData = archiveNotes.filter((item) =>
    item.title.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
  );
  return (
    <div className="app-container px-5 position-relative flex flex-col">
      <SearchBar
        onFilterChange={onFilterChange}
        value={filter}
        title={language == "id" ? "Catatan Arsip" : "Archive Notes"}
      />
      {isLoading ? (
        <Loader />
      ) : (
        <RenderListItem data={filteredData} onClickItem={onClickItem} />
      )}
      <ButtonAdd onSubmit={onClickAddItem} />
    </div>
  );
}
