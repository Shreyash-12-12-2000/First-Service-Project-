import { useState , useEffect} from "react";
import ComponentCard from "../components/common/ComponentCard";
import BasicTableOne from "../components/tables/BasicTables/BasicTableOne";
import api from "../api/axios";
import Loader from "../components/ui/Loader";


export default function contactEmails() {

  const [tableData, setTableData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get("/contact/getEmails");
        setTableData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching email data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="space-y-6">
        <ComponentCard title="Costumers Email Data">
          {loading ? (
            <Loader />
          ) : (
            <BasicTableOne tableData={tableData} />
          )}
        </ComponentCard>
      </div>
    </>
  );
}
