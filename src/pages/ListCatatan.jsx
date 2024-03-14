import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchBar from "../components/atom/SearchBar";
import ButtonAdd from "../components/atom/ButtonAdd";
import RenderListItem from "../components/Molecul/RenderListItem";
import { getActiveNotes } from "../utils/network-data";
import { LoadingContext } from "../context/LoadingContext";
import Loader from "../components/atom/Loader";
import { LanguageContext } from "../context/LanguageContext";
export default function ListCatatan() {
  const navigate = useNavigate();
  const { isLoading, setIsLoading } = useContext(LoadingContext);
  const [activeNotes, setActiveNotes] = useState([]);
  const { language } = useContext(LanguageContext);
  const [filter, setFilter] = useState("");
  const onClickItem = (itemId) => {
    navigate(`/notes/${itemId}`);
  };
  const onClickAddItem = (itemId) => {
    navigate(`/notes/new`);
  };
  const onFilterChange = (e) => {
    setFilter(e.target.value);
  };
  const filteredData = activeNotes.filter((item) =>
    item.title.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
  );

  const fetchAllNotes = async () => {
    setIsLoading(true);
    const result = await getActiveNotes();
    if (!result.error) {
      setActiveNotes(result.data);
    }
    setIsLoading(false);
  };
  useEffect(() => {
    fetchAllNotes();
  }, []);
  return (
    <div className="app-container px-5 position-relative flex flex-col">
      <SearchBar
        onFilterChange={onFilterChange}
        value={filter}
        title={language == "id" ? "Catatan Aktif" : "Active Notes"}
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
