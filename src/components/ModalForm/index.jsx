import "./style.css";
import close from "../../assets/close.svg";
import { useState, useEffect } from "react";
import InputMask from "react-input-mask";
import useUser from "../../hooks/useUser";
import { useLocalStorage } from "react-use";

export function ModalForm({ setOpenModalForm, openModalForm }) {
  const { leads, setLeads } = useUser();

  const [valueInLocalStorage, setValueInLocalStorage] = useLocalStorage(
    "storage",
    []
  );
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [allCheckBox, setAllCheckBox] = useState(false);
  const [rpaCheckBox, setRpaCheckBox] = useState(false);
  const [digitalProductCheckBox, setDigitalProductCheckBox] = useState(false);
  const [bpmCheckBox, setBpmCheckBox] = useState(false);
  const [analyticsCheckBox, setAnalyticsCheckBox] = useState(false);

  // function handleAllCheckBox(event) {}

  function handleSubmitForm(event) {
    event.preventDefault();

    setLeads([
      ...leads,
      {
        name,
        phone,
        email,
        allCheckBox,
        rpaCheckBox,
        digitalProductCheckBox,
        bpmCheckBox,
        analyticsCheckBox,
        status: 1,
      },
    ]);
    setOpenModalForm(false);
    useEffect(() => {
      setValueInLocalStorage([...leads]);
    }, [leads]);
  }


  return (
    <div>
      <div className=" backdrop">
        <div className="modal">
          <img
            src={close}
            className="close"
            onClick={() => setOpenModalForm(false)}
          />
          <form onSubmit={handleSubmitForm}>
                    <div className="input-container">
              <label>Nome:</label>
              <input
                type="text"
                className="input"
                required
                onChange={(event) => setName(event.target.value)}
              />
            </div>
            <div className="input-container">
              <label>Telefone:</label>
              <InputMask
                mask="(99) 99999-99999"
                type="phone"
                className="input"
                required
                onChange={(event) => setPhone(event.target.value)}
              />
            </div>
            <div className="input-container">
              <label>Email:</label>
              <input
                type="email"
                className="input"
                required
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            <div className="opportunities-container">
              <h4 className="title">Oportunidades</h4>
              <div className="checkbox-container">
                <label>Selecionar Todas</label>
                <input
                  type="checkbox"
                  className="checkbox"
                  // onChange={handleAllCheckBox}
                />
              </div>
              <div className="checkbox-container">
                <label>RPA</label>
                <input
                  type="checkbox"
                  className="checkbox"
                  onChange={(event) => setRpaCheckBox(event.target.checked)}
                />
              </div>
              <div className="checkbox-container">
                <label>Produto digital</label>
                <input
                  type="checkbox"
                  className="checkbox"
                  onChange={(event) =>
                    setDigitalProductCheckBox(event.target.checked)
                  }
                />
              </div>
              <div className="checkbox-container">
                <label>Analytics</label>
                <input
                  type="checkbox"
                  className="checkbox"
                  onChange={(event) =>
                    setAnalyticsCheckBox(event.target.checked)
                  }
                />
              </div>
              <div className="checkbox-container">
                <label>BPM</label>
                <input
                  type="checkbox"
                  className="checkbox"
                  onChange={(event) => setBpmCheckBox(event.target.checked)}
                />
              </div>
            </div>
            <button className="modal-button-add">Adicionar</button>
          </form>
        </div>
      </div>
    </div>
  );
}
