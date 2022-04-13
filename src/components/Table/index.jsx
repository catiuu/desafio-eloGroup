import "./style.css";
import { Lead } from "../../components/Lead";
import useUser from "../../hooks/useUser";

export function Table() {
  const { leads, setLeads } = useUser();
  return (
    <div>
      <div className="table">
        <div className="table-div potential-client">
          <h2>Cliente em potencial</h2>
          {leads.map((lead) =>
            lead.status === 1 ? (
              <Lead name={lead.name} />
            ) : (
              <div className="empyt-div" />
            )
          )}
        </div>
        <div className="table-div confirmed-data">
          <h2>Dados Confirmados</h2>
          {leads.map((lead) =>
            lead.status === 2 ? (
              <Lead name={lead.name} />
            ) : (
              <div className="empyt-div" />
            )
          )}
        </div>
        <div className="table-div scheduled-meeting">
          <h2>Reunião Agendada</h2>
          {leads.map((lead) =>
            lead.status === 3 ? (
              <Lead name={lead.name} />
            ) : (
              <div className="empyt-div" />
            )
          )}
        </div>
      </div>
    </div>
  );
}
