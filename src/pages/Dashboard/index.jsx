import "../../styles/global.css";
import "./style.css";

import { ModalForm } from "../../components/ModalForm";
import { Header } from "../../components/Header";
import exit from "../../assets/exit.svg";
import { useState } from "react";
import { Table } from "../../components/Table";

export function Dashboard() {
  const [openModalForm, setOpenModalForm] = useState(false);

  return (
    <div className="container">
      <Header />
      <main className="container-main">
        <div className="div-exit">
          <h1>Painel de Leads</h1>
          <button className="exit-button">
            <img src={exit} alt="sair" />
            Sair
          </button>
        </div>
        <button className="new-lead" onClick={() => setOpenModalForm(true)}>
          + Nova Lead{" "}
        </button>
        <Table />
      </main>
      {openModalForm && (
        <ModalForm
          setOpenModalForm={setOpenModalForm}
          openModalForm={openModalForm}
        />
      )}
    </div>
  );
}
