import { useState, useEffect } from "react";
import { VStack, Flex, Box, Spacer } from "@chakra-ui/react";
import { Switch, Route } from "react-router-dom";
import Header from "./Header";
import AlertMessage from "./AlertMessage";
import LoadingSpinner from "./LoadingSpinner";
import Home from "./Home";
import MeetPeople from "./MeetPeople";
import EnsembleTeam from "./EnsembleTeam";
import Menu from "./Menu";
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
      const link =
        "https://my.api.mockaroo.com/hard-working-people.json?key=dc4c52f0";
      try {
        const data = await fetchData(link);
        setPageState({ loading: false, peopleData: data, error: null });
      } catch (e) {
        setPageState({ loading: false, peopleData: [], error: e.message });
      }
    }
    getData();
  }, []);

  return (
    <VStack bg="red.50" h="100vh">
      <Box w="full" bg="#2D2D2D">
        <Header />
      </Box>
      <Flex>
        <Box>
          <Menu h="80vh" w="20vw" />
        </Box>
        <Spacer />

        <Box h="80vh" w="80vw">
          {loading && <LoadingSpinner />}
          {error && <AlertMessage />}

          <Switch>
            <Route path="/meet-people">
              {peopleData && <MeetPeople peopleData={peopleData} />}
            </Route>
            <Route path="/ensemble-team">
              {peopleData && <EnsembleTeam peopleData={peopleData} />}
            </Route>
            <Route path="/">{!error && !loading && <Home />}</Route>
          </Switch>
        </Box>
      </Flex>
    </VStack>
  );
};

export default App;
