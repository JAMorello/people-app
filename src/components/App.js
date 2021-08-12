import { useState, useEffect } from "react";
import { VStack, Heading, Divider } from "@chakra-ui/react";
import AlertMessage from "./AlertMessage";
import LoadingSpinner from "./LoadingSpinner";
import MeetPeople from "./MeetPeople";
import { fetchData } from "../api/fetchData";

const App = () => {
  const [pageState, setPageState] = useState({
    loading: true,
    peopleData: [],
    error: null,
  });
  const { loading, peopleData, error } = pageState;

  useEffect(() => {
    async function getData() {
      try {
        const data = await fetchData(
          "https://my.api.mockaroo.com/hard-working-people.json?key=dc4c52f0"
        );
        setPageState({ loading: false, peopleData: data, error: null });
      } catch (e) {
        setPageState({ loading: false, peopleData: [], error: e.message });
      }
    }
    getData();
  }, []);

  return (
    <VStack>
      <Heading>Hard Working People</Heading>
      <Divider />
      {loading ? (
        <LoadingSpinner />
      ) : error ? (
        <AlertMessage />
      ) : (
        <MeetPeople peopleData={peopleData} />
      )}
    </VStack>
  );
};

export default App;
